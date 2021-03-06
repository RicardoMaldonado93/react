import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> ~ { category } ~ </h3>
            { loading && <p className="animate__animated animate__flash">cargando...</p> }
            <div className="card-grid animate__animated animate__fadeIn">
                {         
                    images.map( img =>
                    <GifGridItem 
                        {...img}
                        key={img.id}
                    />  
                    )
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}