import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Mock from 'mockjs'

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

  const memberData = computed(() => {
    const memberData: { [key: string]: number } = {}
    const createKey = () => {
      const nowYear = new Date().getFullYear()
      const nowMonth = new Date().getMonth() + 1
      // 生成12个月份
      for (let i = 1; i <= 12; i++) {
        const month = nowMonth + i
        const year = month > 12 ? nowYear : nowYear - 1
        const monthKey = month > 12 ? month - 12 : month
        memberData[year + '-' + monthKey] = 0
      }
    }
    createKey()

    for (const member of members.value) {
      const joinDate = new Date(member.join_party_date)
      const joinYear = joinDate.getFullYear()
      const joinMonth = joinDate.getMonth() + 1
      const joinKey = joinYear + '-' + joinMonth
      if (joinKey in memberData) {
        memberData[joinKey]++
      }
    }

    return memberData
  })

  // 性别统计
  const genderData = computed(() => {
    const genderData: { [key: string]: number } = {
      男: 0,
      女: 0
    }

    for (const member of members.value) {
      if (member.gender in genderData) {
        genderData[member.gender]++
      }
    }
    return genderData
  })

  return { members, ageData, memberData, genderData }
})
