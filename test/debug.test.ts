import Olympus from "../lib";

const provider = "https://beta-rpc.mainnet.computecoin.com";

const olympusRequest = new Olympus(provider);

describe("web3-olympus debug test", function() {
  describe("#debug", function() {
    it("Should return trace transaction result.", async () => {
      const result = await olympusRequest.debugTraceTransaction("0xf4d257327a69602b833b414fbfe6a9d3381ed3cd3c8efdb90a6b701d778c6bba");
      expect(result.code).toBe(0);
    });
 
    it("Should return storage range result.", async () => {
      const result = await olympusRequest.debugStorageRangeAt({
        hash: "0xdf986339ff2f1ccb6bf59e7efd46bfd84fb0a518be14dd897f3e6ed54aa15e8f",
        account: "0x7A045fB4388C9282D0ef73C97CE92ebcaAFeC550",
        begin: "0x6C40A0bb49381b9f4bF699808D533536A6570B2a",
        max_results: 100
      });
      console.log(result)
      expect(result.code).toBe(0);
    });
  });
});
