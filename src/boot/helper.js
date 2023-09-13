const helper = {
  getCourseData (course) {
    return {
      title: course.title,
      description: course.description,
      image: course.image
    }
  },

  getChapterCount (course) {
    return course?.chapters.length
  },

  getCourseChapters (course) {
    return course?.chapters ?? []
  },

  findCourseByTitle (title = '', courses = []) {
    const course = courses.find(course => course.title == title)

    return course
  }

}

export default async ({ app }) => {
  app.config.globalProperties.$helper = helper
}
