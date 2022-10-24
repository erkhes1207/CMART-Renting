// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "../interfaces/IRentableNFT.sol";
import "../nfts/RentableNFT.sol";
import "../structs/TenantInfo.sol";

contract RealEstateNFT is RentableNFT {

    uint public tokenId;
    constructor(address _realEstate) RentableNFT ("RealEstateNft", "RLSTT") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, _realEstate);
        tokenId = 1;
    }
    
    function mint(uint256 _tokenId, address to) public {
        _mint(to, _tokenId);
    }
}
