import {
  GET_COMPANIES_LIST,
  GET_COMPANY_DETAIL,
  POST_COMPANY_CREATE,
  PUT_COMPANY_EDIT,
  GET_COUNTRIES_lIST,
  GET_CITIES_lIST,
  GET_VEHICLETYPES_lIST

} from "../actions/companyAction";

let initialState = {
  getCompaniesList: false,
  getCountriesList:false,
  getCities:false,
  getGetVehicleTypeList:false,
  errorCompaniesList: false,
  getCompanyDetail: false,
  errorCompanyDetail: false,
  getResponCompanyData: false,
  errorResponCompanyData: false,
 
};

const companies = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES_LIST:
      return {
        ...state,
        getCompaniesList: action.payload.data,
        errorCompaniesList: action.payload.errorMessage,
      };


      case GET_VEHICLETYPES_lIST:
        return {
          ...state,
          getGetVehicleTypeList: action.payload.data,
         
        };

      case GET_COUNTRIES_lIST:
        return {
          ...state,
          getCountriesList: action.payload.data,
        };

        case GET_CITIES_lIST:
          return {
            ...state,
            getCities: action.payload.data,
            
          };

    case GET_COMPANY_DETAIL:
      return {
        ...state,
        getCompanyDetail: action.payload.data,
        errorCompanyDetail: action.payload.errorMessage,
      };

    case POST_COMPANY_CREATE:
      return {
        ...state,
        getResponCompanyData: action.payload.data,
        errorResponCompanyData: action.payload.errorMessage,
      };

    case PUT_COMPANY_EDIT:
      return {
        ...state,
        getResponCompanyData: action.payload.data,
        errorResponCompanyData: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default companies;
