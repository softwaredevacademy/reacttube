// React core
import React, { useState } from 'react'

// Components
import Header from '../modules/Header'
import Card from '../modules/Card'

export default function ResultsPage({ match }) {
  // Data
  const information = require('../../information.json')
  const query = new RegExp(match.params.query, "i")
  const results = information.filter(video => video.title.match(query))

  // Hooks
  const [cards, setCards] = useState(sortCards("title", results))

  // Render
  return (
    <div className='ResultsPage'>
      <Header hasLightTheme={true} />

      <div className='container'>
        Filter results by:
        <button onClick={() => setCards(sortCards("title", results))}>Name</button>
        <button onClick={() => setCards(sortCards("channelName", results))}>Channel</button>
        <hr />

        <section className='grid'>
          {cards}
        </section>
      </div>
    </div>
  )
}

function sortCards(key, data) {
  const sortedResults = data.sort((a, b) => (a[key] > b[key]) ? 1 : -1)
  const renderedCards = sortedResults.map((item) =>
    <Card key={item.id} prop={item} />
  )

  return renderedCards
}