import React from "react";
import "bulma";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <section class="section">
          <h3 class="title">Welcome!</h3>
          <h2 class="subtitle">
            <strong>My Speed Rack</strong> makes it easy to look up cocktail
            recipes, just type a cocktail name and search for it
          </h2>
        </section>
        <div>
          <img
            src="https://img.delicious.com.au/F_C2-w6_/w759-h506-cfill/del/2015/11/summer-cocktails-24374-3.jpg"
            className="image"
          />
        </div>
      </div>
    );
  }
}
