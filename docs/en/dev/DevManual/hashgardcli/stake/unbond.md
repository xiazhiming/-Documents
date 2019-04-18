# hashgardcli stake unbond

## 介绍

从一个验证人解绑委托

## 用法

```
hashgardcli stake unbond [validator-addr] [amount] [flags]
```

## 参数（子命令）

| 名称           | 类型   | 是否必填 | 默认值 | 功能描述            |
| -------------- | ------ | -------- | ------ | ------------------- |
| validator-addr | string | `是`     |        | 验证人地址          |
| amount         | int    | `是`     |        | 要解绑的 stake 数量 |

## flags

| 名称   | 类型   | 是否必填 | 默认值 | 功能描述             |
| ------ | ------ | -------- | ------ | -------------------- |
| --from | string | `是`     | ""     | 委托人的账户名或地址 |

**全局 flags、发送交易命令 flags** 参考：[hashgardcli](../README.md)

## 示例

```shell
hashgardcli stake unbond \
gardvaloper1m3m4l6g5774qe5jj8cwlyasue22yh32jmhrxfx \
5000 \
--from=hashgard \
--chain-id=hashgard
```
