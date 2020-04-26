/**
 * Check if web3 is configured properly
 * @param {Object} web3 - web3 object.
 */
exports.checkWeb3 = (web3) => {
    if(!web3 || !web3.currentProvider || web3.currentProvider == null)
        throw new Error("Web3 is not configured properly.")
}
  