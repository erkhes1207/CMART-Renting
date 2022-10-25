// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./AddressDetail.sol";
import "./RealEstateDetails/GuestDetail.sol";
import "../enums/RealEstateType.sol";

struct RealEstateDetails {
    RealEstateType realEstateType;
    int roomCount;
    AddressDetail location;
    GuestDetail guests;
    string photos;
    string title;
    string description;
    int price;
}