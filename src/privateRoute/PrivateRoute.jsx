import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading} = useContext(AuthContext)
    const location = useLocation();
    // console.log('user in private route',user);
    const from = location.state?.from?.pathname || "/";
    if (loading) {
        return <div className='max-w-sm mx-auto '><div className="radial-progress text-primary " style={{ "--value": 100 }}>100%</div></div>

    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace = {true}></Navigate>
};

export default PrivateRoute;