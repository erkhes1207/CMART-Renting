// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./AddressDetail.sol";
import "./RealEstateDetails/GuestDetail.sol";
import "./RealEstateDetails/AdditionalMods.sol";
import "./RealEstateDetails/LegalItems.sol";
import "../enums/RealEstateType.sol";

struct RealEstateDetails {
    RealEstateType realEstateType;
    int roomCount;
    AddressDetail location;
    GuestDetail guests;
    AdditionalMods additionalMods;
    string[] photos;
    string title;
    string description;
    int price;
    LegalItems legalItems;
}
