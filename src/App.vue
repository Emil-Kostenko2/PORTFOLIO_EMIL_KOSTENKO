<script setup>
import { ref, watchEffect, onMounted, onUnmounted } from 'vue';
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import JourneySection from './components/JourneySection.vue';
import FooterSection from './components/FooterSection.vue';

const isDark = ref(false);
const showCvMenu = ref(false);

watchEffect(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

function toggleCvMenu() {
  showCvMenu.value = !showCvMenu.value;
}

function closeCvMenu(e) {
  if (!e.target.closest('.cv-dropdown')) {
    showCvMenu.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', closeCvMenu);
});

onUnmounted(() => {
  document.removeEventListener('click', closeCvMenu);
});
</script>

<template>
  <div class="min-h-screen w-full" style="background-color: var(--bg); color: var(--text);">

    <NavBar />

    <div class="fixed top-6 left-6 z-50">
      <h1 class="font-display text-3xl tracking-tight" :style="isDark ? 'color: #FFFFFF; font-weight: 700;' : 'color: #00124D; font-weight: 700;'">EMIL.</h1>
    </div>

    <div class="fixed top-5 right-6 z-40 flex items-center gap-3">
      <button
        @click="isDark = !isDark"
        class="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:opacity-80"
        style="background-color: var(--card-bg); border: 1px solid var(--border); color: var(--text);"
        :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
      </button>

      <div class="cv-dropdown">
      <button
        @click="toggleCvMenu"
        class="px-5 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-80 flex items-center gap-2"
        style="background-color: var(--accent); color: #fff;"
      >
        Get My CV
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="w-4 h-4 transition-transform duration-300" 
          :class="showCvMenu ? 'rotate-180' : ''"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <Transition name="dropdown">
        <div
          v-if="showCvMenu"
          class="absolute top-full right-0 mt-2 w-56 rounded-2xl shadow-2xl overflow-hidden"
          style="background-color: var(--dropdown-bg); border: 1px solid var(--border);"
        >
          <a
            href="https://youtu.be/9B6TlWfrtoc"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 px-4 py-3 transition-all duration-300"
            style="color: var(--text);"
            @click="showCvMenu = false"
          >
            <div class="flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-300 hover:scale-110" style="background-color: var(--accent);">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div>
              <div class="font-semibold text-sm">Watch CV Video</div>
              <div class="text-xs" style="color: var(--text-muted);">View video presentation</div>
            </div>
          </a>

          <div style="height: 1px; background-color: var(--border);"></div>

          <a
            href="/cv.pdf"
            download
            class="flex items-center gap-3 px-4 py-3 transition-all duration-300"
            style="color: var(--text);"
            @click="showCvMenu = false"
          >
            <div class="flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-300 hover:scale-110" style="background-color: var(--accent);">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <div class="font-semibold text-sm">Download CV PDF</div>
              <div class="text-xs" style="color: var(--text-muted);">Get PDF document</div>
            </div>
          </a>
        </div>
      </Transition>
      </div>
    </div>

    <main class="pb-28">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="journey">
        <JourneySection />
      </section>
      <section id="footer">
        <FooterSection />
      </section>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top right;
}

.dropdown-enter-from {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}

.dropdown-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}

.cv-dropdown a:hover,
.cv-dropdown button:hover {
  background-color: rgba(0, 46, 255, 0.05);
}

.cv-dropdown button {
  text-align: left;
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>


