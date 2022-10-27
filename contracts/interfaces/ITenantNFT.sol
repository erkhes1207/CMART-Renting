// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.7.0) (token/ERC721/IERC721.sol)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

import "../structs/UserDetails.sol";
import "../structs/UserReviews.sol";

interface ITenantNFT is IERC165 {

    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
    event tenantMinted (address indexed _to, uint256 indexed _tokenId);
    event tenantBurned (uint256 indexed _tokenId);
    event tenantGotReviewed (address indexed _tenant, UserReviews);

    function tenantMint(address to, UserDetails calldata _userDetails) external returns (uint);

    function tenantBurn(uint tokenId) external returns (uint);
    
    function getOwnDetail() external view returns (UserDetails memory);
    
    function getTenantDetail() external view returns (string memory, string memory, uint, string memory);
    
    function reviewFromHost(address _tenant, UserReviews calldata _userReviews) external;

    function reviewFromTenant(address _tenant, UserReviews calldata _userReviews) external;

    function balanceOf(address owner) external view returns (uint256 balance);

    function ownerOf(uint256 tokenId) external view returns (address owner);

    function approve(address to, uint256 tokenId) external;
    
    function setApprovalForAll(address operator, bool _approved) external;
    
    function getApproved(uint256 tokenId) external view returns (address operator);
    
    function isApprovedForAll(address owner, address operator) external view returns (bool);

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes calldata data
    ) external;

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;

}
