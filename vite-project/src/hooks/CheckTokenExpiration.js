import { jwtDecode } from "jwt-decode";
import { logout } from "../redux/AuthSlice";

export default function CheckTokenExpiration(token, dispatch) {
  if (!token) return;

  try {
    const decoded = jwtDecode(token);
    const expTime = decoded.exp * 1000; // ms
    const currentTime = Date.now();
    console.log(decoded.exp)

    if (expTime <= currentTime) {
      dispatch(logout());
    } else {
      const timeout = expTime - currentTime;

      setTimeout(() => {
        dispatch(logout());
      }, timeout);
    }
  } catch (err) {
    dispatch(logout());
  }
}