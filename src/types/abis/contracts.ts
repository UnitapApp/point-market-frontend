import {
  createUseWriteContract,
  createUseSimulateContract,
  createUseReadContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AutoFund
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const autoFundAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'addFund',
    outputs: [],
    stateMutability: 'payable',
  },
] as const

export const autoFundAddress =
  '0xE6Bc2586fcC1Da738733867BFAf381B846AAe834' as const

export const autoFundConfig = {
  address: autoFundAddress,
  abi: autoFundAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PrizeTap
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const prizeTapAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_muonAppId', internalType: 'uint256', type: 'uint256' },
      {
        name: '_muonPublicKey',
        internalType: 'struct IMuonClient.PublicKey',
        type: 'tuple',
        components: [
          { name: 'x', internalType: 'uint256', type: 'uint256' },
          { name: 'parity', internalType: 'uint8', type: 'uint8' },
        ],
      },
      { name: '_muon', internalType: 'address', type: 'address' },
      { name: '_muonValidGateway', internalType: 'address', type: 'address' },
      { name: '_admin', internalType: 'address', type: 'address' },
      { name: '_operator', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'raffleId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'multiplier',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Participate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'raffleId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'winner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PrizeClaimed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'raffleId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'PrizeRefunded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'initiator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'raffleId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RaffleCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'raffleId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'rejector',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RaffleRejected',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'raffleId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'fromId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'toId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'WinnersSpecified',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_NUM_WINNERS',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'OPERATOR_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'raffleId', internalType: 'uint256', type: 'uint256' }],
    name: 'claimPrize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'currency', internalType: 'address', type: 'address' },
      { name: 'maxParticipants', internalType: 'uint256', type: 'uint256' },
      { name: 'maxMultiplier', internalType: 'uint256', type: 'uint256' },
      { name: 'startTime', internalType: 'uint256', type: 'uint256' },
      { name: 'endTime', internalType: 'uint256', type: 'uint256' },
      { name: 'winnersCount', internalType: 'uint256', type: 'uint256' },
      { name: 'requirementsHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'createRaffle',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'raffleId', internalType: 'uint256', type: 'uint256' },
      { name: 'fromId', internalType: 'uint256', type: 'uint256' },
      { name: 'toId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getParticipants',
    outputs: [
      { name: 'participants', internalType: 'address[]', type: 'address[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'raffleId', internalType: 'uint256', type: 'uint256' },
      { name: 'fromId', internalType: 'uint256', type: 'uint256' },
      { name: 'toId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getWinners',
    outputs: [
      { name: 'winners', internalType: 'address[]', type: 'address[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'raffleId', internalType: 'uint256', type: 'uint256' }],
    name: 'getWinnersCount',
    outputs: [
      { name: 'winnersCount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isParticipated',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'isWinner',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'isWinnerClaimed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'lastNotWinnerIndexes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastRaffleId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'muon',
    outputs: [
      { name: '', internalType: 'contract IMuonClient', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'muonAppId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'muonPublicKey',
    outputs: [
      { name: 'x', internalType: 'uint256', type: 'uint256' },
      { name: 'parity', internalType: 'uint8', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'muonValidGateway',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'participantPositions',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'raffleId', internalType: 'uint256', type: 'uint256' },
      { name: 'multiplier', internalType: 'uint256', type: 'uint256' },
      { name: 'reqId', internalType: 'bytes', type: 'bytes' },
      {
        name: 'signature',
        internalType: 'struct IMuonClient.SchnorrSign',
        type: 'tuple',
        components: [
          { name: 'signature', internalType: 'uint256', type: 'uint256' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'address', type: 'address' },
        ],
      },
      { name: 'gatewaySignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'participateInRaffle',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'raffleParticipants',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'raffleWinners',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'raffles',
    outputs: [
      { name: 'initiator', internalType: 'address', type: 'address' },
      { name: 'prizeAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'currency', internalType: 'address', type: 'address' },
      { name: 'maxParticipants', internalType: 'uint256', type: 'uint256' },
      { name: 'maxMultiplier', internalType: 'uint256', type: 'uint256' },
      { name: 'startTime', internalType: 'uint256', type: 'uint256' },
      { name: 'endTime', internalType: 'uint256', type: 'uint256' },
      {
        name: 'lastParticipantIndex',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'lastWinnerIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'participantsCount', internalType: 'uint256', type: 'uint256' },
      { name: 'winnersCount', internalType: 'uint256', type: 'uint256' },
      { name: 'exists', internalType: 'bool', type: 'bool' },
      {
        name: 'status',
        internalType: 'enum AbstractPrizetapRaffle.Status',
        type: 'uint8',
      },
      { name: 'requirementsHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'raffleId', internalType: 'uint256', type: 'uint256' }],
    name: 'refundPrize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'raffleId', internalType: 'uint256', type: 'uint256' }],
    name: 'refundRemainingPrizes',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'raffleId', internalType: 'uint256', type: 'uint256' }],
    name: 'rejectRaffle',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_muonAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setMuonAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_muonAppId', internalType: 'uint256', type: 'uint256' }],
    name: 'setMuonAppId',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_gatewayAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setMuonGateway',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_muonPublicKey',
        internalType: 'struct IMuonClient.PublicKey',
        type: 'tuple',
        components: [
          { name: 'x', internalType: 'uint256', type: 'uint256' },
          { name: 'parity', internalType: 'uint8', type: 'uint8' },
        ],
      },
    ],
    name: 'setMuonPublicKey',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'raffleId', internalType: 'uint256', type: 'uint256' },
      { name: 'expirationTime', internalType: 'uint256', type: 'uint256' },
      { name: 'randomNumbers', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'reqId', internalType: 'bytes', type: 'bytes' },
      {
        name: 'signature',
        internalType: 'struct IMuonClient.SchnorrSign',
        type: 'tuple',
        components: [
          { name: 'signature', internalType: 'uint256', type: 'uint256' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'address', type: 'address' },
        ],
      },
      { name: 'gatewaySignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setRaffleRandomNumbers',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'periodSeconds', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setValidationPeriod',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'raffleId', internalType: 'uint256', type: 'uint256' },
      { name: 'toId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setWinners',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'validationPeriod',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'raffleId', internalType: 'uint256', type: 'uint256' },
      { name: 'multiplier', internalType: 'uint256', type: 'uint256' },
      { name: 'reqId', internalType: 'bytes', type: 'bytes' },
      {
        name: 'sign',
        internalType: 'struct IMuonClient.SchnorrSign',
        type: 'tuple',
        components: [
          { name: 'signature', internalType: 'uint256', type: 'uint256' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'address', type: 'address' },
        ],
      },
      { name: 'gatewaySignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'verifyParticipationSig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'expirationTime', internalType: 'uint256', type: 'uint256' },
      { name: 'randomNumbers', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'reqId', internalType: 'bytes', type: 'bytes' },
      {
        name: 'sign',
        internalType: 'struct IMuonClient.SchnorrSign',
        type: 'tuple',
        components: [
          { name: 'signature', internalType: 'uint256', type: 'uint256' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'address', type: 'address' },
        ],
      },
      { name: 'gatewaySignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'verifyRandomNumberSig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

export const prizeTapAddress =
  '0xC74089ff29CC6F46DE9318F4a6b482cEadbf814C' as const

export const prizeTapConfig = {
  address: prizeTapAddress,
  abi: prizeTapAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PrizeTap721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const prizeTap721Abi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_muonAppId', internalType: 'uint256', type: 'uint256' },
      {
        name: '_muonPublicKey',
        internalType: 'struct IMuonClient.PublicKey',
        type: 'tuple',
        components: [
          { name: 'x', internalType: 'uint256', type: 'uint256' },
          { name: 'parity', internalType: 'uint8', type: 'uint8' },
        ],
      },
      { name: '_muon', internalType: 'address', type: 'address' },
      { name: '_muonValidGateway', internalType: 'address', type: 'address' },
      { name: '_admin', internalType: 'address', type: 'address' },
      { name: '_operator', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'raffleId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'multiplier',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Participate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'raffleId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'winner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PrizeClaimed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'raffleId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'PrizeRefunded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'initiator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'raffleId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RaffleCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'raffleId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'rejector',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RaffleRejected',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'raffleId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'fromId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'toId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'WinnersSpecified',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_NUM_WINNERS',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'OPERATOR_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: '_ERC721_RECEIVED',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'raffleId', internalType: 'uint256', type: 'uint256' }],
    name: 'claimPrize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'collection', internalType: 'address', type: 'address' },
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'maxParticipants', internalType: 'uint256', type: 'uint256' },
      { name: 'maxMultiplier', internalType: 'uint256', type: 'uint256' },
      { name: 'startTime', internalType: 'uint256', type: 'uint256' },
      { name: 'endTime', internalType: 'uint256', type: 'uint256' },
      { name: 'winnersCount', internalType: 'uint256', type: 'uint256' },
      { name: 'requirementsHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'createRaffle',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'raffleId', internalType: 'uint256', type: 'uint256' },
      { name: 'fromId', internalType: 'uint256', type: 'uint256' },
      { name: 'toId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getParticipants',
    outputs: [
      { name: 'participants', internalType: 'address[]', type: 'address[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'raffleId', internalType: 'uint256', type: 'uint256' },
      { name: 'fromId', internalType: 'uint256', type: 'uint256' },
      { name: 'toId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getWinners',
    outputs: [
      { name: 'winners', internalType: 'address[]', type: 'address[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'raffleId', internalType: 'uint256', type: 'uint256' }],
    name: 'getWinnersCount',
    outputs: [
      { name: 'winnersCount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isParticipated',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'isWinner',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'isWinnerClaimed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'lastNotWinnerIndexes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastRaffleId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'muon',
    outputs: [
      { name: '', internalType: 'contract IMuonClient', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'muonAppId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'muonPublicKey',
    outputs: [
      { name: 'x', internalType: 'uint256', type: 'uint256' },
      { name: 'parity', internalType: 'uint8', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'muonValidGateway',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'participantPositions',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'raffleId', internalType: 'uint256', type: 'uint256' },
      { name: 'multiplier', internalType: 'uint256', type: 'uint256' },
      { name: 'reqId', internalType: 'bytes', type: 'bytes' },
      {
        name: 'signature',
        internalType: 'struct IMuonClient.SchnorrSign',
        type: 'tuple',
        components: [
          { name: 'signature', internalType: 'uint256', type: 'uint256' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'address', type: 'address' },
        ],
      },
      { name: 'gatewaySignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'participateInRaffle',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'raffleParticipants',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'raffleWinners',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'raffles',
    outputs: [
      { name: 'initiator', internalType: 'address', type: 'address' },
      { name: 'collection', internalType: 'address', type: 'address' },
      { name: 'maxParticipants', internalType: 'uint256', type: 'uint256' },
      { name: 'maxMultiplier', internalType: 'uint256', type: 'uint256' },
      { name: 'startTime', internalType: 'uint256', type: 'uint256' },
      { name: 'endTime', internalType: 'uint256', type: 'uint256' },
      {
        name: 'lastParticipantIndex',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'lastWinnerIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'participantsCount', internalType: 'uint256', type: 'uint256' },
      { name: 'winnersCount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'lastNotClaimedTokenIndex',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'exists', internalType: 'bool', type: 'bool' },
      {
        name: 'status',
        internalType: 'enum AbstractPrizetapRaffle.Status',
        type: 'uint8',
      },
      { name: 'requirementsHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'raffleId', internalType: 'uint256', type: 'uint256' }],
    name: 'refundPrize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'raffleId', internalType: 'uint256', type: 'uint256' }],
    name: 'refundRemainingPrizes',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'raffleId', internalType: 'uint256', type: 'uint256' }],
    name: 'rejectRaffle',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_muonAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setMuonAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_muonAppId', internalType: 'uint256', type: 'uint256' }],
    name: 'setMuonAppId',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_gatewayAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setMuonGateway',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_muonPublicKey',
        internalType: 'struct IMuonClient.PublicKey',
        type: 'tuple',
        components: [
          { name: 'x', internalType: 'uint256', type: 'uint256' },
          { name: 'parity', internalType: 'uint8', type: 'uint8' },
        ],
      },
    ],
    name: 'setMuonPublicKey',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'raffleId', internalType: 'uint256', type: 'uint256' },
      { name: 'expirationTime', internalType: 'uint256', type: 'uint256' },
      { name: 'randomNumbers', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'reqId', internalType: 'bytes', type: 'bytes' },
      {
        name: 'signature',
        internalType: 'struct IMuonClient.SchnorrSign',
        type: 'tuple',
        components: [
          { name: 'signature', internalType: 'uint256', type: 'uint256' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'address', type: 'address' },
        ],
      },
      { name: 'gatewaySignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setRaffleRandomNumbers',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'periodSeconds', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setValidationPeriod',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'raffleId', internalType: 'uint256', type: 'uint256' },
      { name: 'toId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setWinners',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'validationPeriod',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'raffleId', internalType: 'uint256', type: 'uint256' },
      { name: 'multiplier', internalType: 'uint256', type: 'uint256' },
      { name: 'reqId', internalType: 'bytes', type: 'bytes' },
      {
        name: 'sign',
        internalType: 'struct IMuonClient.SchnorrSign',
        type: 'tuple',
        components: [
          { name: 'signature', internalType: 'uint256', type: 'uint256' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'address', type: 'address' },
        ],
      },
      { name: 'gatewaySignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'verifyParticipationSig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'expirationTime', internalType: 'uint256', type: 'uint256' },
      { name: 'randomNumbers', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'reqId', internalType: 'bytes', type: 'bytes' },
      {
        name: 'sign',
        internalType: 'struct IMuonClient.SchnorrSign',
        type: 'tuple',
        components: [
          { name: 'signature', internalType: 'uint256', type: 'uint256' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'address', type: 'address' },
        ],
      },
      { name: 'gatewaySignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'verifyRandomNumberSig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

export const prizeTap721Address =
  '0xAB98C8DAD87C2fEB1fb723994c97845f26bc1dce' as const

export const prizeTap721Config = {
  address: prizeTap721Address,
  abi: prizeTap721Abi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenTap
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenTapAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'admin', internalType: 'address', type: 'address' },
      { name: '_muonAppId', internalType: 'uint256', type: 'uint256' },
      {
        name: '_muonPublicKey',
        internalType: 'struct IMuonClient.PublicKey',
        type: 'tuple',
        components: [
          { name: 'x', internalType: 'uint256', type: 'uint256' },
          { name: 'parity', internalType: 'uint8', type: 'uint8' },
        ],
      },
      { name: '_muon', internalType: 'address', type: 'address' },
      { name: '_muonValidGateway', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'distributionId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DistributionRefunded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'distributionId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'provider',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'maxNumClaims',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'claimAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokenDistributed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'claimId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokensClaimed',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DAO_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'distributionId', internalType: 'uint256', type: 'uint256' },
      { name: 'claimId', internalType: 'uint256', type: 'uint256' },
      { name: 'reqId', internalType: 'bytes', type: 'bytes' },
      {
        name: 'signature',
        internalType: 'struct IMuonClient.SchnorrSign',
        type: 'tuple',
        components: [
          { name: 'signature', internalType: 'uint256', type: 'uint256' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'address', type: 'address' },
        ],
      },
      { name: 'gatewaySignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'claimToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'maxNumClaims', internalType: 'uint256', type: 'uint256' },
      { name: 'claimAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'startTime', internalType: 'uint256', type: 'uint256' },
      { name: 'endTime', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'distributeToken',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'distributions',
    outputs: [
      { name: 'provider', internalType: 'address', type: 'address' },
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'maxNumClaims', internalType: 'uint256', type: 'uint256' },
      { name: 'claimAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'claimsCount', internalType: 'uint256', type: 'uint256' },
      { name: 'startTime', internalType: 'uint256', type: 'uint256' },
      { name: 'endTime', internalType: 'uint256', type: 'uint256' },
      { name: 'isRefunded', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastDistributionId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'muon',
    outputs: [
      { name: '', internalType: 'contract IMuonClient', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'muonAppId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'muonPublicKey',
    outputs: [
      { name: 'x', internalType: 'uint256', type: 'uint256' },
      { name: 'parity', internalType: 'uint8', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'muonValidGateway',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_muonAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setMuonAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_muonAppId', internalType: 'uint256', type: 'uint256' }],
    name: 'setMuonAppId',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_gatewayAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setMuonGateway',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_muonPublicKey',
        internalType: 'struct IMuonClient.PublicKey',
        type: 'tuple',
        components: [
          { name: 'x', internalType: 'uint256', type: 'uint256' },
          { name: 'parity', internalType: 'uint8', type: 'uint8' },
        ],
      },
    ],
    name: 'setMuonPublicKey',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'usedClaims',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'distributionId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'withdrawReaminingTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

export const tokenTapAddress =
  '0x785996054151487B296005aAeC8CAE7C209D1385' as const

export const tokenTapConfig = {
  address: tokenTapAddress,
  abi: tokenTapAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UnitapEVMTokenTap
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const unitapEvmTokenTapAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'admin', internalType: 'address', type: 'address' },
      { name: '_muonAppId', internalType: 'uint256', type: 'uint256' },
      {
        name: '_muonPublicKey',
        internalType: 'struct IMuonClient.PublicKey',
        type: 'tuple',
        components: [
          { name: 'x', internalType: 'uint256', type: 'uint256' },
          { name: 'parity', internalType: 'uint8', type: 'uint8' },
        ],
      },
      { name: '_muon', internalType: 'address', type: 'address' },
      { name: '_muonValidGateway', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'distributionId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DistributionRefunded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'distributionId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'provider',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'maxNumClaims',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'claimAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokenDistributed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'claimId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokensClaimed',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DAO_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'distributionId', internalType: 'uint256', type: 'uint256' },
      { name: 'claimId', internalType: 'uint256', type: 'uint256' },
      { name: 'reqId', internalType: 'bytes', type: 'bytes' },
      {
        name: 'signature',
        internalType: 'struct IMuonClient.SchnorrSign',
        type: 'tuple',
        components: [
          { name: 'signature', internalType: 'uint256', type: 'uint256' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'address', type: 'address' },
        ],
      },
      { name: 'gatewaySignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'claimToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'maxNumClaims', internalType: 'uint256', type: 'uint256' },
      { name: 'claimAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'startTime', internalType: 'uint256', type: 'uint256' },
      { name: 'endTime', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'distributeToken',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'distributions',
    outputs: [
      { name: 'provider', internalType: 'address', type: 'address' },
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'maxNumClaims', internalType: 'uint256', type: 'uint256' },
      { name: 'claimAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'claimsCount', internalType: 'uint256', type: 'uint256' },
      { name: 'startTime', internalType: 'uint256', type: 'uint256' },
      { name: 'endTime', internalType: 'uint256', type: 'uint256' },
      { name: 'isRefunded', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastDistributionId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'muon',
    outputs: [
      { name: '', internalType: 'contract IMuonClient', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'muonAppId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'muonPublicKey',
    outputs: [
      { name: 'x', internalType: 'uint256', type: 'uint256' },
      { name: 'parity', internalType: 'uint8', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'muonValidGateway',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_muonAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setMuonAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_muonAppId', internalType: 'uint256', type: 'uint256' }],
    name: 'setMuonAppId',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_gatewayAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setMuonGateway',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_muonPublicKey',
        internalType: 'struct IMuonClient.PublicKey',
        type: 'tuple',
        components: [
          { name: 'x', internalType: 'uint256', type: 'uint256' },
          { name: 'parity', internalType: 'uint8', type: 'uint8' },
        ],
      },
    ],
    name: 'setMuonPublicKey',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'usedClaims',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'distributionId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'withdrawReaminingTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UnitapPass
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const unitapPassAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'baseURI',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'SetBaseURI',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MINTER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'baseURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'safeMint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'baseURI_', internalType: 'string', type: 'string' }],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenIdCounter',
    outputs: [{ name: 'idCounter', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

export const unitapPassAddress =
  '0xCcEa5FB3Da0B89d073f1ac12A35a8f24caF0d76C' as const

export const unitapPassConfig = {
  address: unitapPassAddress,
  abi: unitapPassAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UnitapPassBatchSale
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const unitapPassBatchSaleAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'unitapPass_', internalType: 'address', type: 'address' },
      { name: 'safe_', internalType: 'address', type: 'address' },
      { name: 'price_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'CurrentBatchSoldOut' },
  { type: 'error', inputs: [], name: 'InsufficientFunds' },
  { type: 'error', inputs: [], name: 'InvalidBatchSize' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      { name: 'count', internalType: 'uint32', type: 'uint32', indexed: false },
    ],
    name: 'MultiMint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'batchSize',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
    ],
    name: 'StartBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'WithdrawETH',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_SALE_COUNT',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'batchSize',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'batchSoldCount',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'count', internalType: 'uint32', type: 'uint32' },
      { name: 'to', internalType: 'address', type: 'address' },
    ],
    name: 'multiMint',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'price',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'safe',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'batchSize_', internalType: 'uint32', type: 'uint32' }],
    name: 'startBatch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSoldCount',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unitapPass',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdrawETH',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

export const unitapPassBatchSaleAddress =
  '0xCcEa5FB3Da0B89d073f1ac12A35a8f24caF0d76C' as const

export const unitapPassBatchSaleConfig = {
  address: unitapPassBatchSaleAddress,
  abi: unitapPassBatchSaleAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UnitapPassMain
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const unitapPassMainAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'baseURI',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'SetBaseURI',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MINTER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'baseURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'safeMint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'baseURI_', internalType: 'string', type: 'string' }],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenIdCounter',
    outputs: [{ name: 'idCounter', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

export const unitapPassMainAddress =
  '0xCcEa5FB3Da0B89d073f1ac12A35a8f24caF0d76C' as const

export const unitapPassMainConfig = {
  address: unitapPassMainAddress,
  abi: unitapPassMainAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_spender', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_from', type: 'address' },
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_owner', type: 'address' },
      { name: '_spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  { payable: true, type: 'fallback', stateMutability: 'payable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link autoFundAbi}__
 */
export const useWriteAutoFund = /*#__PURE__*/ createUseWriteContract({
  abi: autoFundAbi,
  address: autoFundAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link autoFundAbi}__ and `functionName` set to `"addFund"`
 */
export const useWriteAutoFundAddFund = /*#__PURE__*/ createUseWriteContract({
  abi: autoFundAbi,
  address: autoFundAddress,
  functionName: 'addFund',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link autoFundAbi}__
 */
export const useSimulateAutoFund = /*#__PURE__*/ createUseSimulateContract({
  abi: autoFundAbi,
  address: autoFundAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link autoFundAbi}__ and `functionName` set to `"addFund"`
 */
export const useSimulateAutoFundAddFund =
  /*#__PURE__*/ createUseSimulateContract({
    abi: autoFundAbi,
    address: autoFundAddress,
    functionName: 'addFund',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__
 */
export const useReadPrizeTap = /*#__PURE__*/ createUseReadContract({
  abi: prizeTapAbi,
  address: prizeTapAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadPrizeTapDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"MAX_NUM_WINNERS"`
 */
export const useReadPrizeTapMaxNumWinners = /*#__PURE__*/ createUseReadContract(
  {
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'MAX_NUM_WINNERS',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"OPERATOR_ROLE"`
 */
export const useReadPrizeTapOperatorRole = /*#__PURE__*/ createUseReadContract({
  abi: prizeTapAbi,
  address: prizeTapAddress,
  functionName: 'OPERATOR_ROLE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"getParticipants"`
 */
export const useReadPrizeTapGetParticipants =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'getParticipants',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadPrizeTapGetRoleAdmin = /*#__PURE__*/ createUseReadContract({
  abi: prizeTapAbi,
  address: prizeTapAddress,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"getWinners"`
 */
export const useReadPrizeTapGetWinners = /*#__PURE__*/ createUseReadContract({
  abi: prizeTapAbi,
  address: prizeTapAddress,
  functionName: 'getWinners',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"getWinnersCount"`
 */
export const useReadPrizeTapGetWinnersCount =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'getWinnersCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadPrizeTapHasRole = /*#__PURE__*/ createUseReadContract({
  abi: prizeTapAbi,
  address: prizeTapAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"isParticipated"`
 */
export const useReadPrizeTapIsParticipated =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'isParticipated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"isWinner"`
 */
export const useReadPrizeTapIsWinner = /*#__PURE__*/ createUseReadContract({
  abi: prizeTapAbi,
  address: prizeTapAddress,
  functionName: 'isWinner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"isWinnerClaimed"`
 */
export const useReadPrizeTapIsWinnerClaimed =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'isWinnerClaimed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"lastNotWinnerIndexes"`
 */
export const useReadPrizeTapLastNotWinnerIndexes =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'lastNotWinnerIndexes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"lastRaffleId"`
 */
export const useReadPrizeTapLastRaffleId = /*#__PURE__*/ createUseReadContract({
  abi: prizeTapAbi,
  address: prizeTapAddress,
  functionName: 'lastRaffleId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"muon"`
 */
export const useReadPrizeTapMuon = /*#__PURE__*/ createUseReadContract({
  abi: prizeTapAbi,
  address: prizeTapAddress,
  functionName: 'muon',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"muonAppId"`
 */
export const useReadPrizeTapMuonAppId = /*#__PURE__*/ createUseReadContract({
  abi: prizeTapAbi,
  address: prizeTapAddress,
  functionName: 'muonAppId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"muonPublicKey"`
 */
export const useReadPrizeTapMuonPublicKey = /*#__PURE__*/ createUseReadContract(
  { abi: prizeTapAbi, address: prizeTapAddress, functionName: 'muonPublicKey' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"muonValidGateway"`
 */
export const useReadPrizeTapMuonValidGateway =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'muonValidGateway',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"participantPositions"`
 */
export const useReadPrizeTapParticipantPositions =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'participantPositions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"paused"`
 */
export const useReadPrizeTapPaused = /*#__PURE__*/ createUseReadContract({
  abi: prizeTapAbi,
  address: prizeTapAddress,
  functionName: 'paused',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"raffleParticipants"`
 */
export const useReadPrizeTapRaffleParticipants =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'raffleParticipants',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"raffleWinners"`
 */
export const useReadPrizeTapRaffleWinners = /*#__PURE__*/ createUseReadContract(
  { abi: prizeTapAbi, address: prizeTapAddress, functionName: 'raffleWinners' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"raffles"`
 */
export const useReadPrizeTapRaffles = /*#__PURE__*/ createUseReadContract({
  abi: prizeTapAbi,
  address: prizeTapAddress,
  functionName: 'raffles',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadPrizeTapSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"validationPeriod"`
 */
export const useReadPrizeTapValidationPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'validationPeriod',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__
 */
export const useWritePrizeTap = /*#__PURE__*/ createUseWriteContract({
  abi: prizeTapAbi,
  address: prizeTapAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"claimPrize"`
 */
export const useWritePrizeTapClaimPrize = /*#__PURE__*/ createUseWriteContract({
  abi: prizeTapAbi,
  address: prizeTapAddress,
  functionName: 'claimPrize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"createRaffle"`
 */
export const useWritePrizeTapCreateRaffle =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'createRaffle',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWritePrizeTapGrantRole = /*#__PURE__*/ createUseWriteContract({
  abi: prizeTapAbi,
  address: prizeTapAddress,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"participateInRaffle"`
 */
export const useWritePrizeTapParticipateInRaffle =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'participateInRaffle',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"pause"`
 */
export const useWritePrizeTapPause = /*#__PURE__*/ createUseWriteContract({
  abi: prizeTapAbi,
  address: prizeTapAddress,
  functionName: 'pause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"refundPrize"`
 */
export const useWritePrizeTapRefundPrize = /*#__PURE__*/ createUseWriteContract(
  { abi: prizeTapAbi, address: prizeTapAddress, functionName: 'refundPrize' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"refundRemainingPrizes"`
 */
export const useWritePrizeTapRefundRemainingPrizes =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'refundRemainingPrizes',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"rejectRaffle"`
 */
export const useWritePrizeTapRejectRaffle =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'rejectRaffle',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWritePrizeTapRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWritePrizeTapRevokeRole = /*#__PURE__*/ createUseWriteContract({
  abi: prizeTapAbi,
  address: prizeTapAddress,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"setMuonAddress"`
 */
export const useWritePrizeTapSetMuonAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'setMuonAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"setMuonAppId"`
 */
export const useWritePrizeTapSetMuonAppId =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'setMuonAppId',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"setMuonGateway"`
 */
export const useWritePrizeTapSetMuonGateway =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'setMuonGateway',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"setMuonPublicKey"`
 */
export const useWritePrizeTapSetMuonPublicKey =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'setMuonPublicKey',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"setRaffleRandomNumbers"`
 */
export const useWritePrizeTapSetRaffleRandomNumbers =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'setRaffleRandomNumbers',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"setValidationPeriod"`
 */
export const useWritePrizeTapSetValidationPeriod =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'setValidationPeriod',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"setWinners"`
 */
export const useWritePrizeTapSetWinners = /*#__PURE__*/ createUseWriteContract({
  abi: prizeTapAbi,
  address: prizeTapAddress,
  functionName: 'setWinners',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"unpause"`
 */
export const useWritePrizeTapUnpause = /*#__PURE__*/ createUseWriteContract({
  abi: prizeTapAbi,
  address: prizeTapAddress,
  functionName: 'unpause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"verifyParticipationSig"`
 */
export const useWritePrizeTapVerifyParticipationSig =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'verifyParticipationSig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"verifyRandomNumberSig"`
 */
export const useWritePrizeTapVerifyRandomNumberSig =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'verifyRandomNumberSig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__
 */
export const useSimulatePrizeTap = /*#__PURE__*/ createUseSimulateContract({
  abi: prizeTapAbi,
  address: prizeTapAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"claimPrize"`
 */
export const useSimulatePrizeTapClaimPrize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'claimPrize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"createRaffle"`
 */
export const useSimulatePrizeTapCreateRaffle =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'createRaffle',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulatePrizeTapGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"participateInRaffle"`
 */
export const useSimulatePrizeTapParticipateInRaffle =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'participateInRaffle',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"pause"`
 */
export const useSimulatePrizeTapPause = /*#__PURE__*/ createUseSimulateContract(
  { abi: prizeTapAbi, address: prizeTapAddress, functionName: 'pause' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"refundPrize"`
 */
export const useSimulatePrizeTapRefundPrize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'refundPrize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"refundRemainingPrizes"`
 */
export const useSimulatePrizeTapRefundRemainingPrizes =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'refundRemainingPrizes',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"rejectRaffle"`
 */
export const useSimulatePrizeTapRejectRaffle =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'rejectRaffle',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulatePrizeTapRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulatePrizeTapRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"setMuonAddress"`
 */
export const useSimulatePrizeTapSetMuonAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'setMuonAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"setMuonAppId"`
 */
export const useSimulatePrizeTapSetMuonAppId =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'setMuonAppId',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"setMuonGateway"`
 */
export const useSimulatePrizeTapSetMuonGateway =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'setMuonGateway',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"setMuonPublicKey"`
 */
export const useSimulatePrizeTapSetMuonPublicKey =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'setMuonPublicKey',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"setRaffleRandomNumbers"`
 */
export const useSimulatePrizeTapSetRaffleRandomNumbers =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'setRaffleRandomNumbers',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"setValidationPeriod"`
 */
export const useSimulatePrizeTapSetValidationPeriod =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'setValidationPeriod',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"setWinners"`
 */
export const useSimulatePrizeTapSetWinners =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'setWinners',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"unpause"`
 */
export const useSimulatePrizeTapUnpause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"verifyParticipationSig"`
 */
export const useSimulatePrizeTapVerifyParticipationSig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'verifyParticipationSig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTapAbi}__ and `functionName` set to `"verifyRandomNumberSig"`
 */
export const useSimulatePrizeTapVerifyRandomNumberSig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    functionName: 'verifyRandomNumberSig',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTapAbi}__
 */
export const useWatchPrizeTapEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: prizeTapAbi,
  address: prizeTapAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTapAbi}__ and `eventName` set to `"Participate"`
 */
export const useWatchPrizeTapParticipateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    eventName: 'Participate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTapAbi}__ and `eventName` set to `"Paused"`
 */
export const useWatchPrizeTapPausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTapAbi}__ and `eventName` set to `"PrizeClaimed"`
 */
export const useWatchPrizeTapPrizeClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    eventName: 'PrizeClaimed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTapAbi}__ and `eventName` set to `"PrizeRefunded"`
 */
export const useWatchPrizeTapPrizeRefundedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    eventName: 'PrizeRefunded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTapAbi}__ and `eventName` set to `"RaffleCreated"`
 */
export const useWatchPrizeTapRaffleCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    eventName: 'RaffleCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTapAbi}__ and `eventName` set to `"RaffleRejected"`
 */
export const useWatchPrizeTapRaffleRejectedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    eventName: 'RaffleRejected',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTapAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchPrizeTapRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTapAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchPrizeTapRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTapAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchPrizeTapRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTapAbi}__ and `eventName` set to `"Unpaused"`
 */
export const useWatchPrizeTapUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTapAbi}__ and `eventName` set to `"WinnersSpecified"`
 */
export const useWatchPrizeTapWinnersSpecifiedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTapAbi,
    address: prizeTapAddress,
    eventName: 'WinnersSpecified',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__
 */
export const useReadPrizeTap721 = /*#__PURE__*/ createUseReadContract({
  abi: prizeTap721Abi,
  address: prizeTap721Address,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadPrizeTap721DefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"MAX_NUM_WINNERS"`
 */
export const useReadPrizeTap721MaxNumWinners =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'MAX_NUM_WINNERS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"OPERATOR_ROLE"`
 */
export const useReadPrizeTap721OperatorRole =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'OPERATOR_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"_ERC721_RECEIVED"`
 */
export const useReadPrizeTap721Erc721Received =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: '_ERC721_RECEIVED',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"getParticipants"`
 */
export const useReadPrizeTap721GetParticipants =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'getParticipants',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadPrizeTap721GetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"getWinners"`
 */
export const useReadPrizeTap721GetWinners = /*#__PURE__*/ createUseReadContract(
  {
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'getWinners',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"getWinnersCount"`
 */
export const useReadPrizeTap721GetWinnersCount =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'getWinnersCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"hasRole"`
 */
export const useReadPrizeTap721HasRole = /*#__PURE__*/ createUseReadContract({
  abi: prizeTap721Abi,
  address: prizeTap721Address,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"isParticipated"`
 */
export const useReadPrizeTap721IsParticipated =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'isParticipated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"isWinner"`
 */
export const useReadPrizeTap721IsWinner = /*#__PURE__*/ createUseReadContract({
  abi: prizeTap721Abi,
  address: prizeTap721Address,
  functionName: 'isWinner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"isWinnerClaimed"`
 */
export const useReadPrizeTap721IsWinnerClaimed =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'isWinnerClaimed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"lastNotWinnerIndexes"`
 */
export const useReadPrizeTap721LastNotWinnerIndexes =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'lastNotWinnerIndexes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"lastRaffleId"`
 */
export const useReadPrizeTap721LastRaffleId =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'lastRaffleId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"muon"`
 */
export const useReadPrizeTap721Muon = /*#__PURE__*/ createUseReadContract({
  abi: prizeTap721Abi,
  address: prizeTap721Address,
  functionName: 'muon',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"muonAppId"`
 */
export const useReadPrizeTap721MuonAppId = /*#__PURE__*/ createUseReadContract({
  abi: prizeTap721Abi,
  address: prizeTap721Address,
  functionName: 'muonAppId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"muonPublicKey"`
 */
export const useReadPrizeTap721MuonPublicKey =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'muonPublicKey',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"muonValidGateway"`
 */
export const useReadPrizeTap721MuonValidGateway =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'muonValidGateway',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"onERC721Received"`
 */
export const useReadPrizeTap721OnErc721Received =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"participantPositions"`
 */
export const useReadPrizeTap721ParticipantPositions =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'participantPositions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"paused"`
 */
export const useReadPrizeTap721Paused = /*#__PURE__*/ createUseReadContract({
  abi: prizeTap721Abi,
  address: prizeTap721Address,
  functionName: 'paused',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"raffleParticipants"`
 */
export const useReadPrizeTap721RaffleParticipants =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'raffleParticipants',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"raffleWinners"`
 */
export const useReadPrizeTap721RaffleWinners =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'raffleWinners',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"raffles"`
 */
export const useReadPrizeTap721Raffles = /*#__PURE__*/ createUseReadContract({
  abi: prizeTap721Abi,
  address: prizeTap721Address,
  functionName: 'raffles',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadPrizeTap721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"validationPeriod"`
 */
export const useReadPrizeTap721ValidationPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'validationPeriod',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__
 */
export const useWritePrizeTap721 = /*#__PURE__*/ createUseWriteContract({
  abi: prizeTap721Abi,
  address: prizeTap721Address,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"claimPrize"`
 */
export const useWritePrizeTap721ClaimPrize =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'claimPrize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"createRaffle"`
 */
export const useWritePrizeTap721CreateRaffle =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'createRaffle',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"grantRole"`
 */
export const useWritePrizeTap721GrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"participateInRaffle"`
 */
export const useWritePrizeTap721ParticipateInRaffle =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'participateInRaffle',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"pause"`
 */
export const useWritePrizeTap721Pause = /*#__PURE__*/ createUseWriteContract({
  abi: prizeTap721Abi,
  address: prizeTap721Address,
  functionName: 'pause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"refundPrize"`
 */
export const useWritePrizeTap721RefundPrize =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'refundPrize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"refundRemainingPrizes"`
 */
export const useWritePrizeTap721RefundRemainingPrizes =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'refundRemainingPrizes',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"rejectRaffle"`
 */
export const useWritePrizeTap721RejectRaffle =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'rejectRaffle',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"renounceRole"`
 */
export const useWritePrizeTap721RenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"revokeRole"`
 */
export const useWritePrizeTap721RevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"setMuonAddress"`
 */
export const useWritePrizeTap721SetMuonAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'setMuonAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"setMuonAppId"`
 */
export const useWritePrizeTap721SetMuonAppId =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'setMuonAppId',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"setMuonGateway"`
 */
export const useWritePrizeTap721SetMuonGateway =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'setMuonGateway',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"setMuonPublicKey"`
 */
export const useWritePrizeTap721SetMuonPublicKey =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'setMuonPublicKey',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"setRaffleRandomNumbers"`
 */
export const useWritePrizeTap721SetRaffleRandomNumbers =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'setRaffleRandomNumbers',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"setValidationPeriod"`
 */
export const useWritePrizeTap721SetValidationPeriod =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'setValidationPeriod',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"setWinners"`
 */
export const useWritePrizeTap721SetWinners =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'setWinners',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"unpause"`
 */
export const useWritePrizeTap721Unpause = /*#__PURE__*/ createUseWriteContract({
  abi: prizeTap721Abi,
  address: prizeTap721Address,
  functionName: 'unpause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"verifyParticipationSig"`
 */
export const useWritePrizeTap721VerifyParticipationSig =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'verifyParticipationSig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"verifyRandomNumberSig"`
 */
export const useWritePrizeTap721VerifyRandomNumberSig =
  /*#__PURE__*/ createUseWriteContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'verifyRandomNumberSig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__
 */
export const useSimulatePrizeTap721 = /*#__PURE__*/ createUseSimulateContract({
  abi: prizeTap721Abi,
  address: prizeTap721Address,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"claimPrize"`
 */
export const useSimulatePrizeTap721ClaimPrize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'claimPrize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"createRaffle"`
 */
export const useSimulatePrizeTap721CreateRaffle =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'createRaffle',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulatePrizeTap721GrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"participateInRaffle"`
 */
export const useSimulatePrizeTap721ParticipateInRaffle =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'participateInRaffle',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"pause"`
 */
export const useSimulatePrizeTap721Pause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"refundPrize"`
 */
export const useSimulatePrizeTap721RefundPrize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'refundPrize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"refundRemainingPrizes"`
 */
export const useSimulatePrizeTap721RefundRemainingPrizes =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'refundRemainingPrizes',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"rejectRaffle"`
 */
export const useSimulatePrizeTap721RejectRaffle =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'rejectRaffle',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulatePrizeTap721RenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulatePrizeTap721RevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"setMuonAddress"`
 */
export const useSimulatePrizeTap721SetMuonAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'setMuonAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"setMuonAppId"`
 */
export const useSimulatePrizeTap721SetMuonAppId =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'setMuonAppId',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"setMuonGateway"`
 */
export const useSimulatePrizeTap721SetMuonGateway =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'setMuonGateway',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"setMuonPublicKey"`
 */
export const useSimulatePrizeTap721SetMuonPublicKey =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'setMuonPublicKey',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"setRaffleRandomNumbers"`
 */
export const useSimulatePrizeTap721SetRaffleRandomNumbers =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'setRaffleRandomNumbers',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"setValidationPeriod"`
 */
export const useSimulatePrizeTap721SetValidationPeriod =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'setValidationPeriod',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"setWinners"`
 */
export const useSimulatePrizeTap721SetWinners =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'setWinners',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"unpause"`
 */
export const useSimulatePrizeTap721Unpause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"verifyParticipationSig"`
 */
export const useSimulatePrizeTap721VerifyParticipationSig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'verifyParticipationSig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link prizeTap721Abi}__ and `functionName` set to `"verifyRandomNumberSig"`
 */
export const useSimulatePrizeTap721VerifyRandomNumberSig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    functionName: 'verifyRandomNumberSig',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTap721Abi}__
 */
export const useWatchPrizeTap721Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTap721Abi}__ and `eventName` set to `"Participate"`
 */
export const useWatchPrizeTap721ParticipateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    eventName: 'Participate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTap721Abi}__ and `eventName` set to `"Paused"`
 */
export const useWatchPrizeTap721PausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTap721Abi}__ and `eventName` set to `"PrizeClaimed"`
 */
export const useWatchPrizeTap721PrizeClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    eventName: 'PrizeClaimed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTap721Abi}__ and `eventName` set to `"PrizeRefunded"`
 */
export const useWatchPrizeTap721PrizeRefundedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    eventName: 'PrizeRefunded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTap721Abi}__ and `eventName` set to `"RaffleCreated"`
 */
export const useWatchPrizeTap721RaffleCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    eventName: 'RaffleCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTap721Abi}__ and `eventName` set to `"RaffleRejected"`
 */
export const useWatchPrizeTap721RaffleRejectedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    eventName: 'RaffleRejected',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTap721Abi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchPrizeTap721RoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTap721Abi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchPrizeTap721RoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTap721Abi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchPrizeTap721RoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTap721Abi}__ and `eventName` set to `"Unpaused"`
 */
export const useWatchPrizeTap721UnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link prizeTap721Abi}__ and `eventName` set to `"WinnersSpecified"`
 */
export const useWatchPrizeTap721WinnersSpecifiedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: prizeTap721Abi,
    address: prizeTap721Address,
    eventName: 'WinnersSpecified',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTapAbi}__
 */
export const useReadTokenTap = /*#__PURE__*/ createUseReadContract({
  abi: tokenTapAbi,
  address: tokenTapAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"DAO_ROLE"`
 */
export const useReadTokenTapDaoRole = /*#__PURE__*/ createUseReadContract({
  abi: tokenTapAbi,
  address: tokenTapAddress,
  functionName: 'DAO_ROLE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadTokenTapDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"distributions"`
 */
export const useReadTokenTapDistributions = /*#__PURE__*/ createUseReadContract(
  { abi: tokenTapAbi, address: tokenTapAddress, functionName: 'distributions' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadTokenTapGetRoleAdmin = /*#__PURE__*/ createUseReadContract({
  abi: tokenTapAbi,
  address: tokenTapAddress,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadTokenTapHasRole = /*#__PURE__*/ createUseReadContract({
  abi: tokenTapAbi,
  address: tokenTapAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"lastDistributionId"`
 */
export const useReadTokenTapLastDistributionId =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'lastDistributionId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"muon"`
 */
export const useReadTokenTapMuon = /*#__PURE__*/ createUseReadContract({
  abi: tokenTapAbi,
  address: tokenTapAddress,
  functionName: 'muon',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"muonAppId"`
 */
export const useReadTokenTapMuonAppId = /*#__PURE__*/ createUseReadContract({
  abi: tokenTapAbi,
  address: tokenTapAddress,
  functionName: 'muonAppId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"muonPublicKey"`
 */
export const useReadTokenTapMuonPublicKey = /*#__PURE__*/ createUseReadContract(
  { abi: tokenTapAbi, address: tokenTapAddress, functionName: 'muonPublicKey' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"muonValidGateway"`
 */
export const useReadTokenTapMuonValidGateway =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'muonValidGateway',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadTokenTapSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"usedClaims"`
 */
export const useReadTokenTapUsedClaims = /*#__PURE__*/ createUseReadContract({
  abi: tokenTapAbi,
  address: tokenTapAddress,
  functionName: 'usedClaims',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTapAbi}__
 */
export const useWriteTokenTap = /*#__PURE__*/ createUseWriteContract({
  abi: tokenTapAbi,
  address: tokenTapAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"claimToken"`
 */
export const useWriteTokenTapClaimToken = /*#__PURE__*/ createUseWriteContract({
  abi: tokenTapAbi,
  address: tokenTapAddress,
  functionName: 'claimToken',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"distributeToken"`
 */
export const useWriteTokenTapDistributeToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'distributeToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteTokenTapGrantRole = /*#__PURE__*/ createUseWriteContract({
  abi: tokenTapAbi,
  address: tokenTapAddress,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteTokenTapRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteTokenTapRevokeRole = /*#__PURE__*/ createUseWriteContract({
  abi: tokenTapAbi,
  address: tokenTapAddress,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"setMuonAddress"`
 */
export const useWriteTokenTapSetMuonAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'setMuonAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"setMuonAppId"`
 */
export const useWriteTokenTapSetMuonAppId =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'setMuonAppId',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"setMuonGateway"`
 */
export const useWriteTokenTapSetMuonGateway =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'setMuonGateway',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"setMuonPublicKey"`
 */
export const useWriteTokenTapSetMuonPublicKey =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'setMuonPublicKey',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"withdrawReaminingTokens"`
 */
export const useWriteTokenTapWithdrawReaminingTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'withdrawReaminingTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTapAbi}__
 */
export const useSimulateTokenTap = /*#__PURE__*/ createUseSimulateContract({
  abi: tokenTapAbi,
  address: tokenTapAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"claimToken"`
 */
export const useSimulateTokenTapClaimToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'claimToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"distributeToken"`
 */
export const useSimulateTokenTapDistributeToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'distributeToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateTokenTapGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateTokenTapRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateTokenTapRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"setMuonAddress"`
 */
export const useSimulateTokenTapSetMuonAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'setMuonAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"setMuonAppId"`
 */
export const useSimulateTokenTapSetMuonAppId =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'setMuonAppId',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"setMuonGateway"`
 */
export const useSimulateTokenTapSetMuonGateway =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'setMuonGateway',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"setMuonPublicKey"`
 */
export const useSimulateTokenTapSetMuonPublicKey =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'setMuonPublicKey',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTapAbi}__ and `functionName` set to `"withdrawReaminingTokens"`
 */
export const useSimulateTokenTapWithdrawReaminingTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    functionName: 'withdrawReaminingTokens',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenTapAbi}__
 */
export const useWatchTokenTapEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: tokenTapAbi,
  address: tokenTapAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenTapAbi}__ and `eventName` set to `"DistributionRefunded"`
 */
export const useWatchTokenTapDistributionRefundedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    eventName: 'DistributionRefunded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenTapAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchTokenTapRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenTapAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchTokenTapRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenTapAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchTokenTapRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenTapAbi}__ and `eventName` set to `"TokenDistributed"`
 */
export const useWatchTokenTapTokenDistributedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    eventName: 'TokenDistributed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenTapAbi}__ and `eventName` set to `"TokensClaimed"`
 */
export const useWatchTokenTapTokensClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenTapAbi,
    address: tokenTapAddress,
    eventName: 'TokensClaimed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__
 */
export const useReadUnitapEvmTokenTap = /*#__PURE__*/ createUseReadContract({
  abi: unitapEvmTokenTapAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"DAO_ROLE"`
 */
export const useReadUnitapEvmTokenTapDaoRole =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'DAO_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadUnitapEvmTokenTapDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"distributions"`
 */
export const useReadUnitapEvmTokenTapDistributions =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'distributions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadUnitapEvmTokenTapGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadUnitapEvmTokenTapHasRole =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"lastDistributionId"`
 */
export const useReadUnitapEvmTokenTapLastDistributionId =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'lastDistributionId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"muon"`
 */
export const useReadUnitapEvmTokenTapMuon = /*#__PURE__*/ createUseReadContract(
  { abi: unitapEvmTokenTapAbi, functionName: 'muon' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"muonAppId"`
 */
export const useReadUnitapEvmTokenTapMuonAppId =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'muonAppId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"muonPublicKey"`
 */
export const useReadUnitapEvmTokenTapMuonPublicKey =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'muonPublicKey',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"muonValidGateway"`
 */
export const useReadUnitapEvmTokenTapMuonValidGateway =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'muonValidGateway',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadUnitapEvmTokenTapSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"usedClaims"`
 */
export const useReadUnitapEvmTokenTapUsedClaims =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'usedClaims',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__
 */
export const useWriteUnitapEvmTokenTap = /*#__PURE__*/ createUseWriteContract({
  abi: unitapEvmTokenTapAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"claimToken"`
 */
export const useWriteUnitapEvmTokenTapClaimToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'claimToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"distributeToken"`
 */
export const useWriteUnitapEvmTokenTapDistributeToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'distributeToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteUnitapEvmTokenTapGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteUnitapEvmTokenTapRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteUnitapEvmTokenTapRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"setMuonAddress"`
 */
export const useWriteUnitapEvmTokenTapSetMuonAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'setMuonAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"setMuonAppId"`
 */
export const useWriteUnitapEvmTokenTapSetMuonAppId =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'setMuonAppId',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"setMuonGateway"`
 */
export const useWriteUnitapEvmTokenTapSetMuonGateway =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'setMuonGateway',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"setMuonPublicKey"`
 */
export const useWriteUnitapEvmTokenTapSetMuonPublicKey =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'setMuonPublicKey',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"withdrawReaminingTokens"`
 */
export const useWriteUnitapEvmTokenTapWithdrawReaminingTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'withdrawReaminingTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__
 */
export const useSimulateUnitapEvmTokenTap =
  /*#__PURE__*/ createUseSimulateContract({ abi: unitapEvmTokenTapAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"claimToken"`
 */
export const useSimulateUnitapEvmTokenTapClaimToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'claimToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"distributeToken"`
 */
export const useSimulateUnitapEvmTokenTapDistributeToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'distributeToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateUnitapEvmTokenTapGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateUnitapEvmTokenTapRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateUnitapEvmTokenTapRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"setMuonAddress"`
 */
export const useSimulateUnitapEvmTokenTapSetMuonAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'setMuonAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"setMuonAppId"`
 */
export const useSimulateUnitapEvmTokenTapSetMuonAppId =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'setMuonAppId',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"setMuonGateway"`
 */
export const useSimulateUnitapEvmTokenTapSetMuonGateway =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'setMuonGateway',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"setMuonPublicKey"`
 */
export const useSimulateUnitapEvmTokenTapSetMuonPublicKey =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'setMuonPublicKey',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `functionName` set to `"withdrawReaminingTokens"`
 */
export const useSimulateUnitapEvmTokenTapWithdrawReaminingTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapEvmTokenTapAbi,
    functionName: 'withdrawReaminingTokens',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__
 */
export const useWatchUnitapEvmTokenTapEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: unitapEvmTokenTapAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `eventName` set to `"DistributionRefunded"`
 */
export const useWatchUnitapEvmTokenTapDistributionRefundedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapEvmTokenTapAbi,
    eventName: 'DistributionRefunded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchUnitapEvmTokenTapRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapEvmTokenTapAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchUnitapEvmTokenTapRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapEvmTokenTapAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchUnitapEvmTokenTapRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapEvmTokenTapAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `eventName` set to `"TokenDistributed"`
 */
export const useWatchUnitapEvmTokenTapTokenDistributedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapEvmTokenTapAbi,
    eventName: 'TokenDistributed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapEvmTokenTapAbi}__ and `eventName` set to `"TokensClaimed"`
 */
export const useWatchUnitapEvmTokenTapTokensClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapEvmTokenTapAbi,
    eventName: 'TokensClaimed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassAbi}__
 */
export const useReadUnitapPass = /*#__PURE__*/ createUseReadContract({
  abi: unitapPassAbi,
  address: unitapPassAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadUnitapPassDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"MINTER_ROLE"`
 */
export const useReadUnitapPassMinterRole = /*#__PURE__*/ createUseReadContract({
  abi: unitapPassAbi,
  address: unitapPassAddress,
  functionName: 'MINTER_ROLE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadUnitapPassBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: unitapPassAbi,
  address: unitapPassAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"baseURI"`
 */
export const useReadUnitapPassBaseUri = /*#__PURE__*/ createUseReadContract({
  abi: unitapPassAbi,
  address: unitapPassAddress,
  functionName: 'baseURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadUnitapPassGetApproved = /*#__PURE__*/ createUseReadContract(
  {
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'getApproved',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadUnitapPassGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadUnitapPassHasRole = /*#__PURE__*/ createUseReadContract({
  abi: unitapPassAbi,
  address: unitapPassAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadUnitapPassIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"name"`
 */
export const useReadUnitapPassName = /*#__PURE__*/ createUseReadContract({
  abi: unitapPassAbi,
  address: unitapPassAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadUnitapPassOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: unitapPassAbi,
  address: unitapPassAddress,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadUnitapPassSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadUnitapPassSymbol = /*#__PURE__*/ createUseReadContract({
  abi: unitapPassAbi,
  address: unitapPassAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"tokenIdCounter"`
 */
export const useReadUnitapPassTokenIdCounter =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'tokenIdCounter',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadUnitapPassTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: unitapPassAbi,
  address: unitapPassAddress,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassAbi}__
 */
export const useWriteUnitapPass = /*#__PURE__*/ createUseWriteContract({
  abi: unitapPassAbi,
  address: unitapPassAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteUnitapPassApprove = /*#__PURE__*/ createUseWriteContract({
  abi: unitapPassAbi,
  address: unitapPassAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteUnitapPassGrantRole = /*#__PURE__*/ createUseWriteContract(
  { abi: unitapPassAbi, address: unitapPassAddress, functionName: 'grantRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteUnitapPassRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteUnitapPassRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"safeMint"`
 */
export const useWriteUnitapPassSafeMint = /*#__PURE__*/ createUseWriteContract({
  abi: unitapPassAbi,
  address: unitapPassAddress,
  functionName: 'safeMint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteUnitapPassSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteUnitapPassSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"setBaseURI"`
 */
export const useWriteUnitapPassSetBaseUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteUnitapPassTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassAbi}__
 */
export const useSimulateUnitapPass = /*#__PURE__*/ createUseSimulateContract({
  abi: unitapPassAbi,
  address: unitapPassAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateUnitapPassApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateUnitapPassGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateUnitapPassRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateUnitapPassRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"safeMint"`
 */
export const useSimulateUnitapPassSafeMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'safeMint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateUnitapPassSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateUnitapPassSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"setBaseURI"`
 */
export const useSimulateUnitapPassSetBaseUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateUnitapPassTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassAbi}__
 */
export const useWatchUnitapPassEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassAbi,
    address: unitapPassAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchUnitapPassApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchUnitapPassApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchUnitapPassRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchUnitapPassRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchUnitapPassRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassAbi}__ and `eventName` set to `"SetBaseURI"`
 */
export const useWatchUnitapPassSetBaseUriEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    eventName: 'SetBaseURI',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchUnitapPassTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassAbi,
    address: unitapPassAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__
 */
export const useReadUnitapPassBatchSale = /*#__PURE__*/ createUseReadContract({
  abi: unitapPassBatchSaleAbi,
  address: unitapPassBatchSaleAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `functionName` set to `"MAX_SALE_COUNT"`
 */
export const useReadUnitapPassBatchSaleMaxSaleCount =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    functionName: 'MAX_SALE_COUNT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `functionName` set to `"batchSize"`
 */
export const useReadUnitapPassBatchSaleBatchSize =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    functionName: 'batchSize',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `functionName` set to `"batchSoldCount"`
 */
export const useReadUnitapPassBatchSaleBatchSoldCount =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    functionName: 'batchSoldCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `functionName` set to `"owner"`
 */
export const useReadUnitapPassBatchSaleOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `functionName` set to `"price"`
 */
export const useReadUnitapPassBatchSalePrice =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    functionName: 'price',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `functionName` set to `"safe"`
 */
export const useReadUnitapPassBatchSaleSafe =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    functionName: 'safe',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `functionName` set to `"totalSoldCount"`
 */
export const useReadUnitapPassBatchSaleTotalSoldCount =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    functionName: 'totalSoldCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `functionName` set to `"unitapPass"`
 */
export const useReadUnitapPassBatchSaleUnitapPass =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    functionName: 'unitapPass',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__
 */
export const useWriteUnitapPassBatchSale = /*#__PURE__*/ createUseWriteContract(
  { abi: unitapPassBatchSaleAbi, address: unitapPassBatchSaleAddress },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `functionName` set to `"multiMint"`
 */
export const useWriteUnitapPassBatchSaleMultiMint =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    functionName: 'multiMint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteUnitapPassBatchSaleRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `functionName` set to `"startBatch"`
 */
export const useWriteUnitapPassBatchSaleStartBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    functionName: 'startBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteUnitapPassBatchSaleTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `functionName` set to `"withdrawETH"`
 */
export const useWriteUnitapPassBatchSaleWithdrawEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    functionName: 'withdrawETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__
 */
export const useSimulateUnitapPassBatchSale =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `functionName` set to `"multiMint"`
 */
export const useSimulateUnitapPassBatchSaleMultiMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    functionName: 'multiMint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateUnitapPassBatchSaleRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `functionName` set to `"startBatch"`
 */
export const useSimulateUnitapPassBatchSaleStartBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    functionName: 'startBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateUnitapPassBatchSaleTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `functionName` set to `"withdrawETH"`
 */
export const useSimulateUnitapPassBatchSaleWithdrawEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    functionName: 'withdrawETH',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__
 */
export const useWatchUnitapPassBatchSaleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `eventName` set to `"MultiMint"`
 */
export const useWatchUnitapPassBatchSaleMultiMintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    eventName: 'MultiMint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchUnitapPassBatchSaleOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `eventName` set to `"StartBatch"`
 */
export const useWatchUnitapPassBatchSaleStartBatchEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    eventName: 'StartBatch',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassBatchSaleAbi}__ and `eventName` set to `"WithdrawETH"`
 */
export const useWatchUnitapPassBatchSaleWithdrawEthEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassBatchSaleAbi,
    address: unitapPassBatchSaleAddress,
    eventName: 'WithdrawETH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassMainAbi}__
 */
export const useReadUnitapPassMain = /*#__PURE__*/ createUseReadContract({
  abi: unitapPassMainAbi,
  address: unitapPassMainAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadUnitapPassMainDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"MINTER_ROLE"`
 */
export const useReadUnitapPassMainMinterRole =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'MINTER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadUnitapPassMainBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"baseURI"`
 */
export const useReadUnitapPassMainBaseUri = /*#__PURE__*/ createUseReadContract(
  {
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'baseURI',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadUnitapPassMainGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadUnitapPassMainGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadUnitapPassMainHasRole = /*#__PURE__*/ createUseReadContract(
  {
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'hasRole',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadUnitapPassMainIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"name"`
 */
export const useReadUnitapPassMainName = /*#__PURE__*/ createUseReadContract({
  abi: unitapPassMainAbi,
  address: unitapPassMainAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadUnitapPassMainOwnerOf = /*#__PURE__*/ createUseReadContract(
  {
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'ownerOf',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadUnitapPassMainSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadUnitapPassMainSymbol = /*#__PURE__*/ createUseReadContract({
  abi: unitapPassMainAbi,
  address: unitapPassMainAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"tokenIdCounter"`
 */
export const useReadUnitapPassMainTokenIdCounter =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'tokenIdCounter',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadUnitapPassMainTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassMainAbi}__
 */
export const useWriteUnitapPassMain = /*#__PURE__*/ createUseWriteContract({
  abi: unitapPassMainAbi,
  address: unitapPassMainAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteUnitapPassMainApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteUnitapPassMainGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteUnitapPassMainRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteUnitapPassMainRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"safeMint"`
 */
export const useWriteUnitapPassMainSafeMint =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'safeMint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteUnitapPassMainSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteUnitapPassMainSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"setBaseURI"`
 */
export const useWriteUnitapPassMainSetBaseUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteUnitapPassMainTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassMainAbi}__
 */
export const useSimulateUnitapPassMain =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateUnitapPassMainApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateUnitapPassMainGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateUnitapPassMainRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateUnitapPassMainRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"safeMint"`
 */
export const useSimulateUnitapPassMainSafeMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'safeMint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateUnitapPassMainSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateUnitapPassMainSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"setBaseURI"`
 */
export const useSimulateUnitapPassMainSetBaseUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link unitapPassMainAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateUnitapPassMainTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassMainAbi}__
 */
export const useWatchUnitapPassMainEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassMainAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchUnitapPassMainApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassMainAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchUnitapPassMainApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassMainAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchUnitapPassMainRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassMainAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchUnitapPassMainRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassMainAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchUnitapPassMainRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassMainAbi}__ and `eventName` set to `"SetBaseURI"`
 */
export const useWatchUnitapPassMainSetBaseUriEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    eventName: 'SetBaseURI',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link unitapPassMainAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchUnitapPassMainTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: unitapPassMainAbi,
    address: unitapPassMainAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })
