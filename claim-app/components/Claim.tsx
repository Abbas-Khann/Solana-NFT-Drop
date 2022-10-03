import { useWallet } from "@solana/wallet-adapter-react";
import { useProgram,useClaimNFT } from "@thirdweb-dev/react/solana";

export default function Claim() {
    const wallet = useWallet();
    // Add the address of the contract you deployed earilier on
    const programAddress = "4GnG5Q9Y2KQajGhUfUa21qbSNrisRaebHKWWPdhrM2Fj";
    // Pasting the programAddress variable and the type of contract
    const program = useProgram(programAddress, "nft-drop");
    // using the useClaimNFT hook here
    const claim = useClaimNFT(program.data);
    const quantityToClaim = 1;
  
    return (
      <div>
        {wallet.connected ? (
            // Calling the claim function and passing in the quantity we are claiming
          <button onClick={() => claim.mutate(quantityToClaim)}>
            {claim.isLoading ? "Claiming..." : "Claim NFT"}
          </button>
        ) : (
        <h3>Connect your wallet</h3>
        )}
      </div>
    );
  }