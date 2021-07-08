<template>
  <header>
    <h1>{{ welcome }}</h1>
    <hr>
    <p>
        Please input any urls that you desire to shorten.<br>
        Any duplicate urls will be rejected.
    </p>
  </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        welcome: String
    }
}
</script>

<style>

</style>