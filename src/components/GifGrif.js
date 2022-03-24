import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import React,  { useState, useEffect } from 'react';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GrifGrid = ({catefogory}) => {

    // // const [count, setCount] = useState(0);
    // const [images, setImages ] = useState([]);
    // // recibe una funcion q quiero ejecutar y llama a una funcion
    // //dispara peticiones http y la lista vacia ayuda a que no se vuelva a disparar
    // useEffect(() => {

    //     getGifs(catefogory).then(imgs => setImages(imgs))
       
    // },[catefogory]);


    // getGifs();

    //usando custom hooks
    const {data: images, loading} = useFetchGifs( catefogory);
    console.log(loading);
    
    

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{catefogory}</h3>
            { loading && <p className='animate__animated animate__flash'>loading</p> }
            <div className='card-grid'>
                {         
                    images.map(img => (
                        <GifGridItem
                            key = {img.id}
                            {...img}
                        />
                    ))
                }            
            </div>
        </>           
    );
}

