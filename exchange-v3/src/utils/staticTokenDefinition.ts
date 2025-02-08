import { Address, BigInt } from "@graphprotocol/graph-ts";

// Initialize a Token Definition with the attributes
export class StaticTokenDefinition {
  address: Address;
  symbol: string;
  name: string;
  decimals: BigInt;

  // Initialize a Token Definition with its attributes
  constructor(address: Address, symbol: string, name: string, decimals: BigInt) {
    this.address = address;
    this.symbol = symbol;
    this.name = name;
    this.decimals = decimals;
  }

  // Get all tokens with a static defintion
  static getStaticDefinitions(): Array<StaticTokenDefinition> {
    let staticDefinitions = new Array<StaticTokenDefinition>(6);

    // Add DGD
    let tokenDGD = new StaticTokenDefinition(
      Address.fromString("0x662474D0D34E78d5158eA20C1B41c5afDEb0dae5"),
      "DGD",
      "DGD Token",
      BigInt.fromI32(6)
    );
    staticDefinitions.push(tokenDGD);

    // Add AAVE
    let tokenAAVE = new StaticTokenDefinition(
      Address.fromString("0x61f78d62152146de252474dCf5832b96048284e3"),
      "AAVE",
      "AAVE Token",
      BigInt.fromI32(6)
    );
    staticDefinitions.push(tokenAAVE);

    // Add LIF
    let tokenLIF = new StaticTokenDefinition(
      Address.fromString("0xa9C2765b9d7943823570051C0FbeD6e280FC9389"),
      "RIF",
      "RIF Token",
      BigInt.fromI32(6)
    );
    staticDefinitions.push(tokenLIF);

    // Add SVD
    let tokenSVD = new StaticTokenDefinition(
      Address.fromString("0x540f9a05232f719cc2a6cF0DcC9c6346EEBe7941"),
      "SVD",
      "SVD Token",
      BigInt.fromI32(6)
    );
    staticDefinitions.push(tokenSVD);

    return staticDefinitions;
  }

  // Helper for hardcoded tokens
  static fromAddress(tokenAddress: Address): StaticTokenDefinition | null {
    let staticDefinitions = this.getStaticDefinitions();
    let tokenAddressHex = tokenAddress.toHexString();

    // Search the definition using the address
    for (let i = 0; i < staticDefinitions.length; i++) {
      let staticDefinition = staticDefinitions[i];
      if (staticDefinition.address.toHexString() == tokenAddressHex) {
        return staticDefinition;
      }
    }

    // If not found, return null
    return null;
  }
}
