// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../structs/RealEstateDetails.sol";
import "../structs/RealEstateNftDetails.sol";

interface IRealEstate{

    function createRealEstate(
        address _to,
        uint256 _propertyId,
        RealEstateDetails calldata _realEstateDetails,
        RealEstateNftDetails calldata _realEstateNormalNftDetails
    ) external;
    
}
