import { allData } from "./allData.js";
export const headerCompanent = {
  data() {
    return allData
  },
    template: `
    <header>
    <div class="header_content">
      <div class="logo"></div>
      <div class="search">
        <form action="">
          <input type="search" placeholder="Поиск" />
        </form>
      </div>
      <div class="media">

        <div class="media_item item1">
        <router-link to="/home">
        <img src="img/icons8-home-page-64.png" alt="icon">
        </router-link>
        </div>

        <div class="media_item item2">
        <router-link to="/directinbox">
        <img src="./img/icons8-unread-messages-30.png" alt="icon">
        </router-link>
        </div>

        <div class="media_item item3">
        <router-link to="/explore">
        <img src="../img/icons8-compass-50.png" alt="icon">
        </router-link>
        </div>

        <div class="media_item item4" @click="likecontent = !likecontent; profil = false">
        <img src="../../img/icons8-facebook-like-48.png" alt="icon">
        </div>

        <div class="media_item item5" @click="profil = !profil; likecontent = false">/</div>

      </div>
      <div class="profil_content" v-if="profil">
      <router-link to="/${allData.myAccaunt.login}">
      <p>Профиль</p>
      </router-link>
      <p>Сохраненное</p>
      <router-link to="/edit">
      <p>Настройки</p>
      </router-link>
      <p>Ваши действия</p>
      <p>Переключение между аккаунтами</p>
      </div>

      <div class="like_content" v-if="likecontent">
        <div class="like_content_item" v-for="item in 9">
          <div class="like_content_photo"></div>
          <div class="like_content_title">
      <p><strong>accauntlogin</strong>подписался(-ась) на ваши обновления.</p>
          </div>
          <button id="fallow">Подписаться</button>
        </div>
      </div>

    </div>
  </header>
    `
};


// Выйти                  