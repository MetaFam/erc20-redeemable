// Usage example:
// npm run disburse -- /home/greg/erc20-redeemable/merkle/test/10_totals.json 12055310

const Redeem = artifacts.require("./MerkleRedeem.sol");
const TToken = artifacts.require("./TToken.sol");
const { MerkleTree } = require("../lib/merkleTree");
const { utils } = web3;
const { loadTree } = require("./loadTree");
const fs = require("fs");

module.exports = async function(callback) {
  const admin = "0x53161705022Ec05E52bd1B255D86251D2b920CE3";
  console.log("DOne 01");

  const token = await TToken.deployed();
  console.log("DOne 0");

  try {
    await token.mint(admin, utils.toWei("5000"));

    const redeem = await Redeem.deployed();
    console.log("DOne 1");

    let weekNum = 6; // adjust accordingly

    await redeem.seedAllocations(
      weekNum,
      "0xbcf3daaa5f943a7023bca1c9569f49b560d691ac80c98bc75e0dfe9ec02ed89e",
      utils.toWei("3459.6662591220015")
    );
    console.log("DOne 2");
  } catch (e) {
    console.log(e);
  }
};
