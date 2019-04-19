# hashgardcli gov param

## 描述

查询治理过程的参数（投票）

## 使用方式

```
 hashgardcli gov param [param-type] [flags]
```
## Global Flags

 ### 参考：[hashgardcli](../README.md)
 

## 例子

### 通过voting查

```shell
hashgardcli gov param voting --trust-node -o=json --indent
```

会得到类似如下结果。

```txt
{
  "voting_period": "172800000000000"
}
```

### 通过deposit查

```shell
hashgardcli gov param deposit --trust-node -o=json --indent
```

会得到类似如下结果。

```txt
{
  "min_deposit": [
    {
      "denom": "gard",
      "amount": "10"
    }
  ],
  "max_deposit_period": "172800000000000"
}
```


### 通过tallying查
```
hashgardcli gov param tallying --trust-node -o=json --indent
```

会得到如以下类似信息：
```
{
  "quorum": "0.3340000000",
  "threshold": "0.5000000000",
  "veto": "0.3340000000",
  "governance_penalty": "0.0100000000"
}
```