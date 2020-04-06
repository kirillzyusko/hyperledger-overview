/**
 * Track the trade of a commodity from one trader to another
 * @param {org.example.mynetwork.Trade} trade - the trade to be processed
 * @transaction
 */
async function tradeTransaction(trade) {
    trade.money.acquirer = trade.issuer;
    let assetRegistry = await getAssetRegistry('org.example.mynetwork.Transaction');
    await assetRegistry.update(trade.money);
}