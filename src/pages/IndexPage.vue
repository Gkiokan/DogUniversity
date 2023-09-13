<template>
  <q-page padding>

  <div class="row q-col-gutter-md">
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3" v-for="(course,i) in courses" :key="i">

    <q-card class="dog-card flex column space-between full-height" flat bordered>
      <q-img :src="course.image" />

      <q-card-section>
        <div class="text-overline text-orange-9"> {{ $helper.getChapterCount(course) }} Chapters </div>
        <div class="text-h5 q-mt-sm q-mb-xs"> {{ course.title }}</div>
        <div class="text-body1 text-grey-8">
          {{ course.description }}
        </div>
      </q-card-section>

      <q-space />

      <q-card-actions>
        <q-btn flat icon="visibility" color="primary" label="Ansehen" @click="$router.push({ name: 'page', params: { course: course.title } })" />
      </q-card-actions>
    </q-card>

    </div>
  </div>

  <pre v-if="false">{{ courses.map( x => $helper.getCourseData(x) ) }}</pre>

  <q-space style="height: 100px" />

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',

  computed: {
    courses () {
      return this.$root.data.courses
    }
  },

  created () {
    this.$root.selectedCourse = null
    this.$root.pageTitle = 'DogUniversity'
  },

  methods: {

  }
})
</script>

<style lang="scss">
.row div {
  // border: 1px solid red;
}
</style>
