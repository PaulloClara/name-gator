<template>
  <v-card-title>
    <span class="pr-3">{{ total }}</span>
    {{ title }}
  </v-card-title>
</template>

<script>
export default {
  name: "TitleCard",
  props: ["title", "total"]
};
</script>
