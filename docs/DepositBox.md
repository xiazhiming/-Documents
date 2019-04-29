## HRC-12 DeposityBox存款协议(草稿)

### 简述

金融机构进行存款或期货交易

### 摘要

Hashgard提供原生的存款服务协议。帮助金融机构进行流通资产的控制与管理。帮助金融机构通过适当的金融激励来稳定市场的经济与繁荣。为用户的金融行为提供更多的激励。

任何人都可以发行存款盒子，来达到发行者的金融目的。存款盒子的利息需要事先全额支出，整个存款盒子是存在于Hashgard系统中，不属于任何人，只有发行者在盒子设定的结束时间才能取回剩余利息。用户在盒子存款计息开始之前和存款盒子结束时间之后可以取回自己的本金和利息。发行者可以设置吸纳存款的种类，存款盒子的大小，开始时间，结束时间，计息所需要的达成的总体存款的最低额度。以及发放的利息的通证种类和数量。发行者可以设置用户持有的存款凭证是否可以进行切分和交易。



## 存款盒子发行



### 发行存款盒子 depostibox

```bash
hashgarlcli depostibox create [name][issueID][start-time][end-time] --form -o json
```

创建存款盒子包括名字，接受存款的通证类型，存款开始时间，结束时间。

### 对存款盒子进行充值

```
hashgardcli depostibox send interest [depositboxid] [issueid][amount] --from -o json
```

对指定存款盒子进行利息的存储

### 设定存款协议

```
hashgardcli depostibox set [depositboxid] [box-min-total][box-max-total][deposit-min][deposit-max][split-transfer-off] --from -json
```

设定该存款盒子的各项存款协议



### 基本释义

#### depositboxid

存款盒子的唯一编码。



#### name

存款盒子的名称，例如"gardfound01"。支持格式4～24字符之间。可重复、必填、不可修改。

>error：name  is between 4 and 24 in length.



#### issueID

存款盒子可接纳的存款通证种类。目前暂时仅支持单个。

> error：Issue does not exist



#### issue-address

存款盒子发行者的地址。



#### start-time

接受存款的时间，



#### end-time

结束存款协议的时间。



#### reach-time

达成box-min-total的时间，及计息开始时间。如果box-min-tatal为空，那么reach-time等于start-time。



#### box-min-total

整个存款协议发放利息所设定的最低总存款条件条件限定。不设置默认为0。设定范围在0～box-max-tatal之间。



#### box-max-total

整个DepositBox最多容纳的存款数量。



#### deposit-min

设定单个存款用户进行存款的最小额度。格式为自然数。



#### deposit-max

设定单个用户进行存款的最大额度。格式为自然数。



#### interest

|   类别   |                 解释                 |
| :------: | :----------------------------------: |
| -IssueId | 做为利息的通证种类，可与存款通证不同 |
|  -total  |              利息的总量              |
| -amount  |        单个用户获得利息的数量        |



#### split-transfer-off

|        名称        | 类别 | 默认值 | 描述  | 描述                                     |
| :----------------: | :--: | :----: | :---: | ---------------------------------------- |
| split-transfer-off | bool |   否   | false | 用户存款后的存款凭证是否可以进行拆分交易 |

？？ 需要讨论 这个开关是用可逆还是不可逆



##### 例子：

alice 创建了一个名叫 alicegod的存款盒子，并限定了该盒子只有存储god通证，存款上限为10000个god。利息为1200个apple。时间为2019年1月1日-2019年12月30日。并设定了最低达成存款要求为2000个gad。要求每个用户最低不少于100个god，最大不能多于3000个god。最后用所有用户在2019年3月1日总共存入2000个god，开始计息。并设置了用户存款凭证可以拆分交易。

存款协议信息

|        类别        |     数据      |         解释         |
| :----------------: | :-----------: | :------------------: |
|        name        |   alicegod    |     存款盒子名称     |
|       issue        |    god_id     |    接受存款的种类    |
|   issue_address    | Alice_address |      发行者地址      |
|     start-time     |   2019-1-1    |     存款活动时间     |
|      end-time      |  2019-12-30   |   存款活动结束时间   |
|   box-min-total    |     2000      | 最小开始计息存款总量 |
|   box-max-total    |     10000     |  存款盒子的容纳上限  |
|  Interest-issueID  |   apple_id    |     分红的通证id     |
|   Interest-total   |     1200      |      分红总数量      |
| split-transfer-off |      Off      | 允许用户切分交易凭证 |



用户存款信息

| 时间      | 用户    | 存入数量 | 最后收益 |
| --------- | ------- | -------- | -------- |
| 2019-1-1  | Emily   | 1000     | 100apple |
| 2019-2-1  | Ovlivia | 500      | 50apple  |
| 2019-3-1  | Emma    | 500      | 50apple  |
| 2019-4-1  | Mia     | 500      | 45apple  |
| 2019-5-1  | Ella    | 500      | 40apple  |
| 2019-6-1  | LiLy    | 1000     | 70apple  |
| 2019-7-1  | Anna    | 1000     | 60apple  |
| 2019-8-1  | Leah    | 1000     | 50apple  |
| 2019-9-1  | zoe     | 1000     | 40apple  |
| 2019-10-1 | Jack    | 1000     | 30apple  |
| 2019-11-1 | John    | 1000     | 20apple  |
| 2019-12-1 | Luke    | 1000     | 10apple  |
| 剩余利息  |         |          | 635apple |



## 搜索

```bash
hashgardcli despositbox sreach [name]
```

##### name

根据存款盒子进行查询 

>发行信息list
>
>tx
>
>height
>
>date
>
>name
>
>Issuer-address
>
>issuerId
>
>start-time
>
>end-time
>
>reach-time
>
>deposit-min
>
>deposit-max
>
>box-min-total
>
>box-max-total
>
>Interest-issueID
>
>Interest-total



## 查询

```bash
hashgardcli despositbox query[despositboxId][list][issue_adress]
```

##### 

#### list

查询所有的存款盒子

**查询结果同name结构**



#### list issueId

查询接受存款种类的ID进行查询

**查询结果同name结构**



#### Issuer-address

按用发行存款盒子的地址进行查询。

**查询结果同name结构**



#### despositBoxID

按存款盒子唯一编码进行查询。



>发行信息
>
>tx
>
>height
>
>date
>
>name
>
>Issuer-address
>
>issuerId
>
>start-time
>
>end-time
>
>reach-time
>
>deposit-min
>
>deposit-max
>
>box-min-total
>
>box-max-total
>
>Interest-issueID
>
>Interest-total
>
>存款信息list
>
>tx
>
>hight
>
>time
>
>date
>
>address
>
>deposit
>
>issueid
>
>retrieve

#### despositBoxID address

按照存款盒子唯一编码和存款地址联合查询

>存款信息
>
>tx
>
>hight
>
>time
>
>date
>
>address
>
>deposit
>
>issueid
>
>Interest-amount
>
>Interest-issueid
>
>retrieve



## 赎回本金和利息

#### retrieve

用户在DepositBox到达存款结束时间后，用户可以取回自己存款和利息。进行赎回的需要用户付出交易手续费给矿工进行赎回操作。 用户如果进行多笔存款，只需要进行一次赎回操作。

```bash
hashgardcli depositbox retrieve [issueiD][amount][Interest-issueid] [Interest-amount]--from hashgard -o json
```



#### retrieve-interest

存款盒子发行者，在存款活动结束后可以进行剩余利息的取回动作。

```bash
hashgardcli depositbox retrieve-interest [Interest-amount] --from hashgard -o json
```



## 交易存款凭证

```bash
hashgardcli deposit send to_address [amount] [depositBoxID] -from= -o json
```

存款用户将自己手中的存款凭据整体或者部分进行转移给其他用户。该交易类型受到该发行设定中split-transfer-off开关控制。

