import React, { Component } from "react";

export class BodyComponent extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          margin: "auto",
          background: "white",
          padding: "10px"
        }}
      >
        <input type="checkbox" onChange={this.props.handleCheck} />
        <p
          style={{
            textDecoration: this.props.text.completed ? "line-through" : "none"
          }}
        >
          {this.props.text.text}
        </p>
        <button onClick={this.props.handleEdit} style={{ fontSize: "20px" }}>
          Edit
        </button>
        {this.props.text.count}
        <button onClick={this.props.increment}>increment</button>
        <button onClick={this.props.decrement} >decrement</button>
        <button onClick={this.props.handleDelete} style={{ fontSize: "20px" }}>
          Delete
        </button>
      </div>
    );
  }
}

export default BodyComponent;
