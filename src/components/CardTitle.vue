<template>
  <v-card-title>
    <span class="pr-3">
      <slot name="total"></slot>
    </span>

    <slot name="title"></slot>
  </v-card-title>
</template>

<script>
export default {
  name: "CardTitle"
};
</script>
