<template>
  <footer>
    <hr />
    {{ author }} | {{ new Date().getFullYear() }}
  </footer>
</template>

<script>
export default {
  name: "UrlFooter",
  props: {
    author: String,
  },
};
</script>

<style>
footer {
  background-color: #fff;
  bottom: 0;
  padding-bottom: 8px;
  position: fixed;
  width: 98.9%;
}
</style>
