import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children , redirectTo}) => {
    const token = localStorage.getItem("token")
    const location = useLocation()

    if (!token) {
        localStorage.setItem('intendedRoute', location.pathname);
    return <Navigate to={redirectTo} replace />;
  }
  
  return children;
};


export default PrivateRoute
