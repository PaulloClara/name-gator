<template>
  <v-app>
    <Logo />
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-card class="px-4 pb-4">
              <TitleCard title="Prefixos" :total="prefixes.length" />
              <ListItems
                :items="prefixes"
                :action="removePrefix"
                :icon="{ name: 'trash', color: 'ternary' }"
              />
              <Input :add="addPrefix" label="Prefixo" />
            </v-card>
          </v-col>
          <v-col>
            <v-card class="px-4 pb-4">
              <TitleCard title="Sufixos" :total="suffixes.length" />
              <ListItems
                :items="suffixes"
                :action="removeSuffix"
                :icon="{ name: 'trash', color: 'ternary' }"
              />
              <Input :add="addSuffix" label="Sufixo" />
            </v-card>
          </v-col>
        </v-row>
        <v-card class="px-4 pb-4 mt-4">
          <TitleCard title="Domínios" :total="domains.length" />
          <ListItems
            :items="domains"
            :action="checkDomain"
            :icon="{ name: 'shopping-cart', color: 'primary' }"
          />
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import API from "@/services/api";

import Logo from "@/components/Logo";
import Input from "@/components/Input";
import ListItems from "@/components/ListItems";
import TitleCard from "@/components/TitleCard";

export default {
  name: "App",
  components: {
    Logo,
    Input,
    ListItems,
    TitleCard
  },
  data() {
    return {
      prefixes: [],
      suffixes: []
    };
  },
  computed: {
    domains() {
      console.log("oi");
      const domains = [];

      this.prefixes.forEach(prefix =>
        this.suffixes.forEach(suffix =>
          domains.push({ value: prefix.value + suffix.value })
        )
      );

      return domains;
    }
  },
  methods: {
    checkDomain(index) {
      const baseURL = "https://checkout.hostgator.com.br/?a=add";
      const domain = this.domains[index];

      window.open(baseURL + `&sld=${domain.value}&tld=.com.br`);
    },
    addPrefix(prefix) {
      this.prefixes.push({ value: prefix });
    },
    addSuffix(suffix) {
      this.suffixes.push({ value: suffix });
    },
    removePrefix(index) {
      this.prefixes.splice(index, 1);
    },
    removeSuffix(index) {
      this.suffixes.splice(index, 1);
    },
    async getItems() {
      const query = `{
        prefixes: items(itemType: "prefix") { id value }
        suffixes: items(itemType: "suffix") { id value }
      }`;

      const items = (await API.request(query)).data.data;

      this.prefixes = items.prefixes;
      this.suffixes = items.suffixes;
    }
  },
  mounted() {
    this.getItems();
  }
};
</script>
