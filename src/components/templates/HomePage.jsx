// React core
import React from 'react'

// Components
import Header from '../modules/Header'
import Card from '../modules/Card'

export default function HomePage() {
  // Data
  const information = require('../../information.json')
  const cards = information.map((item) =>
    <Card key={item.id} prop={item} />
  )

  // Render
  return (
    <div className='HomePage'>
      <Header hasLightTheme={true} />

      <div className='container'>
        <h1 className='title'>Recommended</h1>
        <section className='grid'>
          {cards}
        </section>
      </div>
    </div>
  )
}