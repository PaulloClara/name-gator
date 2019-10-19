<template>
  <div class="text-center my-6">
    <h1 class="display-3">NameGat<SetTheme />r</h1>
    <h6 class="subtitle-2 mt-2">
      Gerador de nomes utilizando Vue.js, GraphQL e Node
    </h6>
  </div>
</template>

<script>
import SetTheme from "@/components/SetTheme";

export default {
  name: "Logo",
  components: {
    SetTheme
  }
};
</script>
