module.exports.onRpcRequest = async ({ origin, request }) => {
  let first_name, last_name;
  switch (request.method) {
    case 'save_kyc_data':
      ({ first_name, last_name } = request);
      const state = {
        first : first_name, 
        last : last_name 
      };
      await wallet.request({
        method: 'snap_manageState',
        params: ['update', { kyc: state }],
      });
      return 'OK';
    case 'is_kyc_data_saved':
      const readState = await wallet.request({
        method: 'snap_manageState',
        params: ['get'],
      });
      if (
        readState === null ||
        (typeof readState === 'object' && readState.kyc === undefined)
      ) {
        return 'false';
      }
      return 'true';
    case 'register_wallet':
      const kycData = await wallet.request({
        method: 'snap_manageState',
        params: ['get'],
      });
      if (
        kycData === null ||
        (typeof kycData === 'object' && kycData.kyc === undefined)
      ) {
        return 'KYC_DATA_NOT_SAVED';
      }
      // Get wallet
      const walletAddress =  await wallet.request({
        method: 'eth_requestAccounts'
      });

      // TODO: KYC request
      return fetch('https://google.com');
      
      // return walletAddress;
      // return "OK";
    default:
      throw new Error('Method not found.1');
  }
};
