import { useResizeObserver } from '@vueuse/core'
import { merge } from 'lodash'

import * as echarts from 'echarts/core'
import { GridComponent, TooltipComponent } from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { onUnmounted, ref } from 'vue'

echarts.use([GridComponent, TooltipComponent, BarChart, CanvasRenderer])

export function useBar() {
  const bar = ref<echarts.ECharts>()

  const renderBar = (element: HTMLElement | null, data: { [key: string]: number }, options?: any) => {
    if (!element) return

    if (!bar.value) {
      useResizeObserver(element, () => {
        bar.value?.dispose()
        renderBar(element, data, options)
      })
    }

    bar.value = echarts.init(element)
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
          type: 'bar',
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: '#FFC371' },
                { offset: 1, color: '#FF5F6D' }
              ]
            },
            borderRadius: [5, 5, 0, 0] // 可选：圆角效果
          }
        }
      ]
    }
    bar.value.setOption(merge(defaultOption, options))
  }

  onUnmounted(() => {
    bar.value?.dispose()
  })

  return {
    bar,
    renderBar
  }
}
