const { deployments } = require("hardhat");

module.exports = async () => {
  const yfUSDTContract = await deployments.get("YearnFarmerUSDTv2");
  const dvmUSDTContract = await deployments.get("DAOVaultMediumUSDT");

  console.log("Summary:");
  console.log("Yearn-Farmer USDT v2 address: ", yfUSDTContract.address);
  console.log("DAO Vault Medium USDT address: ", dvmUSDTContract.address);
};
module.exports.tags = ["ropsten"];
module.exports.dependencies = [
  "ropsten_USDT_deploy",
  "ropsten_USDT_verify",
];
