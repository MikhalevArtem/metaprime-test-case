<template>
  <div
    class="wrapper h-screen mx-auto pa-6 d-flex flex-column flex-sm-row justify-start justify-sm-space-around"
  >
    <unselected-faculties></unselected-faculties>
    <selected-faculties></selected-faculties>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import UnselectedFaculties from "@/components/UnselectedFaculties.vue";
import SelectedFaculties from "@/components/SelectedFaculties.vue";
export default {
  components: {
    UnselectedFaculties,
    SelectedFaculties,
  },
  methods: {
    ...mapActions(["fetchFaculties"]),
  },
  mounted() {
    this.fetchFaculties();
  },
};
</script>
<style scoped>
.wrapper {
  background: linear-gradient(90deg, #f598a8, #f6edb2);
  max-width: 1200px;
  gap: 20px;
}
</style>
