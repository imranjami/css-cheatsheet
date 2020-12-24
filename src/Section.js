import React from "react"
import "./styles/Section.css"
import Card from "./Card"

function Section({ title, cards, id }) {
  return (
    <div className="section" id={id}>
      <h2>{title}</h2>
      <div className="section__content">
        <div className="section__body">
          {cards.map((card) => (
            <Card
              property={card.property}
              attributes={card.attributes}
              url={card.url}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section
