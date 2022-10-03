import { useProgram, useClaimNFT } from "@thirdweb-dev/react/solana";

export default function Claim() {
  const program = useProgram("4GnG5Q9Y2KQajGhUfUa21qbSNrisRaebHKWWPdhrM2Fj");
  const { mutateAsync: claim, isLoading, error } = useClaimNFT(program);

  return (
    <button onClick={() => claim(1)}>
      Claim
    </button>
  )
}