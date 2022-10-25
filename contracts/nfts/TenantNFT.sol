// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

import "../interfaces/ITenantNFT.sol";

import "../structs/UserDetails.sol";
import "../structs/UserReviews.sol";

contract TenantNFT is ERC721, AccessControl, ITenantNFT {
    using Counters for Counters.Counter;

    UserDetails[] public userDetails;

    mapping(address => UserReviews[]) public reviewsFromHost;
    mapping(address => UserReviews[]) public reviewsFromTenant;
 
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");
    Counters.Counter private _tokenIdCounter;

    constructor(address _tenantFactory) ERC721("TenantNFT", "TNNT") {
        _grantRole(DEFAULT_ADMIN_ROLE, _tenantFactory);
        _grantRole(BURNER_ROLE, _tenantFactory);
        
        _grantRole(MINTER_ROLE, _tenantFactory);
    }

    function tenantMint(
        address to,
        UserDetails calldata _userDetails
    ) external override onlyRole(MINTER_ROLE) returns (uint) {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);

        UserDetails memory detail;
        detail = _userDetails;

        userDetails.push(detail);
        emit tenantMinted(to, tokenId);

        return tokenId;
    }

    function tenantBurn (uint256 tokenId) external override onlyRole(BURNER_ROLE) returns (uint) {
        _burn(tokenId);

        emit tenantBurned(tokenId);

        return tokenId;
    }

    function getTenantDetail(uint id) external override view returns(UserDetails memory){
        return userDetails[id];
    }

    function reviewFromHost(address _tenant, UserReviews calldata _userReviews) external override {
        require(_userReviews.numericReview <= 5 && _userReviews.numericReview > 0, "Review must be between 1-5");
        reviewsFromHost[_tenant].push(_userReviews);

        emit tenantGotReviewed(_tenant, _userReviews);
    }

    function reviewFromTenant(address _tenant, UserReviews calldata _userReviews) external onlyRole(MINTER_ROLE) {
        require(_userReviews.numericReview <= 5 && _userReviews.numericReview > 0, "Review must be between 1-5");
        reviewsFromHost[_tenant].push(_userReviews);

        emit tenantGotReviewed(_tenant, _userReviews);
    }
    // The following functions are overrides required by Solidity.

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl, IERC165)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
