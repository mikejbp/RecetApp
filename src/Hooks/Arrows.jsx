import React from "react";

function Arrows({ prevPhoto, nextPhoto }) {
    return (
        <div className="arrowsCarrousel">
            <span className="prev" onClick={prevPhoto}>
                &#10094;
            </span>
            <span className="next" onClick={nextPhoto}>
                &#10095;
            </span>
        </div>
    )
}

export default Arrows