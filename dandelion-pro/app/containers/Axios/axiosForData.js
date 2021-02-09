/* eslint-disable import/prefer-default-export */
export const URL = 'https://e5df7c59c77a.ngrok.io';
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
