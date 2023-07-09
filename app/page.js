"use client";

// import { MoreVert } from '@mui/icons-material';
import { useState } from "react";
import styles from './page.module.css'
import Image from "next/image";
import Link from "next/link";

export default function Post() {
  const [like, setLike] = useState(20)
  const [islike, issetLike] = useState()

  const [dislike, setDisLike] = useState(13)
  const [isdislike, issetDisLike] = useState()

  function likeHandler() {
    setLike(islike ? like + 1 : like - 1)
    issetLike(!islike)
  }

  function dislikeHandler() {
    setDisLike(isdislike ? dislike + 1 : dislike - 1)
    issetDisLike(!isdislike)
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Link href='/posts' className={styles.data}>
            <Image className={styles.img} src="/pic.jpg" alt="pic" height={60} width={60} />
              Jennifer Lawrence</Link>
        </div>
        <div className={styles.post}>
          <Image className={styles.image} src="/pic.jpg" alt="pic" height={500} width={450} />
          <div className={styles.bottom}>
            <Image src="/like.png" alt="like" height={30} width={30} className={styles.btn} onClick={likeHandler} />
            <span className={styles.like}>{like} people like it</span>
            <Image src="/dislike.png" alt="dislike" height={30} width={30} className={styles.btn} onClick={dislikeHandler} />
            <span className={styles.dislike}>{dislike} people dislike it</span>
            <Image src="/share.png" alt="share" height={30} width={30} className={styles.btn} />
            <Image src="/comment.png" alt="comment" height={30} width={30} className={styles.btn} />
          </div>
        </div>
      </div>
    </div>
  )
}
