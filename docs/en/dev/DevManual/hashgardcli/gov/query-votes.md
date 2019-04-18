# hashgardcli gov query-votes

## 描述

查询指定提案的投票情况

## 使用方式

```
hashgardcli gov query-votes [proposal-id] [flags]
```

## Global Flags

 ### 参考：[hashgardcli](../README.md)

## 例子

### Query votes

```shell
hashgardcli gov query-votes 1 --trust-node -o=json --indent
```

通过指定的提案查询该提案所有投票者的投票详情。

```txt
[
  {
    "voter": "gard1m3m4l6g5774qe5jj8cwlyasue22yh32jf4wwet",
    "proposal_id": "1",
    "option": "Yes"
  }
]
```
