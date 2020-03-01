<template>
  <v-text-field
    v-model="value"
    :label="label"
    color="secondary"
    class="mt-2"
    elevation="20"
    solo
    outlined
    hide-details
    @change="change"
  >
    <template v-slot:append>
      <v-icon color="secondary" class="pr-2 py-4" @click="change">
        fa fa-plus
      </v-icon>
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: "Input",
  props: ["label", "type"],
  data: () => ({
    value: ""
  }),
  methods: {
    change() {
      const { type } = this.$props;
      const { value } = this.$data;

      const evt = {};

      if (!value.trim()) return;

      if (type === "tld" && value[0] === ".") evt.value = value.slice(1);
      else evt.value = value;

      evt.type = type;
      this.$emit("addItem", evt);

      this.value = "";
    }
  }
};
</script>
