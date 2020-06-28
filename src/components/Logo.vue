<template>
  <div class="text-center">
    <h1 class="display-3">NameGat<c-theme></c-theme>r</h1>

    <h2 class="subtitle-2 mt-2">
      Name generator using Vue.js ❤
    </h2>
  </div>
</template>

<script>
import Theme from "@/components/Theme";

export default {
  name: "Logo",
  components: {
    "c-theme": Theme
  }
};
</script>
