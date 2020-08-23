import { createStore } from "redux";

const addToDo = (text) => {
    return {
        type: ADD,
        text,
        id: Date.now(),
    }
}

const deleteToDo = (id) => {
    return {
        type: DELETE,
        id: Date.now(),
    }
}

const ADD = "ADD";
const DELETE = "DELETE";

const reducer = (state = [], action)=> {
    switch(action.type) {
        case ADD:
            return [{text: action.text, id: action.id}, ...state];
        case DELETE:
            return state.filter(toDos => toDos.id !== action.id);
        default:
            return state;
    }
}

const store = createStore(reducer);

// store.dispatch(addToDo);
// store.subscribe(() => {
// });

export const actionCreators = {
    addToDo,
    deleteToDo,
}
export default store;