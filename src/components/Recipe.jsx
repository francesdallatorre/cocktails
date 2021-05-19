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
      <div className="home">
        <icon
          className="back fas fa-backward"
          onClick={() => this.props.goBack()}
        >
          {" "}
        </icon>
        <div className="recipe">
          <div className="random">
            <h3 className="drink-name title is-3">
              {this.props.drink.strDrink}
            </h3>
            <div className="card-image">
              <figure>
                <img
                  src={this.props.drink.strDrinkThumb}
                  alt="Placeholder image"
                  className="recipe-image"
                />
              </figure>
            </div>
            <div className="ingredients">
              <h4 className="label">Ingredients</h4>

              {this.state.ingredients.map((ingredient) => {
                if (ingredient.ingredient == null) {
                  return "";
                }
                console.log(ingredient.ingredient);
                return (
                  <div className="content">
                    <div>
                      <p>{ingredient.measurement}</p>
                    </div>
                    <div>
                      <p>{ingredient.ingredient}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <h4 className="label">Instructions</h4>
            <p className="instructions-text">
              {this.props.drink.strInstructions}
            </p>
            <br />
            <h4>
              Type: <em>{this.props.drink.strAlcoholic}</em>
            </h4>
            <h4>
              Glassware: <em>{this.props.drink.strGlass}</em>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
