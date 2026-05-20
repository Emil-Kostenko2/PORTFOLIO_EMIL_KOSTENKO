<template>
  <nav class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
    <div
      class="flex items-center gap-1 px-2 py-2 rounded-full shadow-2xl"
      style="background-color: #00124D;"
    >
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer select-none"
        :class="activeSection === link.section ? 'nav-link-active' : 'nav-link-inactive'"
        @click.prevent="scrollTo(link.section, link.href)"
      >
        <svg v-if="link.section === 'hero'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <svg v-if="link.section === 'projects'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z" />
        </svg>
        <svg v-if="link.section === 'journey'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <svg v-if="link.section === 'footer'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        {{ link.label }}
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const navLinks = [
  { label: 'Home',    href: '#hero',     section: 'hero'     },
  { label: 'Work',    href: '#projects', section: 'projects' },
  { label: 'Journey', href: '#journey',  section: 'journey'  },
  { label: 'Contact', href: '#footer',   section: 'footer'   },
];

const activeSection = ref('hero');

function scrollTo(section, href) {
  // Immediately set active section for smooth visual feedback
  activeSection.value = section;
  
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function onScroll() {
  const scrollPosition = window.scrollY + 200;
  const sections = ['hero', 'projects', 'journey', 'footer'];
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i]);
    if (el && scrollPosition >= el.offsetTop) {
      activeSection.value = sections[i];
      return;
    }
  }
  
  activeSection.value = 'hero';
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<style scoped>
.nav-link-active {
  background-color: #ffffff;
  color: #00124D;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link-inactive {
  background-color: transparent;
  color: rgba(255, 255, 255, 0.75);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link-inactive:hover {
  color: rgba(255, 255, 255, 0.95);
}
</style>
