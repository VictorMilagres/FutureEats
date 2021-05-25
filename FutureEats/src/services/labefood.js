import axios from 'axios';

axios.defaults.baseURL =
  'https://us-central1-missao-newton.cloudfunctions.net/futureEatsB';

const login = (body) => {
  const request = axios.post('/login', body);
  return request.then((response) => response.data);
};

const signup = (body) => {
  const request = axios.post('/signup', body);
  return request.then((response) => response.data);
};

const addAddress = (body, token) => {
  const request = axios.put('/address', body, {
    headers: {
      auth: token,
      'Content-Type': 'application/json',
    },
  });
  return request.then((response) => response.data);
};

const getFullAddress = (token) => {
  const request = axios.get('/profile/address', {
    headers: {
      auth: token,
      'Content-Type': 'application/json',
    },
  });
  return request.then((response) => response.data);
};

const getProfile = (token) => {
  const request = axios.get('/profile', {
    headers: {
      auth: token,
      'Content-Type': 'application/json',
    },
  });
  return request.then((response) => response.data);
};

const updateProfile = (body, token) => {
  const request = axios.put('/profile', body, {
    headers: {
      auth: token,
      'Content-Type': 'application/json',
    },
  });
  return request.then((response) => response.data);
};

const getRestaurants = (token) => {
  const request = axios.get('/restaurants', {
    headers: {
      auth: token,
      'Content-Type': 'application/json',
    },
  });
  return request.then((response) => response.data);
};

const getRestaurantDetail = (token, id) => {
  const request = axios.get(`/restaurants/${id}`, {
    headers: {
      auth: token,
      'Content-Type': 'application/json',
    },
  });
  return request.then((response) => response.data);
};

const placeOrder = (body, token, id) => {
  const request = axios.post(`/restaurants/${id}/order`, body, {
    headers: {
      auth: token,
      'Content-Type': 'application/json',
    },
  });
  return request.then((response) => response.data);
};

const getActiveOrder = (token) => {
  const request = axios.get(`/active-order`, {
    headers: {
      auth: token,
      'Content-Type': 'application/json',
    },
  });
  return request.then((response) => response.data);
};

const ordersHistory = (token) => {
  const request = axios.get(`/orders/history`, {
    headers: {
      auth: token,
      'Content-Type': 'application/json',
    },
  });
  return request.then((response) => response.data);
};

export default {
  login,
  signup,
  addAddress,
  getFullAddress,
  getProfile,
  updateProfile,
  getRestaurants,
  getRestaurantDetail,
  placeOrder,
  getActiveOrder,
  ordersHistory,
};
