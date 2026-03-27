<template>
  <div>
    <h1>Calc</h1>
    <Calc />
    <hr />
    <h1>Calc2</h1>
    <Calc2 />
    <hr />
    <h1>Calc3</h1>
    <Calc3 />
    <hr />
    <h1>Calc4</h1>
    <Calc4 />
    <hr />
    <h1>Calc5</h1>
    <Calc5 />

  </div>
</template>

<script>
import Calc from './components/Calc.vue';
import Calc2 from './components/Calc2.vue';
import Calc3 from './components/Calc3.vue';
import Calc4 from './components/Calc4.vue';
import Calc5 from './components/Calc5.vue';
import Calc8 from './components/Calc8.vue';

export default {
  name: 'App',
  components: { Calc, Calc2, Calc3, Calc4, Calc5, Calc8 },
};
</script>

<style scoped></style>
