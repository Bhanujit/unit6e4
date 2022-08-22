//Create ActionCreator functions here
import axios from "axios";

import * as types from './actionTypes'

export const getCountriesRequest = ()=>{
    return {type:types.GET_COUNTRIES_REQUEST}
}


export const getCountriesSuccess =(data)=>{
    return {
        type:types.GET_COUNTRIES_SUCCESS,
        payload:data
    }
}

export const getCountriesFaiure = ()=>{
    return {
        type:types.GET_COUNTRIES_FAILURE
    }
}

export const getCountries = (link) => async (dispatch) => {
    axios
      .get(link)
      .then((res) => dispatch(getCountriesSuccess(res.data)))
      .catch((error) => console.log(error));
};

//delete countries
export const deleteCountriesRequest = ()=>{
    return {type:types.DELETE_COUNTRY_REQUEST}
}


export const deleteCountriesSuccess =(data)=>{
    return {
        type:types.DELETE_COUNTRY_SUCCESS,
        payload:data
    }
}

export const deleteCountriesFaiure = ()=>{
    return {
        type:types.DELETE_COUNTRY_FAILURE,
    }
}

export const deleteCountry = (val) => async (dispatch) => {
        axios
          .delete(`http://localhost:8080/products/${val}`)
          .then(() => dispatch(getCountries()))
          .catch((error) => console.log(error));
    };



    export const editCountriesRequest = ()=>{
        return {type:types.UPDATE_COUNTRY_REQUEST }
    }
    
    
    export const editCountriesSuccess =(data)=>{
        return {
            type:types.UPDATE_COUNTRY_SUCCESS ,
            payload:data
        }
    }
    
    export const editCountriesFaiure = ()=>{
        return {
            type:types.UPDATE_COUNTRY_FAILURE
        }
    }
    
export const editCountries = (id,val) => async (dispatch) => {
    await axios.put(`http://localhost:8080/products/${id}`, val)
    .then(() => dispatch(getCountries()))
    .catch((error) => console.log(error));
    };

    export const addCountries = (id,val) => async (dispatch) => {
        await axios.create(`http://localhost:8080/products`)
        .then(() => dispatch(getCountries()))
        .catch((error) => console.log(error));
        };
    
    // Sort
    export const sortCountries = (val) => {
        return { type:types.SORT_COUNTRIES, payload: val };
      };