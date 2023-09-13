import Olympus from '../lib';

const provider = 'https://dev-rpc.oortech.com';

const olympusRequest = new Olympus(provider);

describe('web3-olympus block chain test', function () {
  describe('#block chain', function () {
    it('Should return block chain status.', async () => {
      const result = await olympusRequest.status();
      expect(result.result.epoch).toBeGreaterThanOrEqual(0);
    });

    it('Should return block chain version.', async () => {
      const result = await olympusRequest.version();
      expect(result.result.version).toBeDefined();
    });

    it('Should return block chain peers.', async () => {
      const result = await olympusRequest.peers();
      expect(result.result).toBeInstanceOf(Array);
    });

    it('Should return block chain nodes.', async () => {
      const result = await olympusRequest.nodes();
      expect(result.result).toBeInstanceOf(Array);
    });

    it('Should return block chain witness list.', async () => {
      const epoch = "0";
      const result = await olympusRequest.witnessList(epoch);
      expect(result.result).toBeInstanceOf(Array);
    });
  });
});
