<template>
  <div>
    <div>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/lazy">Lazy</nuxt-link>
      <nuxt-link to="/self">Self</nuxt-link>
    </div>
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
