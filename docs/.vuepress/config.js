module.exports = {
    port: "8080",
    base: "/",
    // 是否开启默认预加载js
    shouldPrefetch: (file, type) => {
        return false;
    },
    // webpack 配置 https://vuepress.vuejs.org/zh/config/#chainwebpack
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            const dateTime = new Date().getTime();

            // 清除js版本号
            config.output.filename('assets/js/cg-[name].js?v=' + dateTime).end();
            config.output.chunkFilename('assets/js/cg-[name].js?v=' + dateTime).end();

            // 清除css版本号
            config.plugin('mini-css-extract-plugin').use(require('mini-css-extract-plugin'), [{
                filename: 'assets/css/[name].css?v=' + dateTime,
                chunkFilename: 'assets/css/[name].css?v=' + dateTime
            }]).end();

        }
    },
    markdown: {
        lineNumbers: true,
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    locales: {
        "/": {
            lang: "zh-CN",
            title: "bugstack 虫洞栈",
            description: "包含: Java 基础，面经手册，Netty4.x，手写Spring，用Java实现JVM，重学Java设计模式，SpringBoot中间件开发，IDEA插件开发，DDD系统架构项目开发，字节码编程..."
        }
    },
    head: [
        // ico
        ["link", {rel: "icon", href: `/favicon.ico`}],
        // meta
        ["meta", {name: "robots", content: "all"}],
        ["meta", {name: "author", content: "小傅哥"}],
        ["meta", {"http-equiv": "Cache-Control", content: "no-cache, no-store, must-revalidate"}],
        ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
        ["meta", {"http-equiv": "Expires", content: "0"}],
        ["meta", {
            name: "keywords",
            content: "bugstack 虫洞栈, DDD抽奖系统，数据结构，重学Java设计模式, 字节码编程, 中间件, 手写Spring, 手写MyBatis，Java基础, 面经手册，面试题，API网关，SpringBoot Stater"
        }],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}],
        ['script',
            {
                charset: 'utf-8',
                async: 'async',
                // src: 'https://code.jquery.com/jquery-3.5.1.min.js',
                src: '/js/jquery.min.js',
            }],
        ['script',
            {
                charset: 'utf-8',
                async: 'async',
                // src: 'https://code.jquery.com/jquery-3.5.1.min.js',
                src: '/js/global.js',
            }],
        ['script',
            {
                charset: 'utf-8',
                async: 'async',
                src: '/js/fingerprint2.min.js',
            }],
        // 添加百度统计
        ["script", {},
            `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?0b31b4c146bf7126aed5009e1a4a11c8";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
              })();
            `
        ]
    ],
    plugins: [
        [
            {globalUIComponents: ['LockArticle', 'PayArticle']}
        ],
        ['@vuepress/medium-zoom', {
            selector: 'img:not(.nozoom)',
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
                margin: 16
            }
        }],
        // see: https://github.com/IOriens/vuepress-plugin-baidu-autopush
        ['vuepress-plugin-baidu-autopush', {}],
        // see: https://github.com/znicholasbrown/vuepress-plugin-code-copy
        ['vuepress-plugin-code-copy', {
            align: 'bottom',
            color: '#3eaf7c',
            successText: '@小傅哥: 代码已经复制到剪贴板'
        }],
        // see: https://github.com/tolking/vuepress-plugin-img-lazy
        ['img-lazy', {}],
        ["vuepress-plugin-tags", {
            type: 'default', // 标签预定义样式
            color: '#42b983',  // 标签字体颜色
            border: '1px solid #e2faef', // 标签边框颜色
            backgroundColor: '#f0faf5', // 标签背景颜色
            selector: '.page .content__default h1' // ^v1.0.1 你要将此标签渲染挂载到哪个元素后面？默认是第一个 H1 标签后面；
        }],
        // https://github.com/lorisleiva/vuepress-plugin-seo
        ["seo", {
            siteTitle: (_, $site) => $site.title,
            title: $page => $page.title,
            description: $page => $page.frontmatter.description,
            author: (_, $site) => $site.themeConfig.author,
            tags: $page => $page.frontmatter.tags,
            // twitterCard: _ => 'summary_large_image',
            type: $page => 'article',
            url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
            image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
            publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
            modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
        }]
    ],
    themeConfig: {
        docsRepo: "U109/zzz",
        // 编辑文档的所在目录
        docsDir: 'docs',
        // 文档放在一个特定的分支下：
        docsBranch: 'main',
        //logo: "/logo.png",
        editLinks: true,
        sidebarDepth: 0,
        //smoothScroll: true,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                nav: [
                      {
                        text: '首页', link: '/'
                    },
                    {
                        text: 'Java',
                        items: [
                            {
                                text: '面经手册',
                                link: '/md/java/interview/2020-07-28-面经手册 · 开篇《面试官都问我啥》.md'
                            },
                            {
                                text: '用Java实现JVM',
                                link: '/md/java/develop-jvm/2019-05-01-用Java实现JVM第一章《命令行工具》.md'
                            },
                            {
                                text: '基础技术',
                                link: '/md/java/core/2020-01-06-[源码分析]咋嘞？你的IDEA过期了吧！加个Jar包就破解了，为什么？.md'
                            }
                        ]
                    },
                    {
                        text: 'Netty',
                        items: [
                            {
                                text: 'Netty基础篇',
                                link: '/md/netty/basics/NIO基础：三大组件.md'
                            }
                        ]
                    }
                    {
                        text: '中间件',
                        items: [
                            {
                                text: 'springboot中间件',
                                link: '/md/assembly/middleware/统一白名单组件.md'
                            }
                        ]
                    }
                ],
                sidebar: {
                    "/md/java/interview/": genBarJavaInterview(),
                    "/md/java/develop-jvm/": genBarJavaDevelopJvm(),
                    "/md/java/core/": genBarJavaCore(),
                    "/md/netty/basics/": getBarNettyBasics()
                }
            }
        }
    }
};


// java-interview
function genBarJavaInterview() {
    return [
        {
            title: "第 1 章 谈谈面试",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "2020-07-28-面经手册 · 开篇《面试官都问我啥》.md",
                "2020-07-30-面经手册 · 第1篇《认知自己的技术栈盲区》.md",
                "2021-03-07-面试现场：小伙伴美团一面的分享和分析[含解答].md"
            ]
        },
        {
            title: "第 2 章 数据结构和算法",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "2020-08-04-面经手册 · 第2篇《数据结构，HashCode为什么使用31作为乘数？》.md",
                "2020-08-07-面经手册 · 第3篇《HashMap核心知识，扰动函数、负载因子、扩容链表拆分，深度学习》.md",
                "2020-08-13-面经手册 · 第4篇《HashMap数据插入、查找、删除、遍历，源码分析》.md",
                "2020-08-16-面经手册 · 第5篇《看图说话，讲解2-3平衡树「红黑树的前身」》.md",
                "2020-08-20-面经手册 · 第6篇《带着面试题学习红黑树操作原理，解析什么时候染色、怎么进行旋转、与2-3树有什么关联》.md",
                "2020-08-27-面经手册 · 第7篇《ArrayList也这么多知识？一个指定位置插入就把谢飞机面晕了！》.md",
                "2020-08-30-面经手册 · 第8篇《LinkedList插入速度比ArrayList快？你确定吗？》.md",
                "2020-09-03-面经手册 · 第9篇《队列是什么？什么是双端队列、延迟对列、阻塞队列，全是知识盲区！》.md",
                "2020-09-10-面经手册 · 第10篇《扫盲java.util.Collections工具包，学习排序、二分、洗牌、旋转算法》.md",
                "2020-09-17-面经手册 · 第11篇《StringBuilder 比 String 快？空嘴白牙的，证据呢！》.md",
                "2020-09-23-面经手册 · 第12篇《面试官，ThreadLocal 你要这么问，我就挂了！》.md"
            ]
        },
        {
            title: "第 3 章 并发和锁",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "2020-10-14-面经手册 · 第13篇《除了JDK、CGLIB，还有3种类代理方式？面试又卡住！》.md",
                "2020-10-21-面经手册 · 第14篇《volatile 怎么实现的内存可见？没有 volatile 一定不可见吗？》.md",
                "2020-10-28-面经手册 · 第15篇《码农会锁，synchronized 解毒，剖析源码深度分析！》.md",
                "2020-11-04-面经手册 · 第16篇《码农会锁，ReentrantLock之公平锁讲解和实现》.md",
                "2020-11-11-面经手册 · 第17篇《码农会锁，ReentrantLock之AQS原理分析和实践使用》.md",
                "2020-11-18-面经手册 · 第18篇《AQS 共享锁，Semaphore、CountDownLatch，听说数据库连接池可以用到！》.md"
            ]
        },
        {
            title: "第 4 章 多线程",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "2020-11-25-面经手册 · 第19篇《Thread.start() ，它是怎么让线程启动的呢？》.md",
                "2020-12-02-面经手册 · 第20篇《Thread 线程，状态转换、方法使用、原理分析》.md",
                "2020-12-09-面经手册 · 第21篇《手写线程池，对照学习ThreadPoolExecutor线程池实现原理！》.md",
                "2020-12-16-面经手册 · 第22篇《线程池的介绍和使用，以及基于jvmti设计非入侵监控》.md"
            ]
        },
        {
            title: "第 5 章 JVM 虚拟机",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "2020-12-23-面经手册 · 第23篇《JDK、JRE、JVM，是什么关系？》.md",
                "2020-12-30-面经手册 · 第24篇《为了搞清楚类加载，竟然手撸JVM！》.md",
                "2021-01-06-面经手册 · 第25篇《JVM内存模型总结，有各版本JDK对比、有元空间OOM监控案例、有Java版虚拟机，综合学习更容易！》.md",
                "2021-01-13-面经手册 · 第26篇《JVM故障处理工具，使用总结》.md",
                "2021-01-20-面经手册 · 第27篇《JVM 判断对象已死，实践验证GC回收》.md",
            ]
        },
        {
            title: "第 6 章 Spring",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "2021-03-30-面经手册 · 第28篇《你说，怎么把Bean塞到Spring容器》.md",
                "2021-04-07-面经手册 · 第29篇《Spring IOC 特性有哪些，不会读不懂源码！》.md",
                "2021-04-18-面经手册 · 第30篇《关于 Spring 中 getBean 的全流程源码解析》.md",
                "2021-05-05-面经手册 · 第31篇《Spring Bean IOC、AOP 循环依赖解读》.md",
            ]
        }
    ]
}

// java-develop-jvm
function genBarJavaDevelopJvm() {
    return [
        {
            title: "用Java实现JVM",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "2019-05-01-用Java实现JVM第一章《命令行工具》.md",
                "2019-05-02-用Java实现JVM第二章《搜索class文件》.md",
                "2019-05-03-用Java实现JVM第三章《解析class文件》.md",
                "2019-05-04-用Java实现JVM第三章《解析class文件》附[classReader拆解].md",
                "2019-05-05-用Java实现JVM第四章《运行时数据区》.md",
                "2019-05-06-用Java实现JVM第五章《指令集和解释器》.md",
                "2019-05-07-用Java实现JVM第六章《类和对象》.md",
                "2019-05-08-用Java实现JVM第七章《方法调用和返回》.md",
                "2019-05-09-用Java实现JVM第八章《数组和字符串》.md",
                "2019-05-10-用Java实现JVM第九章《本地方法调用》.md",
                "2019-05-11-用Java实现JVM第十章《异常处理》.md"
            ]
        }
    ]
}

// java-core
function genBarJavaCore() {
    return [
        {
            title: "基础技术",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "2019-12-10-[有点干货]Jdk1.8新特性实战篇41个案例.md",
                "2019-12-21-[有点干货]JDK、CGLIB动态代理使用以及源码分析.md",
                "2020-01-06-[源码分析]咋嘞？你的IDEA过期了吧！加个Jar包就破解了，为什么？.md",
                "2020-01-18-似乎你总也记不住，byte的取值范围是 -127~128 还是 -128~127.md",
                "2020-03-07-这种场景你还写ifelse你跟孩子坐一桌去吧.md",
                "2020-05-05-汉字不能编程？别闹了，只是看着有点豪横！容易被开除！.md",
                "2020-11-22-鹿鼎记 · 韦小宝，丽春院、天地会、入皇宫等五个场景，搭配不同剧情讲解多线程和锁，真香！.md",
                "2021-04-21-一个Bug，让我发现了 Java 界的AJ锥！.md"
            ]
        }
    ]
}
// netty-basics
function getBarNettyBasics(){
  return [
        {
            title: "基础篇",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "NIO基础：三大组件.md"
            ]
        }
    ]
}


