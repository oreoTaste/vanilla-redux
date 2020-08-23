import React, { useState } from "react";
import { connect } from "react-redux";
import {actionCreators} from "../store";
import ToDo from "../components/ToDo";

function Home({toDos, addToDo}) {
    const [text, setText] = useState("");

    const onChange = e => {
        e.preventDefault();
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(text);
        setText("");
    }

    return (
        <>
            <h1>To Dos</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>+</button>
            </form>
            <ul>
                <ToDo toDos={toDos}/>
            </ul>
        </>
    );
}

function mapStateToProps(state, ownProps) {
    return { toDos: state };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);