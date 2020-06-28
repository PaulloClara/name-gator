<template>
  <v-list selected>
    <v-list-item
      v-for="(item, index) of $props.items"
      :key="index"
      :class="index % 2 === 0 ? 'light' : 'quaternary'"
      @click="$emit('click:item', { ...item, index })"
    >
      <v-list-item-content>
        <v-list-item-title :class="!isDomain ? 'text-capitalize' : ''">
          {{ item.value }}
        </v-list-item-title>
      </v-list-item-content>

      <v-list-item-icon @click="$emit('click:icon', { ...item, index })">
        <v-icon v-if="isDomain" :color="item.available ? 'primary' : 'error'">
          fa-{{ item.available ? "shopping-cart" : "exclamation-triangle" }}
        </v-icon>

        <v-icon v-else-if="!isSLD" color="ternary">fa-trash</v-icon>
      </v-list-item-icon>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "List",
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    isSLD() {
      return this.$props.items[0].prefix !== undefined;
    },
    isDomain() {
      return this.$props.items[0].tld !== undefined;
    }
  }
};
</script>
