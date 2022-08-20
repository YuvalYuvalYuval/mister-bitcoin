import React from 'react'
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines'

export function Chart({ data }) {
  const { name, description, values } = data
  const high = Math.max(...values)
  const low = Math.min(...values)
  return (
    <article className="chart flex column align-center">
      <h2>{name}</h2>
      <Sparklines data={values} width={200} height={120} margin={5}>
        <SparklinesLine color="#f79319" />

        <SparklinesSpots style={{ fill: '#329238' }} />
      </Sparklines>
      <p>{description} (1M)</p>
      <p>High ⬆: {high}</p>
      <p>Low ⬇: {low}</p>
    </article>
  )
}
