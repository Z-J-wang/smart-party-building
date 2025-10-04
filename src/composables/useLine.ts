import { useResizeObserver } from '@vueuse/core'

import * as echarts from 'echarts/core'
import { GridComponent, TooltipComponent } from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { onUnmounted, ref } from 'vue'
import { UniversalTransition } from 'echarts/features'
import { merge } from 'lodash'

echarts.use([GridComponent, TooltipComponent, LineChart, CanvasRenderer, UniversalTransition])

export function useLine() {
  const line = ref<echarts.ECharts>()
  const renderLine = (element: HTMLElement | null, data: { [key: string]: number }, options?: any) => {
    if (!element) return

    if (!line.value) {
      useResizeObserver(element, () => {
        line.value?.dispose()
        renderLine(element, data, options)
      })
    }

    line.value = echarts.init(element)
    const defaultOption = {
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: Object.keys(data),
        axisLabel: { color: '#FF5F6D' }
      },
      yAxis: {
        type: 'value',
        axisLabel: { color: '#FF5F6D' }
      },
      series: [
        {
          data: Object.values(data),
          type: 'line',
          symbol: 'none',
          smooth: true,
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: '#FFC371' },
                { offset: 1, color: '#00000000' }
              ]
            }
          },
          lineStyle: {
            color: '#FFC371'
          }
        }
      ]
    }
    line.value.setOption(merge(defaultOption, options))
  }

  onUnmounted(() => {
    line.value?.dispose()
  })

  return {
    line,
    renderLine
  }
}
