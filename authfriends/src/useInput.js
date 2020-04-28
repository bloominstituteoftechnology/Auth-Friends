import React, {useState} from 'react';


const useInput = (initialState) => {
    const [state, setState] = useState(initialState)
    const handleChange = updatedValue => {
        setState(updatedValue)
        
    }
    return (
        [state,setState,handleChange]
    );
}

export default useInput;
