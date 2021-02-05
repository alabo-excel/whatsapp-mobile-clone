<template>
  <div class="home">
    <section class="m-3 flex" v-for="(chat, index) in chats" :key="index">
      <div class="w-3/12 py-3 mr-2">
        <img  class="rounded-full w-20 h-20" :src="chat.image" alt="">
      </div>
      <article class="w-9/12 border-b-2 py-2 pt-6 border-gray-200">
        <div class="flex justify-between">
          <h2 class="font-semibold">{{chat.name}}</h2>
          <p class="text-green-500 text-sm">{{chat.time}}</p>
        </div>
        <div class="flex justify-between">
          <p>{{chat.message}}</p>
          <p class="bg-green-500 text-white rounded-full w-6 h-6 text-center text-sm">{{chat.count}}</p>
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

  data() {
    return {
      chats: [
        {
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
          name: "Whitemans Chat",
          message: "Ned: Yeah I think I know wha...",
          time: "11:45 AM",
          count: 3
        },
        {
          image: "https://images.unsplash.com/photo-1565464027398-8f98698f6d52",
          name: "Stewart Family",
          message: "Steve: Great, thanks!",
          time: "11:39 AM",
          count: 1
        },
        {
          image: "https://images.unsplash.com/photo-1485893086445-ed75865251e0",
          name: "Alice Whitman",
          message: "Image",
          time: "YESTERDAY",
          count: 6
        },
        {
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3",
          name: "Jack Whitman",
          message: "0:07",
          time: "FRIDAY",
          count: 1
        },
        {
          image: "https://images.unsplash.com/photo-1568725624707-9d968f934b75",
          name: "Lunch Group",
          message: "You: Sounds good!",
          time: "FRIDAY",
          count: 4
        },
        {
          image: "https://images.unsplash.com/photo-1565293253517-90cb8ce865a2",
          name: "Jane Pearson",
          message: "🔥 💭",
          time: "FRIDAY",
          count: 5
        }
      ]
    };
  }
}
</script>
