module.exports = {

    base : '/',
    markdown: {
       lineNumbers: false // 代码块显示行号
   },
   locales: {

           '/': {
               title:"Hashgard Documentation",
               lang:'zh-CN',
               description:'项目草稿'
           }
       },
       head: [
    ['link', { rel:'icon', href:'/favicon.ico' }],
     ['script', { src: '/js/jquery.slim.min.js' }],
        ['script', { src: '/js/jquery.fancybox.min.js' }],
        ['link', { rel: 'stylesheet', type: 'text/css', href: '/css/jquery.fancybox.min.css' }]
  ],
    themeConfig: {
     repo: 'xiazhiming/Documents',
     docsDir: 'docs',
     editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
      locales: {

        '/': {
          // 多语言下拉菜单的标题
          selectText: '选择语言',
          // 该语言在下拉菜单中的标签
          label: '简体中文',
          // 编辑链接文字
          editLinkText: '在 GitHub 上编辑此页',
          // Service Worker 的配置
          serviceWorker: {
            updatePopup: {
              message: "发现新内容可用.",
              buttonText: "刷新"
            }
          },

              sidebar:{
               '/':[
                  ['/issue.md','同质化通证发行协议'],
                   ['/DepositBox.md','存款协议'],
                   ['/FutureBox.md','远期支付协议'],
                   ['/Recording.md','存证'],
                ],
               },
               sidebarDepth: 1, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
               lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间,

        },

      }
    }
  }
