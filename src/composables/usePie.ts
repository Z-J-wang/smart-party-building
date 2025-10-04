import { onUnmounted, ref } from 'vue'

import * as echarts from 'echarts/core'
import { TooltipComponent, LegendComponent } from 'echarts/components'
import { PieChart } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([TooltipComponent, LegendComponent, PieChart, CanvasRenderer, LabelLayout])

export function usePie() {
  const chart = ref<echarts.ECharts>()

  const renderPie = (element: HTMLElement | null, data: { [key: string]: number }) => {
    if (!element) return
    chart.value = echarts.init(element)
    const option = {
      color: ['#C94337', '#EA7A2E', '#F0A842', '#F7D397', '#FBF6F0'],
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        right: 10,
        top: 20,
        textStyle: { color: '#ffffff' }
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          padAngle: 2,
          itemStyle: { borderRadius: 5 },
          label: { show: false, position: 'center' },
          emphasis: {
            label: { show: true, fontSize: 30, fontWeight: 'bold' }
          },
          labelLine: {
            show: false
          },
          data: Object.keys(data).map((key) => ({ value: data[key], name: key }))
        }
      ]
    }
    chart.value.setOption(option)
  }

  onUnmounted(() => {
    chart.value?.dispose()
  })

  return {
    chart,
    renderPie
  }
}
