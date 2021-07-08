<template>
    <h3>List of shortened Urls</h3>
    <p>Click on a url if you wish to delete one.</p>
    <ul>
      <li title="Click to delete" v-for="url in listOfUrls" v-bind:key="url">
          <div class="url-item" v-on:click="deleteUrl(url)">
              {{ url }}
          </div>
      </li>
    </ul>
</template>

<script>
export default {
    name: 'UrlList',
    props: {
        listOfUrls: Array
    },
    emits: ['deleteItem'],
    methods: {
        deleteUrl(url) {
            if (this.listOfUrls.includes(url)) this.$emit('deleteItem', url)
        }
    }
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
  max-width: 50%;
  margin: 0 auto;
}
.url-item {
  background-color: #eee;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  letter-spacing: 2px;
  margin: 10px;
  padding: 6px 12px;
}
.url-item:hover,
.url-item:active {
  background-color: rgba(203, 0, 0, 0.3);
  border: 2px solid #b92e34;
  color: #b92e34;
}

</style>