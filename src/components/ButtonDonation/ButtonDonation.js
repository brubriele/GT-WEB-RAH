import React from 'react';
import './ButtonDonation.css'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonDonation = () => {
    return (
        <div className="btn__donation">
            <FontAwesomeIcon icon={faHeart} />
            <p className="btn_donation btn_donation--description">Doações</p>
        </div>
    )
}

export default ButtonDonation