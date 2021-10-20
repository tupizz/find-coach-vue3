<template>
  <n-carousel show-arrow autoplay>
    <img
      class="carousel-img"
      src="https://s.anw.red/fav/1623979004.jpg!/fw/600/quality/77/ignore-error/true"
    />
    <img
      class="carousel-img"
      src="https://s.anw.red/news/1623372884.jpg!/both/800x450/quality/78/progressive/true/ignore-error/true"
    />
    <img
      class="carousel-img"
      src="https://s.anw.red/news/1623177220.jpg!/both/800x450/quality/78/progressive/true/ignore-error/true"
    />
    <img
      class="carousel-img"
      src="https://s.anw.red/news/1623152423.jpg!/both/800x450/quality/78/progressive/true/ignore-error/true"
    />
  </n-carousel>

  <n-grid x-gap="12" :cols="3">
    <n-gi :offset="1">
      <div>
        <n-card>
          <coach-filter @change-filter="onChangeFilter"></coach-filter>
        </n-card>
      </div>
    </n-gi>
  </n-grid>

  <n-divider />

  <section>
    <n-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button v-if="!isAlreadyACoach" link to="/register"
          >Register as coach</base-button
        >
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-item>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </n-card>
  </section>
</template>

<script>
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";

export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      activeFilters: {
        fronted: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    onChangeFilter(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
  computed: {
    isAlreadyACoach() {
      return this.$store.getters["coaches/isCoach"];
    },
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/findCoaches"];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}

.carousel-img {
  width: 100%;
  height: 340px;
  object-fit: cover;
}
</style>
