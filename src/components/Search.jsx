import React from "react";
import "bulma";

export default class Search extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="searchBar">
          <form onSubmit={this.props.handleSubmit} className="form">
            <div className="control">
              <input
                className="input is-rounded is-medium"
                placeholder="search cocktails"
                type="text"
                id="drink"
                value={this.props.drink}
                onChange={this.props.handleChange}
              />
            </div>
            <div>
              <button
                onClick={this.props.handleSubmit}
                class="button is-rounded"
              >
                search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
