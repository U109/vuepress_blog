---
layout: post
category: Netty-basics
title: NIO基础：三大组件
tagline: by 张忠振
tag: [netty,Netty-basics]
---

# NIO 基础 : 三大组件

> NIO : non-blocking io  (非阻塞 IO)

# 一、Channel & Buffer

在Java NIO中，Channel和Buffer是两个核心概念。

Channel代表着一个**可以进行IO操作的实体**，如文件或网络连接。Channel提供了一种非阻塞的IO操作方式，可以在等待IO操作完成时同时执行其他任务。

Buffer则是一个**可以读写数据的缓冲区**，它提供了一种在内存中临时存储数据的方式。

Buffer可以与Channel一起使用，实现数据的读写操作。

在使用NIO进行IO操作时，通常会先创建一个Channel，然后将其与一个Buffer关联起来。这样，在进行读写操作时，可以将数据从Channel读取到Buffer中，或将数据从Buffer写入到Channel中。

![image-netty-1-01](assets\images\netty\basics\1\netty-1-01.png)

## 1.1 常见的 Channel 

* FileChannel：用于文件的读写操作，可以读取、写入、映射和操作文件的部分内容。
* DatagramChannel：用于UDP协议的数据读写操作，可以在网络中发送和接收数据报。
* SocketChannel：用于TCP协议的数据读写操作，可以在网络中建立连接，发送和接收数据。
* ServerSocketChannel：用于监听TCP连接请求，可以接受客户端的连接请求，创建SocketChannel并进行数据读写操作。



## 1.2 常见的 Buffer

* ByteBuffer：用于存储byte（字节）数据，是所有缓冲区类型中最常用的一种。
  * MappedByteBuffer：一种特殊的ByteBuffer，可以将文件区域直接映射到内存中，从而实现高效的文件读写操作。
  * DirectByteBuffer：将数据存储在JVM之外的内存中，可以提高IO操作的效率，适用于处理大量数据的场景。
  * HeapByteBuffer：将数据存储在JVM内部的堆内存中，适用于处理小量数据的场景。
* ShortBuffer：用于缓存short类型的数据
* IntBuffer：用于缓存int类型的数据
* LongBuffer：用于缓存long类型的数据
* FloatBuffer：用于缓存float类型的数据
* DoubleBuffer：用于缓存double类型的数据
* CharBuffer：用于缓存char类型的数据



# 二、Selector

Selector是Java NIO中的一个重要组件，它允许单个线程处理多个通道的I/O操作。

使用Selector可以使得一个线程处理多个通道的I/O操作，而不需要为每个通道创建一个线程。这样可以大大减少线程的数量，从而减少系统资源的使用。

## 2.1 服务端设计

### 2.1.1、多线程版设计

![netty-2-01](assets/images/netty/basics/1/netty-2-01.png)

**⚠️ 多线程版缺点**

* 内存占用高
* 线程上下文切换成本高
* 只适合连接数少的场景

### 2.1.2、线程池版设计

![image-20230615235623356](https://www.z-note.top/assets/images/netty/basics/1/netty-2-02.png)

**⚠️ 线程池版缺点**

* 阻塞模式下，线程仅能处理一个 socket 连接
* 仅适合短连接场景

### 2.1.3、Selector 版设计

Selector的作用就是配合一个线程来管理多个Channel，获取这些Channel 上发生的事件，这些Channel工作在非阻塞模式下，不会让线程吊死在一个Channel上。适合连接数特别多，但流量低的场景（low traffic）

![image-20230615235710237](https://www.z-note.top/assets/images/netty/basics/1/netty-2-03.png)

Selector通过调用select()方法来等待一些通道准备好进行I/O操作，如果有通道准备好了，就可以处理它们。

当调用select()方法时，它会阻塞直到有一个或多个通道准备好进行I/O操作，或者超时时间到达。一旦有通道准备好了，select()方法就会返回所选通道的SelectionKey集合。可以通过SelectionKey的readyOps()方法来确定通道准备好了哪些I/O操作。