import { allData } from "./allData.js";

export const accauntsCompanent = {
  data() {
    return {
      
    }
  },
  template: `
  <div class="container_signup">
  <div class="container_signup_content">

    <div class="container_signup_logo">
      <div class="container_signup_logo_center"></div>
    </div>
    <div class="container_signup_accaunts">
      <div class="container_signup_accaunts_signin">
        <h1>INSTAGRAM</h1>


        <form action="/target/" method="GET" v-if="!Registration">
          <div>
            <input type="text" name="test1" placeholder="Телефон, имя пользователя или эл. адрес">
            <input type="text" name="test2" placeholder="Пароль">
          </div>
          <input type="submit">
          
          <h3>Забыли пароль?</h3>
        </form>
        <div v-if="!Registration" class="signup">
          <h3>У вас ещё нет аккаунта? <span @click=" Registration = !Registration " style="color: #267bc5; cursor: pointer">Зарегистрироваться</span></h3>
        </div>

      <form v-if="Registration"> 
      <div>
      <input type="text" placeholder="Моб. телефон или эл. адрес">
      <input type="text" placeholder="Имя и фамилия">
      <input type="text" placeholder="Имя пользователя">
      <input type="password" placeholder="Пароль">
      </div>

      <p><router-link to="/home">Регистрация</router-link></p>
      </form>

      <div v-if="Registration" class="signup">
      <h3>Есть аккаунт? <span @click=" Registration = !Registration " style="color: #267bc5; cursor: pointer">Вход</span></h3>
    </div>


      </div>
    </div>
  </div>
</div>
  `
};
