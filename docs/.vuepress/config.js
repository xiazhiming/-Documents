module.exports = {
    base : '/',
    markdown: {
       lineNumbers: false // 代码块显示行号
   },
   locales: {
           // 键名是该语言所属的子路径
           // 作为特例，默认语言可以使用 '/' 作为其路径。
           '/en/': {
               title:"Hashgard Documentation",
               lang: 'en-US',
               description: 'Welcome to the hashgard documentation'
           },
           '/': {
               title:"Hashgard Documentation",
               lang:'zh-CN',
               description:'欢迎来到hashgard文档中心'
           }
       },
       head: [
    ['link', { rel:'icon', href:'/favicon.ico' }]
  ],
    themeConfig: {
     repo: 'xiazhiming/Documents',
     editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
      locales: {
        '/en/': {
          selectText: 'Languages',
          label: 'English',
          editLinkText: 'Edit this page on GitHub',
          serviceWorker: {
            updatePopup: {
              message: "New content is available.",
              buttonText: "Refresh"
            }
          },
          algolia: {},
          nav:[
               { text: 'Guide', link:'/en/learn/'},
               { text: 'Dev', link:'/en/command/'},
               { text: 'Test', link: '/en/test/' }
           ],
           sidebar:{
               '/en/':[
                   ['/en/command/','command'],
                   ['/en/command/hashgardcli/','hashgardcli'],
                   {
                       title: 'bank',
                       children: [
                           ['/en/command/hashgardcli/bank/','Bank Guide'],
                           ['/en/command/hashgardcli/bank/account','account'],
                           ['/en/command/hashgardcli/bank/send','send'],
                           ['/en/command/hashgardcli/bank/sign','sign'],
                           ['/en/command/hashgardcli/bank/multisign','multisign'],
                           ['/en/command/hashgardcli/bank/broadcast','broadcast'],

                       ],
                   },
                    {
                       title: 'distribution',
                       children: [
                           ['/en/command/hashgardcli/distribution/','Distribution Guide'],
                           ['/en/command/hashgardcli/distribution/params','params'],
                           ['/en/command/hashgardcli/distribution/outstanding-rewards','outstanding-rewards'],
                           ['/en/command/hashgardcli/distribution/commission','commission'],
                           ['/en/command/hashgardcli/distribution/slashes','slashes'],
                           ['/en/command/hashgardcli/distribution/rewards','rewards'],
                           ['/en/command/hashgardcli/distribution/set-withdraw-address','set-withdraw-address'],
                           ['/en/command/hashgardcli/distribution/withdraw-rewards','withdraw-rewards'],
                       ],
                   },
                    {
                       title: 'gov',
                       children: [
                           ['/en/command/hashgardcli/gov/','Gov Guide'],
                           ['/en/command/hashgardcli/gov/proposal','proposal'],
                           ['/en/command/hashgardcli/gov/proposals','proposals'],
                           ['/en/command/hashgardcli/gov/query-vote','query-vote'],
                           ['/en/command/hashgardcli/gov/query-votes','query-votes'],
                           ['/en/command/hashgardcli/gov/query-deposit','query-deposit'],
                           ['/en/command/hashgardcli/gov/query-deposits','query-deposits'],
                           ['/en/command/hashgardcli/gov/tally','tally'],
                           ['/en/command/hashgardcli/gov/param','param'],
                           ['/en/command/hashgardcli/gov/submit-proposal','submit-proposal'],
                           ['/en/command/hashgardcli/gov/deposit','deposit'],
                           ['/en/command/hashgardcli/gov/vote','vote'],

                       ],
                   },
                    {
                       title: 'keys',
                       children: [
                           ['/en/command/hashgardcli/keys/','Keys Guide'],
                           ['/en/command/hashgardcli/keys/mnemonic','mnemonic'],
                           ['/en/command/hashgardcli/keys/add','add'],
                           ['/en/command/hashgardcli/keys/list','list'],
                           ['/en/command/hashgardcli/keys/show','show'],
                           ['/en/command/hashgardcli/keys/delete','delete'],
                           ['/en/command/hashgardcli/keys/update','update'],


                       ],
                   },
                    {
                       title: 'stake',
                       children: [
                           ['/en/command/hashgardcli/stake/','Stake Guide'],
                           ['/en/command/hashgardcli/stake/validator','validator'],
                           ['/en/command/hashgardcli/stake/validators','validators'],
                           ['/en/command/hashgardcli/stake/delegation','delegation'],
                           ['/en/command/hashgardcli/stake/delegations','delegations'],
                           ['/en/command/hashgardcli/stake/delegations-to','delegations-to'],
                           ['/en/command/hashgardcli/stake/unbonding-delegation','unbonding-delegation'],
                           ['/en/command/hashgardcli/stake/unbonding-delegations','unbonding-delegations'],
                           ['/en/command/hashgardcli/stake/unbonding-delegations-from','unbonding-delegations-from'],
                           ['/en/command/hashgardcli/stake/redelegation','redelegation'],
                           ['/en/command/hashgardcli/stake/redelegations','redelegations'],
                           ['/en/command/hashgardcli/stake/redelegations-from','redelegations-from'],
                           ['/en/command/hashgardcli/stake/pool','pool'],
                           ['/en/command/hashgardcli/stake/params','params'],
                           ['/en/command/hashgardcli/stake/create-validator','create-validator'],
                           ['/en/command/hashgardcli/stake/edit-validator','edit-validator'],
                           ['/en/command/hashgardcli/stake/delegate','delegate'],
                           ['/en/command/hashgardcli/stake/unbond','unbond'],
                           ['/en/command/hashgardcli/stake/redelegate','redelegate'],

                       ],
                   },

                           ['/en/command/hashgardcli/status','status'],


                   {
                       title: 'tendermint',
                       children: [
                           ['/en/command/hashgardcli/tendermint/','tendermint Guide'],
                           ['/en/command/hashgardcli/tendermint/block','block'],
                           ['/en/command/hashgardcli/tendermint/tendermint-validator-set','vtendermint-validator-set'],
                           ['/en/command/hashgardcli/tendermint/txs','txs'],
                           ['/en/command/hashgardcli/tendermint/tx','tx'],


                       ],
                   },
                   {
                       title: 'slashing',
                       children: [
                           ['/en/command/hashgardcli/slashing/','slashing Guide'],
                           ['/en/command/hashgardcli/slashing/signing-info','signing-info'],
                           ['/en/command/hashgardcli/slashing/params','params'],
                           ['/en/command/hashgardcli/slashing/unjail','unjail'],
                       ],
                   },

                    {
                       title: 'hashgard',
                       children: [
                           ['/en/command/hashgard/','Hashgard Guid'],
                           ['/en/command/hashgard/init','hashgard init'],
                           ['/en/command/hashgard/add-genesis-account','hashgard add-genesis-account'],
                           ['/en/command/hashgard/gentx','hashgard gentx'],
                           ['/en/command/hashgard/collect-gentxs','hashgard collect-gentxs'],
                           ['/en/command/hashgard/validate-genesis','hashgard validate-genesis'],
                           ['/en/command/hashgard/start','hashgard start'],
                           ['/en/command/hashgard/testnet','hashgard testnet'],
                           ['/en/command/hashgard/unsafe-reset-all','hashgard unsafe-reset-all'],
                           ['/en/command/hashgard/export','hashgard export'],
                           ['/en/command/hashgard/tendermint','hashgard tendermint'],

                       ],
                   },
                     ['/en/command/hashgardlcd/','hashgardlcd'],
               ],
                '/en/learn/':[
                {
                       title: 'Overview',
                       children: [
                          ['/en/learn/Overview/introduction','who is Hashgard'],
                          ['/en/learn/Overview/howToContribute','howToContribute']
                       ]
                   },
                   {
                       title: 'UsersGuide',
                       children: [
                          ['/en/learn/UsersGuide/WebWalletGuide','WebWalletGuide'],
                          ['/en/learn/UsersGuide/hashgardExplorerGuide','ExplorerGuide'],
                          ['/en/learn/UsersGuide/hashgardNav','hashgardNav']
                       ]
                   },
                   {
                       title: 'Guide',
                       children: [
                         ['/en/learn/Guide/installation','installation'],
                         ['/en/learn/Guide/AccountGuide','AccountGuide'],
                         ['/en/learn/Guide/','testnet Guide'],
                         ['/en/learn/Guide/Delegate','Delegate'],
                         ['/en/learn/Guide/Deposit','Deposit'],
                         ['/en/learn/Guide/genesis','genesis'],
                         ['/en/learn/Guide/GreatValidator','GreatValidator'],
                         ['/en/learn/Guide/Redelegate','Redelegate'],
                         ['/en/learn/Guide/SubmitProposal','SubmitProposal'],
                         ['/en/learn/Guide/unbond','unbond'],
                          ['/en/learn/Guide/Vote','Vote']
                       ]
                   }
                ],
                '/en/test/':[
                  ['/en/test/','Start'],
                  ['/en/test/sif-1000/','sif-1000'],
                  ['/en/test/sif-2000/','sif-2000'],
                  ['/en/test/sif-3001/','sif-3001'],

                ],
               },

               sidebarDepth: 1, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
               lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间,

        },
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
          // 当前 locale 的 algolia docsearch 选项
          algolia: {},
          nav:[
                // 单项 text：显示文字，link：指向链接
                // 这里的'/' 指的是 docs文件夹路径
                // [以 '/' 结尾的默认指向该路径下README.md文件]
               { text: '教程', link: '/learn/' },
               { text: '开发', link: '/command/' },
               { text: '测试', link: '/test/' },

           ],
              sidebar:{
               '/command/':[
                   ['/command/','开发手册'],
                   ['/command/hashgardcli/','hashgardcli'],
                   {
                       title: 'bank',
                       children: [
                           ['/command/hashgardcli/bank/','Bank Guide'],
                           ['/command/hashgardcli/bank/account','account'],
                           ['/command/hashgardcli/bank/send','send'],
                           ['/command/hashgardcli/bank/sign','sign'],
                           ['/command/hashgardcli/bank/multisign','multisign'],
                           ['/command/hashgardcli/bank/broadcast','broadcast'],

                       ],
                   },
                    {
                       title: 'distribution',
                       children: [
                           ['/command/hashgardcli/distribution/','Distribution Guide'],
                           ['/command/hashgardcli/distribution/params','params'],
                           ['/command/hashgardcli/distribution/outstanding-rewards','outstanding-rewards'],
                           ['/command/hashgardcli/distribution/commission','commission'],
                           ['/command/hashgardcli/distribution/slashes','slashes'],
                           ['/command/hashgardcli/distribution/rewards','rewards'],
                           ['/command/hashgardcli/distribution/set-withdraw-address','set-withdraw-address'],
                           ['/command/hashgardcli/distribution/withdraw-rewards','withdraw-rewards'],
                       ],
                   },
                    {
                       title: 'gov',
                       children: [
                           ['/command/hashgardcli/gov/','Gov Guide'],
                           ['/command/hashgardcli/gov/proposal','proposal'],
                           ['/command/hashgardcli/gov/proposals','proposals'],
                           ['/command/hashgardcli/gov/query-vote','query-vote'],
                           ['/command/hashgardcli/gov/query-votes','query-votes'],
                           ['/command/hashgardcli/gov/query-deposit','query-deposit'],
                           ['/command/hashgardcli/gov/query-deposits','query-deposits'],
                           ['/command/hashgardcli/gov/tally','tally'],
                           ['/command/hashgardcli/gov/param','param'],
                           ['/command/hashgardcli/gov/submit-proposal','submit-proposal'],
                           ['/command/hashgardcli/gov/deposit','deposit'],
                           ['/command/hashgardcli/gov/vote','vote'],

                       ],
                   },
                    {
                       title: 'keys',
                       children: [
                           ['/command/hashgardcli/keys/','Keys Guide'],
                           ['/command/hashgardcli/keys/mnemonic','mnemonic'],
                           ['/command/hashgardcli/keys/add','add'],
                           ['/command/hashgardcli/keys/list','list'],
                           ['/command/hashgardcli/keys/show','show'],
                           ['/command/hashgardcli/keys/delete','delete'],
                           ['/command/hashgardcli/keys/update','update'],


                       ],
                   },
                    {
                       title: 'stake',
                       children: [
                           ['/command/hashgardcli/stake/','Stake Guide'],
                           ['/command/hashgardcli/stake/validator','validator'],
                           ['/command/hashgardcli/stake/validators','validators'],
                           ['/command/hashgardcli/stake/delegation','delegation'],
                           ['/command/hashgardcli/stake/delegations','delegations'],
                           ['/command/hashgardcli/stake/delegations-to','delegations-to'],
                           ['/command/hashgardcli/stake/unbonding-delegation','unbonding-delegation'],
                           ['/command/hashgardcli/stake/unbonding-delegations','unbonding-delegations'],
                           ['/command/hashgardcli/stake/unbonding-delegations-from','unbonding-delegations-from'],
                           ['/command/hashgardcli/stake/redelegation','redelegation'],
                           ['/command/hashgardcli/stake/redelegations','redelegations'],
                           ['/command/hashgardcli/stake/redelegations-from','redelegations-from'],
                           ['/command/hashgardcli/stake/pool','pool'],
                           ['/command/hashgardcli/stake/params','params'],
                           ['/command/hashgardcli/stake/create-validator','create-validator'],
                           ['/command/hashgardcli/stake/edit-validator','edit-validator'],
                           ['/command/hashgardcli/stake/delegate','delegate'],
                           ['/command/hashgardcli/stake/unbond','unbond'],
                           ['/command/hashgardcli/stake/redelegate','redelegate'],

                       ],
                   },

                           ['/command/hashgardcli/status','status'],


                   {
                       title: 'tendermint',
                       children: [
                           ['/command/hashgardcli/tendermint/','tendermint Guide'],
                           ['/command/hashgardcli/tendermint/block','block'],
                           ['/command/hashgardcli/tendermint/tendermint-validator-set','vtendermint-validator-set'],
                           ['/command/hashgardcli/tendermint/txs','txs'],
                           ['/command/hashgardcli/tendermint/tx','tx'],


                       ],
                   },
                   {
                       title: 'slashing',
                       children: [
                           ['/command/hashgardcli/slashing/','slashing Guide'],
                           ['/command/hashgardcli/slashing/signing-info','signing-info'],
                           ['/command/hashgardcli/slashing/params','params'],
                           ['/command/hashgardcli/slashing/unjail','unjail'],
                       ],
                   },

                    {
                       title: 'hashgard',
                       children: [
                           ['/command/hashgard/','Hashgard Guid'],
                           ['/command/hashgard/init','hashgard init'],
                           ['/command/hashgard/gentx','hashgard gentx'],
                           ['/command/hashgard/collect-gentxs','hashgard collect-gentxs'],
                           ['/command/hashgard/validate-genesis','hashgard validate-genesis'],
                           ['/command/hashgard/start','hashgard start'],
                           ['/command/hashgard/testnet','hashgard testnet'],
                           ['/command/hashgard/unsafe-reset-all','hashgard unsafe-reset-all'],
                           ['/command/hashgard/export','hashgard export'],
                           ['/command/hashgard/tendermint','hashgard tendermint'],

                       ],
                   },
                     ['/command/hashgardlcd/','hashgardlcd'],
               ],
               '/test/':[
                 ['/test/','起步'],
                 ['/test/sif-1000/','sif-1000'],
                 ['/test/sif-2000/','sif-2000'],
                 ['/test/sif-3001/','sif-3001'],
               ],
                '/learn/':[
                {
                       title: '总览',
                       children: [
                          ['/learn/introduction','Hashgard是什么'],
                          ['/learn/howToContribute','怎样参与建设'],
                       ],
                   },
                   {
                       title: '用户使用指南',
                       children: [
                          ['/learn/UsersGuide/WebWalletGuide','网页钱包使用指南'],
                          ['/learn/UsersGuide/hashgardExplorerGuide','浏览器使用指南'],
                          ['/learn/UsersGuide/hashgardNav','hashgard导航'],

                       ],
                   },

                   {
                       title: '教程',
                       children: [
                         ['/learn/Guide/installation','安装hashgard'],
                         ['/learn/Guide/AccountGuide','账户类型说明'],
                         ['/learn/Guide/','测试网络指南'],
                         ['/learn/Guide/genesis','创建节点'],
                          ['/learn/Guide/GreatValidator','创建验证人节点'],
                         ['/learn/Guide/Delegate','委托'],
                         ['/learn/Guide/Redelegate','重新委托'],
                         ['/learn/Guide/unbond','解绑委托'],
                          ['/learn/Guide/SubmitProposal','提交在线治理'],
                         ['/learn/Guide/Deposit','抵押'],
                         ['/learn/Guide/Vote','投票']
                       ],
                   },
                ],
               },
               sidebarDepth: 1, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
               lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间,

        },

      }
    }
  }
