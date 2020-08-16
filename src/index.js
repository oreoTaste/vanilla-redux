import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newState = { text: action.text, id: Date.now() };
      return [newState, ...state];
    case DELETE_TODO:
      return state.filter((word) => word.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text));
};

const dispatchDeleteTodo = (e) => {
  store.dispatch(deleteTodo(e.target.parentNode.id));
};

const paintTodo = () => {
  // without using React (only using Vanilla JS)
  // all the childNode of ul should be replace
  // due to lack of using Virtual DOM
  ul.innerHTML = "";
  const toDos = store.getState();
  toDos.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", dispatchDeleteTodo);
    li.innerText = todo.text;
    li.id = todo.id;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};
store.subscribe(paintTodo);

const createTodo = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddTodo(toDo);
};

form.addEventListener("submit", createTodo);
