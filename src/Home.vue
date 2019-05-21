<template>
    <v-app style="background-color: #999">
      
      
      <navbar />
        
      <v-content>
        <v-toolbar 
          v-scroll="onScroll"
          :background-color="isTransparent ? 'transparent' : '#F5F5F5'"
          flat
        >
          <!-- <v-toolbar-side-icon /> -->
    <!--      <v-container
            mx-auto
            py-0
          >-->
            <v-layout
              justify-space-between
              row
              mx-2
            >
              <v-img
                :src="require('../src/assets/img/logo-branca.png')"
                class="mr-5"
                contain
                height="48"
                max-width="150"
                @click="$vuetify.goTo(0)"
              />

              <v-spacer class="hidden-sm-and-down" />
              <v-btn
                href="https://elisalerch.com.br/agendamento"
                class="ml-0 hidden-sm-and-down"
                flat
              >
                Agendar Consulta / Fortaleza-CE
              </v-btn>
    <!--          <v-btn
                href="/"
                class="ml-0 hidden-sm-and-down"
                flat
              >
                Programa Nutricional
              </v-btn>-->
            </v-layout>
    <!--      </v-container>-->
        </v-toolbar>
<!--        <v-container fluid fill-height>-->
          <section>
            <v-parallax :src="background" height="100vh">
              <v-layout
                align-center
                row
                class="white--text"
                fluid
                wrap
              >
                <v-flex xs12 md6>
                  <h2 class="white--text mb-4 pt-5 font-weight-bold oswald text-uppercase" 
                    style="text-shadow: 2px 2px 6px #333;"
                    :class="{
                      'mt-4': $vuetify.breakpoint.smAndDown,
                      'ml-3': $vuetify.breakpoint.smAndDown, 'ml-5': $vuetify.breakpoint.mdAndUp,
                      'display-2': $vuetify.breakpoint.smAndDown, 'display-3': $vuetify.breakpoint.mdAndUp,
                    }"
                  >Entregamos Inteligência Logística e confiança há 17 anos</h2>
                  <div
                    :class="{
                        'mb-5': $vuetify.breakpoint.smAndDown, 
                      }"
                  >
                    <v-btn
                      class="mt-4"
                      color="primary"
                      dark
                      large
                      target="_blank"
                      href="https://materiais.elisalerch.com.br/guia-da-nutricao-feminina"
                      :class="{
                        'ml-3': $vuetify.breakpoint.smAndDown, 'ml-5': $vuetify.breakpoint.mdAndUp,
                        'mb-5': $vuetify.breakpoint.smAndDown, 
                      }"
                    >
                      <b>Guia da Nutrição Feminina</b>
                    </v-btn>
                  </div>
                </v-flex>
              </v-layout>
            </v-parallax>
          </section>
<!--        </v-container>-->
      </v-content>
      
    </v-app>
</template>

<script>
import Navbar from './template/Navbar.vue'

export default {
  name: 'home',
  components: { Navbar },
  data () {
    return {
    }
  },
  computed: {
    background() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return './src/assets/img/bg.jpg'
      }
      return './src/assets/img/bg.jpg'
    }
    
  },
}
</script>

<style></style>