# hashgardcli distribution params

## 描述

查询分配参数信息

## 用法

```
hashgardcli distribution params [flags]
```

## flags

**全局 flags、查询命令 flags** 参考：[hashgardcli](../README.md)

## 示例

查询参数信息

```
hashgardcli distribution params --trust-node
```

运行成功以后，返回的结果如下：

```
Distribution Params:
  Community Tax:          "0.020000000000000000"
  Base Proposer Reward:   "0.010000000000000000"
  Bonus Proposer Reward:  "0.040000000000000000"
  Withdraw Addr Enabled:  true
```
