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
      suffixes: [],
      domains: []
    };
  },
  methods: {
    checkDomain(index) {
      const baseURL = "https://checkout.hostgator.com.br/?a=add";
      const domain = this.domains[index];

      window.open(baseURL + `&sld=${domain.name}&tld=.com.br`);
    },
    addPrefix(prefix) {
      this.saveItem({ value: prefix, type: "prefix" });
    },
    addSuffix(suffix) {
      this.saveItem({ value: suffix, type: "suffix" });
    },
    removePrefix(index) {
      const _id = this.prefixes[index].id;
      this.removeItem({ _id });
    },
    removeSuffix(index) {
      const _id = this.suffixes[index].id;
      this.removeItem({ _id });
    },
    async getItems() {
      const query = `{
        prefixes: items(itemType: "prefix") { id value }
        suffixes: items(itemType: "suffix") { id value }
      }`;

      const items = (await API.request(query)).data.data;

      this.prefixes = items.prefixes;
      this.suffixes = items.suffixes;
    },
    async saveItem({ type, value }) {
      const query = `mutation {
        saveItem(item: { type: "${type}", value: "${value}" }) { id value }
      }`;

      await API.request(query);

      this.getItems();
      this.generateDomains();
    },
    async removeItem({ _id }) {
      const query = `mutation {
        removeItem(itemID: "${_id}")
      }`;

      await API.request(query);

      this.getItems();
      this.generateDomains();
    },
    async generateDomains() {
      const query = `mutation {
        domains: generateDomains { name available }
      }`;

      this.domains = (await API.request(query)).data.data.domains;
    }
  },
  mounted() {
    this.getItems();
    this.generateDomains();
  }
};
</script>
