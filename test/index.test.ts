import Olympus from '../lib';

const provider = 'https://beta-rpc.mainnet.computecoin.com';

const olympusRequest = new Olympus(provider);

describe('web3-olympus block chain test', function () {
  describe('#block chain', function () {
    it('Should return block chain status.', async () => {
      const result = await olympusRequest.status();
      expect(result.code).toBe(0);
    });

    it('Should return block chain version.', async () => {
      const result = await olympusRequest.version();
      expect(result.code).toBe(0);
    });

    it('Should return block chain peers.', async () => {
      const result = await olympusRequest.peers();
      expect(result.code).toBe(0);
    });

    it('Should return block chain nodes.', async () => {
      const result = await olympusRequest.nodes();
      expect(result.code).toBe(0);
    });

    it('Should return block chain witness list.', async () => {
      const result = await olympusRequest.witnessList();
      expect(result.code).toBe(0);
    });
  });
});
