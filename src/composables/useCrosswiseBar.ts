import { useResizeObserver } from '@vueuse/core'
import { merge } from 'lodash'

import * as echarts from 'echarts/core'
import { GridComponent, TooltipComponent } from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { onUnmounted, ref } from 'vue'

echarts.use([GridComponent, TooltipComponent, BarChart, CanvasRenderer])

export function useCrosswiseBar() {
  const bar = ref<echarts.ECharts>()

  const renderCrosswiseBar = (element: HTMLElement | null, data: { [key: string]: number }, options?: any) => {
    if (!element) return

    if (!bar.value) {
      useResizeObserver(element, () => {
        bar.value?.dispose()
        renderCrosswiseBar(element, data, options)
      })
    }
    bar.value = echarts.init(element)
    const option = {
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: '3%',
        left: '3%',
        right: '4%',
        bottom: '40',
        containLabel: true
      },
      yAxis: {
        type: 'category',
        data: Object.keys(data),
        axisLabel: { color: '#FF5F6D' }
      },
      xAxis: {
        type: 'value',
        axisLabel: { color: '#FF5F6D' }
      },
      series: [
        {
          data: Object.values(data),
          type: 'bar',
          barMaxWidth: 20,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: '#FF5F6D' },
                { offset: 1, color: '#FFC371' }
              ]
            },
            borderRadius: [5, 5, 0, 0]
          }
        }
      ]
    }
    bar.value.setOption(merge(option, options))
  }

  onUnmounted(() => {
    bar.value?.dispose()
  })

  return {
    bar,
    renderCrosswiseBar
  }
}
