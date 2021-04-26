import React from "react";
import "bulma";

export default class Recipe extends React.Component {
  render() {
    return (
      <div className="recipeContainer">
        <button onClick={() => this.props.goBack()}>back</button>
        {/* go back btn on nav bar */}
        <div className="recipe">
          <h1 className="recipeName">{this.props.drink.strDrink}</h1>
          <img
            className="recipeThumb"
            src={this.props.drink.strDrinkThumb}
            alt="cocktail"
            height="200px"
            width="200px"
          />

          {/* <img src={this.props.drink.strDrinkThumb} /> */}
        </div>
      </div>
    );
  }
}
