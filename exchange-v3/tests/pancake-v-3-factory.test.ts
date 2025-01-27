import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { FeeAmountEnabled } from "../generated/schema"
import { FeeAmountEnabled as FeeAmountEnabledEvent } from "../generated/PancakeV3Factory/PancakeV3Factory"
import { handleFeeAmountEnabled } from "../src/pancake-v-3-factory"
import { createFeeAmountEnabledEvent } from "./pancake-v-3-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let fee = 123
    let tickSpacing = 123
    let newFeeAmountEnabledEvent = createFeeAmountEnabledEvent(fee, tickSpacing)
    handleFeeAmountEnabled(newFeeAmountEnabledEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("FeeAmountEnabled created and stored", () => {
    assert.entityCount("FeeAmountEnabled", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "FeeAmountEnabled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fee",
      "123"
    )
    assert.fieldEquals(
      "FeeAmountEnabled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tickSpacing",
      "123"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
