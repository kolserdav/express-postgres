/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import * as T from '../../types';

/**
 * Interface of object Request
 */
interface Request {
  
  /**
   * Post method request 
   * @param url 
   * @param data 
   * @param headers 
   */
  post: <U>(url: string, data: any, headers: any) => Promise<T.OrmResult<U>>;
  
  /**
   * Get method request
   * @param url 
   * @param headers 
   */
  get: <U>(url: string, headers: any) => Promise<T.OrmResult<U>>; 
  
  /**
   * Put method request
   * @param url 
   * @param data 
   * @param headers 
   */
  put: <U>(url: string, data: any, headers: any) => Promise<T.OrmResult<U>>;
  
  /**
   * Delete metod request
   * @param url 
   * @param headers 
   */
  delete: <U>(url: string, headers: any) => Promise<T.OrmResult<U>>;
}

/**
 * Object with request methods
 */
const Request: Request = {
  post: function(url, data, headers) {
    return new Promise(resolve => {
      axios.post(url, data, {
        headers: headers
      })
      .then(function (response) {
        resolve({
          error: false,
          data: response.data,
          message: '',
        });
      })
      .catch(function (error) {
        resolve({
          error: true,
          message: error.message,
          data: error.response?.data,
        });
      });
    });
  },
  get: (url, headers) => {
    return new Promise(resolve => {
      axios.get(url, {
        headers,
      })
      .then(function (response) {
        resolve({
          error: false,
          data: response.data,
          message: '',
        });
      })
      .catch(function (error) {
        resolve({
          error: true,
          message: error.message,
          data: error.response?.data,
        });
      });
    });
  },
  put: (url, data, headers) => {
    return new Promise(resolve => {
      axios.put(url, data, {
        headers,
      })
      .then(function (response) {
        resolve({
          error: false,
          data: response.data,
          message: '',
        });
      })
      .catch(function (error) {
        resolve({
          error: true,
          message: error.message,
          data: error.response?.data,
        });
      });
    });
  },
  delete: (url, headers) => {
    return new Promise(resolve => {
      axios.delete(url, {
        headers,
      })
      .then(function (response) {
        resolve({
          error: false,
          data: response.data,
          message: '',
        });
      })
      .catch(function (error) {
        resolve({
          error: true,
          message: error.message,
          data: error.response?.data,
        });
      });
    });
  }
}

export default Request;