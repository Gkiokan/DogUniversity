<template>
  <q-layout view="lHh Lpr lFf">
    <!-- HEADER -->
    <q-header elevated>
      <q-toolbar class="bg-white text-grey-8">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          {{ $root.pageTitle }}
        </q-toolbar-title>

        <div v-if="false"> v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <!-- DRAWER -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="340"
    >
      <q-list>
        <q-item-label header>
          Dog University
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

        <q-separator inset />

        <CourseMenu />

      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-1" :key="$route.fullPath">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import CourseMenu from 'components/CourseMenu.vue'

const linksList = [
  {
    title: 'Start!',
    icon: 'school',
    link: { name: 'home' }
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    CourseMenu
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
