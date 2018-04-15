const TransactionPool = require('./transaction-pool');
const Transaction = require('./transaction');
const Wallet = require('./index');

describe('TransactionPool', () => {
  let tp, wallet, transtion;

  beforeEach(() => {
    tp = new TransactionPool();
    wallet = new Wallet();
    transtion = Transaction.newTransaction(wallet, 'r4nd-4dr355', 30);
    tp.updateOrAddTranstion(transtion);
  });

  it('adds a transtion to the pool', () => {
    expect(tp.transactions.find(t => t.id === transtion.id)).toEqual(transtion);
  });

  it('updates a transaction in the pool', () => {
    const oldTransaction = JSON.stringify(transtion);
    const newTransaction = transtion.update(wallet, 'foo-4ddr355', 40);
    tp.updateOrAddTranstion(newTransaction);

    expect(JSON.stringify(tp.transactions.find(t => t.id === newTransaction.id)))
      .not.toEqual(oldTransaction);
  });
});
