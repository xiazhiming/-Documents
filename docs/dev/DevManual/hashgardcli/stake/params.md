# hashgardcli stake params

## 描述

查询最新的权益参数信息

## 用法

```
hashgardcli stake params [flags]
```

## flags

**全局 flags、查询命令 flags** 参考：[hashgardcli](../README.md)

## 示例

查询最新的权益参数信息

```
hashgardcli stake params --trust-node
```

运行成功以后，返回的结果如下：

```txt
Params:
  Unbonding Time:    10m0s
  Max Validators:    100
  Max Entries:       0
  Bonded Coin Denom: gard
```
