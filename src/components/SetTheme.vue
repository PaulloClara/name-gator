<template>
  <v-btn
    id="button-theme"
    :color="color"
    fab
    small
    outlined
    @click="setTheme"
  ></v-btn>
</template>

<script>
export default {
  name: "SetTheme",
  data: () => ({
    color: "primary"
  }),
  methods: {
    setTheme() {
      localStorage.setItem(
        "theme",
        localStorage.getItem("theme") === "dark" ? "light" : "dark"
      );

      this.$vuetify.theme.dark = localStorage.getItem("theme") === "dark";
    }
  },
  mounted() {
    setInterval(() => {
      if (this.color === "primary") this.color = "secondary";
      else if (this.color === "secondary") this.color = "ternary";
      else this.color = "primary";
    }, 2000);
  }
};
</script>

<style>
#button-theme {
  border-width: medium;
}
</style>
