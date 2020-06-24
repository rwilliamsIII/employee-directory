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
      idSort.sort((a,b) => a.id > b.id ? 1: -1)
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

  handleSortName = () => {
    const nameSort = this.state.employees;
    if (!this.state.sortName) {
      nameSort.sort((a,b) => a.name > b.name ? 1: -1)
      this.setState({
        employees: nameSort,
        sortName: true
      })
    }
    else {
      nameSort.reverse((a,b) => a.name < b.name ? -1: 1);
      this.setState({
        employees: nameSort,
        sortName: false
      })
    }
  }

  handleSortEmail = () => {
    const emailSort = this.state.employees;
    if (!this.state.sortEmail) {
      emailSort.sort((a,b) => a.email > b.email ? 1: -1)
      this.setState({
        employees: emailSort,
        sortEmail: true
      })
    }
    else {
      emailSort.reverse((a,b) => a.email < b.email ? -1: 1);
      this.setState({
        employees: emailSort,
        sortEmail: false
      })
    }
  }

  handleSortPhone = () => {
    const phoneSort = this.state.employees;
    if (!this.state.sortPhone) {
      phoneSort.sort((a,b) => a.phone > b.email ? 1: -1)
      this.setState({
        employees: phoneSort,
        sortPhone: true
      })
    }
    else {
      phoneSort.reverse((a,b) => a.phone < b.phone ? -1: 1);
      this.setState({
        employees: phoneSort,
        sortPhone: false
      })
    }
  }

  handleSearch = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.search === "") {
      this.searchEmployee();
    }
    else {
      this.setState({employees: [...this.state.employees.filter(employee => employee.name.includes(this.state.search))]})
    }
  }

  render() {
    return (
      <div class="text-center">
        <Header  value={this.state.search}
                 handleSearch={this.handleSearch}
                 handleSubmit={this.handleSubmit}
        />
        <Table handleSortID={this.handleSortID} handleSortPhone={this.handleSortPhone} handleSortEmail={this.handleSortEmail} handleSortName={this.handleSortName}>
        <Employees employees={this.state.employees}/>
        </Table>
      </div>
    )
  }

}


export default App;
