import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store.js'
import Game from './components/Game'


const css = require('../../sass/base.scss')


class SnakeGame extends Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown.bind(this))
        // this.props.makeFood()

        // setInterval(() => {
            // this.moveSnake()
        // }, 120)
    }

    // moveSnake() {
    //     let x = this.state.snakeHeadPosition[1]
    //     let y = this.state.snakeHeadPosition[0]
    //     let newX, newY
    //
    //     if (this.state.snakeDirection === 'LEFT') {
    //         newX = x - 1
    //         newY = y
    //     } else if (this.state.snakeDirection === 'UP') {
    //         newX = x
    //         newY = y - 1
    //     } else if (this.state.snakeDirection === 'RIGHT') {
    //         newX = x + 1
    //         newY = y
    //     } else if (this.state.snakeDirection === 'DOWN') {
    //         newX = x
    //         newY = y + 1
    //     }
    //
    //     this.setState({snakeHeadPosition: [newY, newX]})
    //
    //     // food eaten?
    //     if (JSON.stringify(this.state.snakeHeadPosition) == JSON.stringify(this.state.foodPosition)) {
    //         this.eatFood()
    //     }
    // }

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

    // eatFood() {
    //     this.setState({
    //         foodPosition: [Math.floor(Math.random() * 19), Math.floor(Math.random() * 19)],
    //         snakeLength: this.state.snakeLength + 1
    //     })
    // }


    render() {
        return (

            <div>
                <h1>Snake Game</h1>
                <Game />
            </div>

        )
    }

}


ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('app')
)
