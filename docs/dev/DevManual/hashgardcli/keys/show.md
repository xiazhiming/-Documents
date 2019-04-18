# hashgardcli keys show

## 描述

查询本地密钥的详细信息

## 使用方式

```
hashgardcli keys show [name] [flags]
```

## 标志

| 速记,名称      | 类型      | 是否必须     | 默认值             | 描述                                                           |
| -------------------- | ----------------- | -------------------------------------------------------------- | -------- | -------- |
| -a, --address | string | 否 | "" | 仅输出地址                                                      |
| --bech               | string         | 否              | acc               | [string] 密钥的Bech32前缀编码 (acc|
| --multisig-threshold | int              | 否                | 1                 | [uint] K out of N required signatures                          |
| --pubkey             | bool | 否 | false  | 仅输出公钥                                                      |

## 例子

### 查询指定密钥

```shell
hashgardcli keys show MyKey
```

执行命令后，你会得到本地客户端存储的指定密钥详情。

```txt
NAME:	TYPE:	ADDRESS:						            PUBKEY:
MyKey	local	gardkkm4w5pvmcw0e3vjcxqtfxwqpm3k0zakl7lxn5	gardaddwnpepq0gsl90v9dgac3r9hzgz53ul5ml5ynq89ax9x8qs5jgv5z5vyssskww57lw
```