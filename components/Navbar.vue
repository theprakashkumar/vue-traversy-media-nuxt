<script setup>
import { RouterLink } from "vue-router";
import { isActiveLink } from "@/utils/links";
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <NuxtLink class="flex flex-shrink-0 items-center mr-4" to="/"
            ><span class="hidden md:block text-white text-2xl font-bold ml-2"
              >Vue Jobs</span
            ></NuxtLink
          >
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <NuxtLink
                to="/"
                :class="`text-white ${
                  isActiveLink('/')
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white'
                } rounded-md px-3 py-2`"
                >Home</NuxtLink
              >
              <NuxtLink
                to="/jobs"
                :class="`text-white ${
                  isActiveLink('/jobs')
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white'
                } rounded-md px-3 py-2`"
                >Jobs</NuxtLink
              >
              <NuxtLink
                to="/job/add"
                class="text-white hover:bg-green-900 hover:text-white rounded-md px-3 py-2"
                >Add Job</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
