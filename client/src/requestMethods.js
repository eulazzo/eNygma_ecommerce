import axios from "axios";

const BASE_URL = "http://localhost:8080/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTU2ZmZlYjBmMjkyNjZkZDY0ZTEyNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODU3ODg2NywiZXhwIjoxNjM4ODM4MDY3fQ.7wqMsBHRTnfdwSWU2O0eljCFfXD8FQ5RC_HXgU5yRco"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
