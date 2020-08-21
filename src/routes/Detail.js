import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Detail({toDos, onBtnClick}) {
    console.log(toDos);
    return (
        <>
            <h1>Detail <button onClick={onBtnClick}>X</button></h1>
            <p>{toDos.text}</p>
            <p>created at : {toDos.id}</p>
        </>
    )
}

function mapStateToProps(state, ownProps) {
    const {match: {params: {id}}} = ownProps
    return {toDos: state.find(toDo => toDo.id === parseInt(id))};
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
        id: ownProps.id,
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Detail);
