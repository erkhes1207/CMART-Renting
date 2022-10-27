// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./functionality/RealEstate.sol";

import "./structs/RealEstateDetails.sol";
// import "./structs/RealEstateNftDetails.sol";

import "./interfaces/IHostNFT.sol";

contract RealEstateFactory {
  mapping(address => uint[]) public addressToHostRealEstateIds;
  mapping(uint => address) public realEstateIdToAddress;

  uint[] public realEstateIds;
  uint public realEstateId;

  IHostNFT public hostNft;

  RealEstateDetails[] realEstates;

  event RealEstateCreated (
    uint indexed realEstateId,
    address indexed hostAddress,
    bool indexed isReferrable
  );

  constructor(address _hostNft) {
    hostNft = IHostNFT(_hostNft);

    realEstateId = 1;
  }

  function createRealEstate(
    RealEstateDetails calldata _realEstateDetails
  ) external {
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

  function getRealEstateDetails(uint _realEstateId) external view returns(RealEstateDetails memory) {
    return realEstates[_realEstateId];
  }

}
