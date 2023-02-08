<template>
  <UrlHeader welcome="Welcome to the URL Shortener" />

  <section class="content">
    <UrlForm />
  </section>

  <UrlFooter author="Luis Perez" />
</template>

<script>
import UrlHeader from "./components/UrlHeader.vue";
import UrlForm from "./components/UrlForm.vue";
import UrlFooter from "./components/UrlFooter.vue";

export default {
  name: "App",
  components: {
    UrlHeader,
    UrlForm,
    UrlFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
section.content {
  margin-bottom: 50px;
}
h3 {
  margin: 40px 0 0;
}
</style>
