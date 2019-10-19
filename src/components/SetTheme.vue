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
  data() {
    return {
      color: "primary"
    };
  },
  methods: {
    setTheme() {
      if (localStorage.theme === "dark") {
        localStorage.theme = "light";
        this.$vuetify.theme.dark = false;
      } else {
        localStorage.theme = "dark";
        this.$vuetify.theme.dark = true;
      }
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
