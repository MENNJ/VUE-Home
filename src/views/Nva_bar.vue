<template>

  <div v-if="!$route.meta.shovalues" class="h-16  fixed top-0 w-[100vw] bg-white  z-[99] flex items-center justify-between dark:bg-black">

    <div class="md:hidden lg:block w-[20%]">
      <span class="font-bold text-xl ml-6 text-black dark:text-white">Message</span>
    </div>

    <div class="hidden md:flex justify-around w-[50%] text-sm items-center justify-between ml-10 ">

      <div class=" gap-20 text-gray-600">
        <div class="flex  flex-col ">
          <svg class="cursor-pointer text-black hover:text-green-400 dark:text-white" height="3vh" viewBox="0 0 24 24" width="3vh"
                                            xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M5 21H19" stroke-dasharray="21" stroke-dashoffset="21">
              <animate attributeName="stroke-dashoffset" dur="0.2s" fill="freeze" values="21;0"/>
            </path>
            <path d="M5 21V8M19 21V8" stroke-dasharray="15" stroke-dashoffset="15">
              <animate attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" fill="freeze" values="15;0"/>
            </path>
            <path d="M9 21V13H15V21" stroke-dasharray="24" stroke-dashoffset="24">
              <animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" fill="freeze" values="24;0"/>
            </path>
            <path d="M2 10L12 2L22 10" stroke-dasharray="26" stroke-dashoffset="26">
              <animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" fill="freeze" values="26;0"/>
            </path>
          </g>
        </svg>
          <span>Home</span>
        </div>
        <div class="flex flex-col ">
         <svg class="cursor-pointer text-black hover:text-green-400 dark:text-white " height="3vh" viewBox="0 0 24 24" width="3vh"
             xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <g stroke-width="2">
              <path d="M12 3H19V21H5V3H12Z" stroke-dasharray="66" stroke-dashoffset="66">
                <animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="66;0"/>
              </path>
              <path d="M9 10H12" stroke-dasharray="5" stroke-dashoffset="5">
                <animate attributeName="stroke-dashoffset" begin="1s" dur="0.2s" fill="freeze" values="5;0"/>
              </path>
              <path d="M9 13H14" stroke-dasharray="6" stroke-dashoffset="6">
                <animate attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" fill="freeze" values="6;0"/>
              </path>
              <path d="M9 16H15" stroke-dasharray="7" stroke-dashoffset="7">
                <animate attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" fill="freeze" values="7;0"/>
              </path>
            </g>
            <path d="M14.5 3.5V6.5H9.5V3.5" stroke-dasharray="12" stroke-dashoffset="12">
              <animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" fill="freeze" values="12;0"/>
            </path>
          </g>
        </svg>
          <span>Order</span>
      </div>
        <div class="flex flex-col">
        <svg class="text-black cursor-pointer hover:text-green-400 dark:text-white" height="3vh" viewBox="0 0 24 24" width="3vh"
             xmlns="http://www.w3.org/2000/svg">
          <defs>
            <symbol id="lineMdCogFilledLoop0">
              <path
                  d="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z"
                  fill="#fff">
                <animate attributeName="d" begin="0.5s" dur="0.2s" fill="freeze"
                         values="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z;M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 19.09 5.04 19.09 5.04C19.25 4.98 19.52 5.01 19.6 5.17C19.6 5.17 21.67 8.75 21.67 8.75C21.77 8.92 21.73 9.2 21.6 9.32C21.6 9.32 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z"/>
              </path>
            </symbol>
            <mask id="lineMdCogFilledLoop1">
              <path d="M12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7z"
                    fill="none" stroke="#fff" stroke-dasharray="36" stroke-dashoffset="36"
                    stroke-width="5">
                <animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="36;0"/>
                <set attributeName="opacity" begin="0.4s" to="0"/>
              </path>
              <g opacity="0">
                <use href="#lineMdCogFilledLoop0"/>
                <use href="#lineMdCogFilledLoop0" transform="rotate(60 12 12)"/>
                <use href="#lineMdCogFilledLoop0" transform="rotate(120 12 12)"/>
                <use href="#lineMdCogFilledLoop0" transform="rotate(180 12 12)"/>
                <use href="#lineMdCogFilledLoop0" transform="rotate(240 12 12)"/>
                <use href="#lineMdCogFilledLoop0" transform="rotate(300 12 12)"/>
                <set attributeName="opacity" begin="0.4s" to="1"/>
                <animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate"
                                  values="0 12 12;360 12 12"/>
              </g>
              <circle cx="12" cy="12" r="3.5"/>
            </mask>
          </defs>
          <rect fill="currentColor" height="24" mask="url(#lineMdCogFilledLoop1)" width="24"/>
        </svg>
          <span>Setting</span>
        </div>
        <div class="flex flex-col " @click="toggleTheme">
        <svg v-if="!isIconSwitched" class="text-black cursor-pointer hover:text-green-400 dark:text-white" width="3vh" height="3vh"
             viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M0 0">
              <animate attributeName="d" begin="0.6s" dur="0.2s" fill="freeze"
                       values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"/>
              <animate attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" fill="freeze" values="2;0"/>
            </path>
            <path d="M0 0">
              <animate attributeName="d" begin="0.9s" dur="0.2s" fill="freeze"
                       values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"/>
              <animate attributeName="stroke-dashoffset" begin="0.9s" dur="1.2s" fill="freeze" values="2;0"/>
            </path>
            <animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate"
                              values="0 12 12;360 12 12"/>
          </g>
          <mask id="lineMdMoonAltToSunnyOutlineLoopTransition0">
            <circle cx="12" cy="12" fill="#fff" r="12"/>
            <circle cx="12" cy="12" r="8">
              <animate attributeName="r" dur="0.4s" fill="freeze" values="8;4"/>
            </circle>
            <circle cx="18" cy="6" fill="#fff" r="12">
              <animate attributeName="cx" dur="0.4s" fill="freeze" values="18;22"/>
              <animate attributeName="cy" dur="0.4s" fill="freeze" values="6;2"/>
              <animate attributeName="r" dur="0.4s" fill="freeze" values="12;3"/>
            </circle>
            <circle cx="18" cy="6" r="10">
              <animate attributeName="cx" dur="0.4s" fill="freeze" values="18;22"/>
              <animate attributeName="cy" dur="0.4s" fill="freeze" values="6;2"/>
              <animate attributeName="r" dur="0.4s" fill="freeze" values="10;1"/>
            </circle>
          </mask>
          <circle cx="12" cy="12" fill="currentColor" mask="url(#lineMdMoonAltToSunnyOutlineLoopTransition0)" r="10">
            <animate attributeName="r" dur="0.4s" fill="freeze" values="10;6"/>
          </circle>
        </svg>
        <svg v-else class="text-black cursor-pointer hover:text-green-400 dark:text-white" width="3vh" height="3vh" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="currentColor" stroke-dasharray="4" stroke-dashoffset="4" stroke-linecap="round"
             stroke-linejoin="round">
            <path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5">
              <animate id="lineMdMoonRisingFilledAltLoop0" attributeName="stroke-dashoffset"
                       begin="0.7s;lineMdMoonRisingFilledAltLoop0.begin+6s"
                       dur="0.4s" fill="freeze" values="4;0"/>
              <animate attributeName="stroke-dashoffset"
                       begin="lineMdMoonRisingFilledAltLoop0.begin+2s;lineMdMoonRisingFilledAltLoop0.begin+4s"
                       dur="0.4s"
                       fill="freeze" values="4;0"/>
              <animate attributeName="stroke-dashoffset"
                       begin="lineMdMoonRisingFilledAltLoop0.begin+1.2s;lineMdMoonRisingFilledAltLoop0.begin+3.2s;lineMdMoonRisingFilledAltLoop0.begin+5.2s"
                       dur="0.4s"
                       fill="freeze" values="0;4"/>
              <set attributeName="d" begin="lineMdMoonRisingFilledAltLoop0.begin+1.8s"
                   to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"/>
              <set attributeName="d" begin="lineMdMoonRisingFilledAltLoop0.begin+3.8s"
                   to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"/>
              <set attributeName="d" begin="lineMdMoonRisingFilledAltLoop0.begin+5.8s"
                   to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"/>
            </path>
            <path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5">
              <animate id="lineMdMoonRisingFilledAltLoop1" attributeName="stroke-dashoffset"
                       begin="1.1s;lineMdMoonRisingFilledAltLoop1.begin+6s"
                       dur="0.4s" fill="freeze" values="4;0"/>
              <animate attributeName="stroke-dashoffset"
                       begin="lineMdMoonRisingFilledAltLoop1.begin+2s;lineMdMoonRisingFilledAltLoop1.begin+4s"
                       dur="0.4s"
                       fill="freeze" values="4;0"/>
              <animate attributeName="stroke-dashoffset"
                       begin="lineMdMoonRisingFilledAltLoop1.begin+1.2s;lineMdMoonRisingFilledAltLoop1.begin+3.2s;lineMdMoonRisingFilledAltLoop1.begin+5.2s"
                       dur="0.4s"
                       fill="freeze" values="0;4"/>
              <set attributeName="d" begin="lineMdMoonRisingFilledAltLoop1.begin+1.8s"
                   to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"/>
              <set attributeName="d" begin="lineMdMoonRisingFilledAltLoop1.begin+3.8s"
                   to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"/>
              <set attributeName="d" begin="lineMdMoonRisingFilledAltLoop1.begin+5.8s"
                   to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"/>
            </path>
            <path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5">
              <animate id="lineMdMoonRisingFilledAltLoop2" attributeName="stroke-dashoffset"
                       begin="2.9s;lineMdMoonRisingFilledAltLoop2.begin+6s"
                       dur="0.4s" fill="freeze" values="4;0"/>
              <animate attributeName="stroke-dashoffset" begin="lineMdMoonRisingFilledAltLoop2.begin+2s" dur="0.4s"
                       fill="freeze" values="4;0"/>
              <animate attributeName="stroke-dashoffset"
                       begin="lineMdMoonRisingFilledAltLoop2.begin+1.2s;lineMdMoonRisingFilledAltLoop2.begin+3.2s"
                       dur="0.4s"
                       fill="freeze" values="0;4"/>
              <set attributeName="d" begin="lineMdMoonRisingFilledAltLoop2.begin+1.8s"
                   to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"/>
              <set attributeName="d" begin="lineMdMoonRisingFilledAltLoop2.begin+5.8s"
                   to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"/>
            </path>
          </g>
          <path
              d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
              fill="currentColor" stroke="currentColor" stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              transform="translate(0 22)">
            <animateMotion calcMode="linear" dur="0.6s" fill="freeze" path="M0 0v-22"/>
          </path>
        </svg>
          <span>Home</span>
          </div>
      </div>



    </div>

    <div class='hidden xl:flex p-2 bg-gray-200 dark:bg-slate-50 items-center rounded-xl'>
      <input type="text" placeholder="search..." class="bg-transparent outline-none"/>
      <svg xmlns="http://www.w3.org/2000/svg" width="3vh" height="3vh" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="16" stroke-dashoffset="16" d="M10.5 13.5L3 21">
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"/>
        </path>
          <path stroke-dasharray="40" stroke-dashoffset="40" d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="40;0"/>
          </path>
        </g>
      </svg>
    </div>

    <div class="w-[30%] flex items-center gap-4 xl:gap-2 justify-end">
      <div class="flex items-center gap-2 text-sm">
        <svg class="md:mr-6" xmlns="http://www.w3.org/2000/svg" width="4vh" height="4vh"  viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M12 5C13.66 5 15 6.34 15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"/></path><path stroke-dasharray="36" stroke-dashoffset="36" d="M12 14C16 14 19 16 19 17V19H5V17C5 16 8 14 12 14z" opacity="0"><set attributeName="opacity" begin="0.5s" to="1"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="36;0"/></path></g></svg>
      </div>
      <Menu/>
    </div>
  </div>
</template>


<script lang="ts" setup>

import {ref} from 'vue';
import Menu from "./Menu.vue";

defineProps<{ msg: string }>();

const isIconSwitched = ref(false);

  const toggleTheme = (event: MouseEvent) => {

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
    );

    let isDark: boolean;

    // @ts-ignore
    const transition = document.startViewTransition(() => {
      const root = document.documentElement;
      isDark = root.classList.contains('dark');
      root.classList.remove(isDark ? 'dark' : 'light');
      root.classList.add(isDark ? 'light' : 'dark');
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
          {
            clipPath: isDark ? [...clipPath].reverse() : clipPath,
          },
          {
            duration: 500,
            easing: 'ease-in',
            pseudoElement: isDark
                ? '::view-transition-old(root)'
                : '::view-transition-new(root)',
          },
      );
      isIconSwitched.value = !isIconSwitched.value;
    });
  };
</script>

