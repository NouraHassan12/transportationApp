import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import FormComponent from "../components/FormComponent";
import { getCompanyDetail, putCompanyUpdate } from "../actions/companyAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponCompanyData: state.companies.getResponCompanyData,
    errorResponCompanyData: state.companies.errorResponCompanyData,
  };
};

class EditCompanyContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getCompanyDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(putCompanyUpdate(data, this.props.match.params.id));
  }

  render() {
    if (this.props.getResponCompanyData || this.props.errorResponCompanyData) {
      if (this.props.errorResponCompanyData) {
        swal("Failed!", this.props.errorResponCompanyData, "error");
      } else {
        swal(
          "Company Updated!",
          
        );
      }
    }
    return (
      <Container>
        <BackComponent />
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditCompanyContainer);
