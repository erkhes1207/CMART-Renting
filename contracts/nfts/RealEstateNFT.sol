// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "../interfaces/IRealEstateNFT.sol";
import "../structs/TenantInfo.sol";

contract RealEstateNFT is ERC721, AccessControl, IRealEstateNFT {

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    uint public _tokenId;

    mapping (uint256  => TenantInfo) internal _tenants;

    constructor(address _realEstate) ERC721("RentableNFT", "RNT") {
        _grantRole(DEFAULT_ADMIN_ROLE, _realEstate);
        _grantRole(MINTER_ROLE, _realEstate);
        _tokenId = 1;
    }

    function setTenant(uint256 tokenId, address tenant, uint64 expires) public virtual{
        require(_isApprovedOrOwner(msg.sender, tokenId), "Transfer caller is not owner nor approved");
        TenantInfo storage info =  _tenants[tokenId];
        info.tenant = tenant;
        info.expires = expires;
        emit UpdateTenant(tokenId, tenant, expires);
    }

    function tenantOf(uint256 tokenId) public view virtual returns(address){
        if( uint256(_tenants[tokenId].expires) >=  block.timestamp){
            return  _tenants[tokenId].tenant;
        }
        else{
            return address(0);
        }
    }
    
    function tenantExpires(uint256 tokenId) public view virtual returns(uint256){
        return _tenants[tokenId].expires;
    }
    
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override{
        super._beforeTokenTransfer(from, to, tokenId);

        if (from != to && _tenants[tokenId].tenant != address(0)) {
            delete _tenants[tokenId];
            emit UpdateTenant(tokenId, address(0), 0);
        }
    }

    function mint(address to) external onlyRole(MINTER_ROLE){
        require(balanceOf(to) == 0,"ALREADY HAS NFT");
        _safeMint(to, _tokenId);
        _tokenId += 1;
        emit RentableNftMinted(_tokenId, to);
    }

    function totalSupply() view external returns(uint){
      return _tokenId;
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
