<template>
  <div class="home">
    <HeaderNav />
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from '@/components/header-nav.vue'

export default {
  name: 'Home',
  components: {
    HeaderNav
  }
}
</script>
