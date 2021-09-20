<template>
  <div v-theme="'wide'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div id="single-blog" v-bind:key="blog.id" v-for="blog in filterBlogs">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
        <p>{{ blog.body | snippet }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";

export default {
  data() {
    return {
      blogs: [],
      isLoading: true,
      search: "",
    };
  },
  methods: {
    getBlogs: function () {
      this.isLoading = true;
      this.$http
        .get("http://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          this.isLoading = false;
          this.blogs = response.body.slice(0, 10);
        })
        .catch((err) => {
          this.isLoading = false;
          console.error(err);
        });
    },
  },
  created() {
    this.getBlogs();
  },
  computed: {},
  filters: {
    toUppercase: (value) => {
      return value.toUpperCase();
    },
    snippet: (value) => {
      return value.slice(0, 100) + "...";
    },
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        console.log(el.style);
        el.style.color = "#" + Math.random().toString().slice(2, 8);
      },
    },
    theme: {
      bind(el, binding, vnode) {
        if (binding.value === "wide") {
          el.style.maxWidth = "1200px";
        } else if (binding.value === "narrow") {
          el.style.maxWidth = "800px";
        }
      },
    },
  },
  mixins: [searchMixin],
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

#single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
