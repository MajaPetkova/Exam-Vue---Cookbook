import axiosCookbook from "../config/axiosIstance";

export async function authenticateUser({ username, email, password }) {
  try {
    const res = await axiosCookbook.post(`/users/register`, { username, email, password });
    console.log(res);
    return res;
  }
  catch (err) {
    console.error('Oops something went wrong', err);
    return null;
  }
}
