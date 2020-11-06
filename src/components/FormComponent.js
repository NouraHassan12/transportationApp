import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import CompanyValidation from "../validations/CompanyValidation";
import {getCountriesList , getCities , getGetVehicleTypeList} from '../actions/companyAction'


const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>))}
    </Col>
  </Row>
);




class FormComponent extends Component {
    
  constructor() {
    super();
    this.state = {
      selectedCountryID: "",
    };
  }

  componentDidMount() {
    this.props.dispatch(getCountriesList());
    this.props.dispatch(getGetVehicleTypeList())
    console.log(this.props,"props")
  }

 componentDidUpdate() {
    this.props.dispatch(getCities(this.state.selectedCountryID));
    console.log("update");
  }

  onchangem = (e) => {
    let el = e.target.childNodes[e.target.selectedIndex];
    this.setState({
      selectedCountryID: el.getAttribute("id"),
    });
  };



  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
         <h5>company Data</h5>
      
        <FormGroup row>
         
          <Col md={2}>
        
            <FormGroup>
              <Field
                type="text"
                name="Name"
                component={renderField}
                label="Name :"
              />
            </FormGroup>
          </Col>

          <Col md={2}>
            <FormGroup>
              <Field
                type="number"
                name="ID"
                component={renderField}
                label="ID :"
              />
            </FormGroup>
          </Col>

          <Col md={2}>
            <FormGroup>
              <Field
                type="text"
                name="Address"
                component={renderField}
                label="Address :"
              />
            </FormGroup>
          </Col>

      
          <Col md={3}>
            <FormGroup>
              <p>Country</p>
              {this.props.getCountriesList ? (
                <h2> loading countries</h2>
              ) : (
                <Input type="select" name="select" onChange={this.onchangem}>
                  {this.props.initialValues.getCountriesList &&
                    this.props.initialValues.getCountriesList.map((c) => (
                      <option key={c.ID} value={c.Value} id={c.ID}>
                        {c.Value}
                      </option>
                    ))}
                </Input>
              )}
            </FormGroup>
            </Col>
     

            <Col md={2}>
            <FormGroup>

         <p>City</p>
         {this.props.getCities ? (
         
              <h2> loading Cities</h2>
          ) : (
            <Input type="select" name="select" >{
              this.props.initialValues &&
              this.props.initialValues.getCities &&
              this.props.initialValues.getCities.map((city)=>(
                (<option key={city.ID} >{city.Value}</option>)
              ))}</Input>
          )}

       </FormGroup>
       </Col> 


          <Col md={2}>
            <FormGroup>
              <Field
                type="text"
                name="TelephoneNumber"
                component={renderField}
                label="TelephoneNumber :"
              />
            </FormGroup>
          </Col>

          <Col md={3}>
            <FormGroup>
              <Field
                type="text"
                name="ContactPerson_Name"
                component={renderField}
                label="ContactPerson_Name :"
              />
            </FormGroup>
          </Col>

          <Col md={3}>
            <FormGroup>
              <Field
                type="text"
                name="ContactPerson_TelephoneNumber"
                component={renderField}
                label="ContactPerson_TelephoneNumber :"
              />
            </FormGroup>
          </Col>

          <Col md={3}>
            <FormGroup>
              <Field
                type="text"
                name="ContactPerson_Email"
                component={renderField}
                label="ContactPerson_Email :"
              />
            </FormGroup>
          </Col>

         
        </FormGroup>
        <h5>Bus Data</h5>
        <FormGroup row>
        <Col md={3}>
        
        <FormGroup>
          <Field
            type="number"
            name=" ID"
            component={renderField}
            label="ID :"
          />
        </FormGroup>
      </Col>

        
  
      
         

          <Col md={2}>
            <FormGroup>

         <p>vehicle type</p>
         {this.props.getGetVehicleTypeList ? (
         
              <h2> loading VehicleTypeList</h2>
          ) : (
            <Input type="select" name="select" >{
              this.props.initialValues &&
              this.props.initialValues.getGetVehicleTypeList &&
              this.props.initialValues.getGetVehicleTypeList.map((v)=>(
                (<option key={v.ID} >{v.Value}</option>)
              ))}</Input>
          )}

       </FormGroup>
       </Col> 
      


      <Col md={3}>
        
        <FormGroup>
          <Field
            type="string"
            name="Brand"
            component={renderField}
            label="Brand :"
          />
        </FormGroup>
      </Col>


      <Col md={3}>
        
        <FormGroup>
          <Field
            type="number"
            name="Number_Of_Seats"
            component={renderField}
            label="Number_Of_Seats :"
          />
        </FormGroup>
      </Col>

      <Col md={3}>
        
        <FormGroup>
          <Field
            type="number"
            name="Number_Of_Seats_Per_Raw"
            component={renderField}
            label="Number_Of_Seats_Per_Raw :"
          />
        </FormGroup>
      </Col>


      <Col md={3}>
        
        <FormGroup>
          <Field
            type="number"
            name="YearModel"
            component={renderField}
            label="YearModel :"
          />
        </FormGroup>
      </Col>

      <Col md={3}>
        
        <FormGroup>
          <Field
            type="string"
            name="Notes"
            component={renderField}
            label="Notes :"
          />
        </FormGroup>
      </Col>


      <Col md={3}>
        
        <FormGroup>
          <Field
            type="string"
            name="Description"
            component={renderField}
            label="Description :"
          />
        </FormGroup>
      </Col>
        </FormGroup>

        <FormGroup row>
          <Col md="6">
            <FormGroup>
              <Button
                color="dark"
                type="submit"
                disabled={this.props.submitting}
              >
                Save
              </Button>
          
            </FormGroup>
          </Col>
        </FormGroup>
      </form>

    );
  }
}

FormComponent = reduxForm({
  form: "formCreateCompany",
  validate: CompanyValidation,
  enableReinitialize: true,
})(FormComponent);


const mapStateToProps = (state) => {
  return {
    initialValues : {
      Name : state.companies.getCompanyDetail.Name,
      ID : state.companies.getCompanyDetail.ID,
      Address : state.companies.getCompanyDetail.Address,
      Country : state.companies.getCompanyDetail.Country,
      City : state.companies.getCompanyDetail.City,
      TelephoneNumber: state.companies.getCompanyDetail.TelephoneNumber,
      ContactPerson_Name :state.companies.getCompanyDetail.ContactPerson_Name,
      ContactPerson_TelephoneNumber:state.companies.getCompanyDetail.ContactPerson_Name,
      ContactPerson_Email:state.companies.getCompanyDetail.ContactPerson_Email,
      getCountriesList:state.companies.getCountriesList,
      getCities:state.companies.getCities,
      getGetVehicleTypeList:state.companies.getGetVehicleTypeList,
     

    }
  };
};
export default connect(mapStateToProps, null)(FormComponent);
