import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const css = require('../../sass/base.scss')


class SnakeGame extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cells: [],
            cellSize: 30,
            totalCols: 20,
            totalRows: 20
        }
    }

    componentDidMount() {
        this.drawGrid()
    }

    drawGrid() {
        const gridCellStyle = {
            height: this.state.cellSize,
            width: this.state.cellSize
        }
        let cells = cells || []

        // loop through each cell. creating the grid
        for (let row = 0; row < this.state.totalRows; row++) {
            for (let col = 0; col < this.state.totalCols; col++) {
                cells.push(<span className='grid-cell' id={`${row}-${col}`} key={`${row}-${col}`} style={gridCellStyle}></span>)
            }
        }

        this.setState({cells: cells})
    }


    render() {
        let cells = cells || []


        return (

            <div>
                <h1>Snake Game</h1>
                <div
                    id='grid'
                    style={{
                        height: this.state.cellSize * this.state.totalCols,
                        width: this.state.cellSize * this.state.totalRows
                    }}
                >
                    {this.state.cells}
                </div>
            </div>

        )
    }

}


ReactDOM.render(<SnakeGame />, document.getElementById('app'))
