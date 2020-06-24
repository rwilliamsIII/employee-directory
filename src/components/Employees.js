import React, {Component} from "react";
import EmployeesList from "./EmployeesList";
import PropTypes from "prop-types"


class Employees extends Component {
    render() {
        return (
            this.props.employees.map((employee) =>(
                <EmployeesList key={employee.id} employee={employee}/>
            ))
        )
    }
}

Employees.propTypes = {
    employees: PropTypes.array.isRequired
}

export default Employees