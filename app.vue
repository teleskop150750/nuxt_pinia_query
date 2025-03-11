<script setup lang="ts">
const queryCache = useQueryCache();

function onClick() {
  queryCache.invalidateQueries({ key: ["todos"] });
}
</script>

<template>
  <div>
    <div>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/one">One</nuxt-link>
      <nuxt-link to="/two">Two</nuxt-link>
      <nuxt-link to="/three">Three</nuxt-link>
    </div>
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <div>
      <button type="button" @click="onClick">invalidate</button>
    </div>
  </div>
</template>
