// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

import "../structs/UserDetails.sol";
import "../structs/UserReviews.sol";

contract HostNFT is ERC721, AccessControl {
    using Counters for Counters.Counter;

    UserDetails[] public userDetails;

    mapping(address => UserReviews[]) public reviewsFromHost;
    mapping(address => UserReviews[]) public reviewsFromTenant;
 
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");
    Counters.Counter private _tokenIdCounter;

    constructor(address _hostFactory) ERC721("HostNFT", "HST") {
        _grantRole(DEFAULT_ADMIN_ROLE, _hostFactory);
        _grantRole(BURNER_ROLE, _hostFactory);
        
        _grantRole(MINTER_ROLE, _hostFactory);
    }

    function hostMint(
        address to,
        UserDetails calldata _userDetails
    ) external onlyRole(MINTER_ROLE) returns (uint) {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);

        UserDetails memory detail;
        detail = _userDetails;

        userDetails.push(detail);

        return tokenId;
    }

    function hostBurn (uint256 tokenId) external onlyRole(BURNER_ROLE) {
        _burn(tokenId);
    }

    function getHostDetail(uint id) external view returns(UserDetails memory){
        return userDetails[id];
    }

    function reviewFromHost(address _host, UserReviews calldata _userReviews) external onlyRole(MINTER_ROLE) {
        require(_userReviews.numericReview <= 5 && _userReviews.numericReview > 0, "Review must be between 1-5");
        reviewsFromHost[_host].push(_userReviews);
    }

    function reviewFromTenant(address _host, UserReviews calldata _userReviews) external onlyRole(MINTER_ROLE) {
        require(_userReviews.numericReview <= 5 && _userReviews.numericReview > 0, "Review must be between 1-5");
        reviewsFromHost[_host].push(_userReviews);
    }

    // The following functions are overrides required by Solidity.

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
