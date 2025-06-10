


export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] add todo':
            return [...initialState, action.payload]

        case '[TODO] remove todo':
            return initialState.filter((todo) => todo.id !== action.payload)

        case '[TODO] Toggle todo':
            return initialState.map((todo) => {
                if (todo.id === action.payload) {//id
                    return {
                        ...todo,
                        done: !todo.done    //devuelvo la property done con lo contrario que tiene hasta el momento
                    }
                }
                return todo
            }
            )

        default:
            return initialState
    }

}