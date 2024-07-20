<script setup>
import JobsCard from "@/components/JobsCard.vue";

defineProps({
  showButton: {
    type: Boolean,
    default: false,
  },
  jobs: Array,
});
</script>
<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="job in jobs"
          :key="job.id"
          class="bg-white rounded-xl shadow-md relative"
        >
          <!-- Iterate over jobs array -->
          <JobsCard
            :id="job.id"
            :type="job.type"
            :title="job.title"
            :description="job.description"
            :salary="job.salary"
            :location="job.location"
            :company="job.company"
          />
        </div>
      </div>
    </div>
  </section>
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
    >
      View All Jobs
    </RouterLink>
  </section>
</template>
