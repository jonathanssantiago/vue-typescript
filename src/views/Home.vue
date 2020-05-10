<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Country :prop1='propchange' :loading="loading"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Country from '@/components/Country.vue'

@Component({
  components:{
    Country
  }
})
export default class Home extends Vue {
  propchange: string;
  loading: boolean;

  constructor(){
    super();
    this.propchange = '';
    this.loading = false;
  }

  mounted() {
    this.propchange = '2222';
    setTimeout(() => {
      this.propchange = '444';
    }, 3000);

    setInterval(() => {
      this.loading = !this.loading;
    }, 5000);
  }
}
</script>
