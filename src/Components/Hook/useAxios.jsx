import axios from "axios"

const axiosSecure = axios.create({
  baseURL: 'https://task-management-server-one-gamma.vercel.app/'
})

const useAxios = () => {
  return axiosSecure;
}

export default useAxios