# Java中的CAS

>Compare And Swap  --  比较并替换         
>
> 乐观锁策略

## 一、举个例子

有如下的一段程序，最后输出的结果是否是**30000**？

```java
public static Integer count = 0;

    public static void main(String[] args) {
        
        for (int i = 0; i < 3; i++) {
            new Thread(() -> {
                for (int j = 0; j < 10000; j++) {
                    count++;
                }
            }).start();
        }
        try {
            TimeUnit.SECONDS.sleep(5);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("count : " + count);
    }
```

执行了5次，结果如下：

```java
count : 13754
count : 12719
count : 14616
count : 14867
count : 13521
```

**这是为什么呢？**

这是因为在多线程环境下，多个线程同时对`count`进行自增操作，可能会出现线程安全问题。

具体来说，可能会出现一些线程在读取`count`的值时，此时`count`的值还没有被其它线程更新，导致这些线程读取到的`count`的值是相同的，然后它们同时对`count`进行自增操作，导致最终的`count`的值小于30000。

## 二、正确操作

### 1、synchronized

在`count++`处添加`synchronized`：

```java
       for (int i = 0; i < 3; i++) {
            new Thread(() -> {
                for (int j = 0; j < 10000; j++) {
                    synchronized (CASDemo.class){
                        count++;
                    }
                }
            }).start();
        }
```

输出5次结果：

```java
count : 30000
count : 30000
count : 30000
count : 30000
count : 30000
```

加了同步锁之后，`count`自增的操作变成了原子性操作，所以最终的输出一定是30000，代码实现了线程安全。

`synchronized` 作为 Java 中的一种同步机制，可以保证多个线程在访问共享资源时的互斥性，从而避免了竞态条件和数据不一致的问题。但是，`synchronized` 也存在一些缺点：

1. 性能问题：`synchronized` 的实现会涉及到锁的获取和释放，这些操作都会带来一定的性能开销。在高并发场景下，过多地使用 `synchronized` 可能会导致程序性能的下降。
2. 可重入性问题：如果一个线程已经获得了某个对象的锁，那么它可以重复获取该对象的锁，而这种重复获取锁的操作被称为“可重入”。但是，如果重入的次数过多，就可能会导致线程堆栈溢出。
3. 死锁问题：如果多个线程在互相等待对方释放锁的情况下，就可能会出现死锁的情况。这种情况下，所有线程都会被阻塞，程序无法继续执行。
4. 可见性问题：在多线程环境下，线程之间对共享变量的修改可能不会立即对其他线程可见，这就可能导致数据不一致的问题。虽然 `synchronized` 可以保证可见性，但是它的效率较低。

尽管Java1.6为`Synchronized`做了优化，增加了从偏向锁到轻量级锁再到重量级锁的过度，但是在最终转变为重量级锁之后，性能仍然较低。

### 2、原子操作

所谓原子操作类，指的是java.util.concurrent.atomic包下，一系列以Atomic开头的包装类。例如`AtomicBoolean`，`AtomicInteger`，`AtomicLong`。它们分别用于`Boolean`，`Integer`，`Long`类型的原子性操作。

将Integer改变成AtomicInteger后：

```java
 public static AtomicInteger count = new AtomicInteger(0);
```

输出5次结果：

```java
count : 30000
count : 30000
count : 30000
count : 30000
count : 30000
```

**Atomic操作的底层实现正是利用的CAS机制。**

## 三、CAS

### 1、什么是CAS

CAS是英文单词 Compare And Swap 的缩写，翻译过来就是比较并替换。

CAS机制当中使用了3个基本操作数：内存地址V，旧的预期值A，要修改的新值B。

更新一个变量的时候，只有当变量的预期值A和内存地址V当中的实际值相同时，才会将内存地址V对应的值修改为B。

### 2、CAS原理

* Compare-And-Swap。是一条CPU并发原语。（原语： 操作系统范畴，依赖硬件，不被中断。）
* 功能是判断内存某个位置的值是否为预期值 （Compare），是就更新（Swap），这个过程是原子的。
* cas有三个操作数，内存值V，旧预期值A，要更 新的值B。仅当预期值A=内存值V时，才将内存 值V修改为B，否则什么都不做。 
* 自旋：比较并交换，直到比较成功 
* 底层靠Unsafe类保证原子性。

### 3、Unsafe类

* 该类所有方法都是native修饰，直接调用底层资 源。sun.misc包中。 
* 可以像C的指针一样直接操作内存。java的CAS 操作依赖Unsafe类的方法。

### 4、CAS缺点

* 循环时间长，开销大。如果cas失败，就一直do while尝试。如果长时间不成功，可能给CPU带来很大开销。 
* **只能保证一个共享变量的原子操作。**如果时多个共享变量，cas无法保证原子性，只能加锁，锁住代码段。 
* 存在ABA问题。

### 5、ABA问题

#### 1、问题描述: 

线程1做CAS操作将A改为B后再改为A，之后线程2再做CAS时修改成功了，这不符合设计思想。

比如线程1从内存位置V中取出A，此时线程2也取出A。且线程1做了一次CAS将值改为了B，然后又做了一次CAS将值改回了A。此时线程2做CAS发现内存中还是A，之后线程2操作成功。这个时候实际上A值已经被其他线程改变过，这与设计思想是不符合的。

#### 2、解决方案

AtomicStampReference，解决CAS中出现的ABA问题。

AtomicStampedReference类可以在原子性地更新变量的同时，还可以记录变量的版本号，从而避免ABA问题。当一个线程更新变量时，需要提供当前的版本号，如果当前的版本号与期望的版本号不一致，则说明变量已经被修改过，此时更新操作将失败。这样就可以避免ABA问题的出现。

除了AtomicStampedReference类，还可以使用其他的同步机制来避免ABA问题，比如使用synchronized关键字或者Lock接口来保证对变量的操作是原子性的，从而避免出现ABA问题。