<script setup lang="ts">
import { useMembersStore } from '@/stores/members'
import { CountTo } from 'vue3-count-to'
import { usePie } from '@/composables/usePie'
import { nextTick, onMounted, ref } from 'vue'
import { useCrosswiseBar } from '@/composables/useCrosswiseBar'
import { useLine } from '@/composables/useLine'

interface TabDate {
  label: string
  name: string
  data: any
}

const {
  members,
  ageData,
  genderData,
  partyAgeData,
  partyMemberStatusData,
  educationData,
  memberGrowthData,
  ethnicityData
} = useMembersStore()

const { renderPie } = usePie()
const { renderCrosswiseBar } = useCrosswiseBar()
const { renderLine } = useLine()

const tabs: TabDate[] = [
  {
    label: '年龄分布',
    name: 'age',
    data: ageData
  },
  {
    label: '学历分布',
    name: 'education',
    data: educationData
  },
  {
    label: '党龄分布',
    name: 'partyAge',
    data: partyAgeData
  },
  {
    label: '性别分布',
    name: 'gender',
    data: genderData
  },
  {
    label: '民族分布',
    name: 'ethnicity',
    data: ethnicityData
  }
]
const activeTab = ref(tabs[0].name)

const handlerTabChange = (tabName: string) => {
  const tab = tabs.find((tab) => tab.name === tabName)
  if (tab) {
    nextTick(() => {
      renderCrosswiseBar(document.querySelector('#' + tab.name), tab.data)
    })
  }
}

onMounted(() => {
  console.log(memberGrowthData)

  renderPie(document.querySelector('#PartyMemberPie'), partyMemberStatusData)
  renderCrosswiseBar(document.querySelector('#' + tabs[0].name), tabs[0].data)
  renderLine(document.querySelector('#JoinInChart'), memberGrowthData, {
    grid: {
      top: '10%',
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    }
  })
})
</script>

<template>
  <div
    class="w-screen h-screen overflow-hidden text-[#ffd8b3]"
    style="background: radial-gradient(120vw 120vh at 50% 0%, #ab2b15 0%, #6d0d05 55%, #4b0300 100%)"
  >
    <!-- 顶部标题条 -->
    <header class="w-screen h-[10vh] box-border grid grid-cols-[24vw,1fr,24vw] items-center px-[2vw] py-[1.2vh]">
      <div
        class="flex items-center gap-[1vw] font-extrabold tracking-wider text-gold2"
        style="text-shadow: 0 2px 0 #5b1a08, 0 0 16px rgb(255 160 72 / 60%)"
      >
        <div
          class="min-w-7 min-h-7"
          style="
            border-radius: 12%;
            width: 3vw;
            height: 3vw;
            background: conic-gradient(from 0deg, #f5c777, #ffecbe, #f0b14e, #f5c777);
            box-shadow: 0 0 18px rgb(255 168 84 / 45%), 0 0 40px rgb(255 120 48 / 20%);
          "
        ></div>
        <div>智慧党建</div>
      </div>
      <div class="flex justify-center gap-[2vw]">
        <div
          class="px-[2vw] py-[1vh] rounded-[1.6vh] border border-[rgba(255,186,102,.45)] shadow-goldglow text-center tracking-wider text-[2.2vh] font-extrabold text-gold"
          style="background: linear-gradient(180deg, rgb(255 210 144 / 35%), rgb(255 190 120 / 12%))"
        >
          党支部数据可视化大屏
        </div>
      </div>
    </header>

    <!-- 主体三列布局 -->
    <main
      class="w-screen h-[91vh] box-border grid px-[1.2vw] pb-[1.2vh] gap-x-[1.2vw] gap-y-[1.2vh]"
      style="grid-template-columns: 28vw 1fr 28vw; grid-template-rows: 1fr"
    >
      <!-- 左列 -->
      <section
        class="grid content-start gap-[1.2vh]"
        style="grid-column: 1; grid-row: 1; grid-template-rows: 22vh 34vh 1fr"
      >
        <!-- 党员概览 -->
        <div
          class="relative rounded-[1.2vh] p-[1.2vh_1.2vw] overflow-hidden border border-[rgba(255,186,102,.35)]"
          style="
            background: linear-gradient(180deg, rgb(120 22 7 / 55%), rgb(60 8 2 / 55%));
            box-shadow: inset 0 0 28px rgb(0 0 0 / 35%), 0 0 24px rgb(255 150 80 / 18%);
          "
        >
          <div class="flex items-center gap-[0.6vw] mb-[1vh]">
            <i
              class="w-[1.4vh] h-[1.4vh] rounded-[0.4vh] shadow-goldglow"
              style="background: linear-gradient(180deg, #ffdeac, #f0b15a)"
            ></i
            ><span class="text-gold font-bold text-[1.8vh]">党员总量</span>
          </div>
          <div class="text-[#ffe7c8] text-center">
            <span class="text-[2.2vh]">党员总数（人）</span>
            <CountTo class="text-[2.6vh] font-black" :endVal="members.length" />
          </div>
          <div class="flex justify-around items-center mt-4">
            <div class="text-center" v-for="status in Object.keys(partyMemberStatusData)" :key="status">
              <CountTo class="text-[2.2vh] font-bold text-[#ffe6c6]" :endVal="partyMemberStatusData[status]" />
              <div class="text-[1.4vh] opacity-90">{{ status }}</div>
            </div>
          </div>
          <div
            class="pointer-events-none absolute inset-0"
            style="background: radial-gradient(60vw 40vh at 50% -10%, rgb(255 212 150 / 18%), transparent 50%)"
          ></div>
        </div>

        <!-- 党组织构成（环图占位） -->
        <div
          class="relative rounded-[1.2vh] p-[1.2vh_1.2vw] overflow-hidden border border-[rgba(255,186,102,.35)] grid"
          style="
            background: linear-gradient(180deg, rgb(120 22 7 / 55%), rgb(60 8 2 / 55%));
            box-shadow: inset 0 0 28px rgb(0 0 0 / 35%), 0 0 24px rgb(255 150 80 / 18%);
          "
        >
          <div>
            <div class="flex items-center gap-[0.6vw] mb-[1vh]">
              <i
                class="w-[1.4vh] h-[1.4vh] rounded-[0.4vh] shadow-goldglow"
                style="background: linear-gradient(180deg, #ffdeac, #f0b15a)"
              ></i
              ><span class="text-gold font-bold text-[1.8vh]">党组织构成</span>
            </div>
            <div id="PartyMemberPie" class="h-full w-full"></div>
          </div>
          <div
            class="pointer-events-none absolute inset-0"
            style="background: radial-gradient(60vw 40vh at 50% -10%, rgb(255 212 150 / 18%), transparent 50%)"
          ></div>
        </div>

        <!-- 党员画像（条形占位） -->
        <div
          class="relative rounded-[1.2vh] p-[1.2vh_1.2vw] overflow-hidden border border-[rgba(255,186,102,.35)]"
          style="
            background: linear-gradient(180deg, rgb(120 22 7 / 55%), rgb(60 8 2 / 55%));
            box-shadow: inset 0 0 28px rgb(0 0 0 / 35%), 0 0 24px rgb(255 150 80 / 18%);
          "
        >
          <div class="flex items-center gap-[0.6vw] mb-[1vh]">
            <i
              class="w-[1.4vh] h-[1.4vh] rounded-[0.4vh] shadow-goldglow"
              style="background: linear-gradient(180deg, #ffdeac, #f0b15a)"
            ></i
            ><span class="text-gold font-bold text-[1.8vh]">党员画像</span>
          </div>
          <div class="w-full h-full">
            <el-tabs v-model="activeTab" class="w-full h-full" @tab-change="handlerTabChange">
              <el-tab-pane v-for="tab in tabs" :label="tab.label" :name="tab.name" :key="tab.name" keep-alive>
                <div :id="tab.name" class="w-full h-full"></div>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div
            class="pointer-events-none absolute inset-0"
            style="background: radial-gradient(60vw 40vh at 50% -10%, rgb(255 212 150 / 18%), transparent 50%)"
          ></div>
        </div>
      </section>

      <!-- 中央圆形舞台 -->
      <section
        class="relative grid place-items-center overflow-hidden rounded-[2vh] border border-[rgba(255,186,102,.35)]"
        style="
          grid-column: 2;
          grid-row: 1;
          background: radial-gradient(
            70vw 60vh at 50% 40%,
            rgb(60 8 2 / 65%),
            rgb(60 8 2 / 55%) 60%,
            rgb(30 2 0 / 60%) 100%
          );
          box-shadow: inset 0 0 80px rgb(0 0 0 / 60%), 0 0 32px rgb(255 150 80 / 18%);
        "
      >
        <!-- 圆形舞台层次 -->
        <div class="relative w-[58vh] h-[58vh] rounded-full grid place-items-center">
          <div
            class="absolute inset-0 rounded-full"
            style="background: radial-gradient(circle at 50% 55%, rgb(255 210 150 / 8%), transparent 60%)"
          ></div>
          <div
            class="w-[44vh] h-[44vh] rounded-full grid place-items-center border-2 border-[rgba(255,210,150,.35)] shadow-[0_0_40px_rgba(255,160,80,.3)]"
            style="
              background: radial-gradient(
                  circle at 50% 40%,
                  rgb(255 210 150 / 15%),
                  rgb(255 170 90 / 15%) 40%,
                  transparent 65%
                ),
                conic-gradient(from 0deg, rgb(255 190 120 / 35%), rgb(255 160 80 / 15%), rgb(255 190 120 / 35%));
            "
          >
            <div
              class="w-[30vh] h-[30vh] rounded-full grid place-items-center border-2 border-[rgba(255,210,150,.45)] bg-[#7a0f07]"
            >
              <div
                class="w-[18vh] h-[18vh] rounded-full grid place-items-center bg-[#c21e10] border border-[#ffd8b3] text-[#fff4e6] text-center font-black tracking-widest"
                style="text-shadow: 0 2px 0 #7a1307, 0 0 18px rgb(255 205 150 / 55%)"
              >
                <div>党徽舞台</div>
              </div>
            </div>
          </div>
          <!-- 外环刻度 -->
          <div
            class="absolute w-[52vh] h-[52vh] rounded-full pointer-events-none"
            style="background: conic-gradient(from 0deg, rgb(255 220 160 / 80%) 0% 1%, transparent 1% 10%)"
          ></div>
        </div>
        <!-- 三个扇区标题 -->
        <div class="absolute left-[8%] top-1/2 -translate-y-1/2 text-center">
          <div
            class="px-[1vw] py-[1vh] rounded-[1vh] text-[1.6vh] bg-[rgba(255,210,150,.15)] border border-[rgba(255,210,150,.35)]"
          >
            党员管理
          </div>
        </div>
        <div class="absolute right-[8%] top-1/2 -translate-y-1/2 text-center">
          <div
            class="px-[1vw] py-[1vh] rounded-[1vh] text-[1.6vh] bg-[rgba(255,210,150,.15)] border border-[rgba(255,210,150,.35)]"
          >
            党群服务
          </div>
        </div>
        <div class="absolute top-[10%] left-1/2 -translate-x-1/2 text-center">
          <div
            class="px-[1vw] py-[1vh] rounded-[1vh] text-[1.6vh] bg-[rgba(255,210,150,.15)] border border-[rgba(255,210,150,.35)]"
          >
            政策解读专栏
          </div>
        </div>
      </section>

      <!-- 右列 -->
      <section
        class="grid content-start gap-[1.2vh]"
        style="grid-column: 3; grid-row: 1; grid-template-rows: 30vh 26vh 1fr"
      >
        <!-- 党员增长情况（折线占位） -->
        <div
          class="relative rounded-[1.2vh] p-[1.2vh_1.2vw] overflow-hidden border border-[rgba(255,186,102,.35)]"
          style="
            background: linear-gradient(180deg, rgb(120 22 7 / 55%), rgb(60 8 2 / 55%));
            box-shadow: inset 0 0 28px rgb(0 0 0 / 35%), 0 0 24px rgb(255 150 80 / 18%);
          "
        >
          <div class="flex items-center gap-[0.6vw] mb-[1vh]">
            <i
              class="w-[1.4vh] h-[1.4vh] rounded-[0.4vh] shadow-goldglow"
              style="background: linear-gradient(180deg, #ffdeac, #f0b15a)"
            ></i
            ><span class="text-gold font-bold text-[1.8vh]">党员增长情况</span>
          </div>
          <div
            class="h-[22vh] grid place-items-center rounded-[1vh] text-[#ffddbb] opacity-90 border border-dashed border-[rgba(255,200,150,.35)]"
            style="background: linear-gradient(180deg, rgb(255 210 150 / 6%), rgb(255 210 150 / 2%))"
          >
            <div id="JoinInChart" class="w-full h-full"></div>
          </div>
          <div
            class="pointer-events-none absolute inset-0"
            style="background: radial-gradient(60vw 40vh at 50% -10%, rgb(255 212 150 / 18%), transparent 50%)"
          ></div>
        </div>

        <!-- 党费缴纳情况（柱状占位） -->
        <div
          class="relative rounded-[1.2vh] p-[1.2vh_1.2vw] overflow-hidden border border-[rgba(255,186,102,.35)]"
          style="
            background: linear-gradient(180deg, rgb(120 22 7 / 55%), rgb(60 8 2 / 55%));
            box-shadow: inset 0 0 28px rgb(0 0 0 / 35%), 0 0 24px rgb(255 150 80 / 18%);
          "
        >
          <div class="flex items-center gap-[0.6vw] mb-[1vh]">
            <i
              class="w-[1.4vh] h-[1.4vh] rounded-[0.4vh] shadow-goldglow"
              style="background: linear-gradient(180deg, #ffdeac, #f0b15a)"
            ></i
            ><span class="text-gold font-bold text-[1.8vh]">党费缴纳情况</span>
          </div>
          <div
            class="h-[18vh] grid place-items-center rounded-[1vh] text-[#ffddbb] opacity-90 border border-dashed border-[rgba(255,200,150,.35)]"
            style="background: linear-gradient(180deg, rgb(255 210 150 / 6%), rgb(255 210 150 / 2%))"
          >
            Bar Chart Placeholder
          </div>
          <div
            class="pointer-events-none absolute inset-0"
            style="background: radial-gradient(60vw 40vh at 50% -10%, rgb(255 212 150 / 18%), transparent 50%)"
          ></div>
        </div>

        <!-- 优秀党员TOP5（表格占位） -->
        <div
          class="relative rounded-[1.2vh] p-[1.2vh_1.2vw] overflow-hidden border border-[rgba(255,186,102,.35)]"
          style="
            background: linear-gradient(180deg, rgb(120 22 7 / 55%), rgb(60 8 2 / 55%));
            box-shadow: inset 0 0 28px rgb(0 0 0 / 35%), 0 0 24px rgb(255 150 80 / 18%);
          "
        >
          <div class="flex items-center gap-[0.6vw] mb-[1vh]">
            <i
              class="w-[1.4vh] h-[1.4vh] rounded-[0.4vh] shadow-goldglow"
              style="background: linear-gradient(180deg, #ffdeac, #f0b15a)"
            ></i
            ><span class="text-gold font-bold text-[1.8vh]">优秀党员TOP5</span>
          </div>
          <div class="h-[22vh] overflow-hidden rounded-[1vh] border border-[rgba(255,200,150,.35)]">
            <table class="w-full text-[1.4vh]">
              <thead class="bg-[rgba(255,210,150,.08)]">
                <tr class="text-left">
                  <th class="px-3 py-2">姓名</th>
                  <th class="px-3 py-2">职务</th>
                  <th class="px-3 py-2">入党时间</th>
                  <th class="px-3 py-2">积分</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd:bg-[rgba(255,210,150,.03)]">
                  <td class="px-3 py-2">王杰</td>
                  <td class="px-3 py-2">书记</td>
                  <td class="px-3 py-2">2014-09-01</td>
                  <td class="px-3 py-2">390</td>
                </tr>
                <tr class="odd:bg-[rgba(255,210,150,.03)]">
                  <td class="px-3 py-2">王艳</td>
                  <td class="px-3 py-2">组织委员</td>
                  <td class="px-3 py-2">2017-05-02</td>
                  <td class="px-3 py-2">365</td>
                </tr>
                <tr class="odd:bg-[rgba(255,210,150,.03)]">
                  <td class="px-3 py-2">赵敏</td>
                  <td class="px-3 py-2">宣传委员</td>
                  <td class="px-3 py-2">2018-08-16</td>
                  <td class="px-3 py-2">338</td>
                </tr>
                <tr class="odd:bg-[rgba(255,210,150,.03)]">
                  <td class="px-3 py-2">李强</td>
                  <td class="px-3 py-2">纪检委员</td>
                  <td class="px-3 py-2">2016-09-01</td>
                  <td class="px-3 py-2">320</td>
                </tr>
                <tr class="odd:bg-[rgba(255,210,150,.03)]">
                  <td class="px-3 py-2">周楠</td>
                  <td class="px-3 py-2">群众委员</td>
                  <td class="px-3 py-2">2019-04-03</td>
                  <td class="px-3 py-2">298</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="pointer-events-none absolute inset-0"
            style="background: radial-gradient(60vw 40vh at 50% -10%, rgb(255 212 150 / 18%), transparent 50%)"
          ></div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
@media (aspect-ratio <= 16/10) {
  main {
    grid-template-columns: 30vw 1fr 30vw !important;
  }
}

.el-tabs {
  --el-text-color-primary: white;

  .el-tab-pane {
    width: 100%;
    height: 100%;
  }
}
</style>
