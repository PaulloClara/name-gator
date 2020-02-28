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
                :icon="{ name: 'trash', color: 'ternary' }"
                @selectRemoveItem="removeItem({ type: 'prefix', ...$event })"
              />
              <Input
                label="Prefixo"
                @addItem="addItem({ type: 'prefix', ...$event })"
              />
            </v-card>
          </v-col>
          <v-col>
            <v-card class="px-4 pb-4">
              <TitleCard title="Sufixos" :total="suffixes.length" />
              <ListItems
                :items="suffixes"
                :icon="{ name: 'trash', color: 'ternary' }"
                @selectRemoveItem="removeItem({ type: 'suffix', ...$event })"
              />
              <Input
                label="Sufixo"
                @addItem="addItem({ type: 'suffix', ...$event })"
              />
            </v-card>
          </v-col>
        </v-row>
        <v-card class="px-4 pb-4 mt-4">
          <TitleCard title="Domínios" :total="domains ? domains.length : 0" />
          <ListItems
            :items="domains"
            :icon="{ name: 'shopping-cart', color: 'primary' }"
            @selectItem="buyDomain"
          />
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import checkDomain from "@/services/checkDomain";

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
  data: () => ({
    prefixes: [],
    suffixes: []
  }),
  asyncComputed: {
    domains() {
      const domains = [];

      this.$data.prefixes.forEach(prefix =>
        this.$data.suffixes.forEach(async suffix => {
          const domain = `${prefix.name}${suffix.name}`;
          const { free: available } = (await checkDomain(`${domain}.com`)).data;

          domains.push({ name: domain, available });
        })
      );

      return domains;
    }
  },
  methods: {
    addItem({ type, value }) {
      this.$data[`${type}es`].push({ name: value });
    },
    removeItem({ type, index }) {
      this.$data[`${type}es`].splice(index, 1);
    },
    buyDomain({ index }) {
      const baseURL = "https://checkout.hostgator.com.br/?a=add";
      const domain = this.domains[index].name;

      window.open(baseURL + `&sld=${domain}&tld=.com`);
    }
  },
  beforeMount() {
    this.$data.prefixes = (localStorage.getItem("prefixes")
      ? localStorage.getItem("prefixes").split(",")
      : ["git", "name"]
    ).map(prefix => ({ name: prefix }));

    this.$data.suffixes = (localStorage.getItem("suffixes")
      ? localStorage.getItem("suffixes").split(",")
      : ["hub", "gator"]
    ).map(suffix => ({ name: suffix }));

    window.addEventListener("beforeunload", () => {
      const { prefixes, suffixes } = this.$data;

      localStorage.setItem(
        "prefixes",
        prefixes.map(prefix => prefix.name)
      );

      localStorage.setItem(
        "suffixes",
        suffixes.map(suffix => suffix.name)
      );
    });
  }
};
</script>
