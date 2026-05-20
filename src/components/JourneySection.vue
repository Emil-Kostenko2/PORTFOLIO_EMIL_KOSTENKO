<template>
  <section class="w-full py-20 px-6 md:px-8">
    <div class="max-w-7xl mx-auto">

      <h2 class="font-display text-6xl md:text-8xl uppercase text-center mb-16" style="color: var(--text);">
        MY JOURNEY
      </h2>

      <div class="relative max-w-4xl mx-auto">
        
        <div 
          class="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block"
          style="background-color: var(--border);"
        />

        <div class="space-y-16">
          <div
            v-for="(item, index) in portfolioData.journey"
            :key="item.id"
            class="timeline-item relative flex flex-col md:flex-row items-start md:items-center gap-8"
            :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''"
          >
            
            <div class="flex-1 w-full md:w-auto">
              <div 
                class="p-6 rounded-2xl border transition-all duration-500 hover:shadow-lg"
                style="background-color: var(--bg); border-color: var(--border);"
                :class="index % 2 === 0 ? 'md:text-right' : 'md:text-left'"
              >
                <span class="text-xs font-semibold tracking-widest uppercase block mb-2" style="color: var(--accent);">
                  {{ item.year }}
                </span>

                <h3 class="font-display text-xl md:text-2xl uppercase leading-tight mb-2" style="color: var(--text);">
                  {{ item.title }}
                </h3>

                <p class="text-sm font-semibold mb-3" style="color: var(--text-muted);">
                  {{ item.institution }}
                </p>

                <p class="text-sm leading-relaxed" style="color: var(--text);">
                  {{ item.description }}
                </p>
              </div>
            </div>

            <div class="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
              <div 
                class="w-4 h-4 rounded-full border-4 transition-all duration-300"
                style="background-color: var(--accent); border-color: var(--bg);"
              />
            </div>

            <div class="flex-1 hidden md:block" />

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '../data.js';
</script>

<style scoped>
.timeline-item {
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

.timeline-item:nth-child(1) { animation-delay: 0.1s; }
.timeline-item:nth-child(2) { animation-delay: 0.2s; }
.timeline-item:nth-child(3) { animation-delay: 0.3s; }
.timeline-item:nth-child(4) { animation-delay: 0.4s; }
.timeline-item:nth-child(5) { animation-delay: 0.5s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
