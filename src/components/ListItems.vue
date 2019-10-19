<template>
  <v-list selected>
    <v-list-item v-for="(item, index) in items" :key="item + index" @click="">
      <v-list-item-content>
        <v-list-item-title v-text="item"></v-list-item-title>
      </v-list-item-content>
      <v-list-item-icon @click="action(index)">
        <v-icon>fa fa-{{ icon }}</v-icon>
      </v-list-item-icon>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "List",
  props: ["items", "action", "icon"]
};
</script>
