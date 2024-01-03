import { Header } from "./components/Header";
import { Sidebar } from "./components/Siderbar";
import { Post, PostType } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: " 👉 diego.rocketseat/doctorcare" },
      { type: "hashtag", content: "#novoprojeto " },
      { type: "hashtag", content: "#nlw " },
      { type: "hashtag", content: "#rocketseat" },
    ],
    publishedAt: new Date("2024-01-03 10:00:00"),
    comment: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      content: "Muito legal :)",
    },
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educador @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ",
      },
      { type: "link", content: " 👉 mayk.rocketseat" },
      { type: "hashtag", content: "#uiux " },
      { type: "hashtag", content: "#userexperience " },
      { type: "hashtag", content: "#rocketseat" },
    ],
    publishedAt: new Date("2024-01-02 20:00:00"),
    comment: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      content: "Gostei bastante!",
    },
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}
