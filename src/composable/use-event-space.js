import { ref, computed, reactive, toRefs } from "vue";

export default function useEventSpace() {
  // data
  const event = reactive({
    capacity: 7,
    attending: ref(["tadeu", "zeh", "branco", "marcio", "gabriel"]),
    spacesLeft: computed(() => {
      return event.capacity - event.attending.length;
    }),
  });

  // methods
  const increaseCapacity = () => {
    event.capacity++;
  };

  const method = () => {
    return "method called";
  };

  return { ...toRefs(event), increaseCapacity, method };
}
