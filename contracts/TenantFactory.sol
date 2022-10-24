// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./nfts/TenantNFT.sol";

import "./structs/UserDetails.sol";

import "./interfaces/ITenantNFT.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract TenantFactory is AccessControl {
  mapping(address => uint) public addressToTenantId;
  mapping(address => bool) public tenantHasNft;
  mapping(uint => address) public idToTenantAddress;
  uint public tenantLength = 0;
  
  TenantNFT public nft;

  event tenantNFTMinted (
    address tenantAddress,
    uint tenantId
  );

  event tenantNFTBurned (
    address tenantAddress,
    uint tenantId
  );

  constructor() {
    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    nft = new TenantNFT(address(this));
  }

  function createTenant(
    UserDetails calldata _userDetails
  ) external {
    require(tenantHasNft[msg.sender] == false,"ACCOUNT ALREADY HAS NFT");

    uint id = nft.tenantMint(
      msg.sender,
      _userDetails
    );

    addressToTenantId[msg.sender] = id;
    idToTenantAddress[id] = msg.sender;
    tenantHasNft[msg.sender] = true;

    tenantLength++;
    emit tenantNFTMinted(msg.sender, id);
  }

  function deleteTenant(uint id) external {
    require(idToTenantAddress[id] == msg.sender, "NOT THE OWNER OF THIS NFT");
    delete addressToTenantId[msg.sender];
    delete idToTenantAddress[id];
    delete tenantHasNft[msg.sender];
    nft.tenantBurn(id);
    tenantLength--;
    emit tenantNFTBurned(msg.sender, id);
  }
}
