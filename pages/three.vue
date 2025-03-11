<script lang="ts">
import { defineColadaLoader } from "unplugin-vue-router/data-loaders/pinia-colada";

export const useUserData = defineColadaLoader("three", {
  async query(_, { signal }) {
    console.log("THREE: query");
    return fetch("https://jsonplaceholder.typicode.com/todos/2", {
      signal: signal,
    }).then((response) => response.json());
  },
  key: () => ["todos", "three"],
  placeholderData: (v) => v,
  lazy: false,
});
</script>

<script setup lang="ts">
const { status, isLoading } = useUserData();
</script>

<template>
  <main>
    <h1>three</h1>
    <p>
      <code>status: {{ status }}</code>
      <br />
      <code>isLoading: {{ isLoading }}</code>
    </p>
  </main>
</template>
