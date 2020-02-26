import axios from "axios";

function WithAuth() {
  const comToken = localStorage.getItem("token");
  const instant = axios.create({
    headers: {
      "Content-Type": "application / json",
      Authorization: comToken
    }
  });
  return instant;
}
export default WithAuth;
