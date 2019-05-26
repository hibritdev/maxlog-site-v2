<template>
  <v-app>
    <navbar/>
    <v-toolbar 
      color="#333"
      flat
    >
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
        />
        <v-spacer class="hidden-sm-and-down" />
        <v-btn
          color="white"
          href="https://elisalerch.com.br/agendamento"
          class="ml-0 hidden-sm-and-down"
          flat
        >
          Solicitar uma Cotação
        </v-btn>
      </v-layout>
    </v-toolbar>
    <v-content>
      <v-parallax :src="background" height="100vh">
        <v-layout
          align-center
          row
          class="white--text"
          fluid
          wrap
        >
          <v-flex xs12 md9 style="background-color: indigo">
            <v-layout row wrap>
              <v-flex>
                <v-card flat class>
                  <v-card-text>
                    <h1 class="display-3">Entregamos Inteligência Logística e confiança há 17 anos</h1>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex>
                <v-btn flat outline color="white">transporte terrestre</v-btn>
                <v-btn flat outline color="white">transporte aéreo</v-btn>
                <v-btn flat outline color="white">armazenamento</v-btn>
                <v-btn flat outline color="white">distribuição</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 md3>
            <v-card flat class="pa-3">
              <v-card-title>
                <v-btn flat>RASTREAR MEU PEDIDO</v-btn>
                <v-btn flat>SOLICITAR COLETA</v-btn>
              </v-card-title>
              <v-card-text>
                <v-text-field class="px-2" placeholder="Digite seu CPF ou CNPJ"></v-text-field>
              </v-card-text>
              <c-vard-actions>
                <v-btn depressed color="blue">Buscar</v-btn>
                <v-btn flat>Criar Conta</v-btn>
              </c-vard-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-parallax>
      <v-container fluid>
        <!-- CAPA -->
        <v-layout row wrap>
          <v-flex xs12 md9 style="background-color: blue">
            <v-img
              :src="require('../src/assets/img/logo-branca.png')"
              class="mr-5"
              contain
              height="48"
              max-width="150"
              @click="$vuetify.goTo(0)"
            />
          </v-flex>
          <v-flex xs12 md3 style="background-color: red; ">
            <p class="text-xs-right" style="margin: 0">
              <v-btn round color="yellow">Solicitar uma cotação</v-btn>
              <v-btn round flat outline color="white">Login</v-btn>
            </p>
          </v-flex>
          <v-flex xs12 md9 style="background-color: indigo">
            <v-layout row wrap>
              <v-flex>
                <v-card flat class>
                  <v-card-text>
                    <h1 class="display-3">Entregamos Inteligência Logística e confiança há 17 anos</h1>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex>
                <v-btn flat outline color="white">transporte terrestre</v-btn>
                <v-btn flat outline color="white">transporte aéreo</v-btn>
                <v-btn flat outline color="white">armazenamento</v-btn>
                <v-btn flat outline color="white">distribuição</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 md3>
            <v-card flat class="pa-3">
              <v-card-title>
                <v-btn flat>RASTREAR MEU PEDIDO</v-btn>
                <v-btn flat>SOLICITAR COLETA</v-btn>
              </v-card-title>
              <v-card-text>
                <v-text-field class="px-2" placeholder="Digite seu CPF ou CNPJ"></v-text-field>
              </v-card-text>
              <c-vard-actions>
                <v-btn depressed color="blue">Buscar</v-btn>
                <v-btn flat>Criar Conta</v-btn>
              </c-vard-actions>
            </v-card>
          </v-flex>
        </v-layout>

        <!-- Sobre Nós -->
        <v-layout row wrap class="py-5">
          <v-flex xs12 md6>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card flat class="pr-5 mr-5">
                  <v-card-title>
                    <h1>Sobre Nós</h1>
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <p>A Maxlog é uma empresa de transporte, armazenagem e distribuição com compromisso em qualidade e agilidade desde 2002.</p>
                    <p>Oferecemos soluções inteligentes em logística com constante investimento em tecnologia e aprimoramento de seus processos. Antes de 2002, seus fundadores já tinham experiência em logística</p>
                  </v-card-text>
                  <v-card-action>
                    <v-btn fab depressed large color="primary">03</v-btn>
                    <v-btn fab outline large flat>12</v-btn>
                    <v-btn fab outline large flat>21</v-btn>
                  </v-card-action>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex>
            <v-card flat>
              <v-img src="../src/assets/img/u38.jpg"></v-img>
              <v-card-action>
                <p class="text-xs-right">Matrix da maxlog, em itaitinga/CE</p>
              </v-card-action>
            </v-card>
          </v-flex>
        </v-layout>

        <!-- LOGOS -->
        <v-layout
          align-center
          justify-space-around
          row
          fill-height
          class="pa-5"
          style="background: black"
        >
          <v-flex xs1>
            <v-img height="34" max-width="85" src="../src/assets/img/logo-textil.png"></v-img>
          </v-flex>
          <v-flex xs1>
            <v-img height="57" max-width="119" src="../src/assets/img/logo-ford.png"></v-img>
          </v-flex>
          <v-flex xs1>
            <v-img height="40" max-width="94" src="../src/assets/img/logo-locfama.png"></v-img>
          </v-flex>
          <v-flex xs1>
            <v-img height="70" max-width="82" src="../src/assets/img/logo-troller.png"></v-img>
          </v-flex>
          <v-flex xs1>
            <v-img height="46" max-width="122" src="../src/assets/img/logo-manhatan.png"></v-img>
          </v-flex>
          <v-flex xs1>
            <v-img height="41" max-width="126" src="../src/assets/img/logo-normatel.png"></v-img>
          </v-flex>
          <v-flex xs1>
            <v-img height="57" max-width="76" src="../src/assets/img/logo-leroy.png"></v-img>
          </v-flex>
          <v-flex xs1>
            <v-img height="57" max-width="93" src="../src/assets/img/logo-maissabor.png"></v-img>
          </v-flex>
        </v-layout>

        <!-- Nossos Serviços -->
        <v-layout row wrap class="pa-5">
          <v-flex xs12 md3 class="pa-3">
            <v-card flat>
              <v-title>
                <h1>Nossos Serviços</h1>
              </v-title>
              <v-text>
                <p>Com muito compromisso e seriedade, respeitamos nossos clientes buscando otimizar custos e atendê-los com os melhores padrões de serviço do mercado.</p>
              </v-text>
              <v-action>
                <v-btn fab outline large flat>action</v-btn>
              </v-action>
            </v-card>
          </v-flex>

          <v-flex xs12 md3 class="pa-3">
            <v-card flat>
              <v-img src="../src/assets/img/u58.jpg"></v-img>
              <v-card-title primary-title>
                <h3>Transporte Terrestre</h3>
              </v-card-title>
              <v-card-text>
                <p>Carga fracionada ou lotação sem limite de peso ou opção de Rodoviário Expresso para os menores prazos de entrega do mercado.</p>
              </v-card-text>
              <v-card-action>
                <v-btn depressed large dark color="blue yellow--text">Solicitar Orçamento</v-btn>
              </v-card-action>
            </v-card>
          </v-flex>
          <v-flex xs12 md3 class="pa-3">
            <v-card flat>
              <v-img src="../src/assets/img/u60.jpg"></v-img>
              <v-card-title primary-title>
                <h3>Transporte Aéreo</h3>
              </v-card-title>
              <v-card-text>
                <p>Transporte de carga aérea pelas melhores companhias. Oferecemos as melhores tarifas do mercado. Peça um orçamento e confira!</p>
              </v-card-text>
              <v-card-action>
                <v-btn depressed large dark color="blue yellow--text">Solicitar Orçamento</v-btn>
              </v-card-action>
            </v-card>
          </v-flex>
          <v-flex xs12 md3 class="pa-3">
            <v-card flat>
              <v-img src="../src/assets/img/u59.jpg"></v-img>
              <v-card-title primary-title>
                <h3>Armazenagem</h3>
              </v-card-title>
              <v-card-text>
                <p>Economize tempo e lucre mais com nossa gestão de recebimentos, estocagem, gerenciamento de pedidos e expedição.</p>
              </v-card-text>
              <v-card-action>
                <v-btn depressed large dark color="blue yellow--text">Solicitar Orçamento</v-btn>
              </v-card-action>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <!-- 
    <v-content>-->

    <!--       
      <v-parallax style="background-color: green;" src="../src/assets/img/bg.jpg" height="860"></v-parallax>

      <v-layout align-center row class="white--text" fluid wrap>
        <v-container></v-container>

        <v-toolbar v-scroll="onScroll" color="rgb(255, 0, 0, 0.0)" flat></v-toolbar>
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
    </v-layout>-->

    <!-- Sobre Nós -->
    <!-- <v-container>
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
        <v-container>
          <v-flex x12 md12>
            <v-btn fab dark large color="light-blue darken-4 yellow--text">03</v-btn>
            <v-btn fab large color="yellow grey--text">12</v-btn>
          </v-flex>
        </v-container>
      </v-layout>

    <!--        </v-container>-->
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