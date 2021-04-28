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
      <div className="recipeContainer">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src={this.props.drink.strDrinkThumb}
                alt="Placeholder image"
              />
            </figure>
          </div>
          <header class="card-header">
            <p class="card-header-title">{this.props.drink.strDrink}</p>
          </header>
          <table class="table is-bordered table is-fullwidth">
            <thead>
              <tr>
                <th>Measurements</th>
                <th>Ingredients</th>
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
          <div class="card-content">
            <div class="content">
              <h4>Instructions</h4>
              <p>{this.props.drink.strInstructions}</p>
              <br />
            </div>
          </div>
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
