import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {eatFood} from './../actions.js'
// import Food from './Food'
import Grid from './Grid'


class Game extends Component {

    constructor(props) {
        super(props)
        this.state = {
            foodPosition: []
        }
    }

    componentDidMount() {
        // document.addEventListener('keydown', this.handleKeyDown.bind(this))
        this.makeFood()

        setInterval(() => {
            this.makeFood()
        }, 120)
    }

    makeFood() {
        this.setState({
            foodPosition: [Math.floor(Math.random() * 19), Math.floor(Math.random() * 19)]
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.foodPosition}</h1>
                <Grid
                    foodPosition={this.state.foodPosition}
                />
            </div>
        )
    }

}


const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        eatFood: eatFood
    }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        foodPosition: state.foodPosition,
        snakeBody: state.snakeBody,
        snakeDirection: state.snakeDirection,
        snakeLength: state.snakeLength,
        snakePosition: state.snakePosition
    }
}


export default connect(mapStateToProps, matchDispatchToProps) (Game)
