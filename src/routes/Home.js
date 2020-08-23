import React, { useState } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Home({toDos, addToDo}) {
    const [text, setText] = useState("");

    function onChange(e) {
        e.preventDefault();
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        setText("");
        addToDo(text);
    }

    return (
        <>
            <h1>To Dos</h1>
            <form onSubmit={onSubmit}>
                <input value={text} type="text" onChange={onChange}/>
                <button>ADD</button>
            </form>
            <ul>
                {
                toDos.map(toDo => (
                    <li key={toDo.id} id={toDo.id}>{toDo.text}
                    </li>
                ))
                }
            </ul>
        </>
    );
}

function mapStateToProps(state, ownProps) {
    return { toDos : state };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        addToDo : (text) => dispatch(actionCreators.addToDo(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);