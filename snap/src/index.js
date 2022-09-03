module.exports.onRpcRequest = async ({ origin, request }) => {
  let uuid;
  switch (request.method) {
    case 'save_kyc_data':
      ({ uuid } = request);
      await wallet.request({
        method: 'snap_manageState',
        params: ['update', { uuid }],
      });
      return 'OK';
    case 'is_kyc_data_saved':
      const readState = await wallet.request({
        method: 'snap_manageState',
        params: ['get'],
      });
      if (
        readState === null ||
        (typeof readState === 'object' && readState.uuid === undefined)
      ) {
        return 'false';
      }
      return 'true';
    case 'register_wallet':
      const uuidData = await wallet.request({
        method: 'snap_manageState',
        params: ['get'],
      });
      if (
        uuidData === null ||
        (typeof uuidData === 'object' && uuidData.uuid === undefined)
      ) {
        return 'KYC_DATA_NOT_SAVED';
      }
      // Get wallet
      const walletAddress =  await wallet.request({
        method: 'eth_requestAccounts'
      });

      // Verify address
      await fetch(`http://localhost:3000/verify-wallets?uuid=${uuidData.uuid}&wallet=${walletAddress}`, {
        method: 'POST',
        mode: 'no-cors'
      });
      return "OK";
    default:
      throw new Error('Method not found.1');
  }
};
