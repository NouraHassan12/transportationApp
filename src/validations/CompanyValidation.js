const CompanyValidation = (values) => {
  const errors = {};

  if (!values.Name || values.Name === "") {
    errors.Name = "Name is required";
  }

  if (!values.Address || values.Address === "") {
    errors.Address = "Address is required";
  }

  if (!values.TelephoneNumber || values.TelephoneNumber === "") {
    errors.TelephoneNumber = "TelephoneNumber is required";
  }

  if (!values.ContactPerson_Name || values.ContactPerson_Name === "") {
    errors.ContactPerson_Name = "ContactPerson_Name is required";
  }

  if (!values.ContactPerson_TelephoneNumber || values.ContactPerson_TelephoneNumber === "") {
    errors.ContactPerson_TelephoneNumber = "ContactPerson_TelephoneNumber is required";
  }


  if (!values. ContactPerson_Email || values. ContactPerson_Email === "") {
    errors. ContactPerson_Email = " ContactPerson_Email is required";
  }
 

  return errors
};

export default CompanyValidation;
