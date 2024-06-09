import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useContext, useState } from "react";
import { ProfileContext } from "@/context/ProfileContext";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./ui/dialog";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  const { initialName } = useContext(ProfileContext);

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  function handleDeleteComment() {
    onDeleteComment(content);
    toast.success("Comentário apagado com sucesso!");
  }
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/gabifrancamr.png"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{initialName} (você)</strong>

              <span className="text-sm font-medium text-slate-300">
                {formatDistanceToNow(new Date(), {
                  locale: ptBR,
                  addSuffix: true,
                })}
              </span>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <button title="Deletar comentário">
                  <Trash size={24} />
                </button>
              </DialogTrigger>
              <DialogContent className="bg-neutral-800 text-slate-200 border-transparent !rounded-[8px]">
                <DialogHeader>
                  <DialogTitle>Deseja apagar comentário?</DialogTitle>
                </DialogHeader>
                <div className="mt-4 flex justify-center gap-5">
                  <button
                    className="p-2 bg-red-600 rounded-[8px] min-w-[100px]"
                    onClick={handleDeleteComment}
                  >
                    Apagar
                  </button>
                  <DialogClose asChild>
                    <button className="p-2 bg-emerald-600 rounded-[8px] min-w-[100px]">
                      Cancelar
                    </button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
