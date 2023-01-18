import { accauntContentCompanent } from "./accauntContentCompanent.js";
import { accauntsCompanent } from "./accauntsCompanent.js";
import { allData } from "./allData.js";
import { directCompanent } from "./directCompanent.js";
import { editCompanent } from "./editCompanent.js";
import { exploreCompanent } from "./exploreCompanent.js";
import { headerCompanent } from './headerCompanent.js';
import { profilCompanent } from "./profilCompanent.js";
// ----Api-------------------------------------------------------------




// ----Api----------------------------------------------------------------------
const routes = [
  { path: "/", component: accauntsCompanent },
  { path: "/home", component: accauntContentCompanent },
  { path: "/directinbox", component: directCompanent },
  { path: "/explore", component: exploreCompanent },
  { path: `/${allData.myAccaunt.login}`, component: profilCompanent },
  { path: "/edit", component: editCompanent },
];


const router = VueRouter.createRouter({
  // предоставляем реализацию истории посещений
  history: VueRouter.createWebHistory(),
  routes,
});



let myapp = {
  data() {
    return allData;
  },
  components: {
    "accaunt-content-companent": accauntContentCompanent,
    "header-companent": headerCompanent,
    "direct-companent": directCompanent,
    "explore-companent": exploreCompanent,
    "profil-companent": profilCompanent,
  },
};

const app = Vue.createApp(myapp);

app.use(router);
app.mount("#app");
