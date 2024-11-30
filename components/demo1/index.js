import demo1 from "./src/main.vue";

demo1.install = (Vue) => {
  Vue.component(demo1.name, demo1);
};

export default demo1;
