import axios from "axios";

export const GET_COMPANIES_LIST = "GET_COMPANIES_LIST";
export const GET_COMPANY_DETAIL = "GET_COMPANY_DETAIL";
export const POST_COMPANY_CREATE = "POST_COMPANY_CREATE";
export const PUT_COMPANY_EDIT = "PUT_COMPANY_EDIT";

export const GET_COUNTRIES_lIST = "GET_COUNTRIES_lIST";
export const GET_CITIES_lIST = "GET_CITIES_lIST";
export const GET_VEHICLETYPES_lIST = "GET_VEHICLETYPES_lIST";





export const getGetVehicleTypeList = () => {
  return (dispatch) => {
    axios
      .get("http://23.254.228.118:8080/API/api/Lookup/GetVehicleType")
      .then(function (response) {
        console.log(response.data.Data,"GetVehicleType")
        dispatch({
          type:GET_VEHICLETYPES_lIST,
          payload: {
            data: response.data.Data,
          
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_VEHICLETYPES_lIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


export const getCountriesList = () => {
  return (dispatch) => {
    axios
      .get("http://23.254.228.118:8080/API/api/Lookup/GetCountries")
      .then(function (response) {
        console.log(response.data.Data,"countries")
        dispatch({
          type: GET_COUNTRIES_lIST,
          payload: {
            data: response.data.Data,
          
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_COUNTRIES_lIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};



export const getCities = (ID) => {
  return (dispatch) => {
    axios
      .get(
        `http://23.254.228.118:8080/API/api/Lookup/GetCities?countryId=${ID}`)
      .then(function (response) {
        console.log(response.data.Data,"cities")
      
        dispatch({
          type: GET_CITIES_lIST,
          payload: {
            data: response.data.Data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_CITIES_lIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
export const getCompaniesList = () => {
  return (dispatch) => {
    axios
      .get("http://23.254.228.118:8080/API/api/TransportationCompany/All")
      .then(function (response) {
        console.log(response.data.Data,"dataaaa")
        dispatch({
          type: GET_COMPANIES_LIST,
          payload: {
            data: response.data.Data,
          
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_COMPANIES_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getCompanyDetail = (ID) => {
  return (dispatch) => {
    axios
      .get(
        `http://23.254.228.118:8080/API/api/TransportationCompany/GetById?id=${ID}`)
      .then(function (response) {
        console.log(response.data.Data,"Details")
        console.log(response.data.Data.TransportationCompanyBuses,"TransportationCompanyBuses")
        dispatch({
          type: GET_COMPANY_DETAIL,
          payload: {
            data: response.data.Data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_COMPANY_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postCompanyCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
         "http://23.254.228.118:8080/API/api/TransportationCompany/Add",
         {...data , TransportationCompanyBuses:[{
         BusTypeID:data.BusTypeID,
         Brand:data.Brand,
         Number_Of_Seats:data.Number_Of_Seats,
         Number_Of_Seats_Per_Raw:data.Number_Of_Seats_Per_Raw,
         Total_Number_Of_Buses:data.Total_Number_Of_Buses,
         Bus_Layout:"data.Bus_Layout",
         Notes:"data.Notes",
         YearModel:data.YearModel,
         Description:"data.Description"
        }]}
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: POST_COMPANY_CREATE,
            payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_COMPANY_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putCompanyUpdate = (data) => {
  return (dispatch) => {
    axios
      .put(
         `http://23.254.228.118:8080/API/api/TransportationCompany/Update`,
         {...data , TransportationCompanyBuses:[{
          BusTypeID:data.BusTypeID,
          Brand:data.Brand,
          Number_Of_Seats:data.Number_Of_Seats,
          Number_Of_Seats_Per_Raw:data.Number_Of_Seats_Per_Raw,
          Total_Number_Of_Buses:data.Total_Number_Of_Buses,
          Bus_Layout:data.Bus_Layout,
          Notes:data.Notes,
          YearModel:data.YearModel,
          Description:data.Description
         }]}
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: PUT_COMPANY_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_COMPANY_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


