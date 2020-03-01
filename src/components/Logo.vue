<template>
  <div class="text-center">
    <h1 class="display-3">NameGat<m-set-theme />r</h1>

    <h2 class="subtitle-2 mt-2">
      Name generator using Vue.js ❤
    </h2>
  </div>
</template>

<script>
import SetTheme from "@/components/SetTheme";

export default {
  name: "Logo",
  components: {
    "m-set-theme": SetTheme
  }
};
</script>
