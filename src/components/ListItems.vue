<template>
  <v-list selected>
    <v-divider></v-divider>
    <div v-for="(item, index) in items" :key="item.id || index + 'd'">
      <v-list-item @click="">
        <v-list-item-content>
          <v-list-item-title v-text="item.value || item.name" />
        </v-list-item-content>

        <v-list-item-icon
          @click="item.available !== false ? action(index) : () => {}"
        >
          <v-icon :color="icon.color" v-if="item.available === undefined">
            fa fa-{{ icon.name }}
          </v-icon>

          <v-icon :color="item.available ? icon.color : 'error'" v-else>
            fa fa-{{ item.available ? icon.name : "exclamation-triangle" }}
          </v-icon>
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
