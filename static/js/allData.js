export let allData = {
  Registration: false,
  profil: false,
  likecontent: false,

  myAccaunt: {
    firstName: "Ismoiljon",
    lastName: "Abdulloev",
    login: "abdulloev.19",
    tell: "",
    email: "",
    mypost: [
      {
        photoSrc: "",
        title: "",
        like: 0
      }
    ],
    followers: [

    ],
    following: [

    ],
    saves: [

    ]
  },

  // All Posts
  allPosts: [
    {
      login: "accauntlogin",
      post: [
        {
          photoSrc: "",
          title: "Описание поста...",
          like: 0,
          soundname: "Оригинальная аудиодорожка",
          comment: [
            {
              accauntLogin: "",
              comment: "",
            },
          ],
        },
      ],
    },

    {
      login: "accauntlogin",
      post: [
        {
          photoSrc: "",
          title: "Описание поста...",
          like: 0,
          soundname: "Оригинальная аудиодорожка",
          comment: [
            {
              accauntLogin: "",
              comment: "",
            },
          ],
        },
      ],
    },

    {
      login: "accauntlogin",
      post: [
        {
          photoSrc: "",
          title: "Описание поста...",
          like: 0,
          soundname: "Оригинальная аудиодорожка",
          comment: [
            {
              accauntLogin: "",
              comment: "",
            },
          ],
        },
      ],
    },
  ],
  // End all Posts
};



async function GetUsers() {
  // отправляет запрос и получаем ответ
  const response = await fetch("/api/users", {
      method: "GET",
      headers: { "Accept": "application/json" }
  });

  // если запрос прошел нормально
  if (response.ok === true) {
      // получаем данные
      const users = await response.json();
      console.log(users)
    }
}
export let data = GetUsers()
console.log(data)
