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

- time 时间次数 必填
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



## 赎回

#### redeem

```bash
hashgardcli dividendbox redeem [dividendboxID][amount] --from 
```

用户可以在存款吸纳期对于已经存入的存款自由的进行取回。