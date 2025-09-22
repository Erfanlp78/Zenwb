const contractAddress = "YOUR_CONTRACT_ADDRESS";
const contractABI = [
    {
        "inputs": [
            { "internalType": "address", "name": "recipient", "type": "address" },
            { "internalType": "string", "name": "memoryText", "type": "string" },
            { "internalType": "string", "name": "tokenURI", "type": "string" }
        ],
        "name": "mintMemoryNFT",
        "outputs": [
            { "internalType": "uint256", "name": "", "type": "uint256" }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

let provider;
let signer;
let contract;

async function connectWallet() {
    if (!window.ethereum) {
        alert("MetaMask not found");
        return;
    }

    try {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [{
                chainId: "0xZENCHAIN_ID", // Replace with actual hex Chain ID
                chainName: "ZenChain",
                nativeCurrency: {
                    name: "ZEN",
                    symbol: "ZEN",
                    decimals: 18
                },
                rpcUrls: ["ZENCHAIN_RPC_URL"], // Replace with actual RPC URL
                blockExplorerUrls: ["ZENCHAIN_EXPLORER_URL"] // Optional
            }]
        });

        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        contract = new ethers.Contract(contractAddress, contractABI, signer);

        console.log("Connected wallet:", await signer.getAddress());
    } catch (err) {
        console.error("Connection error:", err);
    }
}
