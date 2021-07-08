<template>
  <form v-on:submit.prevent>
      <label for="urls">URL: </label>
      <input id="urls" type="url" v-model="inputUrl" >
      <button v-if="inputUrl" v-on:click="shorten()" >Shorten</button>
      <p v-if="isError" class="error-message">
          <span> {{ errorMessage }} </span>
      </p>
  </form>

  <UrlList v-if="urls.length > 0" :listOfUrls="urls" v-on:deleteItem="onDeleteItem" />
</template>

<script>
import UrlList from './UrlList.vue'

export default {
  name: 'UrlForm',
  components: {
      UrlList
  },
  data() {
      return {
          inputUrl: '',
          urls: [],
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
        let urlHolder
        let shortenerArray = new Array()
        let shortenerBuilder

        if (this.inputUrl.includes('https://') || this.inputUrl.includes('http://')) {
            urlHolder = new URL(this.inputUrl)
        } else {
            urlHolder = new URL('https://' + this.inputUrl)
        }

        shortenerArray = urlHolder.host.split('.')
        shortenerBuilder = urlHolder.protocol + '//'

        shortenerArray.forEach(item => {
            shortenerBuilder += item[0] + item.length
        });

        if(!this.urls.includes(shortenerBuilder)) {
            this.urls.push(shortenerBuilder)
        } else {
            this.isError = true
            this.errorMessage = "This url has already been submitted, duplicates are rejected."
        }
      },
      onDeleteItem(url) {
          this.urls.splice(this.urls.indexOf(url),1)
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
              console.log("lets see i should be stored now!!")
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