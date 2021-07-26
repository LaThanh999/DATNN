<template>
  <v-app id="inspire">
    <v-app-bar app color="primary" flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

        <v-btn v-for="link in links" :key="link" text>
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            background-color="#B0BEC5"
            prepend-inner-icon="mdi-magnify"
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item v-for="(item, index) in menus" :key="index" link>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col cols="10">
            <v-sheet min-height="85vh" rounded="lg" class="pa-4">
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      "Cho thuê nhà trọ",
      "Cho thuê nhà",
      "Cho thuê căn hộ",
      "Cho thuê mặt bằng",
    ],
    menus: [
      "Dưới 1 triệu",
      "Từ 1 đến 2 triệu",
      "Từ 2 đến 3 triệu",
      "Từ 3 đến 5 triệu",
      "Trên 5 triệu",
    ],
  }),
};
</script>
