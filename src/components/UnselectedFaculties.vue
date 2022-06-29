<template>
  <v-card class="list-card"
    ><v-select
      class="list-card__filter"
      label="сортировать по:"
      variant="solo"
      v-model="select"
      :items="sortСriteria"
      item-title="text"
      item-value="value"
      return-object
    ></v-select>
    <v-progress-circular
      v-if="loadingStatus"
      class="loader"
      :size="50"
      color="amber"
      indeterminate
    ></v-progress-circular>
    <p
      v-else-if="!unselectedFaculties.length"
      class="font-weight-bold font-weight-bold text-center"
    >
      Список пуст.
    </p>
    <v-table v-else>
      <thead>
        <tr>
          <th class="text-left"></th>
          <th class="text-left">ID</th>
          <th class="text-left">Имя</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in sortedFaculties" :key="item.id">
          <td>
            <v-btn
              color="secondary"
              icon="mdi-check-bold"
              size="x-small"
              @click="selectFaculty(item.id)"
            ></v-btn>
          </td>
          <td>{{ item.id }}</td>
          <td>{{ item.data.name }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "unselectedFaculties",
  data() {
    return {
      select: { text: "ID", value: 0 },
      sortСriteria: [
        { text: "ID", value: 0 },
        { text: "Имя", value: 1 },
      ],
    };
  },
  methods: {
    ...mapMutations(["selectFaculty"]),
  },
  computed: {
    ...mapGetters({
      unselectedFaculties: "getUnselectedFaculties",
      loadingStatus: "getLoadingStatus",
    }),
    sortedFaculties() {
      if (this.select.value === 0) {
        return this.unselectedFaculties.slice().sort((a, b) => {
          return a.id - b.id;
        });
      }
      return this.unselectedFaculties.slice().sort((a, b) => {
        return a.data.name[0]
          .toUpperCase()
          .localeCompare(b.data.name[0].toUpperCase());
      });
    },
  },
};
</script>
<style scoped>
.list-card {
  flex-grow: 1;
  max-width: 450px;
  overflow: auto;
  position: relative;
}
.list-card__filter {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>
