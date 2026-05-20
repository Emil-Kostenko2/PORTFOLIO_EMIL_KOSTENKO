<template>
  <section class="w-full flex justify-center items-center py-16 px-6 md:px-8">
    <div class="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center gap-10">
      
      <div class="flex-1 flex flex-col items-start text-left gap-4">
        <h1 class="font-display text-5xl md:text-7xl lg:text-8xl leading-none uppercase">
          <span style="color: var(--text); display: block;">CREATIVE</span>
          <span style="color: var(--accent); display: block;">DESIGNER</span>
          <span style="color: var(--text); display: block;">&amp; DEVELOPER</span>
        </h1>

        <p class="max-w-md text-base leading-relaxed mt-2" style="color: var(--text-muted);">
          {{ heroData.description }}
        </p>

        <div class="flex flex-wrap gap-3 mt-6">
          <button
            @click="scrollToSection('#projects')"
            class="px-6 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-80 cursor-pointer"
            style="background-color: var(--text); color: var(--bg);"
          >
            {{ heroData.buttonWorkText }}
          </button>
          <button
            @click="scrollToSection('#footer')"
            class="px-6 py-3 rounded-full text-sm font-semibold border transition-opacity hover:opacity-70 cursor-pointer"
            style="border-color: var(--border); color: var(--text);"
          >
            {{ heroData.buttonContactText }}
          </button>
        </div>
      </div>

      <div class="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden"
           style="background-color: var(--card-bg);">
        <img 
          src="/profile.jpg" 
          alt="Emil Kostenko" 
          class="w-full h-full object-cover"
          style="object-position: 50% 5%;"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '../data.js';

const heroData = portfolioData.hero;

function scrollToSection(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
</script>

