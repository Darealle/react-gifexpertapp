import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGriditem } from "./GifGriditem";

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__pulse">{category}</h3>

            <div className="card-grid">
                {loading && <p className="animate__animated animate__shakeY">Loading</p>}
                {
                    images.map(img => (
                        <GifGriditem
                            key={img.id}
                            {...img} />
                    ))
                }
            </div>
        </>
    )
}