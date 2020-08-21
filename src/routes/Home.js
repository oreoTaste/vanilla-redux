import React, { useState } from "react";
import { connect } from "react-redux";

function Home({toDos}) {
  const [text, setText] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setText("");
  }

  function onChange(e) {
    setText(e.target.value);
  }

  return ( 
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  )
}

function mapStateToProps(state, ownProps) {
  return {toDos: state};
}

export default connect(mapStateToProps) (Home);