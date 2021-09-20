const searchMixin = {
  computed: {
    filterBlogs: function() {
      return this.blogs.filter(blog => blog.title.match(this.search));
    }
  }
};

export default searchMixin;
