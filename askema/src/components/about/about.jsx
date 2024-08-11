import React from 'react'
import './about.css'
import image1 from '../../Assets/brake.jpg';
import Cleints from '../body/cleints';
import teamfoto from '../../Assets/team foto.jpg';
import { useTranslation } from 'react-i18next';

export default function AboutUs() {

  const {t, i18n} = useTranslation();
  return (
    <div > 
      <section className='about'>
          <div className="content">
            <div className="askema">
              <div className="text">
                <h2>{t("Askema Engineering")} </h2>
                <hr />
                <p>{t("para1")} </p>
              </div>
              <div className="image">
                <img src={image1} alt="" />
              </div>
            </div>

            <div className="problem">
              <h2>{t("The Problem We Are Solving")} </h2>
              <hr />
              <p>{t("para2")} </p>
            </div>

            <div className="solution">
              <h2>{t("Our Solution")} </h2>
              <hr />
              <p>{t("para3")} </p>
            </div>


            <div className="vision">
              <h2>{t("Our Vision")} </h2>
              <hr />
              <p>{t("para4")} </p>
            </div>

            <h2>{t("Why Choose Us?")} </h2>
            <div className="whyUs">
              
              <hr />
              
              <div className="box">
                <div className="import card show">
                  <img src={image1}alt="" />
                  <h3>{t("Import Substitution")} </h3>
                  <p>{t("para5")} </p>
                </div>

                <div className="applicable card show">
                  <img src={image1} alt="" />
                  <h3>{t("Applicable")} </h3>
                  <p>{t("para6")} </p>
                </div>

                <div className="affordable card show">
                  <img src={image1} alt="" />
                  <h3>{t("Affordable")} </h3>
                  <p>{t("para7")} </p>
                </div>

              </div>


            </div>

            <div className="team">
              <h2>{t("Our Team")} </h2>
              <hr />
              <img src={teamfoto} width={"80%"}  alt="Team foto" />
            </div>
            
            <Cleints/>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/bH8Bx12YZTs?si=nmIA6kqj65kyLbp5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
      </section>

    </div>
  )
}
