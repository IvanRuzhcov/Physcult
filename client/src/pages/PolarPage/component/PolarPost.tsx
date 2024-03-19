import React, { useState } from 'react';
import style from '../css/Polar.module.css';
import noPhoto from '../../../assets/no_avatar.png';
import { formatDate, formatDuration } from '../../../helpers/format';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import TrackMap from './TrackMap';

import axios from 'axios';
import CreatePostModal from '../modal/CreatePostModal';

interface PolarPostProps {
  data: {
    id: number;
    'upload-time': string;
    distance: string;
    duration: string;
    calories: string;
    gpx: string;
  };
  index: number;
}

function PolarPost({ data, index }: PolarPostProps) {
  const [modal, setModal] = useState(false);
  const [photo_post, setPhoto_post] = useState<File[]>([]);
  const [description, setDescription] = useState('');
  const [id] = useState(data.id);
  const [modalKey, setModalKey] = useState(0);

  const toggleModal = () => {
    setModalKey(modalKey + 1);
    setModal(!modal);
  };

  const user = useSelector((store: RootState) => store.auth.user);
  const handleAddPost = async () => {
    try {
      const formData = new FormData();
      formData.append('id', id.toString());
      formData.append('description', description);
      photo_post.forEach((file, index) => {
        formData.append(`postImg`, file);
      });

      // Фактический запрос к серверу
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await axios.post('/polar/publishing', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Файл успешно загружен');
    } catch (error) {
      console.log(error);
    }
    setDescription('')
    setPhoto_post([])
    setModal(false)
  };

  return (
    <>
      <div className={style.polar_data_box} key={data['id']}>
        <div className={style.post_header}>
          <img src={user?.avatar_img || noPhoto} alt="" />
          <div className={style.post_name}>
            <span>{`${user?.name} ${user?.surname}`}</span>
            <div>{formatDate(data['upload-time'])}</div>
          </div>
        </div>
        <div className={style.result_container}>
          <div className={style.result_box}>
            <span>Дистанция</span>
            <div>{data['distance']}</div>
          </div>
          <div className={style.result_box}>
            <span>Время </span>
            <div>{formatDuration(data['duration'])}</div>
          </div>
          <div className={style.result_box}>
            <span>Ккал</span>
            <div>{data['calories']}</div>
          </div>
        </div>
        <div className={style.map_container}>
          {data.gpx && (
            <TrackMap gpxData={data.gpx} mapId={`map-${data['id']}`} />
          )}
        </div>
        <div className={style.container_btn} onClick={toggleModal}>
          Опубликовать тренировку
        </div>
      </div>
      <CreatePostModal
        postId={index}
        modal={modal}
        setModal={setModal}
        description={description}
        setDescription={setDescription}
        photo_post={photo_post}
        setPhoto_post={setPhoto_post}
        handleAddPost={handleAddPost}
      />
    </>
  );
}

export default PolarPost;
