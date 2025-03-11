<script lang="ts">
import { defineColadaLoader } from "unplugin-vue-router/data-loaders/pinia-colada";

export const useUserData = defineColadaLoader("one", {
  async query(_, { signal }) {
    console.log("ONE: query");
    return fetch("https://jsonplaceholder.typicode.com/todos/2", {
      signal: signal,
    }).then((response) => response.json());
  },
  key: () => ["todos", "one"],
  placeholderData: (v) => v,
  lazy: false,
});
</script>

<script setup lang="ts">
const { status, isLoading } = useUserData();
</script>

<template>
  <main>
    <h1>one</h1>
    <p>
      <code>status: {{ status }}</code>
      <br />
      <code>isLoading: {{ isLoading }}</code>
    </p>
  </main>
</template>
