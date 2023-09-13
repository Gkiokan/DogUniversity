<template>
  <q-page>

    <!-- <q-video :src="item.url" :ratio="16/9" v-if="item && item.url" /> -->

    <!-- <div style="height: 0px; padding-bottom: 56.25%; width: 100%"> -->
        <video-player style="width: 100%" :src="item.url" controls :autoplay="true" v-if="item && item.url" />
    <!-- </div> -->

    <div class="q-pa-md">
        <div class="text-h4 text-light"> {{ title }} </div>

        <q-space style="height: 20px" />
        <q-separator />
        <q-space style="height: 20px" />

        <div v-if="course">
            <div class="text-h6"> {{ course.title }} </div>
            <p style="max-width: 600px"> {{ course.description }}</p>
        </div>

        <pre v-if="false">{{ course }}</pre>
    </div>

    <q-space style="height: 100px" />
  </q-page>
</template>

<script>

// Video Player used
// https://github.com/surmon-china/videojs-player#usage-vue
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageView',

  data () {
    return {
      title: '-//-',
      course: null,
      item: null,

      foundChapter: null,
      foundPage: null
    }
  },

  computed: {
    courses () {
      return this.$root.data.courses
    }
  },

  mounted () {
    this.load()
  },

  methods: {
    load () {
      const course = this.$route.params.course

      if (!course) { this.$router.push({ name: 'home' }) }

      this.course = this.$helper.findCourseByTitle(decodeURIComponent(course), this.$root.data.courses)
      this.$root.selectedCourse = this.course

      this.findPage()
    },

    findPage () {
      const chapter = this.$route.params.chapter
      const page = this.$route.params.page

      if (!chapter || !page) {
        return this.findFirstEntry()
      }

      const foundChapter = this.course.chapters.find(c => c.title == chapter)
      const foundPage = foundChapter.pages.find(p => p.title == page)

      this.foundChapter = foundChapter
      this.foundPage = foundPage

      this.item = foundPage
      this.setTitle()
    },

    findFirstEntry () {
      console.log('Find first Entry', this.course)

      this.foundChapter = this.course.chapters[0]
      this.foundPage = this.course.chapters[0].pages[0]

      this.item = this.foundPage
      this.setTitle()
    },

    setTitle () {
      const pageTitle = this.item.title
      this.$root.pageTitle = pageTitle
      this.title = this.foundChapter.title + ' | ' + this.foundPage.title
    }

  }
})
</script>

<style lang="scss">
.row div {
  // border: 1px solid red;
}
</style>
