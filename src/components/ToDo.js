import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";
import Detail from "../routes/Detail";

function ToDo({toDos, deleteToDo}) {

    const onClick = (e) => {
        deleteToDo(e.target.parentNode.id);
    }

    return toDos.map(toDo => 
        <li key={toDo.id} id={toDo.id}>
            {/* <Link to={{pathname: `/${toDo.id}`,
                       state: { text: toDo.text }
                       }}> */}
            <Link to={`/${toDo.id}`}>
            {toDo.text}
            </Link>
            <button onClick={onClick}>X</button>
        </li>
    )
}

function mapDispatchToProps(dispatch, ownProps) {
    console.log(ownProps)
    return {
        deleteToDo: (id) => dispatch(actionCreators.deleteToDo(id)),
    };
}

export default connect(null, mapDispatchToProps) (ToDo);