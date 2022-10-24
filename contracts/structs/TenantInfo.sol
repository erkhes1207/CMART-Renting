// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

struct TenantInfo {
    address tenant;   // address of tenant role
    uint64 expires; // unix timestamp, tenant expires
}
