## HRC13 FutureBox 远期支付协议(草稿)

### 简述

在现实社会中约定的远期金融交易，具有公平公正，一旦约定，不受其他因素影响。

### 摘要

远期支付是永续性盒子，发行者可以持续为盒子进行充值，设定远期支付行为，也可以取回自己放入的没有设定远期支付行为的余额。也可以进行支付盒子锁定。

### 示例

Alice 和Bobo进行金融交易，Bobo给Alice给出一部分现实中的资产，Alice承诺在未来的一年内给予Bobo证券资产1000god，每个季度末尾付出250god。那么Alice创建了一个futurebox，并起名为Alice与Bobo资产互换一期，对futurebox存入1000个god 并设定当年每3月28、6月31日、9月30日、12月30各付出250god给Bobo。远期支付协议的优势，事先存入，一旦约定，将按预定的条件进行执行。不担心任何中途的其他人为意愿或者经济形势的变化而发生改变。充分的使用了区块链技术中不可逆的价值属性。



### 远期支付盒子创建并充值

```bash
hashgardcli futurebox create [name][amount][transfer-on]--form -o json
```

为远期支付盒子创建名字

#### create

创建

#### name

存款盒子的名称，例如"gardfound01"。支持格式4～24字符之间。可重复、必填、不可修改。

> error：name  is between 4 and 24 in length.



#### FutureBoxID

远期支付盒子唯一编号



#### issueID

支付盒子存放通证的类型，可支持多种通证存入。

> error：Issue does not exist.



#### amount

需要和issueID一起使用。

对远期支付盒子只能发行者进行充值，不允许非远期支付盒子用户进行充值。



#### transfer-on

设定收款账户是否可以将自己账户中的该凭证进行交易。



### 设定远期支付行为

```bash
hashgardcli  futurebox set [FutureBoxID][time][to_address][isuueID][amount] --from -o json
```

为设定好的远期支付盒子设定支付行为。



#### pay-file

发行存款盒子支持描述文件，格式支持json文件，大小不能超过102400字节。



#### time

需要支付的时间。



#### to_address

收款地址。



#### issueID

需要支付的通证类型。



#### amount

需要支付的通证的数量，需要和issueid连用，不能超过支付盒子的该通证的余额。

远期支付行为一旦设定，无法被取消。支付行为会按照设定的状态进行变更。



#### 模版

```json
{
  "time":"1556606127", //批次时间
  "tags":[
  {
   "to_address":"gardvaloper1k67xljpc0lr678wyl6vld9hy3t2lc6ph2fecaf",//转账地址
    "amount":"10000", //转账数量
    "isseID":"coin9324829424"//转账通证类型
  },
    {
    "to_address":"gardvaloper1k67xljpc0lr678wyl6vld9hy3t2lc6ph2fecaf",
    "amount":"10000",
    "isseID":"coin9324829424"
  },
 {
    "to_address":"gardvaloper1k67xljpc0lr678wyl6vld9hy3t2lc6ph2fecaf",
    "amount":"10000",
    "isseID":"coin9324829424"
  }，
  ]
},
{
  "time":"1556646127",
  "tags":[
  {
   "to_address":"gardvaloper1k67xljpc0lr678wyl6vld9hy3t2lc6ph2fecaf",
    "amount":"10000",
    "isseID":"coin9324829424"
  },
    {
   "to_address":"gardvaloper1k67xljpc0lr678wyl6vld9hy3t2lc6ph2fecaf",
    "amount":"10000",
    "isseID":"coin9324829424"
  },
 {
    "to_address":"gardvaloper1k67xljpc0lr678wyl6vld9hy3t2lc6ph2fecaf",
    "amount":"10000",
    "isseID":"coin9324829424"
  }，
  ]
},

```

> Message
>
> - error：$name token less the 
> - error：$to_address does not exist.





### 设定锁定行为

```bash
hashgardcli futurebox lock [FutureBoxID][time] --from 
```

为远期支付盒子进行锁定操作，锁定行为仅限于远期支付盒子中的余额。



#### lock

锁定行为与time连用，锁定时间内支付盒子内余额不能进行任何其他操作。可以在锁定期过后重新设置远期支付行为。



#### time

锁定结束的时间。



####  balance

- issue
- amount
- locked/unlocked

远期支付盒子的余额。



 ## 取回

#### retrieve

```bash
hashgardcli futurebox retrieve[futureboxID][aomount] --from 
```

- 盒子发行者对未分配支付行为的剩余通证余额进行取回动作。



## 支付盒子查询总数据



> 支付盒子信息总览
>
> name 支付盒子名称
>
> Issue-address 发行者地址
>
> time  发行时间
>
> balance 余额 
>
> - issueID   余额种类
> - amount  余额数量
> - locked/unlocked 余额锁定状态
>
> transfer/untransfer 交易转移状态



>
>
>支付信息
>
>time  时间
>
>- FutureBoxID-sequence  支付盒子ID-期数
>
>- issueID+amount  该时间需要支付的通证总数
>- paid/unpaid  支付状态



> address 支付地址
>
> - FutureBoxID-sequence  支付盒子ID-期数
> - amount 支付数量



### 搜索

```
hashgardcli futurebox sreach [name]
```

##### name

按照支付盒子的名字进行搜索



### 查询

```
hashgardcli futurebox query [issue_adrress] [futuerboxID][to_address]
```

进行精确的匹配查询。



#### issue_adrress

按照支付盒子发行者地址进行查询，



#### futuerboxID

按照支付盒子的唯一编码进行查询，



#### FutureBoxID-sequence

按照支付盒子唯一编码+期数查询，



#### futuerboxID to_address

按照指定支付盒子编码查询支付地址信息。


