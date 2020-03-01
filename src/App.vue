<template>
  <v-app>
    <Logo />

    <v-content>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="6" md="4">
            <v-card class="px-4 pb-4">
              <TitleCard title="Prefixos" :total="prefixes.length" />

              <ListItems
                type="prefix"
                :items="prefixes"
                :icon="{ name: 'trash', color: 'ternary' }"
                @selectRemoveItem="removeItem"
              />

              <Input label="Prefixo" type="prefix" @addItem="addItem" />
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-card class="px-4 pb-4">
              <TitleCard title="Sufixos" :total="suffixes.length" />

              <ListItems
                type="suffix"
                :items="suffixes"
                :icon="{ name: 'trash', color: 'ternary' }"
                @selectRemoveItem="removeItem"
              />

              <Input label="Sufixo" type="suffix" @addItem="addItem" />
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-card class="px-4 pb-4">
              <TitleCard title="TLDs" :total="tlds.length" />

              <ListItems
                type="tld"
                :items="tlds"
                :icon="{ name: 'trash', color: 'ternary' }"
                @selectRemoveItem="removeItem"
              />

              <Input label="TLD" type="tld" @addItem="addItem" />
            </v-card>
          </v-col>
        </v-row>

        <v-card class="px-4 pb-4 mt-4">
          <TitleCard title="Domínios" :total="domains ? domains.length : 0" />

          <ListItems
            type="domain"
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

      return domains.sort();
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
