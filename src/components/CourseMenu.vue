<template>
<div v-if="course">
    <q-list>
        <q-item-label header>
            <div class="q-py-sm"> Course Menu </div>
            <div class="q-pb-sm text-h6 text-grey-9 text-bold" v-if="title">{{ title }}</div>
        </q-item-label>
    </q-list>

    <q-expansion-item expand-separator :label="chapter.title" v-for="(chapter,c) in chapters" :key="'chapter-' + c">
        <q-list>
            <q-item clickable exact tag="a" :to="buildLink(chapter, page)" v-for="(page,p) in chapter.pages" :key="'page-' + p">
                <q-item-section>
                    <q-item-label>{{ page.title }}</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
    </q-expansion-item>

    <pre v-if="false">{{ chapters }}</pre>
</div>
</template>

<script>

export default {
  name: 'CourseMenu',

  data () {
    return {

    }
  },

  computed: {
    course () {
      return !!this.$root.selectedCourse
    },
    title () {
      return this.$root.selectedCourse ? this.$root.selectedCourse.title : null
    },
    chapters () {
      return this.$helper.getCourseChapters(this.$root.selectedCourse)
    }
  },

  methods: {
    buildLink (chapter, page) {
      const params = {
        course: this.course.title,
        chapter: chapter.title,
        page: page.title
      }

      return this.$router.resolve({ name: 'page', params })
    }
  }
}
</script>
