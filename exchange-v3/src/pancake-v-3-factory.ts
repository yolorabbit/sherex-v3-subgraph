import {
  FeeAmountEnabled as FeeAmountEnabledEvent,
  FeeAmountExtraInfoUpdated as FeeAmountExtraInfoUpdatedEvent,
  OwnerChanged as OwnerChangedEvent,
  PoolCreated as PoolCreatedEvent,
  SetLmPoolDeployer as SetLmPoolDeployerEvent,
  WhiteListAdded as WhiteListAddedEvent
} from "../generated/PancakeV3Factory/PancakeV3Factory"
import {
  FeeAmountEnabled,
  FeeAmountExtraInfoUpdated,
  OwnerChanged,
  PoolCreated,
  SetLmPoolDeployer,
  WhiteListAdded
} from "../generated/schema"

export function handleFeeAmountEnabled(event: FeeAmountEnabledEvent): void {
  let entity = new FeeAmountEnabled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fee = event.params.fee
  entity.tickSpacing = event.params.tickSpacing

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeAmountExtraInfoUpdated(
  event: FeeAmountExtraInfoUpdatedEvent
): void {
  let entity = new FeeAmountExtraInfoUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fee = event.params.fee
  entity.whitelistRequested = event.params.whitelistRequested
  entity.enabled = event.params.enabled

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerChanged(event: OwnerChangedEvent): void {
  let entity = new OwnerChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldOwner = event.params.oldOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePoolCreated(event: PoolCreatedEvent): void {
  let entity = new PoolCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token0 = event.params.token0
  entity.token1 = event.params.token1
  entity.fee = event.params.fee
  entity.tickSpacing = event.params.tickSpacing
  entity.pool = event.params.pool

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetLmPoolDeployer(event: SetLmPoolDeployerEvent): void {
  let entity = new SetLmPoolDeployer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lmPoolDeployer = event.params.lmPoolDeployer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWhiteListAdded(event: WhiteListAddedEvent): void {
  let entity = new WhiteListAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.verified = event.params.verified

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
