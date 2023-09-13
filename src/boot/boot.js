import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

export default async ({ app, store, router, Vue }) => {
  // add lcick outside directive
  // app.use(vClickOutside)
  app.use(VueVideoPlayer)
}
