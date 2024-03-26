import { Dispatch, SetStateAction } from 'react';

import style from '../css/Polar.module.css';
import pictures from '../../../assets/pictures.png';
import leftArrow from '../../../assets/SquareAltArrowLeft.png';
import circle from '../../../assets/circle-x.png';
import noPhoto from '../../../assets/no_avatar.png';
import { RootState } from '../../../store';
import { useSelector } from 'react-redux';

interface CreatePostModalProps {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  photo_post: File[];
  setPhoto_post: React.Dispatch<React.SetStateAction<File[]>>;
  handleAddPost: () => void;
  postId: number;
}

function CreatePostModal({
  modal,
  setModal,
  description,
  setDescription,
  photo_post,
  setPhoto_post,
  handleAddPost,
  postId,
}: CreatePostModalProps) {
  const user = useSelector((store: RootState) => store.auth.user);

  const fileInputId = `fileInput-${postId}`;

  const handleRemoveFile = (index: number) => {
    const newFiles = [...photo_post];
    newFiles.splice(index, 1);
    setPhoto_post(newFiles);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('File selected');
    if (e.target.files) {
      const filesArray = Array.from(e.target.files); // Преобразование объекта FileList в массив
      setPhoto_post([...photo_post, ...filesArray]); // Добавление новых файлов в состояние
    }
  };
  return (
    <>
      <div className={modal ? style.modal_activ : style.modul_deactivated}>
        <div
          className={style.modal_backgraund}
          onClick={() => setModal(false)}
        ></div>
        <div className={style.modal_body}>
          <div className={style.header_modal}>
            <div className={style.left_arrow} onClick={() => setModal(!modal)}>
              <img src={leftArrow} alt="" />
            </div>
            <span>Публикация тренировки</span>
          </div>
          <div className={style.modal_main_content}>
            <div className={style.main_content_img}>
              <img src={user?.avatar_img || noPhoto} alt="" />
            </div>
            <div className={style.main_content_input}>
              <textarea
                placeholder="Написать пост до 200 символов"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className={style.modal_photo_feed}>
            {photo_post.map((file, index) => (
              <div key={index} className={style.media_block_file}>
                {file.type.startsWith('image/') ? (
                  <img
                    className={style.block_file_img_photo}
                    src={URL.createObjectURL(file)}
                    alt=""
                  />
                ) : file.type.startsWith('video/') ? (
                  <video controls>
                    <source src={URL.createObjectURL(file)} type={file.type} />
                  </video>
                ) : null}
                <img
                  className={style.block_file_img_circle}
                  src={circle}
                  alt=""
                  onClick={() => handleRemoveFile(index)}
                />
              </div>
            ))}
          </div>
          <div className={style.modal_media_block}>
            <div className={style.media_block_text}>
              <label htmlFor={fileInputId} className={style.media_block_img}>
                <img src={pictures} alt="" />
              </label>
              <input
                id={fileInputId}
                type="file"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                multiple
              />
              <span>Добавить фото и (или) видео</span>
            </div>
            <div className={style.media_block_btn} onClick={handleAddPost}>
              Отправить
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePostModal;
