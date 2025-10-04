<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useNav } from '../composables/useNav'
import { useMembersStore } from '@/stores/members'
import { useBar } from '@/composables/useBar'
import { useLine } from '@/composables/useLine'
import { onMounted } from 'vue'

const { members, ageData, memberData, genderData } = useMembersStore()
const { renderBar } = useBar()
const { renderLine } = useLine()

const { nav } = useNav()

onMounted(() => {
  renderBar(document.querySelector('#AgeChart'), ageData)
  renderLine(document.querySelector('#JoinInChart'), memberData)
})
</script>

<template>
  <div
    class="w-screen h-screen overflow-hidden text-[#ffd8b3]"
    style="background: radial-gradient(120vw 120vh at 50% 0%, #ab2b15 0%, #6d0d05 55%, #4b0300 100%)"
  >
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
      <nav class="flex justify-center gap-[2vw]">
        <RouterLink
          v-for="({ text, path }, i) in nav"
          :key="i"
          :to="{ path }"
          class="text-gold2 text-[1.7vh] px-[1.6vw] py-[1.2vh] rounded-[3vh] border border-[rgba(255,186,102,.35)]"
          style="background: linear-gradient(180deg, rgb(255 205 128 / 22%), rgb(255 205 128 / 6%))"
          >{{ text }}</RouterLink
        >
      </nav>
      <div class="text-right text-[1.6vh] text-[#ffd9b9] opacity-90">Never forget your mission</div>
    </header>

    <main
      class="w-screen h-[90vh] box-border grid px-[1.4vw] pt-[1.2vh] pb-[1.6vh] gap-x-[1.2vw] gap-y-[1.2vh]"
      style="grid-template-columns: 26vw 1fr 26vw; grid-template-rows: 52vh 36vh"
    >
      <!-- 左列上：党建大数据分析驾驶舱（简介） -->
      <section
        class="relative rounded-[1.2vh] p-[1.4vh_1.2vw] overflow-hidden border border-[rgba(255,186,102,.35)]"
        style="
          grid-column: 1;
          grid-row: 1;
          background: linear-gradient(180deg, rgb(120 22 7 / 55%), rgb(60 8 2 / 55%));
          box-shadow: inset 0 0 28px rgb(0 0 0 / 35%), 0 0 24px rgb(255 150 80 / 18%);
        "
      >
        <div class="flex items-center gap-[0.6vw] mb-[1.2vh]">
          <i
            class="w-[1.6vh] h-[1.6vh] rounded-[0.4vh] shadow-goldglow"
            style="background: linear-gradient(180deg, #ffdeac, #f0b15a)"
          ></i
          ><span class="text-gold font-bold text-[1.9vh]">党建大数据分析驾驶舱</span>
        </div>
        <div class="leading-[1.6] text-[1.6vh] text-[#ffe4c8] opacity-95">
          依托大数据分析平台，整合组织、队伍、活动、服务等多维度指标构建一体化展示；
          通过数据驱动提升组织战斗力，夯实基层治理基础，打造学习型、服务型党组织。
        </div>
        <div
          class="pointer-events-none absolute inset-0"
          style="background: radial-gradient(60vw 40vh at 50% -10%, rgb(255 212 150 / 18%), transparent 50%)"
        ></div>
      </section>

      <!-- 左列下：关键词 + 党员人数（上下两块） -->
      <section class="grid gap-[1.2vh]" style="grid-column: 1; grid-row: 2; grid-template-rows: 18vh 1fr">
        <div
          class="relative rounded-[1.2vh] p-[1.4vh_1.2vw] overflow-hidden border border-[rgba(255,186,102,.35)]"
          style="
            background: linear-gradient(180deg, rgb(120 22 7 / 55%), rgb(60 8 2 / 55%));
            box-shadow: inset 0 0 28px rgb(0 0 0 / 35%), 0 0 24px rgb(255 150 80 / 18%);
          "
        >
          <div class="flex items-center gap-[0.6vw] mb-[1.2vh]">
            <i
              class="w-[1.6vh] h-[1.6vh] rounded-[0.4vh] shadow-goldglow"
              style="background: linear-gradient(180deg, #ffdeac, #f0b15a)"
            ></i
            ><span class="text-gold font-bold text-[1.9vh]">党员关键词</span>
          </div>
          <div class="grid content-center justify-items-start gap-[0.6vh] h-full">
            <div class="text-[3vh] font-extrabold text-[#ffe0bf]">学习进取 坚定 服务人民</div>
            <div class="text-[1.6vh] text-[#ffd7b0] opacity-90">从严 治党 自强 作风 自信 自觉</div>
          </div>
          <div
            class="pointer-events-none absolute inset-0"
            style="background: radial-gradient(60vw 40vh at 50% -10%, rgb(255 212 150 / 18%), transparent 50%)"
          ></div>
        </div>
        <div
          class="relative rounded-[1.2vh] p-[1.4vh_1.2vw] overflow-hidden border border-[rgba(255,186,102,.35)]"
          style="
            background: linear-gradient(180deg, rgb(120 22 7 / 55%), rgb(60 8 2 / 55%));
            box-shadow: inset 0 0 28px rgb(0 0 0 / 35%), 0 0 24px rgb(255 150 80 / 18%);
          "
        >
          <div class="flex items-center gap-[0.6vw] mb-[1.2vh]">
            <i
              class="w-[1.6vh] h-[1.6vh] rounded-[0.4vh] shadow-goldglow"
              style="background: linear-gradient(180deg, #ffdeac, #f0b15a)"
            ></i
            ><span class="text-gold font-bold text-[1.9vh]">党员人数</span>
          </div>
          <div class="flex justify-center items-center gap-[1.2vw]">
            <div class="grid grid-cols-[5vh_1fr] items-center gap-[1vw]">
              <div
                class="rounded-full shadow-goldglow"
                style="width: 5vh; height: 5vh; background: radial-gradient(circle at 30% 30%, #ffe6c8, #f0b15a)"
              ></div>
              <div class="text-[3.2vh] font-extrabold text-[#ffe3c4]">{{ members.length }}</div>
            </div>
          </div>
          <div class="flex justify-around items-center gap-[1.2vw] mt-4">
            <div class="grid grid-cols-[5vh_1fr] items-center gap-[1vw]">
              <div
                class="rounded-full shadow-goldglow"
                style="width: 5vh; height: 5vh; background: radial-gradient(circle at 30% 30%, #ffe6c8, #f0b15a)"
              ></div>
              <div class="text-[3.2vh] font-extrabold text-[#ffe3c4]">{{ genderData['男'] }}</div>
            </div>
            <div class="grid grid-cols-[5vh_1fr] items-center gap-[1vw]">
              <div
                class="rounded-full shadow-goldglow"
                style="width: 5vh; height: 5vh; background: radial-gradient(circle at 30% 30%, #ffe6c8, #f0b15a)"
              ></div>
              <div class="text-[3.2vh] font-extrabold text-[#ffe3c4]">{{ genderData['女'] }}</div>
            </div>
          </div>
          <div
            class="pointer-events-none absolute inset-0"
            style="background: radial-gradient(60vw 40vh at 50% -10%, rgb(255 212 150 / 18%), transparent 50%)"
          ></div>
        </div>
      </section>

      <!-- 中央：建党100年宣传片（红旗横幅） -->
      <section
        class="relative rounded-[1.2vh] p-[1.4vh_1.2vw] overflow-hidden border border-[rgba(255,186,102,.35)] grid"
        style="
          grid-column: 2;
          grid-row: 1;
          background: linear-gradient(180deg, rgb(120 22 7 / 55%), rgb(60 8 2 / 55%));
          box-shadow: inset 0 0 28px rgb(0 0 0 / 35%), 0 0 24px rgb(255 150 80 / 18%);
        "
      >
        <div
          class="w-full h-full grid place-items-center rounded-[1.2vh] shadow-[inset_0_0_60px_rgba(0,0,0,.45),0_0_30px_rgba(255,150,80,.18)]"
          style="
            background: radial-gradient(120% 80% at 70% 30%, rgb(255 210 150 / 36%), transparent 60%),
              radial-gradient(120% 80% at 30% 70%, rgb(255 180 130 / 28%), transparent 60%),
              linear-gradient(135deg, #a31306 0%, #c21e10 40%, #8e0e05 60%, #6a0803 100%);
          "
        >
          <div class="text-center text-[#fff3e6]" style="text-shadow: 0 2px 0 #7a1307, 0 0 18px rgb(255 205 150 / 55%)">
            <div class="text-[3.6vh] font-black tracking-widest">不忘初心 牢记使命</div>
            <div class="text-[1.8vh] opacity-90 mt-[0.6vh] tracking-wide">
              Never forget your heart, never forget your mission
            </div>
          </div>
        </div>
        <div
          class="pointer-events-none absolute inset-0"
          style="background: radial-gradient(60vw 40vh at 50% -10%, rgb(255 212 150 / 18%), transparent 50%)"
        ></div>
      </section>

      <!-- 中央底部：两个图表占位（年龄分布 / 近一年党员人数） -->
      <section class="grid gap-[1.2vw]" style="grid-column: 2; grid-row: 2; grid-template-columns: 1fr 1fr">
        <div
          class="relative rounded-[1.2vh] p-[1.4vh_1.2vw] overflow-hidden border border-[rgba(255,186,102,.35)]"
          style="
            background: linear-gradient(180deg, rgb(120 22 7 / 55%), rgb(60 8 2 / 55%));
            box-shadow: inset 0 0 28px rgb(0 0 0 / 35%), 0 0 24px rgb(255 150 80 / 18%);
          "
        >
          <div class="flex items-center gap-[0.6vw] mb-[1.2vh]">
            <i
              class="w-[1.6vh] h-[1.6vh] rounded-[0.4vh] shadow-goldglow"
              style="background: linear-gradient(180deg, #ffdeac, #f0b15a)"
            ></i
            ><span class="text-gold font-bold text-[1.9vh]">党员年龄分布</span>
          </div>
          <div
            class="h-full grid place-items-center rounded-[1vh] text-[#ffddbb] opacity-90 border border-dashed border-[rgba(255,200,150,.35)]"
            style="background: linear-gradient(180deg, rgb(255 210 150 / 6%), rgb(255 210 150 / 2%))"
          >
            <div id="AgeChart" class="w-full h-full"></div>
          </div>
          <div
            class="pointer-events-none absolute inset-0"
            style="background: radial-gradient(60vw 40vh at 50% -10%, rgb(255 212 150 / 18%), transparent 50%)"
          ></div>
        </div>
        <div
          class="relative rounded-[1.2vh] p-[1.4vh_1.2vw] overflow-hidden border border-[rgba(255,186,102,.35)]"
          style="
            background: linear-gradient(180deg, rgb(120 22 7 / 55%), rgb(60 8 2 / 55%));
            box-shadow: inset 0 0 28px rgb(0 0 0 / 35%), 0 0 24px rgb(255 150 80 / 18%);
          "
        >
          <div class="flex items-center gap-[0.6vw] mb-[1.2vh]">
            <i
              class="w-[1.6vh] h-[1.6vh] rounded-[0.4vh] shadow-goldglow"
              style="background: linear-gradient(180deg, #ffdeac, #f0b15a)"
            ></i
            ><span class="text-gold font-bold text-[1.9vh]">近一年党员人数</span>
          </div>
          <div
            class="h-full grid place-items-center rounded-[1vh] text-[#ffddbb] opacity-90 border border-dashed border-[rgba(255,200,150,.35)]"
            style="background: linear-gradient(180deg, rgb(255 210 150 / 6%), rgb(255 210 150 / 2%))"
          >
            <div id="JoinInChart" class="w-full h-full"></div>
          </div>
          <div
            class="pointer-events-none absolute inset-0"
            style="background: radial-gradient(60vw 40vh at 50% -10%, rgb(255 212 150 / 18%), transparent 50%)"
          ></div>
        </div>
      </section>

      <!-- 右列上：五连提升（五条卡片） -->
      <section class="grid" style="grid-column: 3; grid-row: 1; grid-template-rows: repeat(5, 1fr); gap: 1.2vh">
        <div
          class="relative rounded-[1.2vh] p-[1.4vh_1.2vw] overflow-hidden border border-[rgba(255,186,102,.35)] grid content-start gap-[1.2vh]"
          style="
            background: linear-gradient(180deg, rgb(120 22 7 / 55%), rgb(60 8 2 / 55%));
            box-shadow: inset 0 0 28px rgb(0 0 0 / 35%), 0 0 24px rgb(255 150 80 / 18%);
          "
        >
          <div class="flex items-center gap-[0.6vw]">
            <i
              class="w-[1.6vh] h-[1.6vh] rounded-[0.4vh] shadow-goldglow"
              style="background: linear-gradient(180deg, #ffdeac, #f0b15a)"
            ></i
            ><span class="text-gold font-bold text-[1.9vh]">五联提升</span>
          </div>
          <div class="grid" style="grid-template-rows: repeat(5, 1fr); gap: 1.2vh">
            <div
              class="grid grid-cols-[4vh_1fr] items-center rounded-[1vh] border border-[rgba(255,186,102,.35)] px-[1vw] py-[1.2vh] text-[#ffe5c8]"
              style="background: linear-gradient(180deg, rgb(255 204 128 / 8%), rgb(255 204 128 / 2%))"
            >
              <div
                class="w-[3.2vh] h-[3.2vh] grid place-items-center rounded-[0.6vh] font-extrabold text-[#5b1a08] shadow-goldglow"
                style="background: linear-gradient(180deg, #ffdeac, #f0b15a)"
              >
                1
              </div>
              <div class="text-[1.6vh] pl-[0.8vw]">阵地连通 提升党组织号召力</div>
            </div>
            <div
              class="grid grid-cols-[4vh_1fr] items-center rounded-[1vh] border border-[rgba(255,186,102,.35)] px-[1vw] py-[1.2vh] text-[#ffe5c8]"
              style="background: linear-gradient(180deg, rgb(255 204 128 / 8%), rgb(255 204 128 / 2%))"
            >
              <div
                class="w-[3.2vh] h-[3.2vh] grid place-items-center rounded-[0.6vh] font-extrabold text-[#5b1a08] shadow-goldglow"
                style="background: linear-gradient(180deg, #ffdeac, #f0b15a)"
              >
                2
              </div>
              <div class="text-[1.6vh] pl-[0.8vw]">队伍联动 提升党员组织力</div>
            </div>
            <div
              class="grid grid-cols-[4vh_1fr] items-center rounded-[1vh] border border-[rgba(255,186,102,.35)] px-[1vw] py-[1.2vh] text-[#ffe5c8]"
              style="background: linear-gradient(180deg, rgb(255 204 128 / 8%), rgb(255 204 128 / 2%))"
            >
              <div
                class="w-[3.2vh] h-[3.2vh] grid place-items-center rounded-[0.6vh] font-extrabold text-[#5b1a08] shadow-goldglow"
                style="background: linear-gradient(180deg, #ffdeac, #f0b15a)"
              >
                3
              </div>
              <div class="text-[1.6vh] pl-[0.8vw]">区域联动 提升党建影响力</div>
            </div>
            <div
              class="grid grid-cols-[4vh_1fr] items-center rounded-[1vh] border border-[rgba(255,186,102,.35)] px-[1vw] py-[1.2vh] text-[#ffe5c8]"
              style="background: linear-gradient(180deg, rgb(255 204 128 / 8%), rgb(255 204 128 / 2%))"
            >
              <div
                class="w-[3.2vh] h-[3.2vh] grid place-items-center rounded-[0.6vh] font-extrabold text-[#5b1a08] shadow-goldglow"
                style="background: linear-gradient(180deg, #ffdeac, #f0b15a)"
              >
                4
              </div>
              <div class="text-[1.6vh] pl-[0.8vw]">活动联办 提升组织吸引力</div>
            </div>
            <div
              class="grid grid-cols-[4vh_1fr] items-center rounded-[1vh] border border-[rgba(255,186,102,.35)] px-[1vw] py-[1.2vh] text-[#ffe5c8]"
              style="background: linear-gradient(180deg, rgb(255 204 128 / 8%), rgb(255 204 128 / 2%))"
            >
              <div
                class="w-[3.2vh] h-[3.2vh] grid place-items-center rounded-[0.6vh] font-extrabold text-[#5b1a08] shadow-goldglow"
                style="background: linear-gradient(180deg, #ffdeac, #f0b15a)"
              >
                5
              </div>
              <div class="text-[1.6vh] pl-[0.8vw]">组织联建 提升共治凝聚力</div>
            </div>
          </div>
          <div
            class="pointer-events-none absolute inset-0"
            style="background: radial-gradient(60vw 40vh at 50% -10%, rgb(255 212 150 / 18%), transparent 50%)"
          ></div>
        </div>
      </section>

      <!-- 右列下：解决方案介绍占位 -->
      <section
        class="relative rounded-[1.2vh] p-[1.4vh_1.2vw] overflow-hidden border border-[rgba(255,186,102,.35)]"
        style="
          grid-column: 3;
          grid-row: 2;
          background: linear-gradient(180deg, rgb(120 22 7 / 55%), rgb(60 8 2 / 55%));
          box-shadow: inset 0 0 28px rgb(0 0 0 / 35%), 0 0 24px rgb(255 150 80 / 18%);
        "
      >
        <div class="flex items-center gap-[0.6vw] mb-[1.2vh]">
          <i
            class="w-[1.6vh] h-[1.6vh] rounded-[0.4vh] shadow-goldglow"
            style="background: linear-gradient(180deg, #ffdeac, #f0b15a)"
          ></i
          ><span class="text-gold font-bold text-[1.9vh]">帆软智慧党建解决方案</span>
        </div>
        <div class="leading-[1.7] text-[1.6vh] text-[#ffe6cd] opacity-95">
          以数据治理为核心，打通组织、队伍、活动、服务等业务链路，
          构建指标体系与可视化驾驶舱，助力基层党建标准化、信息化、智能化建设，
          为决策研判、监督考核、学习教育提供一体化支撑。
        </div>
        <div
          class="pointer-events-none absolute inset-0"
          style="background: radial-gradient(60vw 40vh at 50% -10%, rgb(255 212 150 / 18%), transparent 50%)"
        ></div>
      </section>
    </main>
  </div>
</template>

<style>
@media (aspect-ratio <= 16/10) {
  main {
    grid-template-columns: 28vw 1fr 28vw !important;
  }
}
</style>
