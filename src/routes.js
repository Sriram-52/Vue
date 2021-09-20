import ShowBlogs from "./components/showBlogs.vue";
import AddBlog from "./components/addBlog.vue";
import ListBlogs from "./components/listBlogs.vue";
import SingleBlog from "./components/singleBlog.vue";

const routes = [
  {
    path: "/",
    component: ShowBlogs
  },
  {
    path: "/add",
    component: AddBlog
  },
  {
    path: "/list",
    component: ListBlogs
  },
  {
    path: "/blog/:id",
    component: SingleBlog
  }
];

export default routes;
