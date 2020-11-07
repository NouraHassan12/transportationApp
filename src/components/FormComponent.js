import React, { Component , useState , useEffect } from "react";
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


const FormComponent = reduxForm({
  form: "formCreateCompany",
  validate: CompanyValidation,
  enableReinitialize: true,

})
((props) => {

  const [selectedCountryID , setSelectedCountryID] = useState('')
  
  useEffect(() => {
    props.dispatch(getCountriesList());
    props.dispatch(getGetVehicleTypeList())
    //console.log(props,"props")
  }, [])
  
  useEffect(() => {
    if(selectedCountryID !== ''){
    props.dispatch(getCities(selectedCountryID));
    } 
  }, [selectedCountryID])
 
  const onchangem = (e) => {
    let el = e.target.childNodes[e.target.selectedIndex];
    setSelectedCountryID(el.getAttribute("id"))
    console.log( el.getAttribute("id"))
  };



     return (
      <form onSubmit={props.handleSubmit}>
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
              {props.getCountriesList ? (
                <h2> loading countries</h2>
              ) : (
                <Input type="select" name="select" onChange={onchangem}>
                  {props.initialValues.getCountriesList &&
                    props.initialValues.getCountriesList.map((c) => (
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
         {props.getCities ? (
         
              <h2> loading Cities</h2>
          ) : (
            <Input type="select" name="select" >{
              props.initialValues &&
              props.initialValues.getCities &&
              props.initialValues.getCities.map((city)=>(
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
        {/* <Col md={3}>
        
        <FormGroup>
          <Field
            type="number"
            name=" ID"
            component={renderField}
            label="ID :"
          />
        </FormGroup>
      </Col> */}

        
  
      
         

          <Col md={2}>
            <FormGroup>

         <p>vehicle type</p>
         {props.getGetVehicleTypeList ? (
         
              <h2> loading VehicleTypeList</h2>
          ) : (
            <Input type="select" name="select" >{
              props.initialValues &&
              props.initialValues.getGetVehicleTypeList &&
              props.initialValues.getGetVehicleTypeList.map((v)=>(
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
            name="Total_Number_Of_Buses"
            component={renderField}
            label="Total_Number_Of_Buses :"
          />
        </FormGroup>
      </Col>

      {/* <Col md={3}>
        
        <FormGroup>
          <Field
            type="string"
            name="Bus_Layou"
            component={renderField}
            label="Bus_Layou :"
          />
        </FormGroup>
      </Col> */}

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
{/* 
      <Col md={3}>
        
        <FormGroup>
          <Field
            type="string"
            name="Notes"
            component={renderField}
            label="Notes :"
          />
        </FormGroup>
      </Col> */}


      {/* <Col md={3}>
        
        <FormGroup>
          <Field
            type="string"
            name="Description"
            component={renderField}
            label="Description :"
          />
        </FormGroup>
      </Col> */}


      <Col md={3}>
        
        <FormGroup>
          <Field
            type="number"
            name="FK_OperatorID"
            component={renderField}
            label="FK_OperatorID :"
          />
        </FormGroup>
      </Col>


      <Col md={3}>
        
        <FormGroup>
          <Field
            type="number"
            name="FK_UmrahCompanyID"
            component={renderField}
            label="FK_UmrahCompanyID :"
          />
        </FormGroup>
      </Col>

      <Col md={3}>
        
        <FormGroup>
          <Field
            type="number"
            name="FK_TravelAgencyID"
            component={renderField}
            label="FK_TravelAgencyID :"
          />
        </FormGroup>
      </Col>


      <Col md={3}>
        
        <FormGroup>
          <Field
            type="string"
            name="Masked_ID"
            component={renderField}
            label="Masked_ID :"
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
                disabled={props.submitting}
              >
                Save
              </Button>
          
            </FormGroup>
          </Col>
        </FormGroup>
      </form>

    );
})

/*const FormComponent =  (props) => {
    
  const [selectedCountryID , setSelectedCountryID] = useState('')
  
  useEffect(() => {
    props.dispatch(getCountriesList());
    props.dispatch(getGetVehicleTypeList())
    //console.log(props,"props")
  }, [])
  
  useEffect(() => {
    if(selectedCountryID !== ''){
    props.dispatch(getCities(this.state.selectedCountryID));
    } 
  }, [selectedCountryID])
 
  const onchangem = (e) => {
    let el = e.target.childNodes[e.target.selectedIndex];
    setSelectedCountryID(el.getAttribute("id"))
  };



     return (
      <form onSubmit={props.handleSubmit}>
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
              {props.getCountriesList ? (
                <h2> loading countries</h2>
              ) : (
                <Input type="select" name="select" onChange={onchangem}>
                  {props.initialValues.getCountriesList &&
                    props.initialValues.getCountriesList.map((c) => (
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
         {props.getCities ? (
         
              <h2> loading Cities</h2>
          ) : (
            <Input type="select" name="select" >{
              props.initialValues &&
              props.initialValues.getCities &&
              props.initialValues.getCities.map((city)=>(
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
         {props.getGetVehicleTypeList ? (
         
              <h2> loading VehicleTypeList</h2>
          ) : (
            <Input type="select" name="select" >{
              props.initialValues &&
              props.initialValues.getGetVehicleTypeList &&
              props.initialValues.getGetVehicleTypeList.map((v)=>(
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
                disabled={props.submitting}
              >
                Save
              </Button>
          
            </FormGroup>
          </Col>
        </FormGroup>
      </form>

    );
 }

FormComponent =reduxForm({
  form: "formCreateCompany",
  validate: CompanyValidation,
  enableReinitialize: true,
}) (FormComponent);*/



const mapStateToProps = (state) => {
  return {
    initialValues : {
      Name : state.companies.getCompanyDetail.Name,
      ID : state.companies.getCompanyDetail.ID,
      Address : state.companies.getCompanyDetail.Address,
      Country : state.companies.getCompanyDetail.Country,
      City : state.companies.getCompanyDetail.City,
      TelephoneNumber : state.companies.getCompanyDetail.TelephoneNumber,
      ContactPerson_Name : state.companies.getCompanyDetail.ContactPerson_Name,
      ContactPerson_TelephoneNumber : state.companies.getCompanyDetail.ContactPerson_Name,
      ContactPerson_Email : state.companies.getCompanyDetail.ContactPerson_Email,
      FK_OperatorID : state.companies.getCompanyDetail.FK_OperatorID,
      FK_UmrahCompanyID : state.companies.getCompanyDetail.FK_UmrahCompanyID,
      FK_TravelAgencyID : state.companies.getCompanyDetail.FK_TravelAgencyID,
      Masked_ID : state.companies.getCompanyDetail.Masked_ID,
      getCountriesList : state.companies.getCountriesList,
      getCities : state.companies.getCities,
      getGetVehicleTypeList : state.companies.getGetVehicleTypeList,
 


    }
  };
};
export default connect(mapStateToProps, null)(FormComponent);
