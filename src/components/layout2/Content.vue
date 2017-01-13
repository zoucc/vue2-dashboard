<template>
  <section class="content">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'content'
  }
</script>
