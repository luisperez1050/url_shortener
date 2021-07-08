<template>
  <Header welcome='Welcome to the URL Shortener'/>

  <section class="content">
    <UrlForm />
  </section>

  <Footer author='Luis Perez'/>

</template>

<script>
import Header from './components/Header.vue'
import UrlForm from './components/UrlForm.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    UrlForm,
    Footer
  }
}
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
