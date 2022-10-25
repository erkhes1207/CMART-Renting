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
    address public organizer;
    RealEstateDetails public realEstateDetails;
    RealEstateStatus public realEstateStatus;

    constructor(
        address _organizer,
        uint256 _realEstateId,
        RealEstateDetails memory _realEstateDetails
    ) {
        realEstateId = _realEstateId;
        organizer = _organizer;
        realEstateDetails = _realEstateDetails;

        nft = new RealEstateNFT(address(this));
    }

    function mint() external payable {
        // require(realEstateNftDetails.price == msg.value, "PRICE WRONG");
        require(nft.balanceOf(msg.sender) == 0, "YOU ALREADY HAVE REALESTATE NFT");
        // require(realEstateNftDetails.limit >= nft.totalSupply(), "LIMIT REACHED");

        nft.mint(msg.sender);
        emit NftMinted(msg.sender);
    }

    // function withdraw() onlyRealEstateOwner external {
    //   require(realEstateStatus == RealEstateStatus.Ended || realEstateStatus == RealEstateStatus.Canceled,"REALESTATE HASN'T FINISHED");
    //   (bool success, ) = payable(organizer).call{value: address(this).balance}("");
    //   require(success,"WITHDRAW FAILED");
    // }

    function getBalance() external view returns(uint) {
      return address(this).balance;
    }

    function getRealEstateDetails() external view returns(RealEstateDetails memory) {
      return realEstateDetails;
    }

    // function cancelRealEstate() public onlyRealEstateOwner {
    //     realEstateStatus = RealEstateStatus.Canceled;
    //     emit RealEstateStatusChanged(RealEstateStatus.Canceled);
    // }

    modifier onlyRealEstateOwner() {
        require(organizer == msg.sender, "NOT OWNER");
        _;
    }
}
