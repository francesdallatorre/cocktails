import React from 'react'
import Navigation from './components/Navigation'
import Search from './components/Search'
import './App.css'
import Results from './components/Results';
import Home from './components/Home';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      drink: '', // query
      searchURL: '', // baseURL + drink
      drinks: [], // json.drinks 
      hide: false,
      showHome: true,
      randomDrink: '',
      ingredients: '',
      measurements: ''

    };
    // Bind Functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitRandom = this.submitRandom.bind(this)
    this.reload = this.reload.bind(this);
  }
  componentDidMount() {
    this.submitRandom();
  }
  // Handle Change Function
  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value })
    console.log(e.target.value)
  }
  // Handle Submit Function
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      searchURL: this.state.baseURL + this.state.drink
    }, () => {
      fetch(this.state.searchURL)
        .then(response => { return response.json() })
        .then(json => this.setState({
          drinks: json.drinks,
          drink: '',
          showHome: false,
        }))
    })
  }
  // Submit Random Generator
  submitRandom(e) {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => {
        return response.json();
      })
      .then(json => this.setState({
        randomDrink: json.drinks[0],
        ingredients: [json.drinks[0].strIngredient1, json.drinks[0].strIngredient2, json.drinks[0].strIngredient3, json.drinks[0].strIngredient4, json.drinks[0].strIngredient5, json.drinks[0].strIngredient6],
        measurements: [json.drinks[0].strMeasure1, json.drinks[0].strMeasure2, json.drinks[0].strMeasure3, json.drinks[0].strMeasure4, json.drinks[0].strMeasure5, json.drinks[0].strMeasure6],

      }))

    console.log("the drink is :", this.state.randomDrink)
  }
  // Reload Function
  reload() {
    window.location.reload()
  }
  // Hide Search Bar
  hideSearchBar() {
    this.setState({
      hide: !this.state.hide
    })
    setTimeout(() => {
      console.log(this.state.hide)
    }, 500);
  }

  render() {
    return (
      <div className="app">

        {/* Navigation Component */}
        <Navigation />

        {/* Search Bar Component */}
        {
          this.state.hide ? "" : <Search
            // passing data to Search Component
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            drink={this.state.drink}
          />
        }

        {/* Home */}
        {
          this.state.showHome ? <Home
            submitRandom={(e) => this.submitRandom(e)}
            randomDrink={this.state.randomDrink}
          /> : ""
        }

        {/* Results Component */}
        {
          // Ternary statement. If result is null reload page else render Results Component
          this.state.drinks === null ?
            this.reload() :
            <Results
              // passing data to Results Component
              drink={this.state.drink}
              drinks={this.state.drinks}
              showHome={this.state.showHome}
              reload={() => this.reload()}
              hideSearchBar={() => this.hideSearchBar()} />
        }

      </div>
    );
  }
}


