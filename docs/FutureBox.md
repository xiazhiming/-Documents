## HRC13 FutureBox 远期支付协议(草稿)

### 简述

在现实社会中约定的远期金融交易，具有公平公正，一旦约定，不受其他因素影响。

### 摘要

远期支付是永续性盒子，发行者可以持续为盒子进行充值，设定远期支付行为，也可以取回自己放入的没有设定远期支付行为的余额。

### 示例

Alice 和Bobo进行金融交易，Bobo给Alice给出一部分现实中的资产，Alice承诺在未来的一年内给予Bobo证券资产1000god，每个季度末尾付出250god。那么Alice创建了一个futurebox，并起名为Alice与Bobo资产互换一期，对futurebox存入1000个god 并设定当年每3月28、6月31日、9月30日、12月30各付出250god给Bobo。远期支付协议的优势，事先存入，一旦约定，将按预定的条件进行执行。不担心任何中途的其他人为意愿或者经济形势的变化而发生改变。充分的使用了区块链技术中不可逆的价值属性。



### 远期支付盒子创建

```bash
hashgardcli create futurebox [name] --form -o json
```

为远期支付盒子创建名字

### 对远期支付盒子进行进行充值

```
hashgardcli send [FutureBoxID] [issueID][amount] --from -o json
```

### 设定远期支付行为

```bash
hashgardcli set [FutureBoxID][time][to_address][isuueID][amount] --from -o json
```

为设定好的远期支付盒子设定支付行为

### 设定锁定行为

```bash
hashgardcli lock [FutureBoxID][time] --from -o json
```

为远期支付盒子进行锁定操作，锁定行为仅限于远期支付盒子中的余额。

### 基本释义

#### FutureBoxID

远期支付盒子唯一编号

#### name

存款盒子的名称，例如"gardfound01"。支持格式4～24字符之间。可重复、必填、不可修改。

> error：name  is between 4 and 24 in length.

#### issueID

支付盒子存放通证的类型，可支持多种通证存入。

> error：Issue does not exist.

#### amount

需要和issueID一起使用。

对远期支付盒子只能发行者进行充值，不允许非远期支付盒子用户进行充值。

#### to_address

收款地址。

#### time

需要支付的时间。

#### issueID

需要支付的通证类型。

#### amount

需要支付的通证的数量，需要和issueid连用，不能超过支付盒子的该通证的余额。

远期支付行为一旦设定，无法被取消。支付行为会按照设定的状态进行变更。



#### lock

锁定行为与time连用，锁定时间内支付盒子内余额不能进行任何其他操作。可以在锁定期过后重新设置远期支付行为。



####  balance

远期支付盒子的余额。



 ## 取回

#### retrieve

- 盒子发行者对未分配支付行为的剩余通证余额进行取回动作。

- 在发行方设定的支付时间后，收款账户可以取回支付盒子发行方支付的通证。



 ## 搜索

```
hashgardcli futurebox sreach [name]
```



### 发行信息

##### name

按照支付盒子的名字进行搜索

> 支付盒子list
>
> tx
>
> date
>
> name
>
> Issue-address
>
> time
>
> height
>
> issueID
>
> balance 余额 
>
> - issueID
> - amount
> - lock-off
>
> 支付信息list
>
> time
>
> address
>
> issueid
>
> amount
>
> retrieve-off 



## 查询



```
hashgardcli futurebox query [issue_adrress] [futuerboxID][to_address]
```

进行精确的匹配查询。



#### issue_adrress

按照支付盒子发行者地址进行查询

**查询结果同name结构**



#### futuerboxID

按支付盒子唯一编码进行查询

> 支付盒子
>
> tx
>
> date
>
> name
>
> Issue-address
>
> time
>
> height
>
> issueID
>
> balance 余额 
>
> - issueID
> - amount
> - lock-off
>
> 支付信息list
>
> time
>
> address
>
> issueid
>
> amount
>
> retrieve-off 



#### futuerboxID to_address

按照指定支付盒子查询支付地址

>支付盒子
>
>tx
>
>date
>
>name
>
>Issue-address
>
>time
>
>height
>
>issueID
>
>balance 余额 
>
>- issueID
>- amount
>- lock-off
>
>支付信息
>
>time
>
>address
>
>issueid
>
>amount
>
>retrieve-off 



