import React, { Component } from "react"
import PropTypes from "prop-types"


export class EmployeesList extends Component {
    render() {
        return (
            <tr>
                <th scope="row">{this.props.employee.id}</th>
                    <td>{this.props.employee.name}</td>
                    <td>{this.props.employee.email}</td>
                    <td>{this.props.employee.phone}</td>
            </tr>
        )
    }
}

EmployeesList.propTypes = {
    employee: PropTypes.object.isRequired
}

export default EmployeesList;