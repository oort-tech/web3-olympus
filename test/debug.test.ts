import Olympus from '../lib';

const provider = 'https://dev-rpc.oortech.com';

const olympusRequest = new Olympus(provider);

describe('web3-olympus debug test', function () {
  describe('#debug', function () {
    it('Should return storage range result.', async () => {
      const result = await olympusRequest.debugStorageRangeAt({
        hash: '0xe40f981407bc90de41b8b37167cefe148ae057794aad6dcd3410ec879fed2545',
        account: '0x7A045fB4388C9282D0ef73C97CE92ebcaAFeC550',
        begin: '0x0000000000000000000000000000000000000000',
        maxResults: '100',
      });
      expect(result.code).toBe(0);
    });
  });
});
