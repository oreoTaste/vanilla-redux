import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    id: Date.now()
                }
            ]
        case DELETE_TODO:
            return state.filter(el => el.id !== parseInt(action.id));
        default:
            return state;
    }
}
const store = createStore(reducer);

const addObject = (toDo) => {return {type: ADD_TODO, text: toDo};}
const deleteObject = (id) => {return {type: DELETE_TODO, id};}

const onSubmit = (e) => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    store.dispatch(addObject(toDo))
}

form.addEventListener("submit", onSubmit)

const deleteBtn = (e) => {
    const li = e.target.parentNode;
    store.dispatch(deleteObject(li.id));
}

const paintToDos = () => {
    ul.innerHTML = "";
    store.getState().forEach((toDo) => {
        const li = document.createElement("li");
        li.innerText = toDo.text;
        li.id = toDo.id;
        const btn = document.createElement("button");
        btn.innerHTML = "X";
        btn.addEventListener("click", deleteBtn);
        li.appendChild(btn);
        ul.appendChild(li);
    });
}

store.subscribe(paintToDos);