<template >
  <div class="flex items-center justify-center h-screen">
    <div
        class="bg-zinc-50 border-[4px] border-green-800 rounded-2xl hover:border-green-400 transition-all duration-200"
    >
      <div
          class="mx-auto flex items-center space-y-4 py-16 px-12 font-semibold text-gray-500 flex-col"
      >

        <h1 class="text-black text-2xl">Register</h1>
        <input
            class="w-full p-2 bg-gray-50 rounded-md border border-black focus:border-blue-700 hover:border-green-500 transition-all duration-200"
            placeholder="Username"
            type="email"
            name="email"
            id=""
        />
        <input
            class="w-full p-2 bg-gray-50 rounded-md border border-black focus:border-blue-700 hover:border-green-500  transition-all duration-200"
            placeholder="Password"
            type="email"
            name="email"
            id=""
        />
        <input
            class="w-full p-2 bg-gray-50 rounded-md border border-black focus:border-blue-700 hover:border-green-500 transition-all duration-200"
            placeholder="Mobile Number"
            type="password"
            name="password"
            id=""
        />
        <input
            class="cursor-pointer w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-[4px] border-gray-700 hover:border-green-500 transition-all duration-200"
            type="submit"
            id=""
        />
        <p>
          Return to login
          <a
              class="cursor-pointer font-semibold text-black hover:text-blue-500 transition-all duration-200"
              @click="$router.push('/Sign_in')"
          >Login</a
          >
        </p>
      </div>
    </div>
  </div>

</template>
<style>
body{
  margin: 0;
  padding: 0;
}
</style>
