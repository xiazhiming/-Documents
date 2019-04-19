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
               description: 'Hashgard Documentation'
           },
           '/': {
               title:"Hashgard Documentation",
               lang: 'zh-CN',
               description: 'Hashgard Documentation'
           }
       },
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
                   ['/en/dev/DevManual/','DevManual'],
                   ['/en/dev/DevManual/hashgardcli/','hashgardcli'],
                   {
                       title: 'bank',
                       children: [
                           ['/en/dev/DevManual/hashgardcli/bank/','Bank Guide'],
                           ['/en/dev/DevManual/hashgardcli/bank/account','account'],
                           ['/en/dev/DevManual/hashgardcli/bank/send','send'],
                           ['/en/dev/DevManual/hashgardcli/bank/sign','sign'],
                           ['/en/dev/DevManual/hashgardcli/bank/multisign','multisign'],
                           ['/en/dev/DevManual/hashgardcli/bank/broadcast','broadcast'],

                       ],
                   },
                    {
                       title: 'distribution',
                       children: [
                           ['/en/dev/DevManual/hashgardcli/distribution/','Distribution Guide'],
                           ['/en/dev/DevManual/hashgardcli/distribution/params','params'],
                           ['/en/dev/DevManual/hashgardcli/distribution/outstanding-rewards','outstanding-rewards'],
                           ['/en/dev/DevManual/hashgardcli/distribution/commission','commission'],
                           ['/en/dev/DevManual/hashgardcli/distribution/slashes','slashes'],
                           ['/en/dev/DevManual/hashgardcli/distribution/rewards','rewards'],
                           ['/en/dev/DevManual/hashgardcli/distribution/set-withdraw-address','set-withdraw-address'],
                           ['/en/dev/DevManual/hashgardcli/distribution/withdraw-rewards','withdraw-rewards'],
                       ],
                   },
                    {
                       title: 'gov',
                       children: [
                           ['/en/dev/DevManual/hashgardcli/gov/','Gov Guide'],
                           ['/en/dev/DevManual/hashgardcli/gov/proposal','proposal'],
                           ['/en/dev/DevManual/hashgardcli/gov/proposals','proposals'],
                           ['/en/dev/DevManual/hashgardcli/gov/query-vote','query-vote'],
                           ['/en/dev/DevManual/hashgardcli/gov/query-votes','query-votes'],
                           ['/en/dev/DevManual/hashgardcli/gov/query-deposit','query-deposit'],
                           ['/en/dev/DevManual/hashgardcli/gov/query-deposits','query-deposits'],
                           ['/en/dev/DevManual/hashgardcli/gov/tally','tally'],
                           ['/en/dev/DevManual/hashgardcli/gov/param','param'],
                           ['/en/dev/DevManual/hashgardcli/gov/submit-proposal','submit-proposal'],
                           ['/en/dev/DevManual/hashgardcli/gov/deposit','deposit'],
                           ['/en/dev/DevManual/hashgardcli/gov/vote','vote'],

                       ],
                   },
                    {
                       title: 'keys',
                       children: [
                           ['/en/dev/DevManual/hashgardcli/keys/','Keys Guide'],
                           ['/en/dev/DevManual/hashgardcli/keys/mnemonic','mnemonic'],
                           ['/en/dev/DevManual/hashgardcli/keys/add','add'],
                           ['/en/dev/DevManual/hashgardcli/keys/list','list'],
                           ['/en/dev/DevManual/hashgardcli/keys/show','show'],
                           ['/en/dev/DevManual/hashgardcli/keys/delete','delete'],
                           ['/en/dev/DevManual/hashgardcli/keys/update','update'],


                       ],
                   },
                    {
                       title: 'stake',
                       children: [
                           ['/en/dev/DevManual/hashgardcli/stake/','Stake Guide'],
                           ['/en/dev/DevManual/hashgardcli/stake/validator','validator'],
                           ['/en/dev/DevManual/hashgardcli/stake/validators','validators'],
                           ['/en/dev/DevManual/hashgardcli/stake/delegation','delegation'],
                           ['/en/dev/DevManual/hashgardcli/stake/delegations','delegations'],
                           ['/en/dev/DevManual/hashgardcli/stake/delegations-to','delegations-to'],
                           ['/en/dev/DevManual/hashgardcli/stake/unbonding-delegation','unbonding-delegation'],
                           ['/en/dev/DevManual/hashgardcli/stake/unbonding-delegations','unbonding-delegations'],
                           ['/en/dev/DevManual/hashgardcli/stake/unbonding-delegations-from','unbonding-delegations-from'],
                           ['/en/dev/DevManual/hashgardcli/stake/redelegation','redelegation'],
                           ['/en/dev/DevManual/hashgardcli/stake/redelegations','redelegations'],
                           ['/en/dev/DevManual/hashgardcli/stake/redelegations-from','redelegations-from'],
                           ['/en/dev/DevManual/hashgardcli/stake/pool','pool'],
                           ['/en/dev/DevManual/hashgardcli/stake/params','params'],
                           ['/en/dev/DevManual/hashgardcli/stake/create-validator','create-validator'],
                           ['/en/dev/DevManual/hashgardcli/stake/edit-validator','edit-validator'],
                           ['/en/dev/DevManual/hashgardcli/stake/delegate','delegate'],
                           ['/en/dev/DevManual/hashgardcli/stake/unbond','unbond'],
                           ['/en/dev/DevManual/hashgardcli/stake/redelegate','redelegate'],

                       ],
                   },

                           ['/en/dev/DevManual/hashgardcli/status','status'],


                   {
                       title: 'tendermint',
                       children: [
                           ['/en/dev/DevManual/hashgardcli/tendermint/','tendermint Guide'],
                           ['/en/dev/DevManual/hashgardcli/tendermint/block','block'],
                           ['/en/dev/DevManual/hashgardcli/tendermint/tendermint-validator-set','vtendermint-validator-set'],
                           ['/en/dev/DevManual/hashgardcli/tendermint/txs','txs'],
                           ['/en/dev/DevManual/hashgardcli/tendermint/tx','tx'],


                       ],
                   },
                   {
                       title: 'slashing',
                       children: [
                           ['/en/dev/DevManual/hashgardcli/slashing/','slashing Guide'],
                           ['/en/dev/DevManual/hashgardcli/slashing/signing-info','signing-info'],
                           ['/en/dev/DevManual/hashgardcli/slashing/params','params'],
                           ['/en/dev/DevManual/hashgardcli/slashing/unjail','unjail'],
                       ],
                   },

                    {
                       title: 'hashgard',
                       children: [
                           ['/en/dev/DevManual/hashgard/','Hashgard Guid'],
                           ['/en/dev/DevManual/hashgard/init','hashgard init'],
                           ['/en/dev/DevManual/hashgard/add-genesis-account','hashgard add-genesis-account'],
                           ['/en/dev/DevManual/hashgard/gentx','hashgard gentx'],
                           ['/en/dev/DevManual/hashgard/collect-gentxs','hashgard collect-gentxs'],
                           ['/en/dev/DevManual/hashgard/validate-genesis','hashgard validate-genesis'],
                           ['/en/dev/DevManual/hashgard/start','hashgard start'],
                           ['/en/dev/DevManual/hashgard/testnet','hashgard testnet'],
                           ['/en/dev/DevManual/hashgard/unsafe-reset-all','hashgard unsafe-reset-all'],
                           ['/en/dev/DevManual/hashgard/export','hashgard export'],
                           ['/en/dev/DevManual/hashgard/tendermint','hashgard tendermint'],

                       ],
                   },
                     ['/en/dev/DevManual/hashgardlcd/','hashgardlcd'],
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
                   ['/dev/DevManual/','DevManual'],
                   ['/dev/DevManual/hashgardcli/','hashgardcli'],
                   {
                       title: 'bank',
                       children: [
                           ['/dev/DevManual/hashgardcli/bank/','Bank Guide'],
                           ['/dev/DevManual/hashgardcli/bank/account','account'],
                           ['/dev/DevManual/hashgardcli/bank/send','send'],
                           ['/dev/DevManual/hashgardcli/bank/sign','sign'],
                           ['/dev/DevManual/hashgardcli/bank/multisign','multisign'],
                           ['/dev/DevManual/hashgardcli/bank/broadcast','broadcast'],

                       ],
                   },
                    {
                       title: 'distribution',
                       children: [
                           ['/dev/DevManual/hashgardcli/distribution/','Distribution Guide'],
                           ['/dev/DevManual/hashgardcli/distribution/params','params'],
                           ['/dev/DevManual/hashgardcli/distribution/outstanding-rewards','outstanding-rewards'],
                           ['/dev/DevManual/hashgardcli/distribution/commission','commission'],
                           ['/dev/DevManual/hashgardcli/distribution/slashes','slashes'],
                           ['/dev/DevManual/hashgardcli/distribution/rewards','rewards'],
                           ['/dev/DevManual/hashgardcli/distribution/set-withdraw-address','set-withdraw-address'],
                           ['/dev/DevManual/hashgardcli/distribution/withdraw-rewards','withdraw-rewards'],
                       ],
                   },
                    {
                       title: 'gov',
                       children: [
                           ['/dev/DevManual/hashgardcli/gov/','Gov Guide'],
                           ['/dev/DevManual/hashgardcli/gov/proposal','proposal'],
                           ['/dev/DevManual/hashgardcli/gov/proposals','proposals'],
                           ['/dev/DevManual/hashgardcli/gov/query-vote','query-vote'],
                           ['/dev/DevManual/hashgardcli/gov/query-votes','query-votes'],
                           ['/dev/DevManual/hashgardcli/gov/query-deposit','query-deposit'],
                           ['/dev/DevManual/hashgardcli/gov/query-deposits','query-deposits'],
                           ['/dev/DevManual/hashgardcli/gov/tally','tally'],
                           ['/dev/DevManual/hashgardcli/gov/param','param'],
                           ['/dev/DevManual/hashgardcli/gov/submit-proposal','submit-proposal'],
                           ['/dev/DevManual/hashgardcli/gov/deposit','deposit'],
                           ['/dev/DevManual/hashgardcli/gov/vote','vote'],

                       ],
                   },
                    {
                       title: 'keys',
                       children: [
                           ['/dev/DevManual/hashgardcli/keys/','Keys Guide'],
                           ['/dev/DevManual/hashgardcli/keys/mnemonic','mnemonic'],
                           ['/dev/DevManual/hashgardcli/keys/add','add'],
                           ['/dev/DevManual/hashgardcli/keys/list','list'],
                           ['/dev/DevManual/hashgardcli/keys/show','show'],
                           ['/dev/DevManual/hashgardcli/keys/delete','delete'],
                           ['/dev/DevManual/hashgardcli/keys/update','update'],


                       ],
                   },
                    {
                       title: 'stake',
                       children: [
                           ['/dev/DevManual/hashgardcli/stake/','Stake Guide'],
                           ['/dev/DevManual/hashgardcli/stake/validator','validator'],
                           ['/dev/DevManual/hashgardcli/stake/validators','validators'],
                           ['/dev/DevManual/hashgardcli/stake/delegation','delegation'],
                           ['/dev/DevManual/hashgardcli/stake/delegations','delegations'],
                           ['/dev/DevManual/hashgardcli/stake/delegations-to','delegations-to'],
                           ['/dev/DevManual/hashgardcli/stake/unbonding-delegation','unbonding-delegation'],
                           ['/dev/DevManual/hashgardcli/stake/unbonding-delegations','unbonding-delegations'],
                           ['/dev/DevManual/hashgardcli/stake/unbonding-delegations-from','unbonding-delegations-from'],
                           ['/dev/DevManual/hashgardcli/stake/redelegation','redelegation'],
                           ['/dev/DevManual/hashgardcli/stake/redelegations','redelegations'],
                           ['/dev/DevManual/hashgardcli/stake/redelegations-from','redelegations-from'],
                           ['/dev/DevManual/hashgardcli/stake/pool','pool'],
                           ['/dev/DevManual/hashgardcli/stake/params','params'],
                           ['/dev/DevManual/hashgardcli/stake/create-validator','create-validator'],
                           ['/dev/DevManual/hashgardcli/stake/edit-validator','edit-validator'],
                           ['/dev/DevManual/hashgardcli/stake/delegate','delegate'],
                           ['/dev/DevManual/hashgardcli/stake/unbond','unbond'],
                           ['/dev/DevManual/hashgardcli/stake/redelegate','redelegate'],

                       ],
                   },

                           ['/dev/DevManual/hashgardcli/status','status'],


                   {
                       title: 'tendermint',
                       children: [
                           ['/dev/DevManual/hashgardcli/tendermint/','tendermint Guide'],
                           ['/dev/DevManual/hashgardcli/tendermint/block','block'],
                           ['/dev/DevManual/hashgardcli/tendermint/tendermint-validator-set','vtendermint-validator-set'],
                           ['/dev/DevManual/hashgardcli/tendermint/txs','txs'],
                           ['/dev/DevManual/hashgardcli/tendermint/tx','tx'],


                       ],
                   },
                   {
                       title: 'slashing',
                       children: [
                           ['/dev/DevManual/hashgardcli/slashing/','slashing Guide'],
                           ['/dev/DevManual/hashgardcli/slashing/signing-info','signing-info'],
                           ['/dev/DevManual/hashgardcli/slashing/params','params'],
                           ['/dev/DevManual/hashgardcli/slashing/unjail','unjail'],
                       ],
                   },

                    {
                       title: 'hashgard',
                       children: [
                           ['/dev/DevManual/hashgard/','Hashgard Guid'],
                           ['/dev/DevManual/hashgard/init','hashgard init'],
                           ['/dev/DevManual/hashgard/gentx','hashgard gentx'],
                           ['/dev/DevManual/hashgard/collect-gentxs','hashgard collect-gentxs'],
                           ['/dev/DevManual/hashgard/validate-genesis','hashgard validate-genesis'],
                           ['/dev/DevManual/hashgard/start','hashgard start'],
                           ['/dev/DevManual/hashgard/testnet','hashgard testnet'],
                           ['/dev/DevManual/hashgard/unsafe-reset-all','hashgard unsafe-reset-all'],
                           ['/dev/DevManual/hashgard/export','hashgard export'],
                           ['/dev/DevManual/hashgard/tendermint','hashgard tendermint'],

                       ],
                   },
                     ['/dev/DevManual/hashgardlcd/','hashgardlcd'],
               ],
                '/learn/':[
                {
                       title: 'Overview',
                       children: [
                          ['/learn/introduction','who is Hashgard'],
                          ['/learn/howToContribute','howToContribute'],
                       ],
                   },
                   {
                       title: 'UserssGuide',
                       children: [
                          ['/learn/UserssGuide/WebWalletGuide','WebWalletGuide'],
                          ['/learn/UserssGuide/hashgardExplorerGuide','ExplorerGuide'],
                          ['/learn/UserssGuide/hashgardNav','hashgardNav'],

                       ],
                   },

                   ['/learn/Quickstart','Quickstart'],
                   {
                       title: 'Guide',
                       children: [
                          ['/learn/Guide/AccountGuide','AccountGuide'],
                         ['/learn/Guide/','testnet Guide'],
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
