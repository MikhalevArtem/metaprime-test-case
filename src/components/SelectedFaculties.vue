<template>
  <v-card class="selected-card"
    ><v-select
      class="selected-card__filter"
      label="сортировать по:"
      variant="solo"
      v-model="select"
      :items="sortСriteria"
      item-title="text"
      item-value="value"
      return-object
    ></v-select>
    <p v-if="!selectedFaculties.length" class="font-weight-bold text-center">
      Список пуст.
    </p>
    <v-table v-else>
      <thead>
        <tr>
          <th></th>
          <th class="text-left">ID</th>
          <th class="text-left">Имя</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in sortedFaculties" :key="item.id">
          <td>
            <v-btn
              color="primary"
              icon="mdi-close-thick"
              size="x-small"
              @click="unselectFaculty(item.id)"
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
  name: "selectedFaculties",
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
    ...mapMutations(["unselectFaculty"]),
  },
  computed: {
    ...mapGetters({
      selectedFaculties: "getSelectedFaculties",
    }),
    sortedFaculties() {
      if (this.select.value === 0) {
        return this.selectedFaculties.slice().sort((a, b) => {
          return a.id - b.id;
        });
      }
      return this.selectedFaculties.slice().sort((a, b) => {
        return a.data.name[0]
          .toUpperCase()
          .localeCompare(b.data.name[0].toUpperCase());
      });
    },
  },
};
</script>
<style scoped>
.selected-card {
  flex-grow: 1;
  max-width: 450px;
  overflow: auto;
  position: relative;
}
.selected-card__filter {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>
