<template>
  <div class="home">
    <section class="m-3 flex">
      <div class="w-3/12 py-3">
        <img  class="rounded-full w-20 h-20" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="">
      </div>
      <article class="w-9/12 border-b-2 py-2 pt-6 border-gray-200">
        <div class="flex justify-between">
          <h2>name</h2>
          <p class="text-green-500">time</p>
        </div>
        <div class="flex justify-between">
          <p>message</p>
          <p class="bg-green-500 text-white rounded-full w-6 h-6 text-center text-sm">3</p>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // }
}
</script>
