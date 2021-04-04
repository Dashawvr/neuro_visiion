/* eslint-disable import/prefer-default-export */
import config from '../../../config.json'
export const URL = config.API_URL;
const token = localStorage.getItem('token');
export const GET = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: token
  }
};
export const DELETE = {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    Authorization: token
  }
};
export const PATCH = {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    Authorization: token
  }
};
export const PUT = {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    Authorization: token
  }
};
export const POST = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: token
  }
};
