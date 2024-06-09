import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./ui/dialog";

import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

import capa from "../assets/capa.svg";
import { Avatar } from "./Avatar";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { ProfileContext } from "@/context/ProfileContext";

const formSchema = z.object({
  url: z.string(),
  name: z.string().min(3, "O nome deve ter pelo menos 3 letras"),
  description: z
    .string()
    .min(3, "Adicione uma descrição")
    .max(50, "Descrição máxima de 50 caracteres"),
});

export type formType = z.infer<typeof formSchema>;

export function Sidebar() {
  const {initialName, initialDescription, initialUrl, changeProfile} = useContext(ProfileContext)

  const { register, handleSubmit } = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialName,
      description: initialDescription,
      url: initialUrl,
    },
  });

  function handleChangeProfile(data: formType) {
    changeProfile(data)
  }

  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={capa} />
      <div className={styles.profile}>
        <Avatar src={initialUrl} />
        <strong>{initialName}</strong>
        <span>{initialDescription}</span>
      </div>
      <footer>
        <Dialog>
          <DialogTrigger asChild>
            <span>
              <PencilLine size={20} />
              Editar seu perfil
            </span>
          </DialogTrigger>
          <DialogContent className="bg-neutral-800 text-slate-200 border-transparent !rounded-[8px]">
            <DialogHeader>
              <DialogTitle>Editar perfil</DialogTitle>
            </DialogHeader>
            <form
              onSubmit={handleSubmit(handleChangeProfile)}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col space-y-2">
                <label className="flex" htmlFor="img">
                  Link da imagem
                </label>
                <input
                  {...register("url")}
                  id="img"
                  className="p-2 flex bg-neutral-900 rounded-[8px]"
                  type="text"
                  placeholder="Link da imagem"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="flex" htmlFor="name">
                  Nome
                </label>
                <input
                  {...register("name")}
                  id="name"
                  className="p-2 flex bg-neutral-900 rounded-[8px]"
                  type="text"
                  placeholder="Nome"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="flex" htmlFor="description">
                  Descrição
                </label>
                <input
                  {...register("description")}
                  id="description"
                  className="p-2 flex bg-neutral-900 rounded-[8px]"
                  type="text"
                  placeholder="Descrição"
                />
              </div>
              <div className="flex justify-end">
                <DialogClose asChild>
                  <button
                    className="p-2 bg-emerald-600 rounded-[8px] min-w-[100px]"
                    type="submit"
                  >
                    Salvar
                  </button>
                </DialogClose>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </footer>
    </aside>
  );
}
