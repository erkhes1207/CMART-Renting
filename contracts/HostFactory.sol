// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./nfts/HostNFT.sol";

import "./structs/UserDetails.sol";

import "./interfaces/IHostNFT.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract HostFactory is AccessControl {
  mapping(address => uint) public addressToHostId;
  mapping(address => bool) public hostHasNft;
  mapping(uint => address) public idToHostAddress;
  uint public hostLength = 0;
  
  HostNFT public nft;

  event hostNFTMinted (
    address hostAddress,
    uint hostId
  );

  event hostNFTBurned (
    address hostAddress,
    uint hostId
  );

  constructor() {
    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    nft = new HostNFT(address(this));
  }

  function createHost(
    UserDetails calldata _userDetails
  ) external {
    require(hostHasNft[msg.sender] == false,"ACCOUNT ALREADY HAS NFT");

    uint id = nft.hostMint(
      msg.sender,
      _userDetails
    );

    addressToHostId[msg.sender] = id;
    idToHostAddress[id] = msg.sender;
    hostHasNft[msg.sender] = true;

    hostLength++;
    emit hostNFTMinted(msg.sender, id);
  }

  function deleteHost(uint id) external {
    require(idToHostAddress[id] == msg.sender, "NOT THE OWNER OF THIS NFT");
    delete addressToHostId[msg.sender];
    delete idToHostAddress[id];
    delete hostHasNft[msg.sender];
    nft.hostBurn(id);
    hostLength--;
    emit hostNFTBurned(msg.sender, id);
  }
}
