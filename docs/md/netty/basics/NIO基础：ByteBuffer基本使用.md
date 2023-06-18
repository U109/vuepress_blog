# ByteBuffer基本使用

## 一、ByteBuffer使用示例

### 1.1目录结构

```java
netty-basics
    │  pom.xml
    │
    ├─src
    │  ├─main
    │  │  ├─java
    │  │  │  └─com
    │  │  │      └─zzz
    │  │  │              TestByteBuffer.java
    │  │  │				 ByteBufferUtil.java
    │  │  │
    │  │  └─resources
    │  │          data.txt
    │  │          logback.xml
```

### 1.2 data.txt

```java
dsahlkdhaslhkdsalk
```

### 1.3 TestByteBuffer

使用 FileChannel 来读取文件内容

```java
@Slf4j
public class TestByteBuffer {

    public static void main(String[] args) {
        try (FileChannel channel = new FileInputStream("netty-					basics/src/main/resources/data.txt").getChannel()) {
            //准备缓冲区
            ByteBuffer buffer = ByteBuffer.allocate(10);
            while (true){
                //从channel读取数据,写到buffer中
                int len = channel.read(buffer);
                log.debug("读取到的字节数 : {}",len);
                if (len == -1){
                    break;
                }
                //切换至读模式
                buffer.flip();
                while (buffer.hasRemaining()){
                    byte b = buffer.get();
                    log.debug("读取到的字节 : {}",(char) b);
                }
                buffer.clear();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### 1.4 输出

```java
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节数 : 10
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节 : d
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节 : s
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节 : a
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节 : h
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节 : l
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节 : k
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节 : d
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节 : h
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节 : a
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节 : s
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节数 : 8
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节 : l
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节 : h
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节 : k
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节 : d
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节 : s
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节 : a
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节 : l
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节 : k
19:37:34 [DEBUG] [main] c.z.TestByteBuffer - 读取到的字节数 : -1
```

## 二、ByteBuffer使用

### 2.1 ByteBuffer正确使用姿势

1. 向 buffer 写入数据，例如调用 channel.read(buffer)
2. 调用 flip() 切换至**读模式**
3. 从 buffer 读取数据，例如调用 buffer.get()
4. 调用 clear() 或 compact() 切换至**写模式**
5. 重复 1~4 步骤

### 2.2 ByteBuffer结构

ByteBuffer 有以下重要属性

* capacity
* position
* limit

一开始

![](https://www.z-note.top/assets/images/netty/basics/1//0021.png)

写模式下，position 是写入位置，limit 等于容量，下图表示写入了 4 个字节后的状态

![](https://www.z-note.top/assets/images/netty/basics/1//0018.png)

flip 动作发生后，position 切换为读取位置，limit 切换为读取限制

![](https://www.z-note.top/assets/images/netty/basics/1//0019.png)

读取 4 个字节后，状态

![](https://www.z-note.top/assets/images/netty/basics/1//0020.png)

clear 动作发生后，状态

![](https://www.z-note.top/assets/images/netty/basics/1//0021.png)

compact 方法，是把未读完的部分向前压缩，然后切换至写模式

![](https://www.z-note.top/assets/images/netty/basics/1//0022.png)



### 2.3 ByteBuffer实现类

* HeapByteBuffer ：是ByteBuffer的默认实现，它内部使用的是Java堆内存来存储数据。由于Java堆内存是由JVM自动进行内存管理的（受GC影响），所以HeapByteBuffer的使用非常方便，但是由于需要进行堆内存的分配和回收，所以它的性能相对较低。

* DirectByteBuffer ： 是另一种ByteBuffer的实现方式，它使用的是直接内存。直接内存是由操作系统管理的，不受JVM的控制（不受GC影响），所以DirectByteBuffer的性能比HeapByteBuffer更好。但是由于需要手动进行内存的分配和回收，所以使用起来相对复杂。

* MappedByteBuffer ：是一种特殊的ByteBuffer实现方式，它可以将一个文件映射到内存中，从而可以直接在内存中对文件进行读写操作。这种方式可以提高文件读写的效率，特别是对于大文件的读写操作。但是由于需要进行文件IO操作，所以MappedByteBuffer的性能相对较低，而且只能用于对文件的读写操作。

如果需要对小量数据进行操作，或者对内存的使用效率要求不高，那么可以选择使用HeapByteBuffer。如果需要对大量数据进行操作，或者对内存使用效率有较高要求，那么可以选择使用DirectByteBuffer。如果需要对大文件进行读写操作，那么可以选择使用MappedByteBuffer。

### 2.4 常用方法

1. put()方法：向缓冲区中写入数据，可以写入单个字节、字节数组、CharBuffer、DoubleBuffer、FloatBuffer、IntBuffer、LongBuffer、ShortBuffer等类型的数据。
2. get()方法：从缓冲区中读取数据，可以读取单个字节、字节数组、CharBuffer、DoubleBuffer、FloatBuffer、IntBuffer、LongBuffer、ShortBuffer等类型的数据。
3. flip()方法：将缓冲区从写模式切换到读模式，即将limit设置为当前位置，position设置为0。
4. clear()方法：将缓冲区清空，即将position设置为0，limit设置为capacity。
5. rewind()方法：将position设置为0，以便重复读取之前读取过的数据。
6. compact()方法：将未读取的数据移动到缓冲区的起始位置，以便继续写入数据。
7. mark()方法：标记当前position的位置，以便在后续操作中回到该位置。
8. reset()方法：将position设置为上一次调用mark()方法时的位置。
9. hasRemaining()方法：判断缓冲区中是否还有未读取的数据。
10. remaining()方法：返回缓冲区中剩余的未读取的数据长度。
11. capacity()方法：返回缓冲区的容量。
12. limit()方法：返回缓冲区的限制值。
13. position()方法：返回缓冲区的当前位置。
14. array()方法：返回缓冲区的底层字节数组。