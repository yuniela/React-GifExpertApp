import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCAtegory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Submit hecho')

        if (inputValue.trim().length >2){
             //actualiza lo q esta en la pag toma el estado anterior y lo add
            setCategories(cats => [inputValue, ...cats]);
            //borra el estado inicial
            setInputValue('');
        }
       
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
                value={inputValue}
                // se dispara cada vez q se cambia
                onChange = { handleInputChange}/>
        </form>
    );

}

//regla para obligar mandar una funcion
AddCAtegory.propTypes = {
    setCategories: PropTypes.func.isRequired
}