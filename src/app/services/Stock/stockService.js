import Axios from "axios";
import {
  GET_ALL_COUNTRIES_SUCCESS,
  GET_ALL_COUNTRIES_ERROR,
  GET_STOCKS_COUNTRY_DATA_SUCCESS,
  GET_STOCKS_COUNTRY_DATA_ERROR,
  GET_ALL_INDUSTRIES_DATA_SUCCESS,
  GET_ALL_INDUSTRIES_DATA_ERROR,
  GET_STOCKS_COUNTRY_INDUSTRY_DATA_SUCCESS,
  GET_STOCKS_COUNTRY_INDUSTRY_DATA_ERROR,
} from "./actionTypes";

export const GET_ALL_COUNTRIES_DATA = () => {
  return async (dispatch) => {
    try {
      const result = await Axios.get("/api/stocks/countries");
      dispatch({
        type: GET_ALL_COUNTRIES_SUCCESS,
        payload: result.data.countries,
      });
    } catch (error) {
      dispatch({ type: GET_ALL_COUNTRIES_ERROR, error });
    }
  };
};

export const GET_STOCKS_COUNTRY_DATA = () => {
  return async (dispatch) => {
    try {
      const result = await Axios.get("/api/stocks/stockcountry");
      dispatch({
        type: GET_STOCKS_COUNTRY_DATA_SUCCESS,
        payload: result.data.stockcountries,
      });
    } catch (error) {
      dispatch({ type: GET_STOCKS_COUNTRY_DATA_ERROR, error });
    }
  };
};

export const GET_STOCKS_COUNTRY_INDUSTRY_DATA = (country, industry) => {
  return async (dispatch) => {
    try {
      const result = await Axios.post("/api/stocks/stockcountryindustry", {
        country: country,
        industry: industry,
      });
      console.log(result);
      dispatch({
        type: GET_STOCKS_COUNTRY_INDUSTRY_DATA_SUCCESS,
        payload: result.data.stocks,
      });
    } catch (error) {
      dispatch({ type: GET_STOCKS_COUNTRY_INDUSTRY_DATA_ERROR, error });
    }
  };
};

export const GET_ALL_INDUSTRIES_DATA = (country) => {
  return async (dispatch) => {
    try {
      const result = await Axios.post("/api/stocks/industries", {
        country: country,
      });
      console.log(result);
      dispatch({
        type: GET_ALL_INDUSTRIES_DATA_SUCCESS,
        payload: result.data.industries,
      });
    } catch (error) {
      dispatch({ type: GET_ALL_INDUSTRIES_DATA_ERROR, error });
    }
  };
};
