import React from "react";

function Header(props) {
    return <nav className="navbar navbar-dark bg-dark">
        <h3><i className="fa fa-users" aria-hidden="true"></i>{" "}
        Welcome to your Employee Directory</h3>

        <form className="form-inline">
            <input  style={{margin: "2px"}}
                    onChange={props.handleSearch}
                    value={props.value}
                    name="search-employee"
                    type="text"
                    className="form-control"
                    placeholder="Search by employee"
                    id="search"
            />

            <button className="btn btn-secondary btn-outline-light btn-sm"
                    type="submit"
                    onClick={props.handleSubmit}
                    style={{ padding: "2px", margin: "5px" }}
            >Search</button>
        </form>
    </nav>
}

export default Header;