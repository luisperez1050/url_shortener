<template>
  <form v-on:submit.prevent>
      <label for="urls">URL: </label>
      <input id="urls" v-model="inputUrl" >
      <button class="base-btn" @click="shorten()" >Shorten</button>
      <p v-if="isError" class="error-message">
          <span> {{ errorMessage }} </span>
      </p>
  </form>

  <UrlList v-if="urls.length > 0" :listOfUrls="urls" @deleteItem="onDeleteItem" @copiedUrl="onCopy" />
</template>

<script>
import shortid from 'shortid';
import UrlList from './UrlList.vue';

export default {
  name: 'UrlForm',
  components: {
      UrlList
  },
  data() {
      return {
          inputUrl: '',
          urls: [],
          urlObject: {},
          isError: false,
          errorMessage: ''
      }
  },
  methods: {
      shorten() {
        if ( this.inputUrl ) {
            this.isError = false
            this.errorMessage = ''

            this.shorternerLogic()

            this.inputUrl = ''
        } else {
            this.isError = true
            this.errorMessage = "Please ensure to fill out the url field before using the url shortener."
        }
      },
      shorternerLogic() {
        const validUrl = (this.inputUrl.includes('https://') || this.inputUrl.includes('http://'));
        const fullUrl = validUrl ? new URL(this.inputUrl) : new URL(`https://${this.inputUrl}`)
        const shortUrl = `${fullUrl.protocol}//${shortid.generate()}`;
        this.urlObject = { fullUrl: fullUrl.href, shortUrl, copied: false };

        if(this.urls.filter((url) => url.fullUrl === fullUrl.href).length === 0) {
            this.urls.push(this.urlObject);
        } else {
            this.isError = true
            this.errorMessage = "This url has already been submitted, duplicates are rejected."
        }
      },
      onCopy(index) {
        this.urls[index].copied = true;
      },
      onDeleteItem(index) {
        this.urls.splice(index, 1)
      }
  },
  mounted(){
      if (localStorage.getItem('urls')) {
          this.urls = JSON.parse(localStorage.getItem('urls'))
      }
  },
  watch: {
      urls: {
          handler() {
              localStorage.setItem('urls', JSON.stringify(this.urls))
          },
          deep: true
      }
  }
}
</script>

<style>
input + button {
    margin-left: 8px;
}
.error-message span {
    background-color: rgba(203, 0, 0, 0.3);
    padding: 8px;
}
</style>