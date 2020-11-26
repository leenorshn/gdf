<template>
  <v-card height="89vh" flat="">
    <v-card height="8vh" flat="">
      <v-row class="px-3">
        <v-col>
          <v-select :items="ville" label="ville" outlined dense />
        </v-col>
        <v-col>
          <v-select :items="commune" label="commune" outlined dense />
        </v-col>
        <v-col>
          <v-select :items="quartier" label="quartier" outlined dense />
        </v-col>
        <v-col>
          <v-select :items="cellule" label="cellule" outlined dense />
        </v-col>
      </v-row>
    </v-card>
    <v-row class="mx-2">
      <v-col md="12">
        <v-card height="80vh" dense>
          <v-container fluid="">
            <v-row>
              <v-col v-for="(folder, i) in folders" :key="i" md="4">
                <v-card @click="allerDetailDossier(folder)">
                  <v-list-item >
                    <v-list-item-avatar>
                      <v-icon class="grey lighten-1" dark>
                        mdi-folder
                      </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        v-text="folder.title"
                      ></v-list-item-title>

                      <v-list-item-subtitle
                        v-text="folder.name"
                      ></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-btn icon>
                        <v-icon color="grey lighten-1">mdi-information</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      ville: ["butembo", "beni", "goma"],
      commune: ["bulengera", "kimemi", "mususa", "vulamba"],
      quartier: ["mutiri", "mukuna", "de leveche", "kalemire"],
      cellule: ["auberge", "kathathimbwako", "kyavuyiri"],
      folders: [
        {
          name:"John",
          subtitle: "Jan 9, 2014",
          title: "45378NK-FCR0023"
        },
        {
          name:"Onesime",
          subtitle: "Jan 17, 2014",
          title: "45378NK-FCR0023"
        },
        {
          name:"Zairois",
          subtitle: "Jan 28, 2014",
          title: "45378NK-FCR0023-"
        }
      ]
    };
  },
  methods:{
      allerDetailDossier(folder){
          this.$router.push("/dossiers/"+folder.title,{folder:folder});
      }
  }
};
</script>