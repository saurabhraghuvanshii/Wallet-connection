
import { useConnection, useWallet } from "@solana/wallet-adapter-react"

// the useWallet 'Hook' 'provides' the wallet variable inside the airdrop 'component'
//beacuse it wrapped the Airdrop component inside the WalletProvider
export function Airdrop() {
    // hooks in react
   const wallet = useWallet();
   const { connection } = useConnection();

   //define the function inside the component body
    async function sendAirdropToUser() {
      const amount = document.getElementById("publicKey").value
      await connection.requestAirdrop(wallet.publicKey, amount*1000000000)
      alert("airdrop sol")
    }

   return <div>
     <input id="publicKey" type="text" placeholder="Amount"></input>
     <button onClick={sendAirdropToUser}>Send Airdrop</button>
   </div>  
}