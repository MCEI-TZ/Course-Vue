import { computed, ref, defineComponent } from 'vue';

export default defineComponent({
  props: {
    valueProp: { type: Number, required: true },
  },
  setup(props) {
    const count = ref(props.valueProp);
    const squareCounter = computed(() => count.value * count.value);

    return {
      count,
      squareCounter,
    };
  },
});
