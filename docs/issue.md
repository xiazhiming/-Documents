## HRC-10 通证发行协议（issue模块）

### 简述

适合于企业级的高级资产发行标准

### 摘要

标准同质化Token，该协议提供标准的token创建、转移、以及适合金融企业的高级管理功能：例如增发、冻结/解冻账户、销毁代币、强制转移等功能。

<a data-fancybox  href="imges/issue.png">![imges/issue.png](imges/issue.png)</a>

### 使用方法

```bash
hashgardcli issue create [name][symbol][total-supply][flags] 
```



### 释义

#### name

通证名称，例如"mytoken" 。支持格式utf-8、 长度为3～32字符之间、可重复、必填、不支持修改。

> Message
>
> - error：name encoding only supports utf-8.   //name 编码格式不正确。
> - error：The length of the name is between 3 and 32. //name字符长度应该在3～32。
> - error：The name cannot be empty.  //name不能为空。



#### symbol

通证符号，例如"BTC"。仅支持数字和大写英文、长度2～8字符之间。可重复、不能为空，必填、不支持修改。

> Message
>
> - error：symbol only supports 0-9 and A-Z. //symbol 仅支持大写字母和数字。
> - error：The length of the symbol is between 2and 8. //symbol 字符长度为2～8。
> - error：The symbol cannot be empty.//symbol 不能为空。



#### total-supply

通证发行总量，仅支持正整数。最大不超过2^64-1。必填、数量发行后受到burn和mint操作而发生改变。

> Message
>
> - error：total-supply exceeds the upper limit. //total-supply 发行总量超出上限。
> - error：total-supply must be a positive integer.//total-supply 必须为正整数。



### Flags

| 名称             | 类型 | 是否必须 | 默认值 | 描述                                              |
| ---------------- | ---- | :------: | ------ | ------------------------------------------------- |
| --decimals       | int  |    否    | 18     | （可选）代币精度，默认18位，最大18位              |
| --burn-Owenr-off | bool |    否    | false  | （可选）是否关闭Owenr销毁自己通证                 |
| -burn-holder-off | bool |    否    | false  | （可选）是否关闭用户销毁自己通证                  |
| --burn-from-off  | bool |    否    | false  | （可选）是否关闭Owner可销毁任意账号下该代币的功能 |
| --minting        | bool |    否    | false  | （可选）是否关闭Owen增发权限                      |

默认不设置为开启状态，操作不可逆，一旦设定或关闭将无法修改。



### burn

持有该通证的所有用户或者Owen可以燃烧自己的可用余额。燃烧后通证总量减少。

Owen 销毁受--burn-Owen-off状态控制。用户销毁受-burn-holder-off状态控制。

> Message
>
> - error：Burn is disabled.//燃烧功能被禁用。
> - error：The balance is less than the amount burned.//余额小于燃烧数量。



### burn-from

该通证的Owen可以销毁其他正常用户持有该通证的可用余额。燃烧后通证总量减少。该命令受到--burn-from-off状态控制。

> Message
>
> - error：Owner mismatch with coin .//与通证发行者不匹配。
> - error：Burn-from  is disabled.//燃烧用户余额功能被禁用。
> - error：The balance is less than the amount burned.//余额小于燃烧数量。
> - error：burn-from address does not exist.//燃烧地址不存在。



### transfer-ownership

将通证合约的所有权转移至新的地址账户。仅限于合约本身管理权，不涉及到本账户的通证。



### freezeAccount

可以冻结用户该通证转入、转出功能。并带有时间参数。time仅支持时间戳格式，开始时间不能晚余结束时间。开始时间早于交易执行时间。 该命令受到freezeAccount-off状态控制。

> Message
>
> - error：Owner mismatch with coin .//与通证发行者不匹配。
> - error：freezeAccount is disabled.//冻结账户功能被禁用。
> - error：freezeAccount does not exist.//冻结账户不存在。
> - error：starting time.//冻结开始时间不正确。
> - error：end time.//冻结结束时间不正确。
> - error：Start time cannot be less than end time.//冻结开始时间必须早于结束时间。



### unfreezeAccount

解冻用户的账户转入、转出的状态。 

> Message
>
> error：Owner mismatch with coin .//与通证发行者不匹配。
>
> error：unfreezeAccount is disable.//解冻功能被禁用。
>
> error：unfreezeAccount does not exist.//解冻账户不存在
>
> Warning：account is not freeze.//账户没有冻结状态
>



### mint

```bash
 hashgardcli issue mint [issue-id] [amount] [flags]
```

Owen增发通证至自己账户。增发数量+现有发行数量不能超过2^64-1。增发数量仅支持正整数。该命令受到--minting-finished状态控制。默认增发至自己账户，也可发送至指定账户地址。

| 名称 | 类型   | 是否必须 | 默认值 | 描述                         |
| ---- | ------ | -------- | ------ | ---------------------------- |
| --to | string | 否       | ""     | （可选）增发到指定的账号地址 |

> Message
>
> - error：Owner mismatch with coin .//与通证发行者不匹配。
> - error：minting  is disabled.//增发功能被禁用。
> - error：total-supply exceeds the upper limit.//供应总量超出发行上限。
> - error：mint quantity must be a positive integer.//增发数量必须为正整数。



#### finish-minting

```
 hashgardcli issue finish-minting  [issue-id] [flags]
```

关闭通证的增发功能。

> Message
>
> - error：Owner mismatch with coin .//与通证发行者不匹配。

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



查询自己的账号

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



### 添加描述

```bash
hashgardcli issue describe [issue-id] [description-file]
```



#### describe-file

发行通证可用支持描述文件，格式支持json文件，大小不能超过1024字节。

- org //组织机构或个人名称 。

- Logo  //通证项目图标或项目图标，仅支持网址链接。

- website  //发行方官方的网站地址。

- intro  //对于该项目的简单描述。

  

#### 模版

```json
{
    "org":"Hashgard",
    "website":"https://www.hashgard.com",
    "logo":"https://cdn.hashgard.com/static/logo.2d949f3d.png",
    "intro":"新一代金融公有链" 
}
```

> Message
>
> - error：describe-file  length cannot exceed 1024.//文件内容长度不能大于1024。
> - error：the file must be json。//文件格式必须为json。



## 发行查询总数据



> 发行信息
>
> name //发行通证名称
>
> Issue-address //发行者地址
>
> symbol //令牌符号
>
> owenr //发行合约所有者地址
>
> decimals //小数位精度
>
> total-supply //发行总量
>
> time  //发行时间
>
> 
>
> description //发行通证描述
>
> - logo
> - org  //组织机构或个人
> - intro   //通证描述
> - Website //网站地址
>
> 
>
> disable 
>
> - minting //增发功能
>   - on
>   - off
> - burn-handlers //普通用户燃烧自己可用通证
>   - on
>   - off
>
> - burn-Owenr //通证合约所有者燃烧自己可用通证
>   - on
>   - off
> - burn-from //通证合约所有者燃烧用户可用通证
>   - on
>   - off
> - freezeAccount //冻结账户功能
>   - on
>   - off



>freeze-list  //冻结名单
>
>- address//冻结地址
>- time //冻结时间
>- in/out/both //转入/转出/全部



>mint-list //增发记录列表
>
>time
>
>- address //增发地址
>- amount//增发数量



>Brun-list //燃烧记录列表
>
>time//燃烧时间
>
>- address //燃烧地址
>- amount //燃烧数量



>Holder-list //持有者列表
>
>- address //持有地址
>- amount //持有数量



>transfer-ownership-list 转移记录
>
>- time //转移时间
>- From_address 
>- To_address



### 查询或搜索

#### list-issue

查询列表



#### issue-id

查询指定通证



#### freeze  

查询冻结名单



## 命令帮助



### 发行命令

#### create                       

 Issue a new token  // 创建通证

#### describe                   

Describe a token  //通证的描述



### 不可逆功能设置

#### disable                      

Disable feature from a token  //设置通证合约功能，该操作不可逆

Token Owner disabled the features:  //所有不可逆的功能设置命令

#### burn-owner

Token owner can burn the token //合约所有者燃烧自己的可用通证

#### burn-holder

Token holder can burn the token //普通用户燃烧自己的可用通证

#### burn-from

Token owner can burn the token from any holder //合约所有者燃烧普通用户的可用通证

#### freeze

Token owner can freeze in and out the token from any address //合约所有者冻结用户该通证的转入和转出功能

#### minting

Token owner can mint the token //合约管理者增发通证



### 基础功能

#### approve                    

Approve spend tokens on behalf of sender //

#### decrease-approval  

Decrease approve spend tokens on behalf of sender  //

#### increase-approval   

Increase approve spend tokens on behalf of sender //

#### send-from               

Send tokens from one address to another  //发送通证至其他地址

#### lock

Lock amount //用户自己锁定用户的部分或者全部通证

### 高级功能

#### burn                         

Token holder burn the token  //燃烧自己的通证

#### burn-from                

Token owner burn the token //通证合约所有者燃烧用户可用余额

#### freeze                       

Freeze the transfer from a address  //冻结用户的地址

#### unfreeze                   

UnFreeze the transfer from a address  //解冻用户的地址

#### mint                          

Mint a token  //增发通证

#### finish-minting

//关闭增发功能

#### transfer-ownership  

Transfer ownership a token  //转移合约所有权



###  搜索和查询               



#### list-issues                

Query issue list      //查询发行列表

#### query-issue             

Query a single issue   //查询单个通证

#### query-allowance    

Query allowance  //查询

#### query-freeze           

Query freeze   //查询冻结名单

#### search   

Search issues     //搜索通证符号或名称



