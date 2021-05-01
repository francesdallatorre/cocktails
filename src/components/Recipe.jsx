import React from "react";
import "bulma";

export default class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        {
          ingredient: this.props.drink.strIngredient1,
          measurement: this.props.drink.strMeasure1,
        },
        {
          ingredient: this.props.drink.strIngredient2,
          measurement: this.props.drink.strMeasure2,
        },
        {
          ingredient: this.props.drink.strIngredient3,
          measurement: this.props.drink.strMeasure3,
        },
        {
          ingredient: this.props.drink.strIngredient4,
          measurement: this.props.drink.strMeasure4,
        },
        {
          ingredient: this.props.drink.strIngredient5,
          measurement: this.props.drink.strMeasure5,
        },
        {
          ingredient: this.props.drink.strIngredient6,
          measurement: this.props.drink.strMeasure6,
        },
        {
          ingredient: this.props.drink.strIngredient7,
          measurement: this.props.drink.strMeasure7,
        },
        {
          ingredient: this.props.drink.strIngredient8,
          measurement: this.props.drink.strMeasure8,
        },
        {
          ingredient: this.props.drink.strIngredient9,
          measurement: this.props.drink.strMeasure9,
        },
        {
          ingredient: this.props.drink.strIngredient10,
          measurement: this.props.drink.strMeasure10,
        },
        {
          ingredient: this.props.drink.strIngredient11,
          measurement: this.props.drink.strMeasure11,
        },
        {
          ingredient: this.props.drink.strIngredient12,
          measurement: this.props.drink.strMeasure12,
        },
        {
          ingredient: this.props.drink.strIngredient13,
          measurement: this.props.drink.strMeasure13,
        },
        {
          ingredient: this.props.drink.strIngredient14,
          measurement: this.props.drink.strMeasure14,
        },
        {
          ingredient: this.props.drink.strIngredient15,
          measurement: this.props.drink.strMeasure15,
        },
      ],
    };
  }
  render() {
    return (
      <div className="recipe">
        <icon
          className="back fas fa-backward"
          onClick={() => this.props.goBack()}
        >
          {" "}
        </icon>
        <div className="card">
          <h3 className="drink-name title is-3">{this.props.drink.strDrink}</h3>
          <div className="card-image">
            <figure>
              <img
                src={this.props.drink.strDrinkThumb}
                alt="Placeholder image"
                className="recipe-image"
              />
            </figure>
          </div>
          <table className="recipe-table">
            <thead>
              <tr>
                <th className="table-header">Measurements</th>
                <th className="table-header">Ingredients</th>
              </tr>
            </thead>
            {/* Map through recipe object to return each measurement and ingredient */}
            {this.state.ingredients.map((ingredient) => {
              if (ingredient.ingredient == null) {
                return "";
              }
              return (
                <tbody>
                  <tr>
                    <td>{ingredient.measurement}</td>
                    <td>{ingredient.ingredient}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
          <h4 className="label">Instructions:</h4>
          <p>{this.props.drink.strInstructions}</p>
          <br />
          <h4>
            Type: <em>{this.props.drink.strAlcoholic}</em>
          </h4>
          <h4>
            Category: <em>{this.props.drink.strIBA}</em>
          </h4>
          <h4>
            Glassware: <em>{this.props.drink.strGlass}</em>
          </h4>
        </div>
      </div>
    );
  }
}

// use this later

{
  /* <button onClick={() => this.props.goBack()}>back</button> */
}
{
  /* go back btn on nav bar */
}
