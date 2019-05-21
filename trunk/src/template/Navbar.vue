<template>
  <v-navigation-drawer permanent mini-variant hide-overlay app>
    <v-layout column fill-height>
  <!-- <v-toolbar flat class="transparent"> -->
          <v-list>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon large color="grey darken-4">mdi-menu</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-spacer class="pt-5" />
            <v-list-tile>
              <v-list-tile-action>
                <v-icon medium color="grey darken-2">mdi-phone</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon medium color="grey darken-2">mdi-whatsapp</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon medium color="grey darken-2">mdi-facebook-messenger</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon medium color="grey darken-2">mdi-email</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
          <v-spacer class="mt-auto" />
          <v-list>
            <v-list-tile class="pb-3">
              <v-list-tile-action>
                <v-icon medium color="grey darken-2">mdi-share-variant</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        <!-- </v-toolbar>-->       
    </v-layout> 
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
    }
  }
}
</script>