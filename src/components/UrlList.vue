<template>
  <h3>List of shortened Urls</h3>
  <p>Click on a url to copy the full url.</p>
  <ul>
    <li v-for="(urlObject, index) in listOfUrls" :key="urlObject.shortUrl">
      <button
        class="base-btn"
        :title="urlObject.fullUrl"
        @click="copyFullUrl(urlObject.fullUrl, index)"
      >
        {{ urlObject.shortUrl }}
        <span v-if="urlObject.copied">Copied!</span>
      </button>
      <button
        class="delete-btn"
        title="Click to delete"
        @click="deleteUrl(urlObject.fullUrl, index)"
      >
        Delete
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "UrlList",
  props: {
    listOfUrls: Array,
  },
  emits: ["deleteItem", "copiedUrl"],
  methods: {
    async copyFullUrl(fullUrl, index) {
      this.$emit("copiedUrl", index);
      await navigator.clipboard.writeText(fullUrl);
    },
    deleteUrl(currentUrl, index) {
      if (
        this.listOfUrls.filter((url) => url.fullUrl === currentUrl).length > 0
      )
        this.$emit("deleteItem", index);
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
  max-width: 50%;
  margin: 0 auto;
}
ul li {
  display: flex;
}
.base-btn,
.delete-btn {
  background-color: #eee;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  letter-spacing: 2px;
  margin: 10px;
  padding: 6px 12px;
}
.base-btn {
  flex-grow: 4;
}
.delete-btn {
  background-color: rgba(203, 0, 0, 0.3);
  flex-grow: 1;
}
.base-btn:hover,
.base-btn:active {
  border: 2px solid #2c3e50;
}
.delete-btn:hover,
.delete-btn:active {
  background-color: rgba(203, 0, 0, 0.3);
  border: 2px solid #b92e34;
  color: #b92e34;
}
</style>
