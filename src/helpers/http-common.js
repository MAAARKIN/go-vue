import axios from 'axios';

const HTTP = axios.create({
	baseURL: 'http://localhost:9090'
})

HTTP.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("passou no interceptor 2")
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
})

HTTP.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("passou no interceptor")
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
})


export {HTTP};
