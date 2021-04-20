import React from "react";
import "bulma";
export default class Results extends React.Component {
  render() {
    return (
      <div>
        <div className="recipes">
          {this.props.drinks.map((drink) => {
            return (
              <div className="recipe">
                <h3>{drink.strDrink}</h3>
                <img
                  className="thumb"
                  src={drink.strDrinkThumb}
                  alt="cocktail"
                  height="200px"
                  width="200px"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
