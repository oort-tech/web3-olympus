import Olympus from '../lib';
import keystore from '../file/0x1234567890123456789012345678901234567890.json';

const provider = 'https://dev-rpc.oortech.com';

const olympusRequest = new Olympus(provider);

describe('web3-olympus account test', function () {
  describe('#account', function () {
    const json = JSON.stringify(keystore);
    const account = '0x1234567890123456789012345678901234567890';
    const password = '';

    it('Should import account.', async () => { 
      const result = await olympusRequest.accountImport(json);
      expect(result.result).toBe(account);
    });

    it('Should remove account.', async () => {
      const result = await olympusRequest.accountRemove(account, password);
      expect(result.result).toBe(true);
    });
  });
});
