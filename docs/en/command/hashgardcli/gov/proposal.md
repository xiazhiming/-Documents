# hashgardcli gov proposal

## 描述

查询单个提案的详情

## 使用方式

```
hashgardcli gov proposal [proposal-id] [flags]
```
## Global Flags

 ### 参考：[hashgardcli](../README.md)
 
## 例子

### 查询指定的提案

```shell
hashgardcli gov proposal 1 --trust-node -o=json --indent
```

查询指定提案的详情，可以得到结果如下：

```txt
{
  "type": "gov/TextProposal",
  "value": {
    "proposal_id": "1",
    "title": "notice proposal",
    "description": "a new text proposal",
    "proposal_type": "Text",
    "proposal_status": "DepositPeriod",
    "tally_result": {
      "yes": "0.0000000000",
      "abstain": "0.0000000000",
      "no": "0.0000000000",
      "no_with_veto": "0.0000000000"
    },
    "submit_time": "2018-12-20T11:40:43.123286817Z",
    "deposit_end_time": "2018-12-22T11:40:43.123286817Z",
    "total_deposit": null,
    "voting_start_time": "0001-01-01T00:00:00Z",
    "voting_end_time": "0001-01-01T00:00:00Z"
  }
}
```
