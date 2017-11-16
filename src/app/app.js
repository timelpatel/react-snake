import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const css = require('../../sass/base.scss')


class SnakeGame extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cellSize: 30,
            foodPosition: [Math.floor(Math.random() * 19), Math.floor(Math.random() * 19)],
            snakeBody: [[1,1],[1,0]],
            snakeDirection: 'RIGHT',
            snakeHeadPosition: [1,2],
            snakeLength: 2,
            totalCols: 20,
            totalRows: 20
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown.bind(this))

        setInterval(() => {
            this.moveSnake()
        }, 120)
    }

    moveSnake() {
        let x = this.state.snakeHeadPosition[1]
        let y = this.state.snakeHeadPosition[0]
        let newX, newY

        if (this.state.snakeDirection === 'LEFT') {
            newX = x - 1
            newY = y
        } else if (this.state.snakeDirection === 'UP') {
            newX = x
            newY = y - 1
        } else if (this.state.snakeDirection === 'RIGHT') {
            newX = x + 1
            newY = y
        } else if (this.state.snakeDirection === 'DOWN') {
            newX = x
            newY = y + 1
        }

        this.setState({snakeHeadPosition: [newY, newX]})

        // food eaten?
        if (JSON.stringify(this.state.snakeHeadPosition) == JSON.stringify(this.state.foodPosition)) {
            this.eatFood()
        }
    }

    handleKeyDown(event) {
        const KEY = {left: 37, up: 38, right: 39, down: 40}

        if (event.keyCode == KEY.left && this.state.snakeDirection != 'RIGHT') {
            this.setState({snakeDirection: 'LEFT'})
        } else if (event.keyCode == KEY.up && this.state.snakeDirection != 'DOWN') {
            this.setState({snakeDirection: 'UP'})
        } else if (event.keyCode == KEY.right && this.state.snakeDirection != 'LEFT') {
            this.setState({snakeDirection: 'RIGHT'})
        } else if (event.keyCode == KEY.down && this.state.snakeDirection != 'UP') {
            this.setState({snakeDirection: 'DOWN'})
        }
    }

    eatFood() {
        this.setState({
            foodPosition: [Math.floor(Math.random() * 19), Math.floor(Math.random() * 19)],
            snakeLength: this.state.snakeLength + 1
        })
    }


    render() {
        const gridCellStyle = {
            height: this.state.cellSize,
            width: this.state.cellSize
        }

        let cells = cells || []

        // loop through each cell of the grid
        for (let row = 0; row < this.state.totalRows; row++) {
            for (let col = 0; col < this.state.totalCols; col++) {

                if (row == this.state.foodPosition[0] && col == this.state.foodPosition[1]) {
                    cells.push(<span className='grid food' id={`${row}-${col}`} key={`${row}-${col}`} style={gridCellStyle}></span>)
                } else if (row == this.state.snakeHeadPosition[0] && col == this.state.snakeHeadPosition[1]) {
                    cells.push(<span className='grid snake' id={`${row}-${col}`} key={`${row}-${col}`} style={gridCellStyle}></span>)
                } else {
                    cells.push(<span className='grid cell' id={`${row}-${col}`} key={`${row}-${col}`} style={gridCellStyle}></span>)
                }

            }
        }


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
                    {cells}
                </div>
            </div>

        )
    }

}


ReactDOM.render(<SnakeGame />, document.getElementById('app'))
