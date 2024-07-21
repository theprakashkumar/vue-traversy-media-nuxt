// Function to determine if the link is active
import { useRoute } from "vue-router";
export const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
