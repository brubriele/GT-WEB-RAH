import React from 'react';
import Image from '../../assets/IMG_8037 - Foto - Nego Júnior ©___.jpg';
import ImageMobile from '../../assets/IMG_8037 - Foto - Nego Júnior ©___mobile-2.jpg';
import './MainBanner.css'

const MainBanner = () => {
    return (
        <>
            <div>
                <h2>FORTALECENDO <span>INICIATIVAS</span> PERIFÉRICAS</h2>

            </div>
            <img className="img-desktop" src={Image} alt="Imagem main banner"></img>
            <img className="img-mobile" src={ImageMobile} alt="Imagem main banner"></img>
        </>

    )
}

export default MainBanner