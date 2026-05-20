<template>
  <footer id="footer" class="w-full py-16 px-6 md:px-8 border-t" style="border-color: var(--border);">
    <div class="max-w-7xl mx-auto">

      <h2 class="font-display text-5xl md:text-7xl uppercase mb-12 text-center md:text-left" style="color: var(--text);">
        LINKS
      </h2>

      <div class="flex flex-col gap-12 mb-12">
        
        <div>
          <div class="flex flex-wrap gap-3">
            <a
              v-for="social in portfolioData.socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
              style="background-color: var(--accent); color: #fff;"
              :title="social.name"
            >
              <svg v-if="social.name === 'LinkedIn'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-2 -2 24 24" fill="currentColor">
                <path d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91c-1.182 0-1.886.796-2.195 1.565c-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126c2.815 0 4.926 1.84 4.926 5.792M2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254z"/>
              </svg>

              <svg v-if="social.name === 'Instagram'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/>
              </svg>

              <svg v-if="social.name === 'Facebook'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/>
              </svg>
            </a>
          </div>
        </div>

        <div style="height: 1px; background-color: var(--border); margin: 1rem 0;"></div>

        <div class="flex flex-col md:flex-row gap-6 md:gap-12">
          <a
            :href="`mailto:${portfolioData.contact.email}`"
            class="flex items-center gap-3 group cursor-pointer"
            style="color: var(--text);"
          >
            <div class="w-14 h-14 flex items-center justify-center rounded-full transition-all" style="background-color: var(--accent); color: #fff;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/>
              </svg>
            </div>
            <span class="text-sm font-medium group-hover:underline">{{ portfolioData.contact.email }}</span>
          </a>

          <a
            :href="`tel:${portfolioData.contact.phone}`"
            class="flex items-center gap-3 group cursor-pointer"
            style="color: var(--text);"
          >
            <div class="w-14 h-14 flex items-center justify-center rounded-full transition-all" style="background-color: var(--accent); color: #fff;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/>
              </svg>
            </div>
            <span class="text-sm font-medium group-hover:underline">{{ portfolioData.contact.phone }}</span>
          </a>
        </div>

      </div>

      <div class="text-center pt-8 border-t" style="border-color: var(--border);">
        <p class="text-sm" style="color: var(--text-muted);">
          © {{ new Date().getFullYear() }} — Designed & built with care.
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { portfolioData } from '../data.js';
</script>
