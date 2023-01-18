import { headerCompanent } from "./headerCompanent.js";
import { sidebarCompanent } from "./sidebarCompanent.js";
import { allData } from "./allData.js";

export const accauntContentCompanent = {
  data() {
    return allData;
  },
  template: `
  <header-companent></header-companent>
  <section>
    <div class="container">
      <div class="content">
        <div class="content_header">
          <div class="content_header_item"></div>
        </div>
        <div class="content_main">



          <div v-for="item in allPosts" class="content_main_item">
            <div class="content_main_item_header">
              <div class="content_main_item_header_logo"></div>
              <div class="content_main_item_header_text">
                <div class="content_main_item_header_text_login">
                  {{item.login}}
                </div>
                <div class="content_main_item_header_text_soundname">
                  {{item.post[0].soundname}}
                </div>
              </div>
            </div>
            <div class="content_main_item_photo"></div>
            <div class="action">
              <div class="left">
                <div class="like">
        <img src="../img/icons8-facebook-like-48.png" alt="icon">
                
                </div>
                <div class="comment">
        <img src="../img/icons8-comments-48.png" alt="icon">
                
                </div>
                <div class="repost">
        <img src="../img/icons8-sharing-post-78.png" alt="icon">
                
                
                </div>
              </div>
              <div class="save">
        <img src="../img/icons8-save-60.png" alt="icon">
              
              </div>
            </div>
            <div class="opisaniye">
              <p>
                <span>
                  {{item.login}}
                </span>
                {{item.post[0].title}}
              </p>
            </div>
            <div class="commentAll">
              <span>Посметреть все комментарии({{ item.post[0].comment.length }})</span>
            </div>
          </div>




          <!-- <div class="content_main_item"></div>
          <div class="content_main_item"></div>
          <div class="content_main_item"></div> -->
        </div>
      </div>
      <sidebar-companent></sidebar-companent>
    </div>
  </section>
  `,
  components: {
    "header-companent": headerCompanent,
    "sidebar-companent": sidebarCompanent,
  },
};
