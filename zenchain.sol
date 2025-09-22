// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ZenMemoryNFT is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;
    mapping(uint256 => string) public tokenMemories;

    event MemoryMinted(address indexed owner, uint256 indexed tokenId, string memoryText, string tokenURI);

    constructor() ERC721("ZenChain Memory NFT", "ZMEM") {
        tokenCounter = 0;
    }

    function mintMemoryNFT(
        address recipient,
        string memory memoryText,
        string memory tokenURI
    ) external returns (uint256) {
        uint256 newTokenId = tokenCounter;
        _safeMint(recipient, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        tokenMemories[newTokenId] = memoryText;

        emit MemoryMinted(recipient, newTokenId, memoryText, tokenURI);
        tokenCounter += 1;
        return newTokenId;
    }

    function getMemory(uint256 tokenId) external view returns (string memory) {
        require(_exists(tokenId), "Token does not exist");
        return tokenMemories[tokenId];
    }
}
