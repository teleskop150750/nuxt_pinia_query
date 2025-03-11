<script lang="ts">
import { defineColadaLoader } from "unplugin-vue-router/data-loaders/pinia-colada";

export const useUserData = defineColadaLoader("two", {
  async query(_, { signal }) {
    console.log("TWO: query");
    return fetch("https://jsonplaceholder.typicode.com/todos/2", {
      signal: signal,
    }).then((response) => response.json());
  },
  key: () => ["todos", "two"],
  placeholderData: (v) => v,
  lazy: false,
});
</script>

<script setup lang="ts">
const { status, isLoading } = useUserData();
</script>

<template>
  <main>
    <h1>two</h1>
    <p>
      <code>status: {{ status }}</code>
      <br />
      <code>isLoading: {{ isLoading }}</code>
    </p>
  </main>
</template>
