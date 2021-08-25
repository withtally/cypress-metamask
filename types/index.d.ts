/// <reference lib="dom"/>
/// <reference types="cypress" />

export { };
/**
 * Augmentation of Cypress namespace to make custom commands available and provide intellisense highlighting
 * and hints when using those custom methods.
 */
declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      /** Augmentation for custom methods included in cypress-metamask package */

      /**
       * setup metamask for access in tests specs with the given parameters.
       * @param secretWords the secret words seed phrase
       * @param network the network that metamask will use for connection
       * @param password the password needed to unlock wallet in metamask
       */
      setupMetamask(secretWords?: string, network?: string, password?: string): Chainable<Subject>;

      /**
       * command to change current network to connect with metamask.
       * @param network the new network to use for metamask connection.
       */
      changeMetamaskNetwork(network: string): Chainable<Subject>;

      /**
       * Get the most popular desktop resolutions
       * @example
       * cy.getDesktopSizes()
       */
      getDesktopSizes(): Chainable<Subject>;
      /**
       * Get the most popular tablet resolutions
       * @example
       * cy.getTabletSizes()
       */
      getTabletSizes(): Chainable<Subject>;
      /**
       * Get the most popular mobile resolutions
       * @example
       * cy.getMobileSizes()
       */
      getMobileSizes(): Chainable<Subject>;
      /**
       * Connect puppeteer with Cypress instance
       * @example
       * cy.initPuppeteer()
       */
      initPuppeteer(): Chainable<Subject>;
      /**
       * Assign currently open tabs with puppeteer
       * @example
       * cy.assignWindows()
       */
      assignWindows(): Chainable<Subject>;
      /**
       * Get current network
       * @example
       * cy.getNetwork()
       */
      getNetwork(): Chainable<Subject>;
      /**
       * Confirms metamask welcome page
       * @example
       * cy.confirmMetamaskWelcomePage()
       */
      confirmMetamaskWelcomePage(): Chainable<Subject>;
      /**
       * Import metamask wallet using secret words
       * @example
       * cy.importMetamaskWallet('secret, words, ...', 'password for metamask')
       */
      importMetamaskWallet(secretWords: string, password: string): Chainable<Subject>;
      /**
       * Add network in metamask
       * @example
       * cy.addMetamaskNetwork({networkName: 'name', rpcUrl: 'https://url', chainId: 1, symbol: 'ETH', blockExplorer: 'https://url', isTestnet: true})
       */
      addMetamaskNetwork(object): Chainable<Subject>;
      /**
       * Get current wallet address of metamask wallet
       * @example
       * cy.getMetamaskWalletAddress().then(address => cy.log(address))
       */
      getMetamaskWalletAddress(): Chainable<Subject>;
      /**
       * Switch to Cypress window
       * @example
       * cy.switchToCypressWindow()
       */
      switchToCypressWindow(): Chainable<Subject>;
      /**
       * Switch to metamask window
       * @example
       * cy.switchToMetamaskWindow()
       */
      switchToMetamaskWindow(): Chainable<Subject>;
      /**
       * Accept metamask access request
       * @example
       * cy.acceptMetamaskAccess()
       */
      acceptMetamaskAccess(): Chainable<Subject>;
      /**
       * Checks if metamask notification page is open
       * @example
       * cy.acceptMetamaskAccess()
       */
      isMetamaskNotificationPageOpened(): Chainable<boolean>;
      /**
       * Confirm metamask atransaction
       * @example
       * cy.confirmMetamaskTransaction()
       */
      confirmMetamaskTransaction(): Chainable<Subject>;
      /**
       * Reject metamask transaction
       * @example
       * cy.rejectMetamaskTransaction()
       */
      rejectMetamaskTransaction(): Chainable<Subject>;
      /**
       * Switch to metamask notification window
       * @example
       * cy.switchToMetamaskNotification()
       */
      switchToMetamaskNotification(): Chainable<Subject>;
      /**
       * Unlock metamask
       * @example
       * cy.unlockMetamask('password')
       */
      unlockMetamask(password: string): Chainable<Subject>;
      /**
       * Fetches previous metamask wallet address
       * @example
       * cy.fetchMetamaskWalletAddress().then(address => cy.log(address))
       */
      fetchMetamaskWalletAddress(): Chainable<Subject>;
      /**
       * Execute settle on Exchanger contract
       * @example
       * cy.snxExchangerSettle('sETH', '0x...', '123123123123123123...')
       */
      snxExchangerSettle(
        asset: string,
        walletAddress: string,
        privateKey: string,
      ): Chainable<Subject>;
      /**
       * Check waiting period on Exchanger contract
       * @example
       * cy.snxCheckWaitingPeriod('sETH', '0x...')
       */
      snxCheckWaitingPeriod(asset: string, walletAddress: string): Chainable<Subject>;
      /**
       * Get transaction status from Etherscan API
       * @example
       * cy.etherscanGetTransactionStatus('0xf..')
       */
      etherscanGetTransactionStatus(txid: string): Chainable<Subject>;
      /**
       * Wait until transaction is success using Etherscan API
       * @example
       * cy.etherscanWaitForTxSuccess('0xf..')
       */
      etherscanWaitForTxSuccess(txid: string): Chainable<Subject>;
      /**
       * Accept metamask signature transaction request
       * @example
       * cy.acceptMetamaskSignatureRequest()
       */
      acceptMetamaskSignatureRequest(): Chainable<boolean>;
      /**
       * Reject metamask signature transaction request
       * @example
       * cy.rejectMetamaskSignatureRequest()
       */
      rejectMetamaskSignatureRequest(): Chainable<boolean>;
    }
  }
}