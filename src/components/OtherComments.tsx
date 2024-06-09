import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { ThumbsUp } from "phosphor-react";
import { useEffect, useState } from "react";

interface OtherCommentsProps {
  avatarUrl: string; // Adicione esta linha
  comment: string;
  name: string;
}

export function OtherComments({
  avatarUrl,
  comment,
  name,
}: OtherCommentsProps) {
  const [likeCount, setLikeCount] = useState(() => {
    const savedLikeCount = localStorage.getItem('like_count');
    return savedLikeCount ? parseInt(savedLikeCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem('like_count', likeCount.toString());
  }, [likeCount]);

  function handleLikeComment() {
    setLikeCount((state) => state + 1);
  }

  return (
    <div>
      <div className={styles.comment}>
        <Avatar hasBorder={false} src={avatarUrl} />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>{name}</strong>
                <time>Cerca de 2h atrás</time>
              </div>
            </header>
            <p>{comment}</p>
          </div>
          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
