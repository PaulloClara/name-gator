<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-card class="px-4 pb-4">
              <TitleCard title="Prefixes" />
              <ListItems
                :items="prefixes"
                :action="removePrefix"
                icon="trash"
              />
              <Input :add="addPrefix" label="Prefix" />
            </v-card>
          </v-col>
          <v-col>
            <v-card class="px-4 pb-4">
              <TitleCard title="Suffixes" />
              <ListItems
                :items="suffixes"
                :action="removeSuffix"
                icon="trash"
              />
              <Input :add="addSuffix" label="Suffix" />
            </v-card>
          </v-col>
        </v-row>
        <v-card>
          <TitleCard title="Domains" />
          <ListItems
            :items="domains"
            :action="clickDomain"
            icon="shopping-cart"
          />
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Input from "@/components/Input";
import ListItems from "@/components/ListItems";
import TitleCard from "@/components/TitleCard";

export default {
  name: "App",
  components: {
    Input,
    ListItems,
    TitleCard
  },
  data() {
    return {
      prefixes: ["Air"],
      suffixes: ["Bnb"],
      domains: []
    };
  },
  methods: {
    checkDomain(index) {},
    clickDomain(index) {},
    addPrefix(prefix) {
      this.prefixes.push(prefix);
      this.createDomains();
    },
    addSuffix(suffix) {
      this.suffixes.push(suffix);
      this.createDomains();
    },
    removePrefix(index) {
      this.prefixes.splice(index, 1);
      this.createDomains();
    },
    removeSuffix(index) {
      this.suffixes.splice(index, 1);
      this.createDomains();
    },
    createDomains() {
      const domains = [];

      this.prefixes.forEach(prefix =>
        this.suffixes.forEach(suffix => domains.push(prefix + suffix))
      );

      this.domains = domains;
    }
  },
  mounted() {
    this.createDomains();
  }
};
</script>
