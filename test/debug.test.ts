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
        hash: "0x46b037fe3043b4b27f05fec9db42eec8093673a788408264ea7a8e27fd38fb37",
        account: "0x7A045fB4388C9282D0ef73C97CE92ebcaAFeC550",
        begin: "0x0000000000000000000000000000000000000000",
        maxResults: 100
      });
      expect(result.code).toBe(0);
    });
  });
});
