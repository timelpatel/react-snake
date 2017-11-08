import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const css = require('../../sass/base.scss')


class SnakeGame extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        // draw grid
        const cellSize = 30
        let cells = []
        const gridCellStyle = {
            height: cellSize,
            width: cellSize
        }
        const totalCols = 20
        const totalRows = 20

        for (let row = 0; row < totalRows; row++) {
            for (let col = 0; col < totalCols; col++) {
                cells.push(<div className='grid-cell' key={row + '-' + col} style={gridCellStyle}></div>)
            }
        }


        return (

            <div>
                <h1>Snake Game</h1>
                <div
                    id='grid'
                    style={{
                        height: cellSize * totalCols,
                        width: cellSize * totalRows
                    }}
                >
                    {cells}
                </div>
            </div>

        )
    }

}


ReactDOM.render(<SnakeGame />, document.getElementById('app'))
