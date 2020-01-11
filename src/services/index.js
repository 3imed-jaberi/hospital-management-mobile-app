
/*  root services ⚓️ .. */

import axios from 'axios';
import { __BED_LOGO__, __DOCTOR_LOGO__, __PATIENT_LOGO__, __ROOM_LOGO__ } from '../constants';


// API Docs : https://hospital-management-rest-api.herokuapp.com/swagger-ui.html .. 


const API_URL = 'https://hospital-management-rest-api.herokuapp.com/api';



const headers = { 'Content-Type': 'application/json' };


// Auth .. 
const register = (data) => axios.post(`${API_URL}/auth/register`, data, { headers });

const login = (data) => axios.post(`${API_URL}/auth`, data, { headers });


// App .. 

// _____ GET REQUEST _____ // 
const getBeds = (token) => axios.get(`${API_URL}/beds`, { headers: { ...headers, 'Authorization': token} });

const getDoctors = (token) => axios.get(`${API_URL}/doctors`, { headers: { ...headers, 'Authorization': token} });

const getPatients = (token) => axios.get(`${API_URL}/patients`, { headers: { ...headers, 'Authorization': token} });

const getRooms = (token) => axios.get(`${API_URL}/rooms`, { headers: { ...headers, 'Authorization': token} });


// _____POST REQUEST _____ //
const addBed = (data, token) => axios.post(`${API_URL}/beds`, { ...data, imgUrl: __BED_LOGO__ }, { headers: { ...headers, 'Authorization': token} });

const addDoctor = (data, token) => axios.post(`${API_URL}/doctors`, { ...data, imgUrl: __DOCTOR_LOGO__ }, { headers: { ...headers, 'Authorization': token} });

const addPatient = (data, token) => axios.post(`${API_URL}/patients`, { ...data, imgUrl: __PATIENT_LOGO__ }, { headers: { ...headers, 'Authorization': token} });

const addRoom = (data, token) => axios.post(`${API_URL}/rooms`, { ...data, imgUrl: __ROOM_LOGO__ }, { headers: { ...headers, 'Authorization': token} });


// _____ DELETE REQUEST _____ //
const deleteBed = (id, token) => axios.delete(`${API_URL}/beds/${id}`, { headers: { ...headers, 'Authorization': token} });

const deleteDoctor = (id, token) => axios.delete(`${API_URL}/doctors/${id}`, { headers: { ...headers, 'Authorization': token} });

const deletePatient = (id, token) => axios.delete(`${API_URL}/patients/${id}`, { headers: { ...headers, 'Authorization': token} });

const deleteRoom = (id, token) => axios.delete(`${API_URL}/rooms/${id}`, { headers: { ...headers, 'Authorization': token} });



export { 
  register,
  login,
  getBeds,
  addBed,
  deleteBed,
  getDoctors, 
  addDoctor, 
  deleteDoctor,
  getPatients,
  addPatient,
  deletePatient,
  getRooms,
  addRoom,
  deleteRoom

};