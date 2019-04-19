# Incentive Tasks of SIF-3001 Testnet

## Incentive Tasks List

| **No.** | **Name**                                                    | **Detail**                                                                                                                                                                                                                                                                      | **Proof**                                                                          | **Bonus** |
| ------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | --------- |
| 1       | Run a full node                                             | See [Testnet Guide](../../docs/README.md)                                                                                                                                                                                                                                       | The active node address, default port 26657, like `http://${your_ip}:26657/status` | 100       |
| 2       | Upgrade to Validator Node                                   | Make sure you've finished task 1, and got some GARD from faucet, see [Create Validator](../../docs/create-validator.md)                                                                                                                                                         | Address of Validator                                                               | 100       |
| 3       | Get some Gard from faucet, and delegate to a Validator Node | Get some GARD from faucet, and delegate some GARD to a Validator Node, see [Delegate](../../docs/delegate.md)                                                                                                                                                                   | tx hash                                                                            | 50        |
| 4       | Unbind                                                      | Undelegate some GARD from the Validator Node you delegated to in `task 2`, see [Unbond](../../docs/unbond.md)                                                                                                                                                                   | tx hash                                                                            | 50        |
| 5       | Redelegate                                                  | Redelegate some GARD from one Validator to another, see [Redelegate](../../docs/redelegate.md)                                                                                                                                                                                  | tx hash                                                                            | 50        |
| 6       | Submit a proposal                                           | Submit a proposal, see [Submit Proposal](../../docs/submit-proposal.md)                                                                                                                                                                                                         | proposal id                                                                        | 50        |
| 7       | Vote to a proposal                                          | Vote to the proposal you submitted in `task 6`, see [Vote](../../docs/vote.md)                                                                                                                                                                                                  | Address of Voter                                                                   | 50        |
| 8       | Send a transaction with multi-signature                     | Create a multi-signature wallet account with three different wallet accounts(like: a1, a2, a3) and transfer some GARD to it, then transfer 1 GARD to address gard1d0s06rave0a6xzvuw7nhz782vcty99hgunc724 from the multi-sign account, see [Multi-sign](../../docs/multisign.md) | tx hash                                                                            | 100       |

### How to Submit Proof

Comment in github [issue 5](https://github.com/hashgard/testnets/issues/5) to submit your proof, in the format below:

```
GitHub ID: XXXX
Task 1: Node URL
Task 2: validator address
Task 3: Tx Hash
Task 4: Tx Hash
Task 5: Tx Hash
Task 6: proposal id
Task 7: voter address
Task 8: Tx Hash
```
