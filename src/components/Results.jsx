import React from "react";
import "bulma";
import Recipe from "./Recipe";
export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drink: "",
      seeRecipe: false,
    };
  }
  getDrink(drink) {
    console.log(drink);
    this.setState({
      drink: drink,
      seeRecipe: !this.state.seeRecipe,
    });
  }
  goBack() {
    this.setState({
      seeRecipe: !this.state.seeRecipe,
    });
  }
  render() {
    return (
      <div>
        {this.state.seeRecipe ? (
          <Recipe drink={this.state.drink} goBack={() => this.goBack()} />
        ) : (
          <div className="drinks">
            {this.props.drinks.map((drink) => {
              return (
                <div key={drink.idDrink} className="drink">
                  <h3 className="cocktailName">{drink.strDrink}</h3>
                  <img
                    className="thumb"
                    src={drink.strDrinkThumb}
                    alt="cocktail"
                    height="200px"
                    width="200px"
                  />
                  <span className="icons" onClick={() => this.getDrink(drink)}>
                    {/* getDrink() function takes in {drink} as a parameter and saves it on drink state*/}
                    <i className="fas fa-cocktail"> Recipe</i>
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
