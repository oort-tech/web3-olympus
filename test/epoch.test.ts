import Olympus from '../lib';

const provider = 'https://dev-rpc.oortech.com';

const olympusRequest = new Olympus(provider);

describe('web3-olympus epoch test', function () {
  describe('#epoch', function () {
    let epochApprovesResult;
    it('Should return epoch approves.', async () => {
      epochApprovesResult = await olympusRequest.epochApproves(0);
      expect(epochApprovesResult.code).toBe(0);
    });

    it('Should return approve receipt.', async () => {
      const hash = epochApprovesResult.result[0].hash;
      const result = await olympusRequest.approveReceipt(hash);
      expect(result.code).toBe(0);
    });

    it('Should return epoch work transaction.', async () => {
      const epochWorkTransactionResult = await olympusRequest.epochWorkTransaction(0);
      expect(epochWorkTransactionResult.code).toBe(0);
    });
  });
});
