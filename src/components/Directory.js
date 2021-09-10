import React, { Component } from "react";
import Employees from "./Employees.js";
import Search from "./Search.js";
import API from "../utils/API";
import "../styles/Directory.css";

class Directory extends Component {
state = {
employees: [],
empSort: [],
search: "",
sorted: false,
};

componentDidMount = () => {
API.getUsers().then((results) => {
this.setState({
employees: results.data.results,
        });
    });
};

sortEmp = () => {
let { employees, search } = this.state;
let empSort = employees.filter((sorted) => {
return (
sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
sorted.name.last.toLowerCase().includes(search.toLowerCase()) ||
sorted.email.toLowerCase().includes(search.toLowerCase())
        );
    });
this.setState({ empSort });
};

startSort = (event) => {
this.setState({ search: event.target.value }, () => {
    this.sortEmp();
    this.setState({ sorted: true });
});
};