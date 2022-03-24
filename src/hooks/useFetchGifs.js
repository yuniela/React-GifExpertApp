import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs'
//estandar de hooks siempre empiezan con use

//son funciones 

export const useFetchGifs = ( catefogory ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //para traer las imagenes
    useEffect( () => {
        getGifs( catefogory).then(imgs => {

            // console.log(imgs)
            setState({
                data:imgs
                loading: false
            });

        })
    }, [catefogory]);

    // setTimeout( () => {
    //     setstate({
    //         data: [1,2,3,4,5,6,7],
    //         loading: false
    //     })

    // },3000);

    //retorna la info q esta en useState

    return state;
}