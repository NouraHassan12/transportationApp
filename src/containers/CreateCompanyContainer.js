import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postCompanyCreate } from "../actions/companyAction";
import swal from "sweetalert";



class CreateCompanyContainer extends Component {

  handleSubmit(data) {
    this.props.dispatch(postCompanyCreate(data));
  }

  render() {
    if (this.props.getResponCompanyData || this.props.errorResponCompanyData) {
      if(this.props.errorResponCompanyData)
      {
        swal(
            "Failed!",
            this.props.errorResponCompanyData,
            "error"
          );
      }else {
        swal(
            "Company Created!",
            "success"
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

const mapStateToProps = (state) => {
  return {
    getResponCompanyData: state.companies.getResponCompanyData,
    errorResponCompanyData: state.companies.errorResponCompanyData,
  };
};
export default connect(mapStateToProps, null)(CreateCompanyContainer);
