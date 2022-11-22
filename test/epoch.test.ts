import Olympus from "../lib";

const provider = "https://beta-rpc.mainnet.computecoin.com";

const olympusRequest = new Olympus(provider);

describe("web3-olympus epoch test", function() {
  describe("#epoch", function() {
    it("Should return epoch approves.", async () => {
      const result = await olympusRequest.epochApproves(10);
      expect(result.code).toBe(0);
    });

    it("Should return epoch approve receipts.", async () => {
      const result = await olympusRequest.epochApproveReceipts(10);
      expect(result.code).toBe(0);
    });

    it("Should return epoch elected approve receipts.", async () => {
      const result = await olympusRequest.epochElectedApproveReceipts(10);
      expect(result.code).toBe(0);
    });
  });
});
