import React from 'react'
import './about.css'
import { useTranslation } from 'react-i18next';


export default function About() {


  const {t, i18n} = useTranslation();
  // console.log(i18n.language);
  // console.log(t('welcome'));
  // console.log('Translations', i18n.store.data)
  return (
    <div>
      
      <div className="homeabout">

        <div className="aboutaskema">
          
          <h1>Askema Engineering</h1>
          <hr />
            <p>
            
            {t("Askema Engineering: We're a young team of mechanical engineers and professionals dedicated to creating top-notch brake and clutch products. Our non-metallic, non-asbestos materials are ASTM tested, ensuring safety and sustainability on the road. With innovation at our core, we're committed to enhancing your driving experience while caring for the environment.")}
            </p>
        </div>
      </div>
    </div>
  )
}
