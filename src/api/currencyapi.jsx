import axios from "axios";

const currencyapi = (fromCurrency) => {
    return axios.create({
        baseURL: `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    });
};

export default currencyapi;
