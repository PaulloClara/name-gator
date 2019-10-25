<template>
  <v-list selected>
    <v-divider></v-divider>
    <div v-for="(item, index) in items" :key="item.id">
      <v-list-item @click="">
        <v-list-item-content>
          <v-list-item-title v-text="item.value"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon @click="action(index)">
          <v-icon :color="icon.color">fa fa-{{ icon.name }}</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
    </div>
  </v-list>
</template>

<script>
export default {
  name: "List",
  props: ["items", "action", "icon"]
};
</script>
