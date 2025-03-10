<script setup lang="ts">
import { useQuery, useQueryCache } from "@pinia/colada";
import { shallowRef } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute("/self");

const queryCache = useQueryCache();
const { status, isLoading, error, state } = useQuery({
  async query({ signal }) {
    queryCache.cancelQueries({ key: ["self"] });
    return fetch("https://jsonplaceholder.typicode.com/todos/2", {
      signal: signal,
    }).then((response) => response.json());
  },
  key: () => ["self", (route.query.search as string) ?? ""],
  placeholderData: (v) => v,
});

const roputer = useRouter();
const search = shallowRef("");

function onSearch(e: Event) {
  const target = e.target as HTMLInputElement;
  search.value = target.value;
  roputer.push({ query: { search: search.value } });
}
</script>

<template>
  <main>
    <h1>Nuxt self</h1>
    <pre>User: {{ route.query.id }}</pre>

    <input type="text" :value="search" @input="onSearch" />

    <h2>State</h2>

    <p>
      <code>status: {{ status }}</code>
      <br />
      <code>isLoading: {{ isLoading }}</code>
    </p>
    <pre v-if="error">Error: {{ error }}</pre>
    <pre v-else>{{ state.data == null ? String(state.data) : state.data }}</pre>
  </main>
</template>
