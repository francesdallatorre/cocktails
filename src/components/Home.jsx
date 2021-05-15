import React from "react";
import "bulma";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <section class="section">
          <h3 class="title">Welcome!</h3>
          <h2 class="subtitle">
            <strong>My Speed Rack</strong> makes it easy to look up drink
            recipes.
          </h2>
        </section>
        <p className="random-generator">
          Don't know what you looking for? Use our
          <br />
          <strong>Random Drink Generator</strong>
        </p>

        <button
          className="random-btn"
          onClick={(e) => this.props.submitRandom(e)}
        >
          press
        </button>
        <div className="recipe">
          <div className="random">
            <h3 className="drink-name title is-3">
              {this.props.randomDrink.strDrink}
            </h3>
            <div className="card-image">
              <figure>
                <img
                  src={this.props.randomDrink.strDrinkThumb}
                  alt="Placeholder image"
                  className="recipe-image"
                />
              </figure>
            </div>
            <div className="ingredients">
              <h4 className="label">Ingredients</h4>

              <div className="content">
                <div>
                  <p>{this.props.randomDrink.strMeasure1}</p>
                  <p>{this.props.randomDrink.strMeasure2}</p>
                  <p>{this.props.randomDrink.strMeasure3}</p>
                  <p>{this.props.randomDrink.strMeasure4}</p>
                  <p>{this.props.randomDrink.strMeasure5}</p>
                  <p>{this.props.randomDrink.strMeasure6}</p>
                  <p>{this.props.randomDrink.strMeasure7}</p>
                  <p>{this.props.randomDrink.strMeasure8}</p>
                  <p>{this.props.randomDrink.strMeasure9}</p>
                  <p>{this.props.randomDrink.strMeasure10}</p>
                  <p>{this.props.randomDrink.strMeasure11}</p>
                  <p>{this.props.randomDrink.strMeasure12}</p>
                </div>
                <div>
                  <p>{this.props.randomDrink.strIngredient1}</p>
                  <p>{this.props.randomDrink.strIngredient2}</p>
                  <p>{this.props.randomDrink.strIngredient3}</p>
                  <p>{this.props.randomDrink.strIngredient4}</p>
                  <p>{this.props.randomDrink.strIngredient5}</p>
                  <p>{this.props.randomDrink.strIngredient6}</p>
                  <p>{this.props.randomDrink.strIngredient7}</p>
                  <p>{this.props.randomDrink.strIngredient8}</p>
                  <p>{this.props.randomDrink.strIngredient9}</p>
                  <p>{this.props.randomDrink.strIngredient10}</p>
                  <p>{this.props.randomDrink.strIngredient11}</p>
                  <p>{this.props.randomDrink.strIngredient12}</p>
                </div>
              </div>
            </div>

            <h4 className="label">Instructions</h4>
            <p className="instructions-text">
              {this.props.randomDrink.strInstructions}
            </p>
            <br />
            <h4>
              Type: <em>{this.props.randomDrink.strAlcoholic}</em>
            </h4>
            <h4>
              Glassware: <em>{this.props.randomDrink.strGlass}</em>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
