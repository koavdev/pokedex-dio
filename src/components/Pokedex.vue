<template>
  <div class="pokedex">
    <TopPanel />
    <!-- <LeftPanel class="pokedex--left" />
    <Divider />
    <RightPanel class="pokedex--right" /> -->
  </div>
</template>

<script>
import TopPanel from './TopPanel/TopPanel.vue';
/* import LeftPanel from './LeftPanel/LeftPanel.vue';
import RightPanel from './RightPanel/RightPanel.vue';
import Divider from './Divider/Divider.vue'; */

export default {
    name: "Pokedex",
    components: {
        TopPanel,
        /* LeftPanel,
        RightPanel,
        Divider, */
    }
}
</script>

<style lang="scss" scoped>
  .pokedex {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 960px;
    height: 100%;

  }
</style>