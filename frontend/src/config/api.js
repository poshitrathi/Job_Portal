// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export const API_ENDPOINTS = {
  // User endpoints
  USER_REGISTER: `${API_BASE_URL}/api/v1/user/register`,
  USER_LOGIN: `${API_BASE_URL}/api/v1/user/login`,
  USER_GET: `${API_BASE_URL}/api/v1/user/getuser`,
  USER_LOGOUT: `${API_BASE_URL}/api/v1/user/logout`,
  
  // Profile endpoints
  UPDATE_PROFILE: `${API_BASE_URL}/api/v1/user/update/profile`,
  UPDATE_PASSWORD: `${API_BASE_URL}/api/v1/user/update/password`,
  
  // Application endpoints
  GET_EMPLOYER_APPLICATIONS: `${API_BASE_URL}/api/v1/application/employer/getall`,
  GET_JOBSEEKER_APPLICATIONS: `${API_BASE_URL}/api/v1/application/jobseeker/getall`,
  POST_APPLICATION: (jobId) => `${API_BASE_URL}/api/v1/application/post/${jobId}`,
  DELETE_APPLICATION: (id) => `${API_BASE_URL}/api/v1/application/delete/${id}`,
  
  // Job endpoints
  GET_ALL_JOBS: `${API_BASE_URL}/api/v1/job/getall`,
  GET_SINGLE_JOB: (jobId) => `${API_BASE_URL}/api/v1/job/get/${jobId}`,
  POST_JOB: `${API_BASE_URL}/api/v1/job/post`,
  GET_MY_JOBS: `${API_BASE_URL}/api/v1/job/getmyjobs`,
  DELETE_JOB: (id) => `${API_BASE_URL}/api/v1/job/delete/${id}`,
};

export default API_ENDPOINTS; 