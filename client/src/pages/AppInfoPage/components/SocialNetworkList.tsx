import React from 'react';
import style from '../css/AppInfoPage.module.css'
import vk from '../../../assets/vk.png';

function SocialNetworkList() {
    return (
        <>
        <div className={style.social_network_conteiner}>
        <div className={style.social_network}>
          <img src={vk} alt="" />
          <span>ВКонтакте</span>
        </div>
        <div className={style.social_network}>
          <img src={vk} alt="" />
          <span>ВКонтакте</span>
        </div>
        <div className={style.social_network}>
          <img src={vk} alt="" />
          <span>ВКонтакте</span>
        </div>
      </div>
        </>
    );
}

export default SocialNetworkList;