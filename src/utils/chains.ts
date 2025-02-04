import { Address, BigDecimal, BigInt, dataSource } from '@graphprotocol/graph-ts'


export enum ChainId {
  ABSTRACT_TESTNET = 11124,
  ZERO = 543210,
  BOB = 60808,
  CYBER = 7560,
  SHAPE = 360,
  INK = 57073,
  REDSTONE_GARNET = 17069,
  REDSTONE = 690,
  ABSTRACT = 2741,
  ANIME_TESTNET = 6900,
}

// subgraph does not support string enums, hence these constants
const ABSTRACT_TESTNET = 'abstract-testnet'
const ZERO = 'zero'
const BOB = 'bob'
const CYBER = 'cyeth'
const SHAPE = 'shape'
const REDSTONE = 'redstone'
const REDSTONE_GARNET = 'redstone-garnet'
const INK = 'ink'
const ABSTRACT_MAINNET = 'abstract'
const ANIME_TESTNET = 'anime-testnet'

// Note: All token and pool addresses should be lowercased!
export class SubgraphConfig {

  factoryAddress: string
  stablecoinWrappedNativePairAddress: string
  stablecoinIsToken0: boolean
  wrappedNativeAddress: string
  minimumNativeLocked: BigDecimal
  stablecoinAddresses: string[]
  whitelistTokens: string[]
  pairsToSkip: string[]
  poolMappings: Array<Address[]>
}

export function getSubgraphConfig(): SubgraphConfig {
  // Update this value to the corresponding chain you want to deploy
  const selectedNetwork = dataSource.network()

  // subgraph does not support case switch with strings, hence this if else block
  if (selectedNetwork == ABSTRACT_TESTNET) {
    return {
      factoryAddress: '0xcD87b21B627cB2d695FBc2101cf64F8007F25E07',
      stablecoinWrappedNativePairAddress: '0x70df76cfb544c766aebadc60268bb663b0f26b76', // WETH/USDC
      stablecoinIsToken0: false,
      wrappedNativeAddress: '0x9edcde0257f2386ce177c3a7fcdd97787f0d841d', // WETH
      minimumNativeLocked: BigDecimal.fromString('0'),
      stablecoinAddresses: [
        '0xe4c7fbb0a626ed208021ccaba6be1566905e2dfc', // USDC
      ],
      whitelistTokens: [
        '0x9edcde0257f2386ce177c3a7fcdd97787f0d841d', // WETH
        '0xe4c7fbb0a626ed208021ccaba6be1566905e2dfc', // USDC
      ],
      pairsToSkip: [],
      poolMappings: [],
    }
  } else if (selectedNetwork == ZERO) {
    return {
      factoryAddress: '0x1B4427e212475B12e62f0f142b8AfEf3BC18B559',
      stablecoinWrappedNativePairAddress: '0xfbc528db9e9d50d2006116d04898dadad431bb9f', // USDC/WETH
      stablecoinIsToken0: true, //TODO
      wrappedNativeAddress: '0xac98b49576b1c892ba6bfae08fe1bb0d80cf599c', // WETH
      minimumNativeLocked: BigDecimal.fromString('1'),
      stablecoinAddresses: [
        '0x6a6394f47dd0baf794808f2749c09bd4ee874e70', // USDC
      ],
      whitelistTokens: [
        '0xac98b49576b1c892ba6bfae08fe1bb0d80cf599c', // WETH
        '0x6a6394f47dd0baf794808f2749c09bd4ee874e70', // USDC
      ],
      pairsToSkip: [],
      poolMappings: [],
    }
  } else if (selectedNetwork == CYBER) {
    return {
      factoryAddress: '0x8AdDa31FE63696Ac64DED7D0Ea208102b1358c44',
      stablecoinWrappedNativePairAddress: '0xac2fa62ddade37aab7b37e930dcd190ec7483e73', // USDC/WETH
      stablecoinIsToken0: false,
      wrappedNativeAddress: '0x4200000000000000000000000000000000000006', // WETH
      minimumNativeLocked: BigDecimal.fromString('1'),
      stablecoinAddresses: [
        '0x81759adbf5520ad94da10991dfa29ff147d3337b', // USDC
      ],
      whitelistTokens: [
        '0x4200000000000000000000000000000000000006', // WETH
        '0x81759adbf5520ad94da10991dfa29ff147d3337b', // USDC
      ],
      pairsToSkip: [],
      poolMappings: [],
    }
  } else if (selectedNetwork == SHAPE) {
    return {
      factoryAddress: '0xb411eaf2f2070822b26e372e3ea63c5060ba45e6',
      stablecoinWrappedNativePairAddress: '0x5b348aded5cd0f453278e7050b771ae0cef13727', // USDC.e/WETH
      stablecoinIsToken0: false,
      wrappedNativeAddress: '0x4200000000000000000000000000000000000006', // WETH
      minimumNativeLocked: BigDecimal.fromString('1'),
      stablecoinAddresses: [
        '0xdb7DD8B00EdC5778Fe00B2408bf35C7c054f8BBe', // USDC.e
      ],
      whitelistTokens: [
        '0x4200000000000000000000000000000000000006', // WETH
        '0xdb7DD8B00EdC5778Fe00B2408bf35C7c054f8BBe', // USDC.e
      ],
      pairsToSkip: [],
      poolMappings: [],
    }
  } else if (selectedNetwork == INK) {
    return {
      factoryAddress: '0xfe57a6ba1951f69ae2ed4abe23e0f095df500c04',
      stablecoinWrappedNativePairAddress: '0xfa3a9015e5fd82485835e23260bc98adadca8a01', // USDC/WETH
      stablecoinIsToken0: false,
      wrappedNativeAddress: '0x4200000000000000000000000000000000000006', // WETH
      minimumNativeLocked: BigDecimal.fromString('1'),
      stablecoinAddresses: [
        '0xf1815bd50389c46847f0bda824ec8da914045d14', // USDC
      ],
      whitelistTokens: [
        '0x4200000000000000000000000000000000000006', // WETH
        '0xf1815bd50389c46847f0bda824ec8da914045d14', // USDC
      ],
      pairsToSkip: [],
      poolMappings: [],
    }
  } else if (selectedNetwork == ABSTRACT_MAINNET) {
    return {
      factoryAddress: '0x566d7510dee58360a64c9827257cf6d0dc43985e',
      stablecoinWrappedNativePairAddress: '0x22e77ffe8d3ee3a161f657f235807caf891f5638', // USDC/WETH
      stablecoinIsToken0: false,
      wrappedNativeAddress: '0x3439153eb7af838ad19d56e1571fbd09333c2809', // WETH
      minimumNativeLocked: BigDecimal.fromString('1'),
      stablecoinAddresses: [
        '0x84a71ccd554cc1b02749b35d22f684cc8ec987e1', // USDC
      ],
      whitelistTokens: [
        '0x3439153eb7af838ad19d56e1571fbd09333c2809', // WETH
        '0x84a71ccd554cc1b02749b35d22f684cc8ec987e1', // USDC
      ],
      pairsToSkip: [],
      poolMappings: [],
    }
  } else if (selectedNetwork == ANIME_TESTNET) {
    return {
      factoryAddress: '0x69f2888491eA07BB10936aA110A5E0481122efd3',
      stablecoinWrappedNativePairAddress: '0x185bA3207fee71548c3455a9Ac358809a073a767', // USDC/WETH
      stablecoinIsToken0: false,
      wrappedNativeAddress: '0x8f3e2785985aa4005c63f97f7cc89ce91a948267', // WETH
      minimumNativeLocked: BigDecimal.fromString('1'),
      stablecoinAddresses: [
        '0x69d30a49fcbab7142d604635772b7eef958ae0bd', // USDC
      ],
      whitelistTokens: [
        '0x8f3e2785985aa4005c63f97f7cc89ce91a948267', // WETH
        '0x69d30a49fcbab7142d604635772b7eef958ae0bd', // USDC
      ],
      pairsToSkip: [],
      poolMappings: [],
    }
  } else {
    throw new Error('Unsupported Network')
  }
}