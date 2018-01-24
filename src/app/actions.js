export function eatFood(eatFood) {
    return dispatch => {
        dispatch ({
            type: 'EAT_FOOD',
            snake: snake
        })
    }
}


export function makeFood(makeFood) {
    return dispatch => {
        dispatch ({
            type: 'MAKE_FOOD',
            food: food
        })
    }
}
