import { allData } from "./allData.js";
import { headerCompanent } from './headerCompanent.js';

export let profilCompanent = {
  data() {
    return allData;
  },
  template: `
        <header-companent></header-companent>

<div class="profil">
<div class="profil_content">
  <div class="profil_header">
    <div class="profil_photo">
      <div class="profil_photos"></div>
    </div>
    <div class="profil_text">
      <div class="profil_row1">
        <span>abdulloev.19</span>
      </div>
      <div class="profil_row2">
        <span>1 публикация</span>
        <span>1 069 подписчиков</span>
        <span>606 подписок</span>
      </div>
      <div class="profil_row3">
        <div class="fullname">Ismoiljon Abdulloev</div>
        <div class="biografia">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti.</div>
      </div>
    </div>
  </div>

  <div class="topical">
    <div class="topical_item">
      <div class="topical_photo"></div>
      <div class="topical_title">актуальное</div>
    </div>
    <div class="topical_item">
      <div class="topical_photo"></div>
      <div class="topical_title">актуальное</div>
    </div>
    <div class="topical_item">
      <div class="topical_photo"></div>
      <div class="topical_title">актуальное</div>
    </div>
  </div>

  <div class="profil_posts">
    <div class="profil_posts_header">
      <span>ПУБЛИКАЦИИ</span>
      <span>СОХРАНЕННОЕ</span>
      <span>ОТМЕТКИ</span>
    </div>
    <div class="profil_posts_content">
      <div class="profil_posts_content_item" v-for="item in 9"></div>
    </div>
  </div>

</div>
</div>
  `,
  components: {
    "header-companent": headerCompanent,
  }
};
