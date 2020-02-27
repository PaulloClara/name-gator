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
          <TitleCard title="Domínios" :total="domains.length" />
          <ListItems
            :items="domains"
            :icon="{ name: 'shopping-cart', color: 'primary' }"
            @selectItem="checkDomain"
          />
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
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
  computed: {
    domains() {
      const domains = [];

      this.$data.prefixes.forEach(prefix =>
        this.$data.suffixes.forEach(suffix =>
          domains.push(`${prefix}${suffix}`)
        )
      );

      return domains;
    }
  },
  methods: {
    addItem({ type, value }) {
      this.$data[`${type}es`].push(value);
    },
    removeItem({ type, index }) {
      this.$data[`${type}es`].splice(index, 1);
    },
    checkDomain({ index }) {
      const baseURL = "https://checkout.hostgator.com.br/?a=add";
      const domain = this.domains[index];

      window.open(baseURL + `&sld=${domain}&tld=.com.br`);
    }
  },
  beforeMount() {
    this.$data.prefixes = localStorage.getItem("prefixes")
      ? localStorage.getItem("prefixes").split(",")
      : ["git", "name"];
    this.$data.suffixes = localStorage.getItem("suffixes")
      ? localStorage.getItem("suffixes").split(",")
      : ["hub", "gator"];

    window.addEventListener("beforeunload", () => {
      const { prefixes, suffixes } = this.$data;

      localStorage.setItem("prefixes", prefixes);
      localStorage.setItem("suffixes", suffixes);
    });
  }
};
</script>
