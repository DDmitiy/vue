<template>
    <v-layout column align-center>
        <v-card-text>
            <h1> {{msg}} </h1>
        </v-card-text>
    </v-layout>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
    h1{
        padding-top: 150px
    }
</style>