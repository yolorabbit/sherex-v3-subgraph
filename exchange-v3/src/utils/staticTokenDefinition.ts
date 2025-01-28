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
      Address.fromString("0x8aE7805a3F55ACA9D40fc52239f63A7976462Dc2"),
      "DGD",
      "DGD Token",
      BigInt.fromI32(18)
    );
    staticDefinitions.push(tokenDGD);

    // Add AAVE
    let tokenAAVE = new StaticTokenDefinition(
      Address.fromString("0x740d8b53B5832A1DF02ac0178238d2BDA237B5A9"),
      "AAVE",
      "AAVE Token",
      BigInt.fromI32(18)
    );
    staticDefinitions.push(tokenAAVE);

    // Add LIF
    let tokenLIF = new StaticTokenDefinition(
      Address.fromString("0x16dB1a91F11E0200723fF9040B4Db101B4bE6D07"),
      "RIF",
      "RIF Token",
      BigInt.fromI32(18)
    );
    staticDefinitions.push(tokenLIF);

    // Add SVD
    let tokenSVD = new StaticTokenDefinition(
      Address.fromString("0x3A4fa21214c86B2901FAE3827E5F390AAc1beE0d"),
      "SVD",
      "SVD Token",
      BigInt.fromI32(18)
    );
    staticDefinitions.push(tokenSVD);

    // Add TheDAO
    let tokenTheDAO = new StaticTokenDefinition(
      Address.fromString("0xcd227ebe06AE538e730528f606D9001B8512296c"),
      "TheDAO",
      "TheDAO Token",
      BigInt.fromI32(18)
    );
    staticDefinitions.push(tokenTheDAO);

    // Add HPB
    let tokenHPB = new StaticTokenDefinition(
      Address.fromString("0x192ff5CFdC80999d82151E4F9B2cd9AB7cC998E1"),
      "Cake",
      "Cake Token",
      BigInt.fromI32(18)
    );
    staticDefinitions.push(tokenHPB);

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
