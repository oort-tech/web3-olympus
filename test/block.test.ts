import Olympus from '../lib';

const provider = 'https://dev-rpc.oortech.com';

const olympusRequest = new Olympus(provider);

describe('web3-olympus block test', function () {
  describe('#block', function () {
    it('Should return block info.', async () => {
      const result = await olympusRequest.block('0xe8e744dcc3f0ab085ba1f67cf00e46fb7d6798f141c404754d4f9bbe44f2e2b3');
      expect(result.code).toBe(0);
    });

    it('Should return block state.', async () => {
      const result = await olympusRequest.blockState('0xe8e744dcc3f0ab085ba1f67cf00e46fb7d6798f141c404754d4f9bbe44f2e2b3');
      expect(result.code).toBe(0);
    });

    it('Should return block states.', async () => {
      const result = await olympusRequest.blockStates(['0xe8e744dcc3f0ab085ba1f67cf00e46fb7d6798f141c404754d4f9bbe44f2e2b3']);
      expect(result.code).toBe(0);
    });

    it('Should return block traces.', async () => {
      const result = await olympusRequest.blockTraces('0xe40f981407bc90de41b8b37167cefe148ae057794aad6dcd3410ec879fed2545');
      expect(result.code).toBe(0);
    });

    it('Should return block summary.', async () => {
      const result = await olympusRequest.blockSummary('0xe8e744dcc3f0ab085ba1f67cf00e46fb7d6798f141c404754d4f9bbe44f2e2b3');
      expect(result.code).toBe(0);
    });

    it('Should return stable blocks.', async () => {
      const result = await olympusRequest.stableBlocks(10, 12345);
      expect(result.code).toBe(0);
    });
  });
});
