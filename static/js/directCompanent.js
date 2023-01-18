import { allData } from './allData.js';
import { headerCompanent } from './headerCompanent.js';


export const directCompanent = {
  data() {
    return allData
  },  
  template: `
  
  <header-companent></header-companent>
  <div class="direct_inbox">
    <div class="persons">
      <div class="direct_header">
        <span>accauntlogin</span>
      </div>
      <div class="person_sms">

        <!--  -->
        <div v-for="item in 5" class="accauntlogindirect">
          <div class="accauntlogindirect_left">

            <div class="accauntlogindirect_logo"></div>
            <div class="accauntlogindirect_text">
              <div class="accauntlogindirect_accauntlogin">accauntlogin</div>
              <div class="accauntlogindirect_lastmessage">lastmessage</div>
            </div>
          </div>
          <div class="accauntlogindirect_right">!</div>
        </div>
        <!--  -->
      </div>

    </div>


    <div class="message"></div>
  
  </div>`,
  components: {
    "header-companent": headerCompanent
  }
};
