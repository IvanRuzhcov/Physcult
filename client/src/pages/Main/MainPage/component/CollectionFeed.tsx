import React from 'react';
import latypov from '../../../../assets/collections/latypov.png';
import nagorny from '../../../../assets/collections/Nagorny.png';
import lady from '../../../../assets/collections/beautiful_lady.png';
import runner from '../../../../assets/collections/runner.png';
import yoga from '../../../../assets/collections/yoga.png';
import star from '../../../../assets/icons/Star.png';

import styles from '../css/MainPage.module.css'

function CollectionFeed() {
    return (
        <>
         <div className={styles.compilations}>
          <div className={styles.inside}>
            <div>
              <p>Сборники</p>
            </div>
            <div>
              <button className={styles.btn}>Ещё</button>
            </div>
          </div>
        </div>

        <div className={styles.compilation_elem}>
          <div className={styles.latypov}>
            <div className={styles.name_latypov}>
              <p>Латыпов Э.</p>
              <div className={styles.star_box}>
                <img src={star} alt="" />
              </div>
            </div>
            <img className={styles.photo_latypov} src={latypov} alt="" />
            <div className={styles.latypov_text}>
              <span>8 видео</span>
            </div>
          </div>

          <div className={styles.nagorny}>
            <div className={styles.name_nagorny}>
              <p>Нагорный Н.</p>
              <div className={styles.star_box}>
                <img src={star} alt="" />
              </div>
            </div>
            <img className={styles.photo_nagorny} src={nagorny} alt="" />
            <div className={styles.latypov_text}>
              <span>8 видео</span>
            </div>
          </div>

          <div className={styles.yoga}>
            <div className={styles.name_yoga}>
              <p>Медита-ция</p>
              <div className={styles.star_box}>
                <img src={star} alt="" />
              </div>
            </div>
            <img className={styles.photo_yoga} src={yoga} alt="" />
            <div className={styles.latypov_text}>
              <span>8 видео</span>
            </div>
          </div>

          <div className={styles.yoga}>
            <div className={styles.name_yoga}>
              <p>Популяр-ное</p>
              <div className={styles.star_box}>
                <img src={star} alt="" />
              </div>
            </div>
            <img className={styles.photo_pop} src={lady} alt="" />
            <div className={styles.latypov_text}>
              <span>8 видео</span>
            </div>
          </div>

          <div className={styles.yoga}>
            <div className={styles.name_yoga}>
              <p>Другое</p>
              <div className={styles.star_box}>
                <img src={star} alt="" />
              </div>
            </div>
            <img className={styles.photo_other} src={runner} alt="" />
            <div className={styles.latypov_text}>
              <span>8 видео</span>
            </div>
          </div>
        </div>
        </>
    );
}

export default CollectionFeed;