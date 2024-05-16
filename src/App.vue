<script setup>
import Chart from './components/Chart.vue'
import { ref } from 'vue'
import apiData from './utils/data.ts'

const selected = ref(1)
const activeClass = 'bg-blue-100 text-blue-400 rounded-md px-2 py-1 cursor-pointer font-semibold'
const inactiveClass = 'bg-gray-100 text-gray-400 rounded-md px-2 py-1 cursor-pointer font-semibold'

const formatSeconds = (seconds) => {
  if (seconds < 60) {
    return seconds + ' segundo' + (seconds !== 1 ? 's' : '')
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60)
    return minutes + ' minuto' + (minutes !== 1 ? 's' : '')
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600)
    return hours + ' hora' + (hours !== 1 ? 's' : '')
  } else if (seconds < 2592000) {
    const days = Math.floor(seconds / 86400)
    return days + ' dia' + (days !== 1 ? 's' : '')
  } else {
    const months = Math.floor(seconds / 2592000)
    return months + ' mês' + (months !== 1 ? 'es' : '')
  }
}

const selectPeriod = (period) => {
  selected.value = period
}

const calcularMediaAcessoPorSite = (dados) => {
  const somaTempoPorSite = {}
  const numAcessosPorSite = {}

  dados.forEach((item) => {
    const { url, timeSpent } = item
    if (!somaTempoPorSite[url]) {
      somaTempoPorSite[url] = 0
      numAcessosPorSite[url] = 0
    }
    somaTempoPorSite[url] += timeSpent
    numAcessosPorSite[url]++
  })

  const mediaAcessoPorSite = {}

  Object.keys(somaTempoPorSite).forEach((url) => {
    mediaAcessoPorSite[url] = somaTempoPorSite[url] / numAcessosPorSite[url]
  })

  const arrayMediaPorSite = Object.keys(mediaAcessoPorSite).map((url) => ({
    site: url,
    mediaTempoAcesso: mediaAcessoPorSite[url]
  }))

  return arrayMediaPorSite
}

const mediaAcessoPorSite = calcularMediaAcessoPorSite(apiData)
</script>

<template>
  <div class="h-screen max-w-2xl mx-auto flex items-center justify-center my-24">
    <div class="border border-zinc-200 rounded-md w-full px-4 py-8 text-gray-900">
      <div class="flex items-center justify-between">
        <strong class="text-gray-500 text-lg">Usuários</strong>
        <div class="flex items-center gap-2 text-sm">
          <div :class="selected == 1 ? activeClass : inactiveClass" @click="selectPeriod(1)">
            <span>1d</span>
          </div>
          <div :class="selected == 7 ? activeClass : inactiveClass" @click="selectPeriod(7)">
            <span>7d</span>
          </div>
          <div :class="selected == 30 ? activeClass : inactiveClass" @click="selectPeriod(30)">
            <span>30d</span>
          </div>
          <div :class="selected == 365 ? activeClass : inactiveClass" @click="selectPeriod(365)">
            <span>1a</span>
          </div>
          <select
            class="border border-zinc-200 rounded-md px-8 py-1 font-semibold text-gray-500 mx-1"
          >
            <option value="">Plano</option>
          </select>
          <div class="flex items-center gap-2 text-gray-500 cursor-pointer">
            <span class="font-semibold">Exportar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-file-arrow-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M9 15h6" />
              <path d="M12.5 17.5l2.5 -2.5l-2.5 -2.5" />
            </svg>
          </div>
        </div>
      </div>
      <span class="text-gray-500 text-sm">Veja a evolução de novos usuários</span>

      <div class="my-4">
        <Chart :selected="selected" />
      </div>

      <div class="flex flex-col mb-4">
        <strong class="text-gray-500 text-lg">Acesso por websites</strong>
        <span class="text-gray-500 text-sm">Veja a média de acesso por website</span>
      </div>

      <div v-for="(site, index) in mediaAcessoPorSite" :key="index" class="grid grid-cols-2 p-2">
        <p class="px-2 py-1 rounded-md bg-zinc-100 text-zinc-500 font-semibold text-sm w-fit">
          {{ site.site }}
        </p>
        <p class="text-sm">
          Média de tempo de acesso: <strong>{{ formatSeconds(site.mediaTempoAcesso) }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>
