<template>
  <div class="md:hidden">
    <div
        class="flex flex-col gap-[4.5px] cursor-pointer"
        @click="toggleMenu"
    >
      <div
          :class="['w-6 mr-6 h-1 bg-blue-500 rounded-sm', isOpen ? 'rotate-45' : '', 'origin-left ease-in-out duration-500']"
      />
      <div
          :class="['w-6 mr-6 h-1 bg-blue-500 rounded-sm', isOpen ? 'opacity-0' : '', 'ease-in-out duration-500']"
      />
      <div
          :class="['w-6 mr-6 h-1 bg-blue-500 rounded-sm', isOpen ? '-rotate-45' : '', 'origin-left ease-in-out duration-500']"
      />
    </div>
    <div v-if="isOpen" class="absolute left-0 top-12 w-full h-[calc(100vh-48px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
      <router-link class="son" style="--i:1" to="/">Home</router-link>
      <router-link class="son" style="--i:2" to="/">Friends</router-link>
      <router-link class="son" style="--i:3" to="/">Groups</router-link>
      <router-link class="son" style="--i:4" to="/">Stories</router-link>
      <router-link class="son" style="--i:5" to="/">Login</router-link>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isOpen = ref(false);

    const toggleMenu = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggleMenu,
    };
  },
};
</script>

<style scoped>
.rotate-45 {
  transform: rotate(45deg);
}

.-rotate-45 {
  transform: rotate(-45deg);
}

.ease-in-out {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.son{
opacity: 0;
  transition: .3s;
  animation: slideTop  1s ease forwards;
  animation-delay: calc(var(--i) * 0.1s);
}

@keyframes slideTop {
0%{
  transform: translateY(100%);
}
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
