import { createStore } from "redux";

const plus = document.querySelector("#plus");
const result = document.querySelector("#result");
const minus = document.querySelector("#minus");

const PLUS = "PLUS";
const MINUS = "MINUS";

const plusObject = {type: PLUS}
const minusObject = {type: MINUS}

const reducer = (state = 0, action) => {
    switch(action.type) {
        case PLUS:
            return parseInt(state) + 1;
        case MINUS:
            return parseInt(state) - 1;
        default:
            return parseInt(state);
    }
}

const store = createStore(reducer);

store.subscribe(() => {
    result.innerText = store.getState();
});

plus.addEventListener("click", () => {
    store.dispatch(plusObject);
})

minus.addEventListener("click", () => {
    store.dispatch(minusObject);
})

