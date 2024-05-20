<script setup>
import { ref, onMounted, watch } from 'vue'
import apexchart from 'vue3-apexcharts'
import apiData from '../utils/data.ts'

const result = ref(null)
const filteredSeries = ref([])
const apexcharts = ref(null)

const props = defineProps({
  selected: {
    type: Number,
    default: 1
  },
  url: {
    type: String,
    default: ''
  }
})

const chartOptions = ref({
  chart: {
    type: 'area',
    height: 350,
    toolbar: {
      show: false
    }
  },
  legend: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#05AAE6'],
  xaxis: {
    categories: []
  },
  noData: {
    text: 'Sem dados para esse filtro!'
  }
})

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

const filterDataByPeriod = (data, period, url) => {
  const latestDate = findLatestDate(data)
  const endDate = latestDate.toISOString().split('T')[0]

  const startDate = new Date(latestDate.getTime() - period * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0]

  if (url == '')
    return data.filter((item) => item.dateAccessed >= startDate && item.dateAccessed <= endDate)
  else
    return data.filter(
      (item) => item.dateAccessed >= startDate && item.dateAccessed <= endDate && item.url === url
    )
}

const findLatestDate = (data) => {
  let latestDate = null

  data.forEach((item) => {
    const currentDate = new Date(item.dateAccessed)
    if (currentDate > latestDate) {
      latestDate = currentDate
    }
  })

  return latestDate
}

const getMonthName = (month) => {
  const monthsNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
  return monthsNames[month - 1]
}

const groupByMonth = (data) => {
  const groupedData = {}
  data.forEach((item) => {
    const month = item.dateAccessed.split('-')[1]
    groupedData[month] = groupedData[month] || []
    groupedData[month].push(item)
  })
  return groupedData
}

const computeSeriesAndCategories = (data) => {
  const groupedData = groupByMonth(data)
  const series = Object.keys(groupedData)
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map((month) => ({
      name: getMonthName(month),
      data: groupedData[month].map((item) => item.timeSpent)
    }))
  let months = series.map((entry) => entry.name)
  return { series, months }
}

const onMountedHandler = async () => {
  try {
    result.value = apiData
    const filteredData = filterDataByPeriod(result.value, props.selected, props.url)
    let { series, months } = computeSeriesAndCategories(filteredData)
    const soma = series.map((entry) => entry.data.reduce((acc, curr) => acc + curr, 0))
    const sums = soma.map((value) => value / soma.length)
    const resultado = months.map((mes, index) => ({ x: mes, y: sums[index] }))
    chartOptions.value.tooltip = {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return (
          '<div class="p-2 text-xs shadow-xl flex flex-col gap-1">' +
          '<span class="font-semibold"> Tempo médio de acesso: ' +
          formatSeconds(series[seriesIndex][dataPointIndex]) +
          '</span>' +
          '</div>'
        )
      }
    }
    chartOptions.value.yaxis = {
      labels: {
        formatter: function (value) {
          return formatSeconds(value)
        }
      }
    }
    if (sums.length == 1) {
      filteredSeries.value = [
        { name: 'Tempo de acesso', data: [sums[0], ...sums, sums[sums.length - 1]] }
      ]
      chartOptions.value.xaxis.categories = ['', months[0], '']
    } else {
      filteredSeries.value = [{ data: resultado }]
      chartOptions.value.xaxis.categories = months
    }
  } catch (error) {
    console.error(error)
  }
}

const watchHandlerSelected = (newValue) => {
  if (result.value) {
    const filteredData = filterDataByPeriod(result.value, newValue[0], newValue[1])
    let { series, months } = computeSeriesAndCategories(filteredData)
    const soma = series.map((entry) => entry.data.reduce((acc, curr) => acc + curr, 0))
    const sums = soma.map((value) => value / soma.length)
    const resultado = months.map((mes, index) => ({ x: mes, y: sums[index] }))
    chartOptions.value.tooltip = {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return (
          '<div class="p-2 text-xs shadow-xl flex flex-col gap-1">' +
          '<span class="font-semibold"> Tempo médio de acesso: ' +
          formatSeconds(series[seriesIndex][dataPointIndex]) +
          '</span>' +
          '</div>'
        )
      }
    }
    chartOptions.value.yaxis = {
      labels: {
        formatter: function (value) {
          return formatSeconds(value)
        }
      }
    }
    if (newValue[0] == 1 || newValue[0] == 7) {
      filteredSeries.value = [
        { name: 'Tempo de acesso', data: [sums[0], ...sums, sums[sums.length - 1]] }
      ]
      apexcharts.value.updateOptions({
        xaxis: {
          categories: ['', months[0], '']
        }
      })
    } else {
      filteredSeries.value = [{ data: resultado }]
    }
  }
}

onMounted(onMountedHandler)
watch(() => [props.selected, props.url], watchHandlerSelected)
</script>

<template>
  <div>
    <apexchart
      ref="apexcharts"
      :options="chartOptions"
      :series="filteredSeries"
      type="area"
      height="350"
    />
  </div>
</template>
