<script setup>
const { data: jobs, status } = useFetch("http://localhost:5001/jobs", {
  server: false,
});
console.log({ jobs });
</script>
<template>
  <JobListings :showButton="false" :jobs="jobs" />
  <div class="mx-auto w-fit mt-10"></div>
</template>
