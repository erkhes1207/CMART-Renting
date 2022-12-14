// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "../enums/RealEstateStatus.sol";

import "../structs/RealEstateDetails.sol";
import "../structs/UserDetails.sol";
import "../structs/TenantInfo.sol";

import "../nfts/RealEstateNFT.sol";

contract RealEstate {
    
    event RealEstateStatusChanged(RealEstateStatus indexed realEstateStatus);
    event NftMinted(address indexed user);

    RealEstateNFT public nft;

    uint256 public realEstateId;
    address public creator;

    RealEstateDetails public realEstateDetails;
    RealEstateStatus public realEstateStatus;
    
    constructor(
        address _creator,
        uint256 _realEstateId,
        RealEstateDetails memory _realEstateDetails
    ) {
        realEstateId = _realEstateId;
        creator = _creator;
        realEstateDetails = _realEstateDetails;

        nft = new RealEstateNFT(_realEstateId, address(this));
        nft.mintRealEstate(_creator);
    }

    function mint() external payable {
        require(nft.balanceOf(msg.sender) == 0, "YOU ALREADY HAVE REALESTATE NFT");

        nft.mintRealEstate(msg.sender);
        emit NftMinted(msg.sender);
    }

    function getBalance() external view returns(uint) {
      return address(this).balance;
    }

    function getRealEstateDetails() external view returns(RealEstateDetails memory) {
      return realEstateDetails;
    }
}
