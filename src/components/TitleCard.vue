<template>
  <div>
    <v-card-title>
      {{ title }}
    </v-card-title>
  </div>
</template>

<script>
export default {
  name: "TitleCard",
  props: ["title"]
};
</script>
