<template>
  <v-container grid-list-md id="main"> 
    <v-flex xs12>
      <v-card
        color="grey lighten-4"
        flat height="550px" tile
      >
        <v-toolbar dense>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Title</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>favorite</v-icon>
          </v-btn>

          <MyLoginForm>
            <v-title text-xs-center style="font-size: 24px; font-weight: 500">{{date}}</v-title>
          </MyLoginForm>

          <v-btn icon>
            <v-icon>more_vert</v-icon>  
          </v-btn>
        </v-toolbar>
        <v-card-media src="/logo.png" height="500px">
          <v-layout column align-center justify-center>
            <h1 class="white--text" style="font-size: 72px">Vuetify.js</h1>
            <h4 class="white--text" style="font-size: 54px">Build your application today!</h4>
          </v-layout>
        </v-card-media>
      </v-card>
    </v-flex> <br/>
    <v-flex xs12>
      <v-layout row wrap>
        <v-flex xs8>
          <v-layout row wrap
            v-for='i in 4'
            :key="`row${i}`"
          >
            <v-flex
              xs6 v-for="j in 2" 
              :key="`column${j}`"
            >
              <v-card>
                <v-card-media src="./assets/logo.png" height="200px"></v-card-media>
                <v-card-title primary-title>
                  <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat color="orange">Share</v-btn>
                  <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs4>
          <v-card dark color='primary'>
            <v-card-text v-for="i in 10">
              some TAG or TITLE text aaaaaaaaaaaaaaaaaaa{{i}}
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>

  import MyLoginForm from './login.vue'

  export default {
    name: 'home',
    components: {
      MyLoginForm
    },
    data () {
      return {
        date: new Date
      }
    }
  }
</script>
