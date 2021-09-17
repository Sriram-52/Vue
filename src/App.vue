<template>
    <div>
      <keep-alive>
        <component :is="component"></component>
      </keep-alive>
      <button @click="component = 'form-one'">Show form one</button>
      <button @click="component = 'form-two'">Show form two</button>
    </div>
</template>

<script>
// Imports
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';
import { bus } from './main';
import FormHelper from './components/FormHelper.vue';
import Form1Vue from './components/Form1.vue';
import Form2Vue from './components/Form2.vue';
export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-ninjas': Ninjas,
        "form-helper": FormHelper,
        "form-one": Form1Vue,
        "form-two": Form2Vue
    },
    data (){
        return {
          ninjas: [
              {name: 'Ryu', speciality: 'Vue Components', show: false},
              {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
              {name: 'Hitoshi', speciality: 'Click Events', show: false},
              {name: 'Tango', speciality: 'Conditionals', show: false},
              {name: 'Kami', speciality: 'Webpack', show: false},
              {name: 'Yoshi', speciality: 'Data Diggin', show: false}
          ],
          title: 'Vue Ninjas',
          component: "form-one"
        }
    },
    methods: {
      updateTitle: function(updatedTitle){
        this.title = updatedTitle;
      }
    },
    created() {
      bus.$on('changeTitle', (data) => {
        this.title = data;
      })
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>