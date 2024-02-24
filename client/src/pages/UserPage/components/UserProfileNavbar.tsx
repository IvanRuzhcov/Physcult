import React, { MouseEventHandler, memo } from 'react';
import style from '../css/UserPage.module.css';

function UserProfileNavbar({
    activeBtn,
    handlePublications,
    handleProgress,
    handleRepost
  }: {
    activeBtn: string;
    handlePublications: MouseEventHandler<HTMLDivElement>;
    handleProgress: MouseEventHandler<HTMLDivElement>;
    handleRepost: MouseEventHandler<HTMLDivElement>;
  }) {
    return (
        <>
        <div className={style.user_navbar}>
          <div className={style.publications_box} onClick={handlePublications}>
            <div
              className={
                activeBtn === 'publications'
                  ? style.on_publications
                  : style.off_publications
              }
            >
              Публикации
            </div>
            <div
              className={
                activeBtn === 'publications' ? style.active_line : style.line
              }
            ></div>
          </div>
          <div className={style.publications_box} onClick={handleProgress}>
            <div
              className={
                activeBtn === 'progress' ? style.on_progress : style.off_progress
              }
            >
              Достижения
            </div>
            <div
              className={
                activeBtn === 'progress' ? style.active_line : style.line
              }
            ></div>
          </div>
          <div className={style.publications_box} onClick={handleRepost}>
            <div
              className={
                activeBtn === 'repost' ? style.on_progress : style.off_progress
              }
            >
              Репосты
            </div>
            <div
              className={
                activeBtn === 'repost' ? style.active_line : style.line
              }
            ></div>
          </div>
        </div>
      </>
    );
}

export default UserProfileNavbar;