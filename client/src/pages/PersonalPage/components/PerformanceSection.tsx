import React from 'react';
import fire from '../../../assets/icons/Fire.png';
import watch from '../../../assets/icons/Clock_Circle.png';
import dumbbells from '../../../assets/icons/Dumbbells.png';
import style from '../css/PersonalPage.module.css'

function PerformanceSection() {
    return (
        <>
        <div className={style.performance_section}>
              <span>Показатели</span>
              <div className={style.indicators_container}>
                <div
                  className={`${style.training_duration} ${style.indicators_box}`}
                >
                  <img src={watch} alt="" />
                  <div className={style.indicators_box_text}>
                    <div>Длительность тренировок</div>
                    <div className={style.nested_indicators}>
                      <div className={style.indicators_box_results_up}>50</div>
                      <div className={style.indicators_box_text_bottom}>
                        мин
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${style.call} ${style.indicators_box}`}>
                  <img src={fire} alt="" />
                  <div className={style.indicators_box_text}>
                    <div>Калории</div>
                    <div className={style.nested_indicators}>
                      <div className={style.indicators_box_results_up}>
                        1024
                      </div>
                      <div className={style.indicators_box_text_bottom}>
                        калл
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.indicators_container}>
                <div
                  className={`${style.number_training_sessions} ${style.indicators_box}`}
                >
                  <img src={watch} alt="" />
                  <div className={style.indicators_box_text}>
                    <div>
                      <div className={style.lol}>Количество тренировок</div>
                      <div className={style.indicators_box_results_bottom}>
                        50
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${style.frequent_training} ${style.indicators_box}`}
                >
                  <img src={dumbbells} alt="" />
                  <div className={style.indicators_box_text}>
                    <div>Самая частая тренировка</div>
                    <div className={style.indicators_box_results_bottom}>
                      Бег
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    );
}

export default PerformanceSection;