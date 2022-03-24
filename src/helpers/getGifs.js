

export const getGifs = async(catefogory) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=sMwMRkf7UrXhkf3YdLxBVcLlqvTMDvY2&q=${ encodeURI(catefogory) }&limit=10`;
    const resp = await fetch (url);

    const {data} = await resp.json();

    const gifs = data.map( img => {

        return {
            id: img.id,
            title: img.title,
            // si tiene las imagenes entonces q las use
            url: img.images?.downsized_medium.url
        }
    }

    );

    return gifs;
   
};