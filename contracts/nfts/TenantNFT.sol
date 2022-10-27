// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

import "../interfaces/ITenantNFT.sol";

import "../structs/UserDetails.sol";
import "../structs/UserReviews.sol";

contract TenantNFT is ERC721 {
    using Counters for Counters.Counter;

    UserDetails public userDetails;

    mapping(address => UserReviews[]) public reviewsFromHost;
    mapping(address => UserReviews[]) public reviewsFromTenant;
 
    address minter;
    address burner;

    Counters.Counter private _tokenIdCounter;

    constructor(address _tenantFactory) ERC721("TenantNFT", "TNNT") {
        minter = _tenantFactory;
        burner = _tenantFactory;
    }

    function tenantMint(
        address to,
        UserDetails calldata _userDetails
    ) external onlyMinter returns (uint) {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);

        UserDetails memory detail;
        detail = _userDetails;

        return tokenId;
    }

    function tenantBurn (uint256 tokenId) external onlyBurner returns (uint) {
        _burn(tokenId);

        return tokenId;
    }

    function reviewFromHost(address _tenant, UserReviews calldata _userReviews) external {
        require(_userReviews.numericReview <= 5 && _userReviews.numericReview > 0, "Review must be between 1-5");
        reviewsFromHost[_tenant].push(_userReviews);
    }

    function reviewFromTenant(address _tenant, UserReviews calldata _userReviews) external{
        require(_userReviews.numericReview <= 5 && _userReviews.numericReview > 0, "Review must be between 1-5");
        reviewsFromHost[_tenant].push(_userReviews);
    }
    
    function getOwnDetail() external view onlyOwner returns (UserDetails memory) {
        return userDetails;
    }

    function getTenantDetail() external view returns (string memory, string memory, uint, string memory) {
        return (userDetails.name.firstName, userDetails.email, userDetails.phoneNumber, userDetails.joinedAt);
    }
    
    modifier onlyOwner() {
        require(balanceOf(msg.sender) != 0, "Not owner of this NFT");
        _;
    }

    modifier onlyMinter(){
        require(msg.sender == minter, "Not minter");
        _;
    }

    modifier onlyBurner(){
        require(msg.sender == burner, "Not burner");
        _;
    }
    // The following functions are overrides required by Solidity.

    function supportsInterface(bytes4 interfaceId) public view override(ERC721) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
