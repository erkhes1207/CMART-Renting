// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "../enums/RealEstateStatus.sol";

import "../structs/RealEstateDetails.sol";
import "../structs/UserDetails.sol";

interface IRealEstate {

    event RealEstateStatusChanged(RealEstateStatus indexed realEstateStatus);
    event NftMinted(address indexed user);

    function mint() external;
    
    function sendViewRequest() external;

    function selectTenant (address _tenant, uint64 expires) external;

    function getBalance() external view returns(uint);

    function getRealEstateDetails() external view returns(RealEstateDetails memory);

    function getViewerDetails() external view returns(UserDetails[] memory);

}