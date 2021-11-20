import { random } from 'lodash'

type GameType = 'coin' | 'roulette'

export const runGame = (gambler: Gambler, game: GameType): Gambler => {
  const { initialBet, initialWallet, currentBet, currentWallet, lossCount } =
    gambler

  // run gambler
  const walletWithoutBet = currentWallet - currentBet
  const gamblerBet = random(0, 1)

  // run game
  const odds = 2
  const randomNumber = random(0, 1)

  // if win
  if (gamblerBet === randomNumber) {
    return {
      initialBet,
      currentBet: initialBet,
      initialWallet,
      // return the money and more
      currentWallet: walletWithoutBet + odds * currentBet,
      lossCount,
      gambleType: 'Win',
    }
  }
  // if lose
  else {
    return {
      initialBet,
      // double their next bet
      currentBet: currentBet * 2,
      initialWallet,
      currentWallet: walletWithoutBet,
      lossCount: lossCount + 1,
      gambleType: 'Loss',
    }
  }
}

export interface Gambler {
  initialBet: number
  currentBet: number
  initialWallet: number
  currentWallet: number
  lossCount: number
  gambleType: 'Win' | 'Loss' | string
}

export interface GameState {
  gambler: Gambler
  history: Gambler[]
}
