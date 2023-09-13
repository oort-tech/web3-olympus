import Olympus from '../lib';

const provider = 'https://dev-rpc.oortech.com';

const olympusRequest = new Olympus(provider);

describe('web3-olympus block test', function () {
  describe('#block', function () {
    it('Should return block info.', async () => {
      const result = await olympusRequest.block('0x96b78c5487fa2c6751a27e1fca097e6ba60d5f17854ced0f36ba17f4dd4eea8b');
      expect(result.result.hash).toBe("0x96b78c5487fa2c6751a27e1fca097e6ba60d5f17854ced0f36ba17f4dd4eea8b");
    });

    it('Should return block state.', async () => {
      const result = await olympusRequest.blockState('0x96b78c5487fa2c6751a27e1fca097e6ba60d5f17854ced0f36ba17f4dd4eea8b');
      expect(result.result.is_stable).toBe(1);
    });

    it('Should return block states.', async () => {
      const blockHash = '0x96b78c5487fa2c6751a27e1fca097e6ba60d5f17854ced0f36ba17f4dd4eea8b'
      const result = await olympusRequest.blockStates([blockHash]);
      expect(result.result[0][blockHash].is_stable).toBe(1);
    });

    it('Should return block traces.', async () => {
      const result = await olympusRequest.blockTraces('0x96b78c5487fa2c6751a27e1fca097e6ba60d5f17854ced0f36ba17f4dd4eea8b');
      expect(result.result).toBeInstanceOf(Object);
    });

    it('Should return block summary.', async () => {
      const result = await olympusRequest.blockSummary('0x96b78c5487fa2c6751a27e1fca097e6ba60d5f17854ced0f36ba17f4dd4eea8b');
      expect(result.result).toBeInstanceOf(Object);
    });

    it('Should return stable blocks.', async () => {
      const result = await olympusRequest.stableBlocks(0, 100);
      expect(result.result.blocks).toBeInstanceOf(Array);
    });
  });
});
