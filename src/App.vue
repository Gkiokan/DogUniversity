<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

import data from './../public/data/output.json'

export default defineComponent({
  name: 'App',

  data () {
    return {
      data,
      selectedCourse: null
    }
  },

  mounted () {

  },

  methods: {
    setCourse (course) {
      this.selectedCourse = course
    }

  }
})
</script>
