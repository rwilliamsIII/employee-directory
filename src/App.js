import React from 'react';
import './App.css';
import Employees from "./components/Employees";
import Table from "./components/Table";
import Header from "./components/Header";
import API from "./utils/api";

class App extends React.Component {
  state = {
    employees: [],
    search: "",
    sortID: false,
    sortName: false,
    sortEmail: false,
    sortPhone: false
  };

  searchEmployee = () => {
    API.search()
    .then(res => this.setState({employees: res.data}))
    .catch(err => console.log(err));
  }

  componentDidMount() {
    this.searchEmployee();
  }

  handleSortID = () => {
    const idSort = this.state.employees;
    if (!this.state.sortID){
      idSort.sort((a,b) => a.id > b.id ? -1: 1);
      this.setState({
        employees: idSort,
        sortID: true
      })
    }
    else {
      idSort.reverse((a,b) => a.id < b.id ? -1: 1);
      this.setState({
        employees: idSort,
        sortID: false
      })
    }
  }


}


export default App;
