// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.7.0) (token/ERC721/IERC721.sol)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

import "../structs/UserDetails.sol";
import "../structs/UserReviews.sol";

interface IHostNFT is IERC165 {
    
    event hostMinted (address indexed _to, uint256 indexed _tokenId);
    event hostBurned (uint256 indexed _tokenId);
    event hostGotReviewed (address indexed _from, address indexed _to, uint256 indexed _tokenId);

    function hostMint(address to, UserDetails calldata _userDetails) external returns (uint);

    function hostBurn(uint tokenId) external returns (uint);
    
    function getHostDetail(uint id) external view returns (UserDetails memory);
    
    function reviewFromHost(address _host, UserReviews calldata _userReviews) external;

    function reviewFromTenant(address _host, UserReviews calldata _userReviews) external;

}
