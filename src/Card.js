import React from "react"
import "./styles/Card.css"

function Card({ property, attributes, url }) {
  return (
    <div className="card" onClick={() => window.open(url, "_blank")}>
      <p className="card__header">{property}</p>
      <div className="card__body">
        <p>
          {Object.keys(attributes).map((key, index) =>
            attributes[key].map((attribute, i) =>
              i < attributes[key].length - 1 ||
              index < Object.keys(attributes).length - 1 ? (
                <span className={key}>
                  {attribute}
                  <span className="plain"> | </span>
                </span>
              ) : (
                <span className={key}>{attribute}</span>
              )
            )
          )}
        </p>
      </div>
    </div>
  )
}

export default Card
