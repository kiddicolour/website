import React from "react"
import Card from "./card"

const Drawings = ({ drawings }) => {

  const leftDrawingsCount = Math.ceil(drawings.length / 5)
  const leftDrawings = drawings.slice(0, leftDrawingsCount)
  const rightDrawings = drawings.slice(leftDrawings, drawings.length)

  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {leftDrawings.map((drawing, i) => {
            return (
              <Card article={drawing} key={`article__${drawing.node.id}`} />
            )
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightDrawings.map((drawing, i) => {
              return (
                <Card article={drawing} key={`article__${drawing.node.id}`} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drawings
