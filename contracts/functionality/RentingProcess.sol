// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "../enums/RealEstateStatus.sol";

import "../structs/RealEstateDetails.sol";
import "../structs/UserDetails.sol";

import "../structs/TenantInfo.sol";

import "../nfts/RealEstateNFT.sol";
import "../interfaces/ITenantNFT.sol";
import "../interfaces/IHostNFT.sol";

contract RentingProcess {
    
    event RealEstateStatusChanged(RealEstateStatus indexed realEstateStatus);
    event NftMinted(address indexed user);

    RealEstateNFT public nft;
    ITenantNFT public tenantNft;
    IHostNFT public hostNft;

    uint256 public realEstateId;
    address public creator;

    RealEstateDetails public realEstateDetails;
    RealEstateStatus public realEstateStatus;
    
    // UserDetails[] public viewRequesters;
    
    // mapping(address => bool) isViewer;

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

    // function sendViewRequest() external onlyTenantNftOwner onlyInactiveStatus {
    //     viewRequesters.push(tenantNft.getOwnDetail());
    //     isViewer[msg.sender] = true;
    // }

    // function selectTenant (address _tenant, uint64 expires) external onlyRealEstateOwner onlyInactiveStatus {
    //     nft.setTenant(_tenant, expires);
    //     realEstateStatus = RealEstateStatus.Active;
    //     delete viewRequesters;
    //     emit RealEstateStatusChanged(realEstateStatus);
    // }

    function getBalance() external view returns(uint) {
      return address(this).balance;
    }

    function getRealEstateDetails() external view returns(RealEstateDetails memory) {
      return realEstateDetails;
    }

    // modifier onlyTenantNftOwner() {
    //     require(tenantNft.balanceOf(msg.sender) != 0, "NOT TenantNft OWNER");
    //     _;
    // }

    // modifier onlyInactiveStatus() {
    //     require(realEstateStatus == RealEstateStatus.Inactive, "NOT INACTIVE STATUS");
    //     _;
    // }

    // modifier onlyRealEstateOwner() {
    //     require(creator == msg.sender, "NOT OWNER");
    //     _;
    // }
}
