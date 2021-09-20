<template>
  <div id="single-blog">
    <article>
      <h2>{{ blog.title }}</h2>
      <p>{{ blog.body }}</p>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      isLoading: true,
    };
  },
  methods: {
    getBlog: function (id) {
      this.isLoading = true;
      this.$http
        .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          this.isLoading = false;
          this.blog = response.body;
        })
        .catch((err) => {
          this.isLoading = false;
          console.error(err);
        });
    },
  },
  created() {
    this.getBlog(this.id);
  },
};
</script>

<style scoped>
#single-blog {
  max-width: 800px;
  margin: 0 auto;
}
</style>