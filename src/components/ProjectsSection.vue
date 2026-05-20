<template>
  <section class="w-full py-20 px-6 md:px-8">
    <div class="max-w-7xl mx-auto">

      <div class="flex flex-col items-center mb-12">
        <h2 class="font-display text-6xl md:text-8xl uppercase" style="color: var(--text);">
          PROJECTS
        </h2>
        <span class="text-xs tracking-widest mt-3" style="color: var(--text-muted);">
          CLICK A FOLDER TO OPEN
        </span>
      </div>

      <div class="flex flex-col md:grid md:grid-cols-3 gap-4 mb-4">
        <template v-for="cat in categories" :key="cat.key">
          <button
            @click="toggleCategory(cat.key)"
            class="relative flex flex-col justify-between p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer overflow-hidden min-h-40"
            :style="activeCategory === cat.key
              ? 'background-color: var(--accent); border-color: var(--accent); color: #fff;'
              : 'background-color: var(--card-bg); border-color: var(--border); color: var(--text);'"
          >
            <div
              v-if="cat.coverImage"
              class="absolute inset-0 rounded-2xl bg-cover bg-center opacity-20"
              :style="`background-image: url('${cat.coverImage}')`"
            />

            <div class="w-12 h-12 mb-10 relative flex items-center justify-center">
              <svg v-if="cat.key === 'web'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m17 7.83l1.697 1.526c1.542 1.389 2.313 2.083 2.313 2.974c0 .89-.771 1.585-2.314 2.973L17 16.83M13.987 5L12 12.415l-1.987 7.415M7 7.83L5.304 9.356C3.76 10.745 2.99 11.44 2.99 12.33s.771 1.585 2.314 2.973L7 16.83" />
              </svg>
              <svg v-if="cat.key === 'graphics'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="14" cy="7" r=".5"/>
                <circle cx="9" cy="8" r=".5"/>
                <circle cx="7" cy="13" r=".5"/>
                <path d="M12 22a10 10 0 1 1 10-10q0 4-5 4t-4 3t-1 3"/>
              </svg>
              <svg v-if="cat.key === 'photography'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15 8v8H5V8zm1-2H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4V7a1 1 0 0 0-1-1"/>
              </svg>
            </div>

            <div class="flex items-end justify-between relative">
              <span class="font-display text-xl uppercase tracking-tight">{{ cat.label }}</span>
              <span
                class="text-xs font-semibold tracking-widest"
                :style="activeCategory === cat.key ? 'color: rgba(255,255,255,0.7);' : 'color: var(--text-muted);'"
              >
                {{ portfolioData.projects[cat.key].length }} projects
              </span>
            </div>
          </button>

          <Transition name="expand">
            <div
              v-if="activeCategory === cat.key"
              class="rounded-2xl overflow-hidden md:col-span-3"
              style="border: 1px solid var(--border);"
            >
              <div
                class="flex items-center justify-between px-8 py-5 border-b"
                style="border-color: var(--border);"
              >
                <h3 class="font-display text-lg uppercase tracking-tight" style="color: var(--accent);">
                  / {{ activeCategory?.toUpperCase() }}
                </h3>
                <button
                  @click="activeCategory = null"
                  class="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-60 cursor-pointer"
                  style="color: var(--text-muted);"
                >
                  ← CLOSE
                </button>
              </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style="background-color: var(--border);">
            <TransitionGroup name="card" appear>
              <div
                v-for="(project, index) in activeProjects"
                :key="project.id"
                class="project-card p-6 flex flex-col gap-3"
                :style="`background-color: var(--bg); transition-delay: ${index * 60}ms;`"
              >
                <div
                  v-if="project.media && project.media.length > 0"
                  class="relative w-full rounded-xl overflow-hidden cursor-pointer group mb-1"
                  style="aspect-ratio: 16/9; background-color: var(--card-bg);"
                  @click="openLightbox(project.media, 0)"
                >
                  <video
                    v-if="project.media[0].type === 'video'"
                    :src="project.media[0].src"
                    :poster="project.media[0].poster"
                    class="w-full h-full object-cover"
                    muted
                    preload="none"
                  />
                  <img
                    v-else
                    :src="project.media[0].src"
                    :alt="project.media[0].alt || project.title"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       style="background-color: rgba(0,18,77,0.5);">
                    <span class="text-white text-2xl">⤢</span>
                  </div>
                  <span
                    v-if="project.media.length > 1"
                    class="absolute bottom-2 right-2 text-xs font-semibold px-2 py-1 rounded-full"
                    style="background-color: rgba(0,18,77,0.7); color: #fff;"
                  >
                    +{{ project.media.length - 1 }}
                  </span>
                </div>

                <div
                  v-else
                  class="w-full rounded-xl flex items-center justify-center text-xs"
                  style="aspect-ratio: 16/9; background-color: var(--card-bg); color: var(--text-muted);"
                >
                  No media yet
                </div>

                <div>
                  <h3 class="font-display text-base uppercase leading-tight" style="color: var(--text);">
                    {{ project.title }}
                  </h3>
                  <span class="text-xs font-semibold tracking-widest mt-1 block" style="color: var(--accent);">
                    {{ project.date }}
                  </span>
                </div>

                <p class="text-xs" style="color: var(--text-muted);">
                  Team-mates · {{ project.team }}
                </p>

                <p class="text-sm leading-relaxed flex-1" style="color: var(--text);">
                  {{ project.description }}
                </p>

                <div class="flex flex-col gap-2 mt-auto pt-4" style="border-top: 1px solid var(--border);">
                  <span class="text-xs font-semibold tracking-widest uppercase" style="color: var(--text-muted);">
                    TOOLS
                  </span>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tool in project.tools"
                      :key="tool"
                      class="px-3 py-1 rounded-full text-xs border"
                      style="border-color: var(--border); color: var(--text);"
                    >
                      {{ tool }}
                    </span>
                  </div>
                </div>

                <a
                  v-if="project.link && project.link !== '#'"
                  :href="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xs font-semibold tracking-widest uppercase mt-2 hover:underline"
                  style="color: var(--accent);"
                >
                  VIEW PROJECT →
                </a>
              </div>
            </TransitionGroup>
              </div>
            </div>
          </Transition>
        </template>
      </div>

      <Teleport to="body">
        <Transition name="lightbox">
          <div
            v-if="lightbox.open"
            class="fixed inset-0 z-50 flex items-center justify-center p-4"
            style="background-color: rgba(0,18,77,0.92); backdrop-filter: blur(8px);"
            @click.self="closeLightbox"
          >
            <button
              @click="closeLightbox"
              class="absolute top-5 right-6 text-white text-3xl leading-none cursor-pointer hover:opacity-70 transition-opacity"
            >
              ×
            </button>

            <div class="relative max-w-5xl w-full flex flex-col items-center gap-4">
              <div class="w-full rounded-2xl overflow-hidden" style="max-height: 80vh;">
                <video
                  v-if="currentMedia.type === 'video'"
                  :src="currentMedia.src"
                  :poster="currentMedia.poster"
                  controls
                  autoplay
                  class="w-full h-full object-contain"
                  style="max-height: 80vh;"
                />
                <img
                  v-else
                  :src="currentMedia.src"
                  :alt="currentMedia.alt"
                  class="w-full h-full object-contain"
                  style="max-height: 80vh;"
                />
              </div>

              <div v-if="lightbox.items.length > 1" class="flex items-center gap-6">
                <button
                  @click="lightbox.index = (lightbox.index - 1 + lightbox.items.length) % lightbox.items.length"
                >←</button>
                <span class="text-white/60 text-sm">
                  {{ lightbox.index + 1 }} / {{ lightbox.items.length }}
                </span>
                <button
                  @click="lightbox.index = (lightbox.index + 1) % lightbox.items.length"
                  class="text-white text-2xl px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition cursor-pointer"
                >→</button>
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { portfolioData } from '../data.js';

const categories = Object.entries(portfolioData.projectCategories).map(([key, val]) => ({
  key,
  ...val,
}));

const activeCategory = ref(null);

function toggleCategory(key) {
  activeCategory.value = activeCategory.value === key ? null : key;
}

const activeProjects = computed(() =>
  activeCategory.value ? portfolioData.projects[activeCategory.value] : []
);

const lightbox = ref({ open: false, items: [], index: 0 });

const currentMedia = computed(() => lightbox.value.items[lightbox.value.index] ?? {});

function openLightbox(items, index) {
  lightbox.value = { open: true, items, index };
}

function closeLightbox() {
  lightbox.value.open = false;
}

function onKeydown(e) {
  if (!lightbox.value.open) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') lightbox.value.index = (lightbox.value.index + 1) % lightbox.value.items.length;
  if (e.key === 'ArrowLeft')  lightbox.value.index = (lightbox.value.index - 1 + lightbox.value.items.length) % lightbox.value.items.length;
}

onMounted(() => window.addEventListener('keydown', onKeydown));
onUnmounted(() => window.removeEventListener('keydown', onKeydown));
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-8px);
}
.expand-enter-to,
.expand-leave-from {
  max-height: 2000px;
  opacity: 1;
  transform: translateY(0);
}

.card-enter-active {
  transition: all 0.35s ease;
}
.card-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.card-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.25s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
