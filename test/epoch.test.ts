import Olympus from '../lib';

const provider = 'https://dev-rpc.oortech.com';

const olympusRequest = new Olympus(provider);

describe('web3-olympus epoch test', function () {
  describe('#epoch', function () {
    let epochApprovesResult;
    it('Should return epoch approves.', async () => {
      epochApprovesResult = await olympusRequest.epochApproves(0);
      expect(epochApprovesResult.result).toBeInstanceOf(Object);
    });

    it('Should return approve receipt.', async () => {
      const hash = epochApprovesResult.result[0].hash;
      const result = await olympusRequest.approveReceipt(hash);
      expect(result.result.status).toBe("0x1");
    });

    it('Should return epoch work transaction.', async () => {
      const epochWorkTransactionResult = await olympusRequest.epochWorkTransaction(0);
      expect(epochWorkTransactionResult.result).toBe("0x96350267ae9b38fd95c655ec3c60af6a3b0167f34d5a1783d9a2fe25f81cb190");
    });
  });
});
