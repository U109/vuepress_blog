(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{305:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"汉字不能编程-别闹了-只是看着有点豪横-容易被开除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#汉字不能编程-别闹了-只是看着有点豪横-容易被开除"}},[t._v("#")]),t._v(" 汉字不能编程？别闹了，只是看着有点豪横！容易被开除！")]),t._v(" "),s("p",[t._v("作者：小傅哥\n"),s("br"),t._v("博客："),s("a",{attrs:{href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://bugstack.cn"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("沉淀、分享、成长，让自己和他人都能有所收获！")])]),t._v(" "),s("h2",{attrs:{id:"一、前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),s("p",[s("code",[t._v("在编程的路上你是否想过，用汉字写一写代码？")])]),t._v(" "),s("p",[t._v("最近有初学编程的小伙伴问"),s("a",{attrs:{href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("小傅哥")]),s("OutboundLink")],1),t._v("，汉字可以写代码吗。自己英文不好，要是汉字可以写代码就好了。难道你要的是"),s("strong",[t._v("易语言")]),t._v("？其实并不是，小伙伴也是学习 "),s("code",[t._v("Java")]),t._v(" 的初学者，刚刚学习到 "),s("code",[t._v("Spring")]),t._v(" 看着一片没有注释的代码实在不好理解，要是都是汉字写的，那不和读作文一样了吗！")]),t._v(" "),s("p",[t._v("说到注释，我想到大部分程序员讨厌的"),s("strong",[t._v("两件事")]),t._v("；")]),t._v(" "),s("ol",[s("li",[t._v("不喜欢写注释")]),t._v(" "),s("li",[t._v("不喜欢别人不写注释")])]),t._v(" "),s("p",[t._v("其实对于学习编程来说，初学时写写案例，完成简单的功能，反复练习夯实基础。数学和英文都还并不是你的绊脚石，因为你不需要做复杂的逻辑处理，比如算法。也不需要查阅大量的资料，比如原版的英文资料以及国内没有翻译的技术书籍等。所以这个时候对你来说，只是需要不断的学，不断的写。并逐步强加自己的数学和英文能力。")]),t._v(" "),s("p",[s("strong",[t._v("回到我们的说的")]),t._v("，既然你问汉字可以写代码吗。其实在 "),s("code",[t._v("java")]),t._v(" 里，原则上你可以写汉字的"),s("code",[t._v("类")]),t._v("、"),s("code",[t._v("属性")]),t._v("、"),s("code",[t._v("方法")]),t._v("，"),s("code",[t._v("JVM虚拟机")]),t._v("也是可以通过编译执行的。只是这样的代码并不能很好的维护，甚至说乱码了也很麻烦。再者，有人写方言怎么办！")]),t._v(" "),s("p",[t._v("好！那么我们接下来就使用汉字的方式来编写一段关于 "),s("code",[t._v("SpringAop")]),t._v(" 的案例！")]),t._v(" "),s("h2",{attrs:{id:"二、开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、开发环境"}},[t._v("#")]),t._v(" 二、开发环境")]),t._v(" "),s("ol",[s("li",[t._v("JDK 1.8.0")]),t._v(" "),s("li",[t._v("Spring 4.3.24.RELEASE")]),t._v(" "),s("li",[t._v("本篇涉及的源码下载，可以关注"),s("strong",[t._v("公众号")]),t._v("："),s("a",{attrs:{href:"https://bugstack.cn/assets/images/qrcode.png",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("bugstack虫洞栈")]),s("OutboundLink")],1),t._v(" 获取，并且还可以获取更多原创案例。")])]),t._v(" "),s("h2",{attrs:{id:"三、技术实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、技术实现"}},[t._v("#")]),t._v(" 三、技术实现")]),t._v(" "),s("p",[t._v("为了这个案例更加真实，我们模拟"),s("code",[t._v("电影清朝韦小宝时期")]),t._v("，太监入宫的过程。说白了也就是 "),s("code",[t._v("Spring")]),t._v(" 的 "),s("code",[t._v("AOP")]),t._v(" 面向切面，"),s("code",[t._v("切")]),t._v("的编程。")]),t._v(" "),s("p",[t._v("在做案例之前，我们先了解一下 "),s("code",[t._v("AOP")]),t._v(" 的基本概念；")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("@Aspect")]),t._v("，定义切面的注解")]),t._v(" "),s("li",[s("code",[t._v("@Pointcut")]),t._v("，切入点，一般会在方法上设定通配符表达式")]),t._v(" "),s("li",[s("code",[t._v("@Around")]),t._v("，环绕，也就是你原本的方法会在这里处理")]),t._v(" "),s("li",[s("code",[t._v("@Before")]),t._v("，前置处理")]),t._v(" "),s("li",[s("code",[t._v("@After")]),t._v("，后置处理")])]),t._v(" "),s("h3",{attrs:{id:"_1-定义切面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义切面"}},[t._v("#")]),t._v(" 1. 定义切面")]),t._v(" "),s("blockquote",[s("p",[t._v("紫禁城.内务府.敬事房.膑.太监膑.净身监管.java")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Aspect")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" 净身监管 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Pointcut")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"execution(public * 紫禁城.内务府.敬事房.利器库..*.军刺切(..))"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" 监管员"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Before")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"监管员()"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" 敬事前"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"敬事前:---------准备下刀... ..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@After")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"监管员()"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" 敬事后"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"敬事后:---------切面完成... ..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Around")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"监管员()"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("aroundMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProceedingJoinPoint")]),t._v(" pjp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"待切身份："')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("pjp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getArgs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"执行工具："')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("pjp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSignature")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获得传递对象，并做处理")]),t._v("\n        太监膑 太监 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("太监膑"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" pjp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getArgs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleDateFormat")]),t._v(" timeFormat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleDateFormat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yyyy-MM-dd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        太监"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set敬事日期"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeFormat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//此处可以传递更改后的参数")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pjp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("proceed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("太监"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br")])]),s("ul",[s("li",[s("code",[t._v("@Aspect")]),t._v("，定义切面类，用于处理程序中的切面编程操作。")]),t._v(" "),s("li",[s("code",[t._v('@Pointcut("execution(public * 紫禁城.内务府.敬事房.利器库..*.军刺切(..))")')]),t._v("，定义切点处，对那些方法进行执行切面操作。除了这样的操作外，还可以定义成自定义注解。那么后续只要把某个你需要的方法上面添加这样的自定义注解，就可以被 "),s("code",[t._v("AOP")]),t._v(" 拦截。")]),t._v(" "),s("li",[s("code",[t._v('@Before("监管员()")')]),t._v("、"),s("code",[t._v('@After("监管员()")')]),t._v("，记录切面执行前后的记录。")]),t._v(" "),s("li",[s("code",[t._v('@Around("监管员()")')]),t._v("，用于环绕方法增强，可以这里去处理方法中的一些属性信息，比如添加给某个字段添加时间。"),s("em",[t._v("太监.set敬事日期(timeFormat.format(new Date()));")])])]),t._v(" "),s("h3",{attrs:{id:"_2-设置切面可执行方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-设置切面可执行方法"}},[t._v("#")]),t._v(" 2. 设置切面可执行方法")]),t._v(" "),s("blockquote",[s("p",[t._v("紫禁城.内务府.敬事房.利器库.切除器具.java")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"切除"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" 切除器具 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" 太监膑 军刺切"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("太监膑 太监"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        太监"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set性别"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("宦官"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("太监"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"... 啊 ... ...老子被切面了！"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("太监"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get姓名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" 太监"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("ul",[s("li",[t._v("这里类的方法就是上面定义的切点，"),s("code",[t._v("Pointcut")]),t._v("，也就是会被切面处理的方法。")])]),t._v(" "),s("h3",{attrs:{id:"_3-执行切面操作类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-执行切面操作类"}},[t._v("#")]),t._v(" 3. 执行切面操作类")]),t._v(" "),s("blockquote",[s("p",[t._v("紫禁城.内务府.敬事房.执刀人.张三丰执刀.java")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" 张三丰执刀 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationContext")]),t._v(" ctx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClassPathXmlApplicationContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"皇太极.xml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        太监刑 太监行刑 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"太监刑"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("太监刑"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        太监膑 太监 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" 太监膑"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        太监"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set姓名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"小德张"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        太监"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set年龄"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        太监"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set性别"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("宦官"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("男"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        太监 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 太监行刑"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("执行切除"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("太监"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\r\\n切除状态："')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("太监"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("ul",[s("li",[t._v("首先这里定义了获取 "),s("code",[t._v("Spring")]),t._v(" 注解的 "),s("code",[t._v("Application")]),t._v("，用于我们获取 "),s("code",[t._v("Bean")]),t._v(" 。")]),t._v(" "),s("li",[t._v("接下来定义一个对象类，主要传递具体参数信息交给执行切面的方法，进行操作。")]),t._v(" "),s("li",[t._v("最后输出结果信息，也就是我们可以看到具体被切面操作的方法。")])]),t._v(" "),s("h2",{attrs:{id:"四、测试结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、测试结果"}},[t._v("#")]),t._v(" 四、测试结果")]),t._v(" "),s("h3",{attrs:{id:"_1-执行内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-执行内容"}},[t._v("#")]),t._v(" 1. 执行内容")]),t._v(" "),s("p",[t._v("启动方法；"),s("code",[t._v("紫禁城.内务府.敬事房.执刀人.张三丰执刀.java")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("待切身份：太监膑 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("姓名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("小德张"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 年龄"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 性别"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("男"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 敬事日期"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n执行工具：军刺切\n敬事前"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("准备下刀"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 啊 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("老子被切面了！小德张\n敬事后"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("切面完成"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n切除状态：太监膑 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("姓名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("小德张"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 年龄"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 性别"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("太监"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 敬事日期"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("05")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("05")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Process")]),t._v(" finished "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("exit")]),t._v(" code "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h3",{attrs:{id:"_2-效果图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-效果图"}},[t._v("#")]),t._v(" 2. 效果图")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"切面运行效果图","data-src":"https://bugstack.cn/assets/images/2020/CodeGuide-01-1.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"五、总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、总结"}},[t._v("#")]),t._v(" 五、总结")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("汉字编程，好奇可以试试，但别真的用到项目里。本文也只是通过这样的例子，向你展示学习过程的乐趣，建立一些学习过程的好感。")])]),t._v(" "),s("li",[s("p",[t._v("最近加了很多刚入门学习编程的小伙伴，有很多小问号。比如；")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"切面运行效果图","data-src":"https://bugstack.cn/assets/images/2020/CodeGuide-01-2.png",loading:"lazy"}})]),t._v(" "),s("p",[s("em",[t._v("我是非常建议先跑起来，多写代码后再慢慢的去探究原理")])])]),t._v(" "),s("li",[s("p",[t._v("最近听到一首诗，不错；"),s("code",[t._v("廿四桥边廿四风，凭栏犹忆旧江东。夕阳返照桃花渡，柳絮飞来片片红。")]),t._v("，白色的柳絮在夕阳桃花的映衬下就是成了"),s("code",[t._v("片片红")]),t._v("。只要你敢学识渊博，就敢让你拥有翻江倒海之力。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);