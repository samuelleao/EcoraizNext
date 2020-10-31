import React from 'react';
import { FaWhatsapp }  from 'react-icons/fa'

function ButtonWhatsapp(){
    return(
        <button className='buttonWpp'>
            Falar no whatsapp
            <FaWhatsapp size={20} className='ml-2' />    
        </button>
    );
}

export default ButtonWhatsapp;