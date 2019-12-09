import React, { Component } from "react";

export class AddText extends Component {
  render() {
    return (
      <div>
        <h1 style={{ fontSize: "25px" }}>
          Practice: Add, Edit, Delete, Reset, Check, Increment, Decrement,
          Conditional Rendering.
        </h1>
        <form className="add" onSubmit={this.props.handleSubmit}>
          <input
            placeholder="Input Text..."
            className="add-text"
            value={this.props.title}
            type="text"
            onChange={this.props.onChange}
          />
          <input className="add-button" type="submit" />
        </form>
      </div>
    );
  }
}

export default AddText;
