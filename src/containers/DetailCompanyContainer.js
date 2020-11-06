import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import {getCompanyDetail } from "../actions/companyAction";
import DetailCompanyComponent from "../components/DetailCompanyComponent";

class DetailCompanyContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getCompanyDetail(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h5>Company Details</h5>
        <DetailCompanyComponent />
      </Container>
    );
  }
}

export default connect()(DetailCompanyContainer);
