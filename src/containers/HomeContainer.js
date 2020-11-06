import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { getCompaniesList } from '../actions/companyAction'

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getCompaniesList());

  }

  render() {
    
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
}

export default connect()(HomeContainer);
