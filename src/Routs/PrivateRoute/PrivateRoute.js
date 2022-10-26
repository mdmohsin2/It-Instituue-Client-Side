import React, { useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user} = useState(AuthContext)
    
};

export default PrivateRoute;