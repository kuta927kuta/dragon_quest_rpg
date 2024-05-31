import axios from "axios";

const baseURL = "http://localhost:9000"; // バックエンドのベースURL

const login = async (username, password) => {
  try {
    const response = await axios.post(`${baseURL}/login`, {
      params: {
        username: username,
        password: password,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { login };
