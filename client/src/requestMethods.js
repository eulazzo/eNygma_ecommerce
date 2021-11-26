import axios from "axios";

const BASE_URL = "http://localhost:8080/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWU2NWQzM2YyZjczYzY0ZDA3YjJiYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzg4NzUxNSwiZXhwIjoxNjM4MTQ2NzE1fQ.Gl1fpe-QS33n0DAM_YzAysqRxRSlBRJtxenP3v9hgHA";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}`},
});

 