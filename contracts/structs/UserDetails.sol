// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./UserDetails/NameDetail.sol";
import "./UserDetails/EmergencyContactDetail.sol";
import "./AddressDetail.sol";

struct UserDetails {
    NameDetail name;
    string gender;
    string email;
    int phoneNumber;
    string governmentId;
    AddressDetail addr;
    EmergencyContactDetail emergencyContact;
    int joinedAt;
}