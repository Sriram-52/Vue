<template>
  <div id="ninjas">
    <ul>
      <li
        v-on:click="ninja.show = !ninja.show"
        v-bind:key="i"
        v-for="(ninja, i) in ninjas"
      >
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
      </li>
      <button v-on:click="deleteNinja">Delete Ninja</button>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    ninjas: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      
    };
  },
  beforeCreate() {
    alert('before created')
  },
  created() {
    alert('created')
  },
  beforeMount() {
    alert('before mount')
  },
  mounted() {
    alert('mounted')
  },
  beforeUpdate() {
    alert('before update')
  },
  updated() {
    alert('updated')
  },
  methods: {
    deleteNinja: function() {
      this.ninjas.pop()
    }
  }
};
</script>

<style scoped>
#ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>