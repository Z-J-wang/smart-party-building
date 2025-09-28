import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Mock from 'mockjs'
import { es } from 'element-plus/es/locales.mjs'

const rawMember = Mock.mock({
  'list|60': [
    {
      'id|+1': 1,
      name: '@cname',
      'gender|1': ['男', '女'],
      birth_date: '@date',
      ethnicity: '汉族',
      native_place: '@city',
      'education|1': ['本科', '大专', '高中'],
      phone: null,
      party_branch_name: ['学生党支部', '光源与照明党支部', '新能源科学与工程党支部', '材料科学与工程党支部'],
      join_party_date: '@date("2025-MM-dd")',
      'party_member_status|1': ['预备党员', '正式党员'],
      photo: null
    }
  ]
}).list
export const useMembersStore = defineStore('members', () => {
  const members = ref(rawMember)

  const ageData = computed(() => {
    const ageData: { [key: string]: number } = {}
    const createAgeKey = (age: number) => {
      const temp = age.toString()[0]
      const start = Number(temp) * 10
      const end = start + 10
      return start + '-' + end
    }
    for (const member of members.value) {
      const age = new Date().getFullYear() - new Date(member.birth_date).getFullYear()
      const key = createAgeKey(age)
      if (key in ageData) {
        ageData[key]++
      } else {
        ageData[key] = 1
      }
    }

    return ageData
  })

  return { members, ageData }
})
