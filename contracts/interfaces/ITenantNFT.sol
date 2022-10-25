// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.7.0) (token/ERC721/IERC721.sol)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

import "../structs/UserDetails.sol";
import "../structs/UserReviews.sol";

interface ITenantNFT is IERC165 {

    event tenantMinted (address indexed _to, uint256 indexed _tokenId);
    event tenantBurned (uint256 indexed _tokenId);
    event tenantGotReviewed (address indexed _tenant, UserReviews);

    function tenantMint(address to, UserDetails calldata _userDetails) external returns (uint);

    function tenantBurn(uint tokenId) external returns (uint);
    
    function getTenantDetail(uint id) external view returns (UserDetails memory);
    
    function reviewFromHost(address _tenant, UserReviews calldata _userReviews) external;

    function reviewFromTenant(address _tenant, UserReviews calldata _userReviews) external;
}
