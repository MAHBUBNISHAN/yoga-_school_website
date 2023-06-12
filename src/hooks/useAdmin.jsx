import React from 'react'
import useAuth from './useAuth';

const useAdmin = () => {
    const [user, loading] = useAuth();
 
    return (
        <div>useAdmin</div>
    )
}

export default useAdmin