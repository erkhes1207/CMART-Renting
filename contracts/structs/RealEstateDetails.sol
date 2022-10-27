// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./AddressDetail.sol";

struct RealEstateDetails {
    AddressDetail location;
    int roomCount;
    int mkv;
    string photo;
    string title;
    string description;
    int price;
    int payment;
}