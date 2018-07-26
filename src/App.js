import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import Footer from './Footer';
import JobList from './JobList';
import JobForm from './JobForm';

let apiURL = "./listings.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JobList: [],
      loaded: false
    }
    this.checkSubmit = this.checkSubmit.bind(this);
  }

  componentDidMount(){
    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      this.setState({JobList: data.reverse(), loaded: true});
    })
  }

  checkSubmit(data) {
    let newJob = {id: this.state.JobList.length+1,
    title: data.get("title"),
    pay: data.get("pay"),
    description: data.get("description"),
    interested: []
    }

    this.setState({JobList: [newJob, ...this.state.JobList]})
  }

  render() {
    return (
      <div className="App">
      <Header/>
        <main>
          <JobList jobArray = {this.state.JobList}/>
          <JobForm formCallback = {this.checkSubmit}/>
        </main>
      <Footer/>
      </div>
    );
  }
}

export default App;
