// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../structs/TenantInfo.sol";

import "../interfaces/ITenantNFT.sol";
import "../interfaces/IHostNFT.sol";

contract RealEstateNFT is ERC721 {

    uint public tokenId;

    TenantInfo[] public tenantHistory;
    TenantInfo public tenant;

    ITenantNFT public tenantNft;
    IHostNFT public hostNft;

    UserDetails[] public viewRequesters;

    mapping(address => bool) isViewer;

    address minter;
    
    address realEstateAddress = address(this);

    mapping(address => bool) public wasTenant;

    event UpdateTenant(
        uint tokenId,
        address tenantAddress,
        uint64 expires
    );

    constructor(uint _tokenId, address _realEstate) ERC721("RentableNFT", "RNT") {
        minter = _realEstate;
        tokenId = _tokenId;
    }

    function setTenant(address _tenantAddress, uint64 expires) public {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Transfer caller is not owner nor approved");
        
        tenant.tenantAddress = _tenantAddress;
        tenant.expires = expires;

        tenantHistory.push(tenant);
        
        wasTenant[_tenantAddress] = true;
        emit UpdateTenant(tokenId, _tenantAddress, expires);
    }

    function tenantOf() public view returns(address){
        if( uint256(tenant.expires) >=  block.timestamp){
            return  tenant.tenantAddress;
        }
        else{
            return address(0);
        }
    }
    
    function tenantExpires() public view returns(uint256){
        return tenant.expires;
    }
    
    function sendViewRequest() external {
        require(tenantNft.balanceOf(msg.sender) != 0, "NOT TenantNft OWNER");
        viewRequesters.push(tenantNft.getOwnDetail());
        isViewer[msg.sender] = true;
    }

    function selectTenant (address _tenant, uint64 expires) external {
        setTenant(_tenant, expires);
        require(balanceOf(msg.sender) != 0, "NOT OWNER");
        delete viewRequesters;
    }

    function mintRealEstate(address to) external {
        require (minter == msg.sender,"NOT AUTHORIZED");
        require(balanceOf(to) == 0, "ALREADY HAS NFT");
        _safeMint(to, tokenId);
    }

    function totalSupply() view external returns(uint){
      return tokenId;
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
