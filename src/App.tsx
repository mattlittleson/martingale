import { useReducer, useState } from 'react'
import {
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Image,
  Button,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Grid,
} from '@chakra-ui/react'
import monki from './monki.png'
import { Gambler, GameState, runGame } from './game'
import Graph from './Graph'

const initialGambler: Gambler = {
  id: 0,
  initialBet: 0,
  currentBet: 0,
  initialWallet: 0,
  currentWallet: 0,
  lossCount: 0,
  gambleType: '_',
}

const initialState: GameState = {
  history: [],
  gambler: initialGambler,
}

interface SetWallet {
  type: 'setWallet'
  wallet: number
}

interface SetBet {
  type: 'setBet'
  bet: number
}

interface LockIn {
  type: 'lockIn'
}

interface Run {
  type: 'run'
}

interface Reset {
  type: 'reset'
}

type Actions = SetBet | SetWallet | LockIn | Run | Reset

function reducer(state: GameState, action: Actions) {
  const { gambler, history } = state

  switch (action.type) {
    case 'setWallet':
      return {
        history,
        gambler: {
          ...gambler,
          initialWallet: action.wallet,
        },
      }
    case 'setBet':
      return {
        history,
        gambler: {
          ...gambler,
          initialBet: action.bet,
        },
      }
    case 'lockIn':
      return {
        history,
        gambler: {
          ...gambler,
          currentBet: gambler.initialBet,
          currentWallet: gambler.initialWallet,
        },
      }
    case 'run':
      return {
        history: [...history, gambler],
        gambler: runGame(gambler, 'coin'),
      }
    case 'reset':
      return initialState
    default:
      throw new Error()
  }
}

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)
  const { gambler, history } = state
  const { initialWallet, currentWallet, initialBet, currentBet, lossCount } =
    gambler

  return (
    <Container>
      <Stack spacing={4} style={{ marginTop: 16 }}>
        <Text fontSize='2xl'>Martingale betting system</Text>
        <Image boxSize='150px' objectFit='contain' src={monki} alt='monki' />
        <Stack spacing={4} direction='row'>
          <div>
            <Text fontSize='2xl'>Bet</Text>
            <InputGroup>
              <InputLeftElement pointerEvents='none' children='$' />
              <Input
                disabled={history.length > 0}
                placeholder='initial bet'
                value={addCommas(initialBet)}
                onChange={(e) =>
                  dispatch({
                    type: 'setBet',
                    bet: parseInt(removeCommas(e.target.value)) || 0,
                  })
                }
              />
            </InputGroup>
          </div>
          <div>
            <Text fontSize='2xl'>Wallet</Text>
            <InputGroup>
              <InputLeftElement pointerEvents='none' children='$' />
              <Input
                disabled={history.length > 0}
                placeholder='wallet'
                value={addCommas(initialWallet)}
                onChange={(e) =>
                  dispatch({
                    type: 'setWallet',
                    wallet: parseInt(removeCommas(e.target.value)) || 0,
                  })
                }
              />
            </InputGroup>
          </div>
        </Stack>
        <Stack spacing={4} direction='row' style={{ paddingTop: 32 }}>
          <Button
            isFullWidth
            disabled={history.length > 0}
            colorScheme='teal'
            variant='solid'
            onClick={() => {
              dispatch({
                type: 'lockIn',
              })
            }}
          >
            Lock In
          </Button>
          <Button
            colorScheme='teal'
            variant='outline'
            onClick={() => {
              setCurrentIndex(0)
              dispatch({
                type: 'reset',
              })
            }}
          >
            Reset
          </Button>
        </Stack>
        <Grid templateColumns='repeat(4, 1fr)' gap={4}>
          <Text fontSize='1xl' textAlign='center'>
            Current Bet
            <br />${addCommas(currentBet)}
          </Text>
          <Text fontSize='1xl' textAlign='center'>
            Current Wallet
            <br />${addCommas(currentWallet)}
          </Text>

          <Text fontSize='1xl' textAlign='center'>
            Loss Count
            <br />
            {addCommas(lossCount)}
          </Text>
          <Text fontSize='2xl' textAlign='center'>
            {history.length > 0
              ? history[history.length - 1].gambleType
              : undefined}
          </Text>
        </Grid>

        <Graph data={history.slice(currentIndex, history.length - 1)} />
        <Slider
          aria-label='slider-ex-1'
          value={currentIndex}
          min={0}
          max={Math.max(0, history.length - 2)}
          step={1}
          onChange={(val) => setCurrentIndex(val)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Stack direction='row' spacing={4}>
          <Button
            disabled={currentBet === 0 || currentWallet === 0}
            isFullWidth
            colorScheme='teal'
            variant='solid'
            onClick={() => {
              dispatch({
                type: 'run',
              })
            }}
          >
            Bet
          </Button>
          <Button
            disabled={currentBet === 0 || currentWallet === 0}
            colorScheme='orange'
            variant='solid'
            onClick={() => {
              for (let i = 0; i < 100; i++) {
                dispatch({
                  type: 'run',
                })
              }
            }}
          >
            x100
          </Button>
        </Stack>
      </Stack>
    </Container>
  )
}

function addCommas(n: number) {
  return `${n}`.split(/(?=(?:\d{3})+$)/).join(',')
}

function removeCommas(s: string) {
  return `${s}`.replace(/,/gi, '')
}
