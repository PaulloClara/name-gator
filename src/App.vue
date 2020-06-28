<template>
  <v-app>
    <header class="pa-2">
      <c-logo></c-logo>
    </header>

    <v-content>
      <v-container>
        <v-row justify="center">
          <v-col
            v-for="(item, index) of $data.listingItems"
            :key="index"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card class="px-4 pb-4">
              <c-title>
                <template #text>{{ item.title }}</template>
                <template #total>{{ $data[item.key].length }}</template>
              </c-title>

              <c-list
                :items="$data[item.key]"
                @click:icon="removeItem"
              ></c-list>
              <c-input
                :label="item.label"
                @change="addItem({ ...$event, key: item.key })"
              ></c-input>
            </v-card>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" sm="6">
            <v-card class="px-4 pb-4 mt-4">
              <c-title>
                <template #text>SLDs</template>
                <template #total>{{ slds ? slds.length : 0 }}</template>
              </c-title>

              <c-list :items="slds || []"></c-list>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6">
            <v-card class="px-4 pb-4 mt-4">
              <c-title>
                <template #text>Domains</template>
                <template #total>{{ domains ? domains.length : 0 }}</template>
              </c-title>

              <c-list :items="domains || []" @click:item="buyDomain"></c-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import checkDomain from "@/services/checkDomain";

import List from "@/components/List";
import Logo from "@/components/Logo";
import Input from "@/components/Input";
import Title from "@/components/Title";

export default {
  name: "App",
  components: {
    "c-list": List,
    "c-logo": Logo,
    "c-input": Input,
    "c-title": Title
  },
  data: () => ({
    tlds: [],
    prefixes: [],
    suffixes: [],
    listingItems: [
      { key: "prefixes", title: "Prefixes", label: "Prefix" },
      { key: "suffixes", title: "Suffixes", label: "Suffix" },
      { key: "tlds", title: "TLDs", label: "TLD" }
    ]
  }),
  computed: {
    slds() {
      const slds = [];

      this.$data.prefixes.forEach(prefix => {
        this.$data.suffixes.forEach(suffix => {
          const value = `${prefix.value}${suffix.value}`;

          slds.push({ value, prefix, suffix });
        });
      });

      return slds;
    }
  },
  asyncComputed: {
    domains() {
      const domains = [];

      this.slds.forEach(sld => {
        this.$data.tlds.forEach(async tld => {
          const domain = { tld, sld };

          domain.value = `${sld.value}.${tld.value}`;
          domain.available = (await checkDomain(domain.value)).data.free;

          domains.push(domain);
        });
      });

      return domains;
    }
  },
  methods: {
    addItem({ key, value }) {
      this.$data[key].push({ value, key });
    },
    removeItem({ key, index }) {
      this.$data[key].splice(index, 1);
    },
    buyDomain({ index }) {
      const baseURL = "https://checkout.hostgator.com.br/";
      const { sld, tld } = this.domains[index];

      window.open(`${baseURL}?a=add&sld=${sld.value}&tld=.${tld.value}`);
    },
    loadItemsFromLocalStorage({ key, defaultItems }) {
      const item = localStorage.getItem(key);
      const items = item ? item.split(",") : defaultItems;

      this.$data[key] = items.map(item => ({ value: item, key }));
    },
    saveItemsToLocalStorage({ key }) {
      const items = this.$data[key].map(item => item.value);
      localStorage.setItem(key, items);
    }
  },
  beforeMount() {
    this.loadItemsFromLocalStorage({
      key: "prefixes",
      defaultItems: ["git", "name"]
    });
    this.loadItemsFromLocalStorage({
      key: "suffixes",
      defaultItems: ["hub", "gator"]
    });
    this.loadItemsFromLocalStorage({
      key: "tlds",
      defaultItems: ["com", "dev"]
    });

    window.addEventListener("beforeunload", () => {
      this.saveItemsToLocalStorage({ key: "tlds" });
      this.saveItemsToLocalStorage({ key: "prefixes" });
      this.saveItemsToLocalStorage({ key: "suffixes" });
    });
  }
};
</script>

<style>
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
