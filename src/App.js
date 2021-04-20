import React from 'react'
import Search from './components/Search'
import './App.css'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      drink: '', // query
      searchURL: '', // baseURL + drink
      drinks: [] // json.drinks 
    };
    // Bind Functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reload = this.reload.bind(this)
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
          drink: ''
        }))
    })
  }
  // Reload Function
  reload() {
    window.location.reload()
  }
  render() {
    return (
      <div>
        {
          // Ternary statement. If result is null reload page else render Search Component
          this.state.drinks === null ?
            this.reload() :
            <Search
              // passing data to Search Component
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              drink={this.state.drink}
              drinks={this.state.drinks} />
        }

      </div>
    );
  }
}


