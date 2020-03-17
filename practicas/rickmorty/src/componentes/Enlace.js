import React from 'react';

const Enlace = ({texto, link})=>(
    <div className="no-decoration color-white ">
        <a href={link} className="color-white hover-gold h6">
            {texto}
        </a>
    </div>
);

export default Enlace;