import Olympus from "../lib";

const provider = "https://beta-rpc.mainnet.computecoin.com";

const olympusRequest = new Olympus(provider);

describe("web3-olympus block test", function() {
  describe("#block", function() {
    it("Should return block info.", async () => {
      const result = await olympusRequest.block(
        "0x8134d032b0a9cdbe1d63c33d5236279f0b13f04164b7d04fb03d9a0e63f3ba77"
      );
      expect(result.code).toBe(0);
    });

    it("Should return block state.", async () => {
      const result = await olympusRequest.blockState(
        "0xdf986339ff2f1ccb6bf59e7efd46bfd84fb0a518be14dd897f3e6ed54aa15e8f"
      );
      expect(result.code).toBe(0);
    });

    it("Should return block states.", async () => {
      const result = await olympusRequest.blockStates([
        "0x8134d032b0a9cdbe1d63c33d5236279f0b13f04164b7d04fb03d9a0e63f3ba77"
      ]);
      expect(result.code).toBe(0);
    });

    it("Should return block traces.", async () => {
      const result = await olympusRequest.blockTraces(
        "0x8134d032b0a9cdbe1d63c33d5236279f0b13f04164b7d04fb03d9a0e63f3ba77"
      );
      expect(result.code).toBe(0);
    });

    it("Should return block summary.", async () => {
      const result = await olympusRequest.blockSummary(
        "0x8134d032b0a9cdbe1d63c33d5236279f0b13f04164b7d04fb03d9a0e63f3ba77"
      );
      expect(result.code).toBe(0);
    });

    it("Should return stable blocks.", async () => {
      const result = await olympusRequest.stableBlocks(10, 12345);
      expect(result.code).toBe(0);
    });
  });
});
