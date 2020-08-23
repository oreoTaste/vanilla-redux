import React from "react";
import { connect } from "react-redux";

function Detail({toDos}) {
    return (
        <>
            <h1>세부내용</h1>
            <p>- 내용 : {toDos?.text}</p>
            <p>- 시간 : {Date(toDos?.id).toLocaleString()}</p>
        </>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        toDos: state.find(toDo => toDo.id === parseInt(ownProps.match.params.id))
    }
}

export default connect(mapStateToProps) (Detail);