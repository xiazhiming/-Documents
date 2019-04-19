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
               { text: 'DEV', link:'/en/dev/'},

           ],
           sidebar:{
               '/en/dev/':[
                   ['/en/dev/command/','command'],
                   ['/en/dev/command/hashgardcli/','hashgardcli'],
                   {
                       title: 'bank',
                       children: [
                           ['/en/dev/command/hashgardcli/bank/','Bank Guide'],
                           ['/en/dev/command/hashgardcli/bank/account','account'],
                           ['/en/dev/command/hashgardcli/bank/send','send'],
                           ['/en/dev/command/hashgardcli/bank/sign','sign'],
                           ['/en/dev/command/hashgardcli/bank/multisign','multisign'],
                           ['/en/dev/command/hashgardcli/bank/broadcast','broadcast'],

                       ],
                   },
                    {
                       title: 'distribution',
                       children: [
                           ['/en/dev/command/hashgardcli/distribution/','Distribution Guide'],
                           ['/en/dev/command/hashgardcli/distribution/params','params'],
                           ['/en/dev/command/hashgardcli/distribution/outstanding-rewards','outstanding-rewards'],
                           ['/en/dev/command/hashgardcli/distribution/commission','commission'],
                           ['/en/dev/command/hashgardcli/distribution/slashes','slashes'],
                           ['/en/dev/command/hashgardcli/distribution/rewards','rewards'],
                           ['/en/dev/command/hashgardcli/distribution/set-withdraw-address','set-withdraw-address'],
                           ['/en/dev/command/hashgardcli/distribution/withdraw-rewards','withdraw-rewards'],
                       ],
                   },
                    {
                       title: 'gov',
                       children: [
                           ['/en/dev/command/hashgardcli/gov/','Gov Guide'],
                           ['/en/dev/command/hashgardcli/gov/proposal','proposal'],
                           ['/en/dev/command/hashgardcli/gov/proposals','proposals'],
                           ['/en/dev/command/hashgardcli/gov/query-vote','query-vote'],
                           ['/en/dev/command/hashgardcli/gov/query-votes','query-votes'],
                           ['/en/dev/command/hashgardcli/gov/query-deposit','query-deposit'],
                           ['/en/dev/command/hashgardcli/gov/query-deposits','query-deposits'],
                           ['/en/dev/command/hashgardcli/gov/tally','tally'],
                           ['/en/dev/command/hashgardcli/gov/param','param'],
                           ['/en/dev/command/hashgardcli/gov/submit-proposal','submit-proposal'],
                           ['/en/dev/command/hashgardcli/gov/deposit','deposit'],
                           ['/en/dev/command/hashgardcli/gov/vote','vote'],

                       ],
                   },
                    {
                       title: 'keys',
                       children: [
                           ['/en/dev/command/hashgardcli/keys/','Keys Guide'],
                           ['/en/dev/command/hashgardcli/keys/mnemonic','mnemonic'],
                           ['/en/dev/command/hashgardcli/keys/add','add'],
                           ['/en/dev/command/hashgardcli/keys/list','list'],
                           ['/en/dev/command/hashgardcli/keys/show','show'],
                           ['/en/dev/command/hashgardcli/keys/delete','delete'],
                           ['/en/dev/command/hashgardcli/keys/update','update'],


                       ],
                   },
                    {
                       title: 'stake',
                       children: [
                           ['/en/dev/command/hashgardcli/stake/','Stake Guide'],
                           ['/en/dev/command/hashgardcli/stake/validator','validator'],
                           ['/en/dev/command/hashgardcli/stake/validators','validators'],
                           ['/en/dev/command/hashgardcli/stake/delegation','delegation'],
                           ['/en/dev/command/hashgardcli/stake/delegations','delegations'],
                           ['/en/dev/command/hashgardcli/stake/delegations-to','delegations-to'],
                           ['/en/dev/command/hashgardcli/stake/unbonding-delegation','unbonding-delegation'],
                           ['/en/dev/command/hashgardcli/stake/unbonding-delegations','unbonding-delegations'],
                           ['/en/dev/command/hashgardcli/stake/unbonding-delegations-from','unbonding-delegations-from'],
                           ['/en/dev/command/hashgardcli/stake/redelegation','redelegation'],
                           ['/en/dev/command/hashgardcli/stake/redelegations','redelegations'],
                           ['/en/dev/command/hashgardcli/stake/redelegations-from','redelegations-from'],
                           ['/en/dev/command/hashgardcli/stake/pool','pool'],
                           ['/en/dev/command/hashgardcli/stake/params','params'],
                           ['/en/dev/command/hashgardcli/stake/create-validator','create-validator'],
                           ['/en/dev/command/hashgardcli/stake/edit-validator','edit-validator'],
                           ['/en/dev/command/hashgardcli/stake/delegate','delegate'],
                           ['/en/dev/command/hashgardcli/stake/unbond','unbond'],
                           ['/en/dev/command/hashgardcli/stake/redelegate','redelegate'],

                       ],
                   },

                           ['/en/dev/command/hashgardcli/status','status'],


                   {
                       title: 'tendermint',
                       children: [
                           ['/en/dev/command/hashgardcli/tendermint/','tendermint Guide'],
                           ['/en/dev/command/hashgardcli/tendermint/block','block'],
                           ['/en/dev/command/hashgardcli/tendermint/tendermint-validator-set','vtendermint-validator-set'],
                           ['/en/dev/command/hashgardcli/tendermint/txs','txs'],
                           ['/en/dev/command/hashgardcli/tendermint/tx','tx'],


                       ],
                   },
                   {
                       title: 'slashing',
                       children: [
                           ['/en/dev/command/hashgardcli/slashing/','slashing Guide'],
                           ['/en/dev/command/hashgardcli/slashing/signing-info','signing-info'],
                           ['/en/dev/command/hashgardcli/slashing/params','params'],
                           ['/en/dev/command/hashgardcli/slashing/unjail','unjail'],
                       ],
                   },

                    {
                       title: 'hashgard',
                       children: [
                           ['/en/dev/command/hashgard/','Hashgard Guid'],
                           ['/en/dev/command/hashgard/init','hashgard init'],
                           ['/en/dev/command/hashgard/add-genesis-account','hashgard add-genesis-account'],
                           ['/en/dev/command/hashgard/gentx','hashgard gentx'],
                           ['/en/dev/command/hashgard/collect-gentxs','hashgard collect-gentxs'],
                           ['/en/dev/command/hashgard/validate-genesis','hashgard validate-genesis'],
                           ['/en/dev/command/hashgard/start','hashgard start'],
                           ['/en/dev/command/hashgard/testnet','hashgard testnet'],
                           ['/en/dev/command/hashgard/unsafe-reset-all','hashgard unsafe-reset-all'],
                           ['/en/dev/command/hashgard/export','hashgard export'],
                           ['/en/dev/command/hashgard/tendermint','hashgard tendermint'],

                       ],
                   },
                     ['/en/dev/command/hashgardlcd/','hashgardlcd'],
               ],
                '/en/learn/':[
                {
                       title: 'Overview',
                       children: [
                          ['/en/learn/Overview/introduction','who is Hashgard'],
                          ['/en/learn/Overview/howToContribute','howToContribute'],
                       ],
                   },
                   {
                       title: 'UserssGuide',
                       children: [
                          ['/en/learn/UserssGuide/WebWalletGuide','WebWalletGuide'],
                          ['/en/learn/UserssGuide/hashgardExplorerGuide','ExplorerGuide'],
                          ['/en/learn/UserssGuide/hashgardNav','hashgardNav'],

                       ],
                   },

                   ['/en/learn/Quickstart','Quickstart'],
                   {
                       title: 'Guide',
                       children: [
                         ['/en/learn/Guide/AccountGuide','AccountGuide'],
                         ['/en/learn/Guide/','testnet Guide'],
                         ['/en/learn/Guide/Delegate','Delegate'],

                         ['/en/learn/Guide/Deposit','Deposit'],
                         ['/en/learn/Guide/genesis','genesis'],
                         ['/en/learn/Guide/GreatValidator','GreatValidator'],
                         ['/en/learn/Guide/installation','installation'],
                         ['/en/learn/Guide/Redelegate','Redelegate'],
                         ['/en/learn/Guide/SubmitProposal','SubmitProposal'],
                         ['/en/learn/Guide/unbond','unbond'],
                          ['/en/learn/Guide/Vote','Vote'],


                       ],
                   },
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
               { text: '开发', link: '/dev/' },

           ],
              sidebar:{
               '/dev/':[
                   ['/dev/command/','开发手册'],
                   ['/dev/command/hashgardcli/','hashgardcli'],
                   {
                       title: 'bank',
                       children: [
                           ['/dev/command/hashgardcli/bank/','Bank Guide'],
                           ['/dev/command/hashgardcli/bank/account','account'],
                           ['/dev/command/hashgardcli/bank/send','send'],
                           ['/dev/command/hashgardcli/bank/sign','sign'],
                           ['/dev/command/hashgardcli/bank/multisign','multisign'],
                           ['/dev/command/hashgardcli/bank/broadcast','broadcast'],

                       ],
                   },
                    {
                       title: 'distribution',
                       children: [
                           ['/dev/command/hashgardcli/distribution/','Distribution Guide'],
                           ['/dev/command/hashgardcli/distribution/params','params'],
                           ['/dev/command/hashgardcli/distribution/outstanding-rewards','outstanding-rewards'],
                           ['/dev/command/hashgardcli/distribution/commission','commission'],
                           ['/dev/command/hashgardcli/distribution/slashes','slashes'],
                           ['/dev/command/hashgardcli/distribution/rewards','rewards'],
                           ['/dev/command/hashgardcli/distribution/set-withdraw-address','set-withdraw-address'],
                           ['/dev/command/hashgardcli/distribution/withdraw-rewards','withdraw-rewards'],
                       ],
                   },
                    {
                       title: 'gov',
                       children: [
                           ['/dev/command/hashgardcli/gov/','Gov Guide'],
                           ['/dev/command/hashgardcli/gov/proposal','proposal'],
                           ['/dev/command/hashgardcli/gov/proposals','proposals'],
                           ['/dev/command/hashgardcli/gov/query-vote','query-vote'],
                           ['/dev/command/hashgardcli/gov/query-votes','query-votes'],
                           ['/dev/command/hashgardcli/gov/query-deposit','query-deposit'],
                           ['/dev/command/hashgardcli/gov/query-deposits','query-deposits'],
                           ['/dev/command/hashgardcli/gov/tally','tally'],
                           ['/dev/command/hashgardcli/gov/param','param'],
                           ['/dev/command/hashgardcli/gov/submit-proposal','submit-proposal'],
                           ['/dev/command/hashgardcli/gov/deposit','deposit'],
                           ['/dev/command/hashgardcli/gov/vote','vote'],

                       ],
                   },
                    {
                       title: 'keys',
                       children: [
                           ['/dev/command/hashgardcli/keys/','Keys Guide'],
                           ['/dev/command/hashgardcli/keys/mnemonic','mnemonic'],
                           ['/dev/command/hashgardcli/keys/add','add'],
                           ['/dev/command/hashgardcli/keys/list','list'],
                           ['/dev/command/hashgardcli/keys/show','show'],
                           ['/dev/command/hashgardcli/keys/delete','delete'],
                           ['/dev/command/hashgardcli/keys/update','update'],


                       ],
                   },
                    {
                       title: 'stake',
                       children: [
                           ['/dev/command/hashgardcli/stake/','Stake Guide'],
                           ['/dev/command/hashgardcli/stake/validator','validator'],
                           ['/dev/command/hashgardcli/stake/validators','validators'],
                           ['/dev/command/hashgardcli/stake/delegation','delegation'],
                           ['/dev/command/hashgardcli/stake/delegations','delegations'],
                           ['/dev/command/hashgardcli/stake/delegations-to','delegations-to'],
                           ['/dev/command/hashgardcli/stake/unbonding-delegation','unbonding-delegation'],
                           ['/dev/command/hashgardcli/stake/unbonding-delegations','unbonding-delegations'],
                           ['/dev/command/hashgardcli/stake/unbonding-delegations-from','unbonding-delegations-from'],
                           ['/dev/command/hashgardcli/stake/redelegation','redelegation'],
                           ['/dev/command/hashgardcli/stake/redelegations','redelegations'],
                           ['/dev/command/hashgardcli/stake/redelegations-from','redelegations-from'],
                           ['/dev/command/hashgardcli/stake/pool','pool'],
                           ['/dev/command/hashgardcli/stake/params','params'],
                           ['/dev/command/hashgardcli/stake/create-validator','create-validator'],
                           ['/dev/command/hashgardcli/stake/edit-validator','edit-validator'],
                           ['/dev/command/hashgardcli/stake/delegate','delegate'],
                           ['/dev/command/hashgardcli/stake/unbond','unbond'],
                           ['/dev/command/hashgardcli/stake/redelegate','redelegate'],

                       ],
                   },

                           ['/dev/command/hashgardcli/status','status'],


                   {
                       title: 'tendermint',
                       children: [
                           ['/dev/command/hashgardcli/tendermint/','tendermint Guide'],
                           ['/dev/command/hashgardcli/tendermint/block','block'],
                           ['/dev/command/hashgardcli/tendermint/tendermint-validator-set','vtendermint-validator-set'],
                           ['/dev/command/hashgardcli/tendermint/txs','txs'],
                           ['/dev/command/hashgardcli/tendermint/tx','tx'],


                       ],
                   },
                   {
                       title: 'slashing',
                       children: [
                           ['/dev/command/hashgardcli/slashing/','slashing Guide'],
                           ['/dev/command/hashgardcli/slashing/signing-info','signing-info'],
                           ['/dev/command/hashgardcli/slashing/params','params'],
                           ['/dev/command/hashgardcli/slashing/unjail','unjail'],
                       ],
                   },

                    {
                       title: 'hashgard',
                       children: [
                           ['/dev/command/hashgard/','Hashgard Guid'],
                           ['/dev/command/hashgard/init','hashgard init'],
                           ['/dev/command/hashgard/gentx','hashgard gentx'],
                           ['/dev/command/hashgard/collect-gentxs','hashgard collect-gentxs'],
                           ['/dev/command/hashgard/validate-genesis','hashgard validate-genesis'],
                           ['/dev/command/hashgard/start','hashgard start'],
                           ['/dev/command/hashgard/testnet','hashgard testnet'],
                           ['/dev/command/hashgard/unsafe-reset-all','hashgard unsafe-reset-all'],
                           ['/dev/command/hashgard/export','hashgard export'],
                           ['/dev/command/hashgard/tendermint','hashgard tendermint'],

                       ],
                   },
                     ['/dev/command/hashgardlcd/','hashgardlcd'],
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
                          ['/learn/UserssGuide/WebWalletGuide','网页钱包使用指南'],
                          ['/learn/UserssGuide/hashgardExplorerGuide','浏览器使用指南'],
                          ['/learn/UserssGuide/hashgardNav','hashgard导航'],

                       ],
                   },
                   ['/learn/Quickstart','快速启动'],
                   {
                       title: '教程',
                       children: [
                          ['/learn/Guide/AccountGuide','账户类型说明'],
                         ['/learn/Guide/','测试网络指南'],
                         ['/learn/Guide/Delegate','Delegate'],
                         ['/learn/Guide/Deposit','Deposit'],
                         ['/learn/Guide/genesis','genesis'],
                         ['/learn/Guide/GreatValidator','GreatValidator'],
                         ['/learn/Guide/installation','installation'],
                         ['/learn/Guide/Redelegate','Redelegate'],
                         ['/learn/Guide/SubmitProposal','SubmitProposal'],
                         ['/learn/Guide/unbond','unbond'],
                          ['/learn/Guide/Vote','Vote'],


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
