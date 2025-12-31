import { Navigate } from "react-router-dom";

const LoginRoute = ({children}:any) => {

    const user = JSON.parse(localStorage.getItem('userEmail') || "{}");

    if(user.email){
        return <Navigate to={'/dashboard'} />
    }

    return children

 
}

export default LoginRoute