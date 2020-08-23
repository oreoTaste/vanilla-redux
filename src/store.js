import { createStore } from "redux";

const reducer = (state=[], action) => {
    switch(action.type) {
        case "ADD":
            return [{text: action.text, id: action.id = Date.now()} , ...state];
        case "DELETE":
            return state.filter(toDo => toDo.id !== parseInt(action.id));
        default:
            return state;
    }
}

const addToDo = (text) => {
    return {
        type: "ADD",
        text,
    }
}

const deleteToDo = (id) => {
    return {
        type: "DELETE",
        id,
    }
}

export const actionCreators = {
    addToDo, deleteToDo
}

const store = createStore(reducer);

export default store;