<template>
  <v-app style>
    <navbar/>

    <v-content>
      <!-- <v-toolbar>
         <v-toolbar-side-icon />
            <v-container
            mx-auto
            py-0
      >-->
      <!-- <v-layout justify-space-between row mx-2>
          <v-spacer class="hidden-sm-and-down"/>
          <v-btn
            href="https://elisalerch.com.br/agendamento"
            class="ml-0 hidden-sm-and-down"
            flat
      >Agendar Consulta / Fortaleza-CE</v-btn>-->
      <!--          <v-btn
                href="/"
                class="ml-0 hidden-sm-and-down"
                flat
              >
                Programa Nutricional
          </v-btn>
      </v-layout>-->
      <!--      </v-container>
      </v-toolbar>
      <v-container fluid fill-height>-->
      <section>
        <v-parallax :src="background" height="100vh">
          <v-layout align-center row class="white--text" fluid wrap>
            <v-toolbar v-scroll="onScroll" color="rgb(255, 0, 0, 0.0)" flat>
              <v-img
                :src="require('../src/assets/img/logo-branca.png')"
                class="mr-5"
                contain
                height="48"
                max-width="150"
                @click="$vuetify.goTo(0)"
              />
              <v-spacer></v-spacer>
              <v-btn round color="yellow">Solicitar uma cotação</v-btn>
              <v-btn round flat outline color="white">Login</v-btn>
            </v-toolbar>
            <v-flex xs12 md6>
              <h4
                class="white--text mb-4 pt-5 oswald text-uppercase"
                style="text-shadow: 2px 2px 6px #333;"
                :class="{
                      'mt-4': $vuetify.breakpoint.smAndDown,
                      'ml-3': $vuetify.breakpoint.smAndDown, 'ml-5': $vuetify.breakpoint.mdAndUp,
                      'display-2': $vuetify.breakpoint.smAndDown, 'display-2': $vuetify.breakpoint.mdAndUp,
                    }"
              >Entregamos Inteligência Logística e confiança há 17 anos</h4>
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
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-card color="white" class="pa-2">
                  <v-card-title>
                    <v-btn flat color="blue darken-4">RASTREAR MEU PEDIDO</v-btn>
                    <v-btn flat color="grey">SOLICITAR COLETA</v-btn>
                    <v-flex xs12 sm12 class="px-2">
                      <div>
                        <v-text-field placeholder="Digite seu CPF ou CNPJ"></v-text-field>
                      </div>
                    </v-flex>
                    <v-btn depressed class="px-4" color="light-blue darken-4 yellow--text">Buscar</v-btn>
                    <v-btn flat class="px-4" color="grey">Criar conta</v-btn>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-layout>
        </v-parallax>
      </section>

      <!-- Sobre Nós -->
      <section class="py-4">
        <v-container>
          <v-layout>
            <v-flex xs12 md6 class="pr-5">
              <v-flex xs12 md12 class="pb-4">
                <h1 class="pb-4">Sobre Nós</h1>

                <v-divider class="pb-4"></v-divider>
                <h2
                  class="pb-4"
                >A Maxlog é uma empresa de transporte, armazenagem e distribuição com compromisso em qualidade e agilidade desde 2002.</h2>
                <p>Oferecemos soluções inteligentes em logística com constante investimento em tecnologia e aprimoramento de seus processos. Antes de 2002, seus fundadores já tinham experiência em logística</p>
              </v-flex>
              <v-btn fab dark large color="light-blue darken-4 yellow--text">03</v-btn>
              <v-btn fab outline large color="yellow grey--text">12</v-btn>
              <v-btn fab outline large color="yellow">12</v-btn>
            </v-flex>
            <v-flex xs12 md6>
              <v-img src="../src/assets/img/u38.jpg"></v-img>
            </v-flex>
          </v-layout>
        </v-container>
        <v-layout fluid>
          <v-container  >
            <v-flex x12 md12 >
              <v-btn fab dark large color="light-blue darken-4 yellow--text">03</v-btn>
              <v-btn fab  large color="yellow grey--text">12</v-btn>
            </v-flex>
          </v-container>
        </v-layout>
      </section>
        
      <!--        </v-container>-->
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./template/Navbar.vue";

export default {
  name: "home",
  components: { Navbar },
  data() {
    return {};
  },
  computed: {
    background() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return "./src/assets/img/bg.jpg";
      }
      return "./src/assets/img/bg.jpg";
    }
  }
};
</script>

<style>
</style>