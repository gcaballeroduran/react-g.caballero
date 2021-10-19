import React,{ useState, useEffect }  from 'react';
import './Gallery.scss';
import { Card } from '../Card/card';


export const  Gallery = () =>{
  const url = 'https://rickandmortyapi.com/api/character';
  const[images, setImages] = useState([]);
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () =>{
    const resp = await fetch(url);
    const data = await resp.json();

    const basicImages = data?.results?.map((resp) => {
      return{
        id: resp.id,
        url: resp.image,
        title: resp.name,
        gender: resp.gender,
        status: resp.status,
      };
    });
    setImages(basicImages);
  };
  
  return (
   <>
      <h1>Rick and Morty</h1>
      <div className='container' >
       {images?.map((d) =>(
          <Card
            name={d.title}
            image={d.url}
            gender={d.gender}
            status = {d.status}
            key={d.id}
          >
         </Card>
       ))}
      </div>
      </>
      
  );
  
};


