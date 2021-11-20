import React from 'react'
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { Gambler } from './game'

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
// ]

export default function Graph(props: { data: Gambler[] }) {
  const { data } = props
  const formatted = data.map((data, index) => ({
    ...data,
    name: `${index}`,
  }))
  return (
    <ResponsiveContainer
      width='100%'
      height='100%'
      minWidth={300}
      minHeight={200}
    >
      <LineChart width={300} height={300} data={formatted}>
        <XAxis dataKey='name' />

        <Tooltip />

        <Line
          type='monotone'
          dataKey='currentBet'
          stroke='#6200ff'
          strokeWidth={2}
        />
        <Line
          type='monotone'
          dataKey='currentWallet'
          stroke='#00ff2a'
          strokeWidth={2}
        />
        <Line
          type='monotone'
          dataKey='lossCount'
          stroke='#ff0000'
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
