<template>
  <div>
    <h1>Working with composition api {{ id }} {{ method() }}</h1>
    <p>Spaces left: {{ spacesLeft }} out of capacity {{ capacity }}</p>
    <button @click="increaseCapacity()">increase capacity</button>
  </div>

  <div>
    <h2>Attending to the event</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
import { onBeforeMount, onMounted } from "vue";
import useEventSpace from "@/composable/use-event-space";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  // we can use props
  // executes before components, props, data, methods, computed props and lifecycle, don't have access to this
  setup() {
    onBeforeMount(() => {
      console.log("Before Mount!");
    });

    onMounted(() => {
      console.log("Mounted!");
    });

    const { increaseCapacity, method, capacity, attending, spacesLeft } =
      useEventSpace();

    return { increaseCapacity, method, capacity, attending, spacesLeft };
  },
  // setup(props, ctx) {
  //   console.log(props.id);
  //   console.log(ctx);

  //   // data
  //   const capacity = ref(10);
  //   const attending = ref(["tadeu", "zeh", "branco", "marcio", "gabriel"]);

  //   // computed
  //   const spacesLeft = computed(() => {
  //     return capacity.value - attending.value.length;
  //   });

  //   const method = () => {
  //     return "method called";
  //   };

  //   const increaseCapacity = () => {
  //     capacity.value++;
  //   };

  //   return { method, capacity, attending, increaseCapacity, spacesLeft };
  // },
};
</script>

<style scoped></style>
