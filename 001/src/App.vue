<template>
  <div>
    <off-select
      name="traineeSource"
      :items="TRAINEE_SOURCE_MAP"
      @select="sourceTypeFilterValue = $event"
    />
    <off-table :headers="tableHeaders" :items="tableItems" />
  </div>
</template>

<script>
import OffSelect from "./components/off-select.vue";
import OffTable from "./components/off-table.vue";
import { TRAINEE_SOURCE_MAP, traineeDataType, trainees } from "./data";

export default {
  name: "App",
  components: {
    [OffSelect.name]: OffSelect,
    [OffTable.name]: OffTable,
  },
  data() {
    return {
      TRAINEE_SOURCE_MAP,
      tableHeaders: traineeDataType,
      trainees,
      sourceTypeFilterValue: "",
    };
  },
  computed: {
    tableItems() {
      const filteredTrainees = this.sourceTypeFilterValue
        ? this.trainees.filter(
            (x) => x.sourceType === this.sourceTypeFilterValue
          )
        : this.trainees;

      return filteredTrainees.map(({ sourceType, ...rest }) => ({
        ...rest,
        sourceType: TRAINEE_SOURCE_MAP[sourceType],
      }));
    },
  },
};
</script>
