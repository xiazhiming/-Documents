## HRC-12 DeposityBox存款协议(草稿)

### 简述

金融机构进行存款或期货交易。

### 摘要

Hashgard提供原生的存款服务协议。帮助金融机构进行流通资产的控制与管理。帮助金融机构通过适当的金融激励来稳定市场的经济与繁荣。为用户的金融行为提供更多的激励。

任何人都可以发行存款盒子，来达到发行者的金融目的。存款盒子的利息需要事先全额支出，整个存款盒子是存在于Hashgard系统中，不属于任何人，只有发行者在盒子设定的结束时间才能取回剩余利息。用户在盒子存款计息开始之前和存款盒子结束时间之后可以取回自己的本金和利息。发行者可以设置吸纳存款的种类，存款盒子的大小，开始时间，结束时间，计息所需要的达成的总体存款的最低额度。以及发放的利息的通证种类和数量。发行者可以设置用户持有的存款凭证是否可以进行交易。



## 存款盒子的四个阶段



### 1.存款盒子发行期

发行者发行存款盒子，设定好存款的必要参数和利息注入。完成后存款盒子进入存款吸纳期。发行存款盒子的时候需要付出gas费用。

### 2.存款吸纳期

盒子发行完成后到start-time之间，为存款吸纳期。如果达到最低吸纳存款的的底线，那么那么存款计息从start-time开始计算。期间不允许通证的存入。发行者所注入的利息减去实际付出的利息会自动取回至发行者账户。如果到达start-time后，存款数额未达到存款底线，那么该盒子内所有存款通证将自动返还给存入地址。利息会自动返回至存款汇入地址。

### 3.存款期

存款期间，如果发行存款设定中进行了存款凭证可转移的设定，那么用户可以自由交易自己手中的存款凭证。存款凭证到期后会自动取回本金和利息。用户在此阶段无法取回存入的通证。

### 4.到期交割日

盒子发行期设定的到期时间，根据用户手中凭证的数量，自动兑换成本金和利息。



### gas费用

- 发行数据gas

-  成立失败或存款结束用于自动回退用户gas

- 存款成立时为每个用户将存款兑换盒子的gas

  

## 存款盒子发行

### 1.发行存款盒子 depostibox

```bash
hashgarlcli depostibox create [name][issueID][start-time][maturity] [flags] --from
```

创建存款盒子包括名字，接受存款的通证类型，存款开始时间，结束时间。并设定利息的种类和数量。

#### name

存款盒子的名称，例如"gardfound01"。支持格式4～24字符之间。可重复、必填、不可修改。

#### issueID

存款盒子可接纳的存款通证种类。目前暂时仅支持单个。

#### start-time

存款开始计息的时间，

#### maturity-time

存款到期交割本金和利息时间。

### flags

| 名称           | 类型 |      |      | 解释                                                         |
| -------------- | :--: | ---- | ---- | :----------------------------------------------------------- |
| --Bottom line  |      |      |      | （选填）整个存款协议发放利息所设定的最低总存款条件条件限定。不设置默认为0。设定范围在0～ceiling之间。 |
| --ceiling      |      |      |      | （必填）整个存款盒子最多容纳的存款数量。                     |
| --price        |      |      |      | （必填）每份所需所需要的存款。                               |
| -- transfer-on |      |      |      | （选填）用户存款后的存款凭证是否可以进行交易                 |

整个存款盒子分为若干个份，price为每份的价格。存款必须为price的整数倍。获得凭证即为份数。如果发行者设定了可进行交易。那么交易数量必须为正整数。

举例：用户bobo花费了1000个gard， 购买了price的为100gard的存款盒子deposit001。那么获得10个deposit001，发行方设定可以转移。bobo出售1个deposit001给Alice。



### 2.对存款盒子进行利息注入

```bash
hashgardcli depostitbox send [depositboxid][amount] --from 
```

对指定存款盒子进行利息的充值。充值人可以不是盒子发行者。充值的的总额不能大于已经设定的利息总额。存款盒子参数和利息设置完成即可进入存款募集期。

#### depositboxid

存款盒子的唯一编码。

#### amount

利息由利息的通证种类和数量组成，利息可与吸纳的存款通证种类不一致。仅支持一种。



### 3.添加备注

#### describe-file

发行存款盒子支持描述文件，格式支持json文件，大小不能超过1024字节。可选字段

- organization 组织机构或个人名称 。
- Logo  通证项目图标或项目图标，仅支持网址链接。
- website  发行方官方的网站地址。
- description  对于该项目的简单描述。

#### 模版

```json
{
  "organization":"Hashgard存款一期",
  "website":"https://www.hashgard.com",
  "logo":"https://cdn.hashgard.com/static/logo.2d949f3d.png",
   "description":"存入Gard通证2个月即可用获得7%的apple收益" 
}
```

> Message
>
> - error：file size cannot exceed 1024 byte.
> - 报错：file文件大小不能大于1024byte。
> - error：the file must be json。
> - 报错：文件格式为json。



#### issue-address

存款盒子发行者的地址。



#### coupon

单位凭证需要付出的利息。



## 赎回

#### redeem

```bash
hashgardcli despositbox redeem [to_address][amount] --from 
```

用户可以在存款吸纳期对于已经存入的存款自由的进行取回。



## 存款盒子查询总数据



>**发行信息总览**
>
>name 存款盒子名称
>
>description 存款盒子描述
>
>- logo
>- organization 组织机构或个人
>- description   盒子描述
>
>Issuer-address 发行者地址
>
>issuerId 存款通证类型
>
>start-time 存款计息时间
>
>maturity-time 本金与利息交割时间
>
>price 每份的价格
>
>Bottom line 存款达成底线
>
>ceiling 存款上限
>
>Interest 利息
>
>- issueID 利息种类
>- amount 利息数量
>- adress  注入利息地址
>  - amount 注入利息数量
>
>transfer/untransfer 交易转移状态



>  存款信息
>
> Total deposit 总存款
>
> coupon 每份需要付出的利息数
>
> Share  总共出售的份数



> 用户存款信息
>
> address 用户地址
>
> amount 用户存款数量(存款吸纳期)/amount用户持有share的份数（存期）
>
> Redeemed/Unredeemed 用户存款本金和利息赎回状态



### 搜索

```bash
hashgard despositbox sreach [name]
```



##### name

根据存款盒子进行查询name字段，返回发行信息list。

### 查询

```bash
hashgardcli desposit query[despositboxId][list][issue_adress] 
```



#### list

返回所有存款盒子发行信息list。



#### list issueId

查询接受存款种类的ID进行查询，返回存款分类发行信息list。



#### Issuer-address

按用发行存款盒子的地址进行查询。返回发行信息list。



#### despositBoxID

按存款盒子唯一编码进行查询。返回发行信息list+存款信息+用户存款信息list。



#### despositBoxID address

按照存款盒子唯一编码和存款地址联合查询，返回指定用户存款信息。



## 赎回本金和利息



#### 交易存款凭证

```bash
hashgardcli depositbox send to_address [depositBoxID] [amount]  -from= 
```

存款用户将自己手中的存款凭据整体或者部分进行转移给其他用户。该交易类型受到该发行设定中split-transfer-off开关控制。

