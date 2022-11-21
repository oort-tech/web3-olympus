import Olympus from "../src";

const provider = "https://beta-rpc.mainnet.computecoin.com";

const olympusRequest = new Olympus(provider);

it("Should return block info.", async () => {
  const result = await olympusRequest.block(
    "0x152b24f5283322e113dfbb4a68c20658f779ff292361e6c56b4c81cef2a624af"
  );
  console.log(result);
});

it("Should return block chain status.", async () => {
  const result = await olympusRequest.status();
  console.log(result);
});

