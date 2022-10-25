// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "./functionality/RealEstate.sol";

import "./structs/RealEstateDetails.sol";
// import "./structs/RealEstateNftDetails.sol";

import "../contracts/HostFactory.sol";
import "./interfaces/IHostNFT.sol";

contract RealEstateFactory is AccessControl {
  mapping(address => uint[]) public addressToHostRealEstateIds;
  mapping(uint => address) public realEstateIdToAddress;

  uint[] public realEstateIds;
  uint public realEstateId;

  HostFactory public hostFactory;
  HostNFT public hostNft;

  RealEstateDetails[] public realEstates;

  event RealEstateCreated (
    uint indexed realEstateId,
    address indexed hostAddress,
    bool indexed isReferrable
  );

  constructor(address _hostNft) {
    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    hostNft = HostNFT(_hostNft);

    realEstateId = 1;
  }

  function createRealEstate(
    RealEstateDetails calldata _realEstateDetails
  ) isHost() external {
    require(hostNft.balanceOf(msg.sender) > 0,"USER ISN'T HOST");

    RealEstate _realEstate = new RealEstate(
      msg.sender,
      realEstateId,
      _realEstateDetails
    );

    addressToHostRealEstateIds[msg.sender].push(realEstateId);
    realEstateIdToAddress[realEstateId] = address(_realEstate);

    realEstates.push(_realEstateDetails);

    realEstateIds.push(realEstateId);
    emit RealEstateCreated(realEstateId, msg.sender, false);
    realEstateId += 1;
  }

  function getHostAllRealEstates() external view returns(uint[] memory){
    return addressToHostRealEstateIds[msg.sender];
  }

  function getHostRealEstateIds(address _host) external view returns(uint[] memory){
    return addressToHostRealEstateIds[_host];
  }

  function getAllRealEstateIds() external view returns(uint[] memory) {
    return realEstateIds;
  }

  function getRealEstatesLength() external view returns(uint) {
    return realEstateIds.length;
  }

  modifier isHost(){
    require(hostNft.balanceOf(msg.sender) > 0,"NOT HOST");
    _;
  }

}
