<template>
  <div class="text-center my-6">
    <h1 class="display-3">NameGat<m-set-theme />r</h1>

    <h2 class="subtitle-2 mt-2">
      Gerador de nomes utilizando Vue.js ❤
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
