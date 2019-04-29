## HRC-10 通证发行协议（issue模块）

### 简述

适合于企业级的高级资产发行标准。

### 摘要

标准同质化Token，该协议提供标准的token创建、转移、以及适合金融企业的高级管理功能：例如增发、冻结/解冻账户、销毁代币等功能。可用配合多签账户一起使用。适合于单个机构和个人或者多个机构和个人进行对于资产管理。



## 发行通证



### 使用方法

```bash
hashgardcli issue create [name][symbol][total-supply][flags] 
```



### 基本释义

#### name

通证名称，例如"mytoken" 。支持格式utf-8、 长度为3～32字符之间、可重复、必填、不支持修改。

#### symbol

通证符号，例如"BTC"。仅支持数字和大写英文、长度2～8字符之间。可重复、不能为空，必填、不支持修改。



#### total-supply

通证发行总量，仅支持正整数。最大不超过2^64-1。必填、数量发行后受到burn和mint操作而发生改变。



## 高级管理功能



### Flags

| 名称               | 类型 | 是否必须 | 默认值 | 描述                                               |
| ------------------ | ---- | :------: | ------ | -------------------------------------------------- |
| --decimals         | int  |    否    | 18     | （可选）通证精度，默认18位，最大18位               |
| --burn-Owen-off    | bool |    否    | false  | （可选）是否关闭Owen销毁自己通证                   |
| -burn-handlers-off | bool |    否    | false  | （可选）是否关闭用户销毁自己通证                   |
| --burn-from-off    | bool |    否    | false  | （可选）是否关闭Owner可销毁任意账号下该代币的功能  |
| freezeAccount-off  | bool |    否    | false  | （可选）是否关闭Owen冻结解冻用户该通证转入转出功能 |
| --minting-finished | bool |    否    | false  | （可选）是否关闭Owen增发权限                       |

默认不设置为开启状态，操作不可逆，一旦设定或关闭将无法修改。以上flags控制改合约以下几个功能的使用。

### burn

持有该通证的所有用户或者Owen可以燃烧自己的可用余额。燃烧后通证总量减少。

Owen 销毁受--burn-Owen-off状态控制。用户销毁受-burn-handlers-off状态控制。

[查看详情](../cli/hashgardcli/issue/burn.md)

### burn-from

该通证的Owen可以销毁其他正常用户持有该通证的可用余额。燃烧后通证总量减少。该命令受到--burn-from-off状态控制。

[查看详情](../cli/hashgardcli/issue/burn-from.md)

### freezeAccount

可以冻结用户该通证转入、转出功能。并带有时间参数。time仅支持时间戳格式，开始时间不能晚余结束时间。开始时间早于交易执行时间。 该命令受到freezeAccount-off状态控制。

[查看详情](../cli/hashgardcli/issue/freezeAccount.md)

### unfreezeAccount

解冻用户的账户转入、转出的状态。 该命令受到freezeAccount-off状态控制。

[查看详情](../cli/hashgardcli/issue/freezeAccount.md)

### mint

Owen增发通证至自己账户。增发数量+现有发行数量不能超过2^64-1。增发数量仅支持正整数。该命令受到--minting-finished状态控制。

[查看详情](../cli/hashgardcli/issue/mint.md)

### 例子

```bash
hashgardcli issue create foocoin FOO 100000000 --from=foo -o=json
```

进行本项操作需要您有Gard来进行支付矿工打包费用。如测试网络环境请领取测试代币。[如何领取](../cli/hashgard/Faucet.md)

进行上述操作后会需要您使用您输入当前地址钱包的密码进行发行通证操作。

```json
{
 "height": "3394",
 "txhash": "81D4B2054F741E901BE5A540DDA37BF53D1DEA16C94BF9E4BBDB1D1CD548DFA1",
 "data": "ERBjb2luMTU1NTU2NzUwNjAw",
 "logs": [
  {
   "msg_index": "0",
   "success": true,
   "log": ""
  }
 ],
 "gas_wanted": "100000000000",
 "gas_used": "18994244",
 "tags": [
  {
   "key": "action",
   "value": "issue"
  },
  {
   "key": "recipient",
   "value": "gard1vf7pnhwh5v4lmdp59dms2andn2hhperghppkxc"
  },
  {
   "key": "issue-id",
   "value": "coin174876e800"
  }
 ]
}
```

这样你就创建好了一个属于你的通证，接下来我们查询自己的资产情况。

```bash
hashgardcli bank account foo
```

你将会看到你的持币列表里多了一个形如“币名（issue-id）”特殊名称的币。后续对该币的操作请使用issue-id的值来进行，包括进行转账操作，要转的币也请使用该issue-id。

```json
{
 "type": "auth/Account",
 "value": {
  "address": "gard1f203m5q7hr4tkf0vredrn4wpxkx7zngn4pntye",
  "coins": [
   {
    "denom": "foocoin(coin174876e800)",
    "amount": "100000000"
   },
   {
    "denom": "gard",
    "amount": "1010000000"
   }
  ],
  "public_key": {
   "type": "tendermint/PubKeySecp256k1",
   "value": "A/rSPb+egaljwS1XGSSFKpaFkfjFzLWJFmtUdAlaQpLl"
  },
  "account_number": "1",
  "sequence": "11"
 }
}
```



## 添加描述文件

#### describe-file

发行通证可用支持描述文件，格式支持json文件，大小不能超过1024字节。

- organization 组织机构或个人名称 。
- Logo  通证项目图标或项目图标，仅支持网址链接。
- website  发行方官方的网站地址。
- description  对于该项目的简单描述。

#### 模版

```json
{
    "organization":"Hashgard",
    "website":"https://www.hashgard.com",
    "logo":"https://cdn.hashgard.com/static/logo.2d949f3d.png",
    "description":"新一代金融公有链" 
}
```

[查看详情](../cli/hashgardcli/isuue/describe-file.md)

##  配合多签功能使用

在实际的金融活动中我们需要对该资产有多个管理员来进行管理，需要进行投票等复杂的，以及更高的安保要求，避免由于丢失密钥而无法对资产进行管理。我们支持用多签账户进行通证资产的发行。

[查看详情](../cli/hashgardcli/bank/multisign.md)