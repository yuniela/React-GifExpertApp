import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { AddCAtegory } from './components/AddCategory';
import { GrifGrid } from './components/GifGrif';

export const GifExpertApp = () => {

    //lista de categorias

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     //usando el operador spred
    //     setCategories( [...categories, 'HunterXHunter'] );
    // } 
    
    //otra forma usando callbacks
    // const handleAdd (cats => [...cats, 'HunterXHunter']);
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCAtegory setCategories={setCategories}/>
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    //usamos map recibe map(categoria, indice)
                    categories.map(category => (
                        <GrifGrid 
                            key = {category}
                            catefogory={category}
                        />
                        
                    ))
                }
            </ol>
        </>
    );
};

