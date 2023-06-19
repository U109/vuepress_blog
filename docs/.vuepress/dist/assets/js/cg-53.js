(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{348:function(a,t,v){"use strict";v.r(t);var s=v(7),e=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"面经手册-·-第23篇《jdk、jre、jvm-是什么关系-》"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面经手册-·-第23篇《jdk、jre、jvm-是什么关系-》"}},[a._v("#")]),a._v(" 面经手册 · 第23篇《JDK、JRE、JVM，是什么关系？》")]),a._v(" "),t("p",[a._v("作者：小傅哥\n"),t("br"),a._v("博客："),t("a",{attrs:{href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://bugstack.cn"),t("OutboundLink")],1)]),a._v(" "),t("blockquote",[t("p",[a._v("沉淀、分享、成长，让自己和他人都能有所收获！😄")])]),a._v(" "),t("h2",{attrs:{id:"一、前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[a._v("#")]),a._v(" 一、前言")]),a._v(" "),t("p",[t("code",[a._v("截至到这已经写了22篇面经手册，你看了多少？")])]),a._v(" "),t("p",[a._v("😄其实小傅哥就是借着面经的幌子在讲 "),t("code",[a._v("Java 核心技术")]),a._v("，探索这些核心知识点面试的背后到底在问什么。")]),a._v(" "),t("p",[t("em",[a._v("想问一些面试官，是因为大家都在问所以你问，还是你想从这里问出什么？")]),a._v(" 其实可能很多面试官如果不了解这些技术，往往会被求职者的答案击碎内心，哈哈哈哈哈哈。比如："),t("code",[a._v("梅森旋转算法")]),a._v("、"),t("code",[a._v("开放寻址")]),a._v("、"),t("code",[a._v("斐波那契散列")]),a._v("、"),t("code",[a._v("启发式清理")]),a._v("、"),t("code",[a._v("Javassist代理方式")]),a._v("、"),t("code",[a._v("扰动函数")]),a._v("、"),t("code",[a._v("哈希一致")]),a._v("等等。")]),a._v(" "),t("p",[t("strong",[a._v("记住")]),a._v("，让懂了就是真的懂，比看水文、背答案要爽的多！嗯，就是有时候烧脑！")]),a._v(" "),t("h2",{attrs:{id:"二、面试题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、面试题"}},[a._v("#")]),a._v(" 二、面试题")]),a._v(" "),t("p",[t("code",[a._v("谢飞机，小记！")]),a._v("，也不知道咋了，总感觉有些面试"),t("code",[a._v("攻击性不大，但侮辱性极强")]),a._v("！")]),a._v(" "),t("p",[t("strong",[a._v("面试官")]),a._v("：谢飞机写过 Java 吗？")]),a._v(" "),t("p",[t("strong",[a._v("谢飞机")]),a._v("：那当然写过，写了3年多了！")]),a._v(" "),t("p",[t("strong",[a._v("面试官")]),a._v("：那，"),t("code",[a._v("JDK")]),a._v("、"),t("code",[a._v("JRE")]),a._v("、"),t("code",[a._v("JVM")]),a._v(" 之间是什么关系？")]),a._v(" "),t("p",[t("strong",[a._v("谢飞机")]),a._v("：嗯 J J J，JDK 里面有 JRE，JVM 好像在 JRE 里！？")]),a._v(" "),t("p",[t("strong",[a._v("面试官")]),a._v("：那，Client模式、Server模式是啥？")]),a._v(" "),t("p",[t("strong",[a._v("谢飞机")]),a._v("：嗯！？啥？")]),a._v(" "),t("p",[t("strong",[a._v("面试官")]),a._v("：好吧，问个简单的。JVM 是如何工作的？"),t("em",[a._v("背答案了吗？")])]),a._v(" "),t("p",[t("strong",[a._v("谢飞机")]),a._v("：再见，面试官！")]),a._v(" "),t("h2",{attrs:{id:"三、jdk、jre、jvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、jdk、jre、jvm"}},[a._v("#")]),a._v(" 三、JDK、JRE、JVM")]),a._v(" "),t("h3",{attrs:{id:"_1-java-平台标准-jdk-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-java-平台标准-jdk-8"}},[a._v("#")]),a._v(" 1. Java 平台标准(JDK 8)")]),a._v(" "),t("blockquote",[t("p",[a._v("Oracle has two products that implement Java Platform Standard Edition (Java SE) 8: Java SE Development Kit (JDK) 8 and Java SE Runtime Environment (JRE) 8.")])]),a._v(" "),t("blockquote",[t("p",[a._v("JDK 8 is a superset of JRE 8, and contains everything that is in JRE 8, plus tools such as the compilers and debuggers necessary for developing applets and applications. JRE 8 provides the libraries, the Java Virtual Machine (JVM), and other components to run applets and applications written in the Java programming language. Note that the JRE includes components not required by the Java SE specification, including both standard and non-standard Java components.")])]),a._v(" "),t("blockquote",[t("p",[a._v("The following conceptual diagram illustrates the components of Oracle's Java SE products:")])]),a._v(" "),t("p",[t("strong",[a._v("Description of Java Conceptual Diagram")])]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"Java Platform Standard Edition 8 Documentation","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-23-1.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("关于 JDK、JRE、JVM 之间是什么关系，在 Java 平台标准中已经明确定义了。也就是上面的英文介绍部分。")]),a._v(" "),t("ul",[t("li",[a._v("Oracle 有两个 Java 平台标准的产品，Java SE 开发工具包(JDK) 和 Java SE 运行时环境(JRE)。")]),a._v(" "),t("li",[a._v("JDK(Java Development Kit Java开发工具包)，JDK是提供给Java开发人员使用的，其中包含了java的开发工具，也包括了JRE。所以安装了JDK，就不用在单独安装JRE了。其中的开发工具包括编译工具(javac.exe) 打包工具(jar.exe)等。")]),a._v(" "),t("li",[a._v("JRE(Java Runtime Environment Java运行环境) 是 JDK 的子集，也就是包括 JRE 所有内容，以及开发应用程序所需的编译器和调试器等工具。JRE 提供了库、Java 虚拟机（JVM）和其他组件，用于运行 Java 编程语言、小程序、应用程序。")]),a._v(" "),t("li",[a._v("JVM(Java Virtual Machine Java虚拟机)，JVM可以理解为是一个虚拟出来的计算机，具备着计算机的基本运算方式，它主要负责把 Java 程序生成的字节码文件，解释成具体系统平台上的机器指令，让其在各个平台运行。")])]),a._v(" "),t("p",[t("strong",[a._v("综上")]),a._v("，从这段官网的平台标准介绍和概念图可以看出，我们运行程序的 JVM 是已经安装到 JDK 中，只不过可能你开发了很久的代码，也没有注意过。"),t("em",[a._v("没有注意过的最大原因是，没有开发过一些和 JVM 相关的组件代码")])]),a._v(" "),t("p",[t("strong",[a._v("关于")]),a._v("，各 JDK 版本的平台标准，可以自行比对学习，如下：")]),a._v(" "),t("ul",[t("li",[a._v("Java SE 6 Documentation："),t("a",{attrs:{href:"https://docs.oracle.com/javase/6/docs/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.oracle.com/javase/6/docs/"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("Java Platform Standard Edition 7 Documentation："),t("a",{attrs:{href:"https://docs.oracle.com/javase/7/docs/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.oracle.com/javase/7/docs/"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("Java Platform Standard Edition 8 Documentation："),t("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.oracle.com/javase/8/docs/"),t("OutboundLink")],1)])]),a._v(" "),t("h3",{attrs:{id:"_2-jdk-目录结构和作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-jdk-目录结构和作用"}},[a._v("#")]),a._v(" 2. JDK 目录结构和作用")]),a._v(" "),t("p",[a._v("我们默认安装完 JDK 会有 "),t("code",[a._v("jdk1.8.0_45")]),a._v("、"),t("code",[a._v("jre1.8.0_45")]),a._v("，两个文件夹。其实在 JDK 的文件中还会有 JRE 的文件夹，他们两个 JRE 文件夹的结构是一样的。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"JDK 目录结构","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-23-2.png",loading:"lazy"}})]),a._v(" "),t("ul",[t("li",[a._v("bin：一堆 EXE 可执行文件，java.exe、javac.exe、javadoc.exe，以及密钥管理工具等。")]),a._v(" "),t("li",[a._v("db：内置了 Derby 数据库，体积小，免安装。")]),a._v(" "),t("li",[a._v("include：Java 和 JVM 交互的头文件，例如我们 JVMTI 写的 C++ 工程时，就需要把这个 include 包引入进去"),t("code",[a._v("jvmti.h")]),a._v("。"),t("a",{attrs:{href:"https://bugstack.cn/interview/2020/12/16/%E9%9D%A2%E7%BB%8F%E6%89%8B%E5%86%8C-%E7%AC%AC22%E7%AF%87-%E7%BA%BF%E7%A8%8B%E6%B1%A0%E7%9A%84%E4%BB%8B%E7%BB%8D%E5%92%8C%E4%BD%BF%E7%94%A8-%E4%BB%A5%E5%8F%8A%E5%9F%BA%E4%BA%8Ejvmti%E8%AE%BE%E8%AE%A1%E9%9D%9E%E5%85%A5%E4%BE%B5%E7%9B%91%E6%8E%A7.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("例如：基于jvmti设计非入侵监控"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("jre：Java 运行环境，包含了运行时需要的可执行文件，以及运行时需要依赖的 Java 类库和动态链接库"),t("code",[a._v(".so")]),a._v(" "),t("code",[a._v(".dll")]),a._v(" "),t("code",[a._v(".dylib")])]),a._v(" "),t("li",[a._v("lib：Java 类库，例如 dt.jar、tools.jar")])]),a._v(" "),t("p",[t("strong",[a._v("那么 jvm 在哪个文件夹呢？")])]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"jvm.dll","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-23-3.png",loading:"lazy"}})]),a._v(" "),t("p",[t("em",[a._v("可能你之前并没有注意过 jvm 原来在这里：C:\\Program Files\\Java\\jdk1.8.0_45\\jre\\bin\\server")])]),a._v(" "),t("ul",[t("li",[a._v("这部分是整个 Java 实现跨平台的最核心内容，由 Java 程序编译成的 .class 文件会在虚拟机上执行。")]),a._v(" "),t("li",[a._v("另外在 JVM 解释 class 文件时需要调用类库 lib。在 JRE 目录下有两个文件夹 lib、bin，而 lib 就是 JVM 执行所需要的类库。")]),a._v(" "),t("li",[a._v("jvm.dll 并不能独立工作，当 jvm.dll 启动后，会使用 explicit 方法来载入辅助动态链接库一起执行。")])]),a._v(" "),t("h3",{attrs:{id:"_3-jdk-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-jdk-是什么"}},[a._v("#")]),a._v(" 3. JDK 是什么？")]),a._v(" "),t("p",[a._v("综上通过 "),t("code",[a._v("Java 平台标准")]),a._v("和 "),t("code",[a._v("JDK 的目录结构")]),a._v("，JDK 是 JRE 的超集，JDK 包含了 JRE 所有的开发、调试以及监视应用程序的工具。以及如下重要的组件：")]),a._v(" "),t("ul",[t("li",[a._v("java – 运行工具，运行 .class 的字节码")]),a._v(" "),t("li",[a._v("javac– 编译器，将后缀名为.java的源代码编译成后缀名为.class的字节码")]),a._v(" "),t("li",[a._v("javap – 反编译程序")]),a._v(" "),t("li",[a._v("javadoc – 文档生成器，从源码注释中提取文档，注释需符合规范")]),a._v(" "),t("li",[a._v("jar – 打包工具，将相关的类文件打包成一个文件")]),a._v(" "),t("li",[a._v("jdb – debugger，调试工具")]),a._v(" "),t("li",[a._v("jps – 显示当前java程序运行的进程状态")]),a._v(" "),t("li",[a._v("appletviewer – 运行和调试applet程序的工具，不需要使用浏览器")]),a._v(" "),t("li",[a._v("javah – 从Java类生成C头文件和C源文件。这些文件提供了连接胶合，使 Java 和 C 代码可进行交互。")]),a._v(" "),t("li",[a._v("javaws – 运行 JNLP 程序")]),a._v(" "),t("li",[a._v("extcheck – 一个检测jar包冲突的工具")]),a._v(" "),t("li",[a._v("apt – 注释处理工具")]),a._v(" "),t("li",[a._v("jhat – java堆分析工具")]),a._v(" "),t("li",[a._v("jstack – 栈跟踪程序")]),a._v(" "),t("li",[a._v("jstat – JVM检测统计工具")]),a._v(" "),t("li",[a._v("jstatd – jstat守护进程")]),a._v(" "),t("li",[a._v("jinfo – 获取正在运行或崩溃的java程序配置信息")]),a._v(" "),t("li",[a._v("jmap – 获取java进程内存映射信息")]),a._v(" "),t("li",[a._v("idlj – IDL-to-Java 编译器. 将IDL语言转化为java文件")]),a._v(" "),t("li",[a._v("policytool – 一个GUI的策略文件创建和管理工具")]),a._v(" "),t("li",[a._v("jrunscript – 命令行脚本运行")]),a._v(" "),t("li",[a._v("appletviewer：小程序浏览器，一种执行HTML文件上的Java小程序的Java浏览器")])]),a._v(" "),t("h3",{attrs:{id:"_4-jre-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-jre-是什么"}},[a._v("#")]),a._v(" 4. JRE 是什么？")]),a._v(" "),t("p",[a._v("JRE 本身也是一个运行在 CPU 上的程序，用于解释执行 Java 代码。")]),a._v(" "),t("p",[a._v("一般像是实施的工作，会在客户现场安装 JRE，因为这是运行 Java 程序的最低要求。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"JRE 目录结构 lib、bin","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-23-4.png",loading:"lazy"}})]),a._v(" "),t("ul",[t("li",[a._v("bin：有 java.exe 但没有 javac.exe。也就是无法编译 Java 程序，但可以运行 Java 程序，可以把这个bin目录理解成JVM。")]),a._v(" "),t("li",[a._v("lib：Java 基础&核心类库，包含 JVM 运行时需要的类库和 rt.jar。也包含用于安全管理的文件，这些文件包括安全策略(security policy)和安全属性(security properties)等。")])]),a._v(" "),t("h3",{attrs:{id:"_5-jvm-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-jvm-是什么"}},[a._v("#")]),a._v(" 5. JVM 是什么？")]),a._v(" "),t("p",[a._v("其实简单说 JVM 就是运行 Java 字节码的虚拟机，JVM 是一种规范，各个供应商都可以实现自己 JVM虚拟机。就像小傅哥自己也按照虚拟机规范和手写JVM的相关书籍实现了，基于Java实现的JVM虚拟机。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"用Java实现JVM源码","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-23-5.png",loading:"lazy"}})]),a._v(" "),t("p",[t("strong",[a._v("源码地址")]),a._v("："),t("a",{attrs:{href:"https://github.com/fuzhengwei/itstack-demo-jvm",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/fuzhengwei/itstack-demo-jvm"),t("OutboundLink")],1),a._v(" "),t("strong",[a._v("内容简介")]),a._v("：本代码主要介绍如何通过 java 代码来实现 JVM 的基础功能（搜索解析class文件、字节码命令、运行时数据区等），从而让java程序员通过最熟知的java程序，学习JVM是如何将java程序一步步跑起来的。")]),a._v(" "),t("p",[t("strong",[a._v("当然")]),a._v("，我们下载 Oracle 公司的 JVM 与自己实现的相比，要高级的多。他们的设计有不断优化的内存模型、GC回收策略、自适应优化器等。")]),a._v(" "),t("p",[a._v("另外，JVM 之所以称为虚拟机，主要就是因为它为了实现 “write-once-run-anywhere”。提供了一个不依赖于底层操作系统和机器硬件结构的运行环境。")]),a._v(" "),t("h4",{attrs:{id:"_5-1-client模式、server模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-client模式、server模式"}},[a._v("#")]),a._v(" 5.1 Client模式、Server模式")]),a._v(" "),t("p",[a._v("在 JVM 中有两种不同风格的启动模式， Client模式、Server模式。")]),a._v(" "),t("ul",[t("li",[a._v("Client模式：加载速度较快。可以用于运行GUI交互程序。")]),a._v(" "),t("li",[a._v("Server模式：加载速度较慢但运行起来较快。可以用于运行服务器后台程序。")])]),a._v(" "),t("p",[a._v("修改配置模式文件："),t("code",[a._v("C:\\Program Files\\Java\\jre1.8.0_45\\lib\\amd64\\jvm.cfg")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("# "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),a._v(" of "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JVMs")]),a._v(" that can be used as an option "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("to")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" javac"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" etc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n# "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Order")]),a._v(" is important "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" first in "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),a._v(" list is the "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("JVM")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n# "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("NOTE")]),a._v(" that "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),a._v(" both "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),a._v(" file and its format are "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("UNSUPPORTED")]),a._v(" and\n# "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("WILL")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("GO")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("AWAY")]),a._v(" in a future release"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n#\n# "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("You")]),a._v(" may also select a "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("JVM")]),a._v(" in an arbitrary location "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("with")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("the")]),a._v("\n# "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-XXaltjvm=<jvm_dir>"')]),a._v(" option"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" but that too is unsupported\n# and may not be available in a future release"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n#\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("server "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("KNOWN")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("client "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("IGNORE")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("ul",[t("li",[a._v("如果需要调整，可以把 client 设置为 KNOWN，并调整到 server 前面。")]),a._v(" "),t("li",[a._v("JVM 默认在 Server模式下，-Xms128M、-Xmx1024M")]),a._v(" "),t("li",[a._v("JVM 默认在 Client 模式下，-Xms1M、-Xmx64M")])]),a._v(" "),t("h4",{attrs:{id:"_5-2-jvm-结构和执行器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-jvm-结构和执行器"}},[a._v("#")]),a._v(" 5.2 JVM 结构和执行器")]),a._v(" "),t("p",[a._v("这部分属于 JVM 的核心知识，但不是本篇重点，会在后续的章节中陆续讲到。本章只做一些介绍。")]),a._v(" "),t("ul",[t("li",[a._v("Class Loader：类装载器是用于加载类文件的一个子系统，其主要功能有三个：loading(加载），linking（链接）,initialization（初始化）。")]),a._v(" "),t("li",[a._v("JVM Memory Areas：方法区、堆区、栈区、程序计数器。")]),a._v(" "),t("li",[a._v("Interpreter(解释器)：通过查找预定义的 JVM 指令到机器指令映射，JVM 解释器可以将每个字节码指令转换为相应的本地指令。它直接执行字节码，不执行任何优化。")]),a._v(" "),t("li",[a._v("JIT Compiler(即时编译器)：为了提高效率，JIT Compiler 在运行时与 JVM 交互，并适当将字节码序列编译为本地机器代码。典型地，JIT Compiler执行一段代码，不是每次一条语句。优化这块代码，并将其翻译为优化的机器代码。"),t("em",[a._v("JIT Compiler是默认开启")])])]),a._v(" "),t("h2",{attrs:{id:"四、总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、总结"}},[a._v("#")]),a._v(" 四、总结")]),a._v(" "),t("ul",[t("li",[a._v("这篇的知识并不复杂，涉及的面试内容也较少，更多的是对接下来要讲到 JVM 相关面试内容的一个开篇介绍，为后续的要讲的内容做一个铺垫。")]),a._v(" "),t("li",[a._v("如果你在此之前没有关注过JDK、JRE、JVM的结构和相应的组件配置以及执行模式，那么可以在此基础上继续学习加深印象。另外想深入学习JVM并不太容易，既要学习JVM规范也要上手应用实践，所以很建议先手写JVM，再实践验证JVM。")]),a._v(" "),t("li",[a._v("好了，本章节就扯到这了。这些知识点即使分享给大家，也是我自己学习、收录、整理、验证的过程。互相学习、互相成长，如果有错误之处，直接留言给我，我会不断的改正。大家一起进步！")])])])}),[],!1,null,null,null);t.default=e.exports}}]);