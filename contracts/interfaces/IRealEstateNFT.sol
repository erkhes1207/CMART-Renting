// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../structs/RealEstateDetails.sol";

interface IRealEstateNFT {

    event RentableNftMinted(uint256 indexed tokenId, address indexed host);

    // Logged when the tenant of an NFT is changed or expires is changed
    /// @notice Emitted when the `tenant` of an NFT or the `expires` of the `tenant` is changed
    /// The zero address for tenant indicates that there is no tenant address
    event UpdateTenant(uint256 indexed tokenId, address indexed tenant, uint64 expires);

    /// @notice set the tenant and expires of an NFT
    /// @dev The zero address indicates there is no tenant
    /// Throws if `tokenId` is not valid NFT
    /// @param tenant  The new tenant of the NFT
    /// @param expires  UNIX timestamp, The new tenant could use the NFT before expires
    function setTenant(uint256 tokenId, address tenant, uint64 expires) external;

    /// @notice Get the tenant address of an NFT
    /// @dev The zero address indicates that there is no tenant or the tenant is expired
    /// @param tokenId The NFT to get the tenant address for
    /// @return The tenant address for this NFT
    function tenantOf(uint256 tokenId) external view returns(address);

    /// @notice Get the tenant expires of an NFT
    /// @dev The zero value indicates that there is no tenant
    /// @param tokenId The NFT to get the tenant expires for
    /// @return The tenant expires for this NFT
    function tenantExpires(uint256 tokenId) external view returns(uint256);
    
}
