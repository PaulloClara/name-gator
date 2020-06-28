<template>
  <v-btn
    style="border-width: medium;"
    :color="color"
    fab
    small
    outlined
    @click="handleSetTheme"
  ></v-btn>
</template>

<script>
export default {
  name: "Theme",
  data: () => ({
    color: "primary"
  }),
  methods: {
    handleSetTheme() {
      localStorage.setItem("theme", this.isDark() ? "light" : "dark");
      this.$vuetify.theme.dark = this.isDark();
    },
    isDark() {
      return localStorage.getItem("theme") === "dark";
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
