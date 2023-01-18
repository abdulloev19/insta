import { headerCompanent } from './headerCompanent.js';

export const exploreCompanent = {
  template: `
  <header-companent></header-companent>
  <div class="explore">
   <div class="explore_content">
     <div v-for="item in 21" class="explore_item"></div>
   </div>
  </div>
  `,
  components: {
    "header-companent": headerCompanent,
  }
};
