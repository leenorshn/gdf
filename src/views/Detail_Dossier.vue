<template>
  <v-container>
    <v-row dense="">
      <v-col md="5">
        <v-card flat="" dense height="82vh"> </v-card>
      </v-col>
      <v-col md="7">
        <v-row dense>
          <v-col md="12">
            <v-card flat dense height="50vh">
              <v-row dense flat>
                <v-col md="4">
                  <v-card dense flat color="grey lighten-4" height="49.5vh">
                    <v-subheader >Années</v-subheader>
                    <v-virtual-scroll
                            :bench="benched"
                            :items="items"
                            height="270"
                            item-height="44"
                            >
                    <template v-slot:default="{ item }">
                        <v-list-item  :key="item" @click="alert()">
                            <v-list-item-title
                              v-text="item.annee"
                            ></v-list-item-title>
                        </v-list-item>
                            </template>
                    </v-virtual-scroll>
                  </v-card>
                </v-col>
                <v-col md="8">
                  <v-card dense flat color="" height="49.5vh">
                    
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col md="12">
            <v-card flat dense height="30vh"></v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return {
            benched: 0,
            items: [
                { annee: '2020', },
                { annee: '2021', },
                { annee: '2022',  },
                { annee: '2023',  },
                { annee: '2024', },
                { annee: '2025',  },
                { annee: '2026',  },
                { annee: '2027', },
                { annee: '2028',  },
            ],
        }
    }
})
</script>