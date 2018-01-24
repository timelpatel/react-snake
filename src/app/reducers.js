const reducer = (state = {
    foodPosition: [],
    snakeBody: [[1,2],[1,3]],
    snakeDirection: 'RIGHT',
    snakeLength: 2,
    snakePosition: [1,1],
}, action) => {

    switch (action.type) {
        case 'MAKE_FOOD':
            return {
                // ...state,
                food: action.x
            }

        case 'EAT_FOOD':
            return {
                // ...state,
                snake: action.eatFood
            }

        default:
            return state
    }
}


export default reducer
