// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./AddressDetail.sol";

struct RealEstateDetails {
    AddressDetail location;
    uint guests;
    uint roomCount;
    uint mkv;
    string photo;
    string title;
    string description;
    uint price;
    string payment;
}