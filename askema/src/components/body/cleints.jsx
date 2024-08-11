import React from 'react'
import './cleints.css'
import logo1 from '../../Assets/biritshembassy.jpg';
import logo2 from '../../Assets/goldwater.jpg';
import logo3 from '../../Assets/awashbank.jpg';
import logo4 from '../../Assets/moenco.jpg';
import logo5 from '../../Assets/nefassilk.jpg';
import logo6 from '../../Assets/marathonmotors.png';
import logo7 from '../../Assets/nationalmotors.png';
import logo8 from '../../Assets/belaymotors.jpg';
import logo9 from '../../Assets/Ethioroad.png';
import { useTranslation } from 'react-i18next';

export default function Cleints() {

  const {t, i18n} = useTranslation();
  return (
    <div className='clients'>
        <h2>{t("Clients")} </h2>
        <hr />
        <p>{t("clients")} </p>
        
        <div className="clients_logos">
            <div className="logo1">
              <img src={logo1} alt="" />
            </div>
            <div className="logo2">
              <div className="log2">
                <img src={logo2} alt="" />
              </div>
              <div className="log3">
                <img src={logo3} alt="" />
              </div>
            </div>

            <div className="logo3">
              <div className="logo4">
                <img src={logo4} alt="" />
              </div>
              <div className="logo5">
                <img src={logo5} alt="" />
              </div>
              <div className="logo6">
                <img src={logo6} alt="" />
              </div>
            </div>
            <div className="logo4">
              <div className="log7">
                <img src={logo7} alt="" />
              </div>
              <div className="log8">
                <img src={logo8} alt="" />
              </div>
            </div>

            <div className="logo5">
              <img src={logo9} alt="" />
            </div>

        </div>

    </div>
  )
}
