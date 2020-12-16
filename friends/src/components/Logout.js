import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const history = useHistory();
    window.localStorage.clear();
    history.push('/login');
    window.location.reload(true)
    return false;
};

export default Logout;