<template>
  <div>
    <v-card-title class="pb-2">
      <span class="pr-3">
        <slot name="total"></slot>
      </span>

      <slot name="title"></slot>
    </v-card-title>

    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  name: "CardTitle"
};
</script>
