import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";



const DetailCompanyComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200"> Compny Name</td>
          <td width="10">:</td>
          <td>{props.getCompanyDetail.Name}</td>
          </tr>
         
          <tr> 
          <td width="200"> ContactPerson_Name</td>
          <td width="10">:</td>
          <td>{props.getCompanyDetail.ContactPerson_Name}</td>
           </tr>
          <tr> 
          <td width="200"> ContactPerson_TelephoneNumber</td>
          <td width="10">:</td>
          <td>{props.getCompanyDetail.ContactPerson_TelephoneNumber}</td> 
            </tr>
          <tr> 
          <td width="200"> ContactPerson_Email</td>
          <td width="10">:</td>
          <td>{props.getCompanyDetail.ContactPerson_Email}</td>
           </tr>
          <tr> 
          <td width="200"> TelephoneNumber</td>
          <td width="10">:</td>
          <td>{props.getCompanyDetail.TelephoneNumber}</td> </tr>

       
   

      </tbody>
    </Table>
  );
};


const mapStateToProps = (state) => {
  return {
    getCompanyDetail: state.companies.getCompanyDetail,
    errorCompanyDetail: state.companies.errorCompanyDetail,
  };
};

export default connect(mapStateToProps, null)(DetailCompanyComponent);
