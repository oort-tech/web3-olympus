import Olympus from '../lib';
import keystore from '../file/0x1144b522f45265c2dfdbaee8e324719e63a1694c.json';

const provider = 'https://dev-rpc.oortech.com';

const olympusRequest = new Olympus(provider);

describe('web3-olympus account test', function () {
  describe('#account', function () {
    const json = JSON.stringify(keystore);
    const account = '0x1144b522f45265c2dfdbaee8e324719e63a1694c';
    const password = '';

    it('Should import account.', async () => {
      const result = await olympusRequest.accountImport(json);
      expect(result.account).toBe(account);
    });

    it('Should export account.', async () => {
      const result = await olympusRequest.accountExport(account);
      expect(result.code).toBe(0);
    });

    it('Should remove account.', async () => {
      const result = await olympusRequest.accountRemove(account, password);
      expect(result.code).toBe(0);
    });
  });
});
