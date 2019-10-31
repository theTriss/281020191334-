import React from 'react';
import styles from './Profile.module.css';
import photo from '../common/img/photo.png';

const Profile = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.profile__photoWraper}>
                <img className={styles.profile__photo} src={photo} alt="Фото" />
            </div>
            <div className={`${styles.profile__about} ${styles.about}`}>
                <div className={styles.about__name}>Вероника Ростова</div>
                <div className={styles.about__position}>Менеджер по продажам</div>
                <div className={styles.about__status}>Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны</div>
                <div className={styles.service}>
                    <div className={styles.service__titleWraper}>
                        <div className={`${styles.service__counter_title} ${styles.service__counter}`}>Услуг</div>
                    </div>
                    <div className={styles.service__items}>
                        <div className={styles.service__item}>
                            <div className={`${styles.service__name} ${styles.service__name_first}`}>Ручное бронирование</div>
                            <div className={styles.service__counter}>11</div>
                        </div>
                        <div className={styles.service__item}>
                            <div className={`${styles.service__name} ${styles.service__name_second}`}>Пакетные туры</div>
                            <div className={styles.service__counter}>3</div>
                        </div>
                        <div className={styles.service__item}>
                            <div className={`${styles.service__name} ${styles.service__name_third}`}>Отели</div>
                            <div className={styles.service__counter}>1</div>
                        </div>
                    </div>
                    <div className={`${styles.service__item} ${styles.service__item_total}`}>
                        <div className={`${styles.service__name} ${styles.service__name_total}`}>Всего</div>
                        <div className={styles.service__counter}>15</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Profile);