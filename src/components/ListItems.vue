<template>
  <v-list selected>
    <v-divider></v-divider>

    <div v-for="(item, index) in items" :key="`${index}${item.name}`">
      <v-list-item @click="$emit('selectItem', { index, type })">
        <v-list-item-content>
          <v-list-item-title v-text="item.name" class="text-capitalize" />
        </v-list-item-content>

        <v-list-item-icon @click="$emit('selectRemoveItem', { index, type })">
          <v-icon v-if="type !== 'domain'" :color="icon.color">
            fa fa-{{ icon.name }}
          </v-icon>

          <v-icon v-else :color="item.available ? icon.color : 'error'">
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
  props: ["items", "icon", "type"]
};
</script>
