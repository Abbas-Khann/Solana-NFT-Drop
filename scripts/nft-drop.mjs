import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
import { config } from "dotenv";
import { readFileSync } from "node:fs";

config();
// fetching the key from the environment variable
const walletPrivateKey = process.env.PRIVATE_KEY;
// Initializing the SDK and passing in the signer
const sdk = ThirdwebSDK.fromPrivateKey("devnet", walletPrivateKey);

const contractMetadata = {
  name: "My NFT Drop",
  symbol: "MND",
  description: "This is my NFT Drop",
  price: 0,
  sellerFeeBasisPoints: 0,
  itemsAvailable: 5,
};

// Here we will get the address of the deployed contract by passing
// the contractMetadata in the createNftDrop hook that the sdk provides
const address = await sdk.deployer.createNftDrop(contractMetadata);
// Logging the address to the terminal console
console.log("Contract Address: ", address);

/// Add the metadata of your NFTs
const metadata = [
  {
    name: "NFT #1",
    description: "My first NFT!",
    image: readFileSync("files/0.jpg"),
    properties: [
      {
        name: "kitten",
        value: "very cute!",
      },
    ],
  },
  {
    name: "NFT #1",
    description: "My second NFT!",
    image: readFileSync("files/1.jpg"),
    properties: [
      {
        name: "grumpy cat",
        value: "grumpy!",
      },
    ],
  },
  {
    name: "NFT #1",
    description: "My third NFT!",
    image: readFileSync("files/2.jpg"),
    properties: [
      {
        name: "Ninja Cat",
        value: "warrior!",
      },
    ],
  },
];

const program = await sdk.getNFTDrop(address);

//   And lazy mint NFTs using the above metadata
const tx = await program.lazyMint(metadata);
// logging the transaction hash to the console
console.log(tx);
