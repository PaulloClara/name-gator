<template>
  <v-app>
    <header class="pa-2">
      <m-logo />
    </header>

    <v-container tag="main">
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-card class="px-4 pb-4">
            <m-card-title>
              <template #title>Prefixes</template>
              <template #total>{{ prefixes.length }}</template>
            </m-card-title>

            <m-list-items
              type="prefix"
              :items="prefixes"
              :icon="{ name: 'trash', color: 'ternary' }"
              @selectRemoveItem="removeItem"
            />

            <m-input label="Prefix" type="prefix" @addItem="addItem" />
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <v-card class="px-4 pb-4">
            <m-card-title>
              <template #title>Suffixes</template>
              <template #total>{{ suffixes.length }}</template>
            </m-card-title>

            <m-list-items
              type="suffix"
              :items="suffixes"
              :icon="{ name: 'trash', color: 'ternary' }"
              @selectRemoveItem="removeItem"
            />

            <m-input label="Suffix" type="suffix" @addItem="addItem" />
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <v-card class="px-4 pb-4">
            <m-card-title>
              <template #title>TLDs</template>
              <template #total>{{ tlds.length }}</template>
            </m-card-title>

            <m-list-items
              type="tld"
              :items="tlds"
              :icon="{ name: 'trash', color: 'ternary' }"
              @selectRemoveItem="removeItem"
            />

            <m-input label="TLD" type="tld" @addItem="addItem" />
          </v-card>
        </v-col>
      </v-row>

      <v-card class="px-4 pb-4 mt-4">
        <m-card-title>
          <template #title>Domains</template>
          <template #total>{{ domains ? domains.length : 0 }}</template>
        </m-card-title>

        <m-list-items
          type="domain"
          :items="domains"
          :icon="{ name: 'shopping-cart', color: 'primary' }"
          @selectItem="buyDomain"
        />
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import checkDomain from "@/services/checkDomain";

import Logo from "@/components/Logo";
import Input from "@/components/Input";
import ListItems from "@/components/ListItems";
import CardTitle from "@/components/CardTitle";

export default {
  name: "App",
  components: {
    "m-logo": Logo,
    "m-input": Input,
    "m-list-items": ListItems,
    "m-card-title": CardTitle
  },
  data: () => ({
    prefixes: [],
    suffixes: [],
    tlds: []
  }),
  asyncComputed: {
    domains() {
      const domains = [];

      this.$data.prefixes.forEach(prefix =>
        this.$data.suffixes.forEach(suffix =>
          this.$data.tlds.forEach(async tld => {
            const domain = `${prefix.name}${suffix.name}.${tld.name}`;
            const { free: available } = (await checkDomain(domain)).data;

            domains.push({ name: domain, available });
          })
        )
      );

      return domains;
    }
  },
  methods: {
    addItem({ type, value }) {
      type = type === "tld" ? `${type}s` : `${type}es`;
      this.$data[type].push({ name: value });
    },
    removeItem({ type, index }) {
      type = type === "tld" ? `${type}s` : `${type}es`;
      this.$data[type].splice(index, 1);
    },
    buyDomain({ index }) {
      const baseURL = "https://checkout.hostgator.com.br/?a=add";
      const domain = this.domains[index].name;

      window.open(baseURL + `&sld=${domain}&tld=.com`);
    },
    loadItem({ itemName, defaultValues }) {
      this.$data[itemName] = (localStorage.getItem(itemName)
        ? localStorage.getItem(itemName).split(",")
        : defaultValues
      ).map(item => ({ name: item }));
    },
    saveItem({ itemName }) {
      localStorage.setItem(
        itemName,
        this.$data[itemName].map(item => item.name)
      );
    }
  },
  beforeMount() {
    this.loadItem({ itemName: "tlds", defaultValues: ["io", "com"] });
    this.loadItem({ itemName: "prefixes", defaultValues: ["git", "name"] });
    this.loadItem({ itemName: "suffixes", defaultValues: ["hub", "gator"] });

    window.addEventListener("beforeunload", () => {
      this.saveItem({ itemName: "tlds" });
      this.saveItem({ itemName: "prefixes" });
      this.saveItem({ itemName: "suffixes" });
    });
  }
};
</script>
