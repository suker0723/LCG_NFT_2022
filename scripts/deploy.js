// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.

const path = require("path");

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
"Deploying the contracts with the account:",
await deployer.getAddress()
  );

  const NFT = await ethers.getContractFactory("NFTData");
  const [owner] = await ethers.getSigners();
    console.log(
        "Deploying the contracts with the account:",
        await owner.getAddress()
      );

  const hardhatNFT = await NFT.deploy();
  await hardhatNFT.deployed();

  console.log("NFTData address:", hardhatNFT.address);
  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(hardhatNFT);
}

function saveFrontendFiles(hardhatNFT) {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "..", "my-app", "src", "contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify({ NFT: hardhatNFT.address }, undefined, 2)
  );

  const TokenArtifact = artifacts.readArtifactSync("NFTData");

  fs.writeFileSync(
    path.join(contractsDir, "NFTData.json"),
    JSON.stringify(TokenArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
