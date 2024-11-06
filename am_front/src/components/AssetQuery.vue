<script setup lang="ts">
import { ref } from 'vue'
import { ElTable, ElTableColumn, ElForm, ElFormItem, ElInput, ElButton, ElDatePicker } from 'element-plus'

// 查询表单数据
const queryForm = ref({
  assetNo: '',
  assetName: '',
  dateRange: [],
  status: ''
})

// 表格数据
const tableData = ref([
  {
    assetNo: 'ZC001',
    assetName: '笔记本电脑',
    purchaseDate: '2023-01-01',
    price: 6999,
    status: '使用中'
  },
  {
    assetNo: 'ZC002',
    assetName: '显示器',
    purchaseDate: '2023-02-15',
    price: 1299,
    status: '闲置'
  }
])

// 查询方法
const handleQuery = () => {
  console.log('查询条件：', queryForm.value)
  // 这里添加实际的查询逻辑
}

// 重置方法
const handleReset = () => {
  queryForm.value = {
    assetNo: '',
    assetName: '',
    dateRange: [],
    status: ''
  }
}
</script>

<template>
  <div class="asset-query">
    <h2>资产查询</h2>
    
    <!-- 查询表单 -->
    <el-form :model="queryForm" inline class="query-form">
      <el-form-item label="资产编号">
        <el-input v-model="queryForm.assetNo" placeholder="请输入资产编号" />
      </el-form-item>
      <el-form-item label="资产名称">
        <el-input v-model="queryForm.assetName" placeholder="请输入资产名称" />
      </el-form-item>
      <el-form-item label="购置日期">
        <el-date-picker
          v-model="queryForm.dateRange"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleQuery">查询</el-button>
        <el-button @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="assetNo" label="资产编号" />
      <el-table-column prop="assetName" label="资产名称" />
      <el-table-column prop="purchaseDate" label="购置日期" />
      <el-table-column prop="price" label="价格">
        <template #default="scope">
          ¥{{ scope.row.price }}
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" />
      <el-table-column label="操作" width="150">
        <template #default>
          <el-button link type="primary">查看</el-button>
          <el-button link type="primary">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.asset-query {
  padding: 20px;
}

.query-form {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 4px;
}
</style>
