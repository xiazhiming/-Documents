##  Dividend分红

### 简述

为了满足金融企业为了维护老用户，或者激励企业用户的行为。比较传统的金融更加公开透明公正。

#### 业务模型

1. 单次分红
2. 持续分红
3. 指定时间

#### 分红方式

1. 持有量
2. 平均
3. 指定地址



## 分红阶段

### 创建分红盒子

- 创建分红盒子注入分红通证
- 创建分红信息
- 创建或者修改分红描述

### 分红期

- 按照设定进行分红



### 创建分红盒子并注入分红奖金

```bash
hashgardcli dividendbox create [name][issueID][amount]  --from 
```

#### name

盒子的名称，例如"gardfound01"。支持格式4～24字符之间。可重复、必填、不可修改。

#### issueID

作为分红依据的通证

#### amount

分红的通证及数量



### 设定分红方式

```bash
hashgardcli dividendbox set [dividendboxID] [dividend-file] --from
```



## 分红模式

按照不同的保存为json文件。方式进行上传json文件，文件最大不能超过10240字节。

###  single

单次分红

- time 时间 必填
- holdings 持有量 选填
- equal 均分 选填
- address 限定地址 选填 

```json
{
   "tpye":"single", //分红类型
   "time":"1557127578",//分红时间
   "address":[
    "gard16dagkg8h3nvjj9qk2rmzpl5xkf8p28yjnl52kh",
    "gard16dagkg8h3nvjj9qk2rmzpl5xkf8p28yjnl52kh",
    "gard16dagkg8h3nvjj9qk2rmzpl5xkf8p28yjnl52kh",
    "gard16dagkg8h3nvjj9qk2rmzpl5xkf8p28yjnl52kh",
    "gard16dagkg8h3nvjj9qk2rmzpl5xkf8p28yjnl52kh",
    "gard16dagkg8h3nvjj9qk2rmzpl5xkf8p28yjnl52kh",
    "gard16dagkg8h3nvjj9qk2rmzpl5xkf8p28yjnl52kh",
    "gard16dagkg8h3nvjj9qk2rmzpl5xkf8p28yjnl52kh",
    "gard16dagkg8h3nvjj9qk2rmzpl5xkf8p28yjnl52kh",
    "gard16dagkg8h3nvjj9qk2rmzpl5xkf8p28yjnl52kh",
   ],//限定分红地址
   "holdings":"0",//持有量大于量
}
```



### continuous

连续分红

- Start-time 开始时间 必填
- End-time 结束时间 必填
- address 限定地址 选填
- holdings 持有量 选填
- equal 均分 选填

```json
{
   "tpye":"continuous", //分红类型
   "start-time":"1557127578",//分红开始时间
   "end-time":"1552127578",//分红结束
   "address":"",//限定地址
   "holdings":"0",//持有量大于量
}
```



### Specific-time

指定时间分红

- time 多次分红时间 必填
- holdings 持有量 选填
- equal 均分 选填
- address 限定地址 选填

```json
{
   "tpye":"Specific-time", //分红类型
   "time":["1557127578","1557127578","1557127578","1557127578"],//多次分红的时间
   "address":[
    "gard16dagkg8h3nvjj9qk2rmzpl5xkf8p28yjnl52kh",
    "gard16dagkg8h3nvjj9qk2rmzpl5xkf8p28yjnl52kh"
   ],//限定地址
   "holdings":"0",//持有量大于量
}
```



### 3.添加描述文件

```bash
hashgardcli dividendbox description [description-file] --from
```



#### description 

发行存款盒子支持描述文件，格式支持json文件，大小不能超过1024字节。可选字段

- org 组织机构或个人名称 。
- Logo  通证项目图标或项目图标，仅支持网址链接。
- website  发行方官方的网站地址。
- intro  对于该项目的简单描述。

#### 模版

```json
{
  "org":"Hashgard主网上线一周年",
  "website":"https://www.hashgard.com",
  "logo":"https://cdn.hashgard.com/static/logo.2d949f3d.png",
   "intro":"为所有持有gard的用户每人分红500apple" 
}
```

> Message
>
> - error：file size cannot exceed 1024 byte.
> - 报错：file文件大小不能大于1024byte。
> - error：the file must be json。
> - 报错：文件格式为json。



## 赎回

#### redeem

```bash
hashgardcli dividendbox redeem [dividendboxID][amount] --from 
```

用户可以在存款吸纳期对于已经存入的存款自由的进行取回。



## 分红盒子查询总数据



> **发行信息总览**
>
> name 分红盒子名称
>
> description 盒子描述
>
> - logo
> - org  组织机构或个人
> - intro  介绍
> - Website 网站地址
>
> Issuer-address 发行者地址
>
> issuerId 存款通证类型
>
> start-time 存款吸纳开始时间
>
> Established 存款项目达成时间
>
> maturity本金与利息交割时间
>
> price 每份的价格
>
> Bottom line 存款达成底线
>
> ceiling 存款上限
>
> Interest 利息
>
> - address  注入利息的地址
> - amount 利息的数量
> - issueID 利息种类
>
> Disable 功能开关
>
> - transfer交易转移状态
>   - ture/false



> 存款信息
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
> amount  用户存款数量(存款吸纳期)
>
> - Issue
>
> amount 用户持有share的份数（存期）
>
> - depositboxID
>
> Redeemed/Unredeemed 用户存款本金和利息赎回状态



> transaction 交易
>
> - call-transaction 认购交易
> - from_address
> - amount
> - time
>
> 
>
> - redemption-transaction赎回交易
> - to_address
> - amount
> - time
>
> 
>
> - deposit-transaction 盒子交易
> - to_address
> - from_address
> - amount
> - time
>
> 
>
> - system-transaction  系统交易
> - to_address
> - amount
> - time

