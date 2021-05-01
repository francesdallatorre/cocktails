import React from "react";
import "bulma";

export default class Search extends React.Component {
  render() {
    return (
      <div className="searchBar">
        <form onSubmit={this.props.handleSubmit} className="form">
          <input
            className="input is-rounded is-medium"
            placeholder="search cocktails"
            type="text"
            id="drink"
            value={this.props.drink}
            onChange={this.props.handleChange}
          />
          <button
            className="search-btn button is-rounded"
            onClick={this.props.handleSubmit}
          >
            search
          </button>
        </form>
      </div>
    );
  }
}
