// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./AdditionalMods/GuestFavorites.sol";
import "./AdditionalMods/StandoutMods.sol";
import "./AdditionalMods/SafetyItems.sol";

struct AdditionalMods {
    StandoutMods standoutMods;
    GuestFavorites guestFavorites;
    SafetyItems safetyItems;
}
