import React, { useEffect } from 'react';
import 'flatpickr/dist/themes/light.css';
import person1 from '../../Assets/testimonial1.jpg';
import { useTranslation } from 'react-i18next';

export default function Comment() {

  const {t, i18n} = useTranslation();
  useEffect(() => {
    // ... (unchanged JavaScript code for CountUp and flatpickr)

    const intervalId = setInterval(() => {
      const carousel = document.getElementById('testimonialCarousel');
      const currentIndex = Array.from(carousel.querySelectorAll('.carousel-item')).findIndex(
        (item) => item.classList.contains('active')
      );
      const nextIndex = (currentIndex + 1) % 3; // Adjust the number of items in the carousel

      carousel.querySelector('.carousel-item.active').classList.remove('active');
      carousel.querySelectorAll('.carousel-item')[nextIndex].classList.add('active');
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className=" py-3">
      
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className=" text-center text-white p-5 rounded" style={{ backgroundColor: '#F2EAD3'}}>
              <div className="mb-4">
                <i className="fas opacity-10 fa-quote-right fa-3x"></i>
              </div>
              <h2 className="h4 mb-4" style={{color: '#3F2305'}}>{t("What Our Clients Are Saying")}</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div id="testimonialCarousel" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="text-center">
                    <img
                      className="w-40 mb-4 img-fluid rounded-circle"
                      src={person1}
                      alt=""
                    />
                    <p className="lead">
                      {t("person1")}
                    </p>
                    <div className="author justify-content-center">
                      <div className="name ps-2">
                        <span>{t("Ermiyas Fikire")}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <div className="text-center">
                    <img
                      className="w-40 mb-4 img-fluid rounded-circle"
                      src={person1}
                      alt=""
                    />
                    <p className="lead">
                    {t("person1")}
                    </p>
                    <div className="author justify-content-center">
                      <div className="name ps-2">
                        <span>{t("Ermiyas Fikire")} </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <div className="text-center">
                    <img
                      className="w-40 mb-4 img-fluid rounded-circle"
                      src={person1}
                      alt=""
                    />
                    <p className="lead">
                    {t("person1")}
                    </p>
                    <div className="author justify-content-center">
                      <div className="name ps-2">
                        <span>{t("Ermiyas Fikire")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='p-4 '></div>
    </section>
  );
}
