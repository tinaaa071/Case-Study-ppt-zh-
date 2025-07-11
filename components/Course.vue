<template>
    <div class="relative flex items-center justify-center  p-4 rounded-3xl h-8/12 bg-[#4A4A58]">
      <!-- Axes -->
      <div class="absolute inset-x-0 border-t border-gray-300 top-1/2"></div>
      <div class="absolute inset-y-0 border-l border-gray-300 left-1/2"></div>
  
      <!-- Labels -->
      <div class="absolute text-sm text-gray-400 transform -translate-y-full -left-20 top-1/2">
        一般課程
      </div>
      <div class="absolute text-sm text-gray-400 transform -translate-y-full -right-20 top-1/2">
        臨床培訓
      </div>
      <div class="absolute text-sm text-gray-400 -translate-x-1/2 -top-10 left-1/2">
        醫療專業
      </div>
      <div class="absolute text-sm text-gray-400 -translate-x-1/2 -bottom-10 left-1/2">
        醫務應用
      </div>
  
      <!-- Grid -->
      <div class="grid h-full grid-cols-2 grid-rows-2 gap-8 text-left text-white">
        <!-- Quadrant 1 -->
        <div class="flex flex-col justify-between h-full p-4 transition-colors duration-200 bg-purple-400 rounded-2xl hover:bg-purple-500">
          <h5 class="text-sm font-semibold text-center">醫療專業人員課程</h5>
          <div class="space-y-1">
            <h5 class="text-xs">• 上課形式：實體、線上、混合</h5>
            <h5 class="text-xs">• 報名方式：個人、團體</h5>
          </div>
        </div>
  
        <!-- Quadrant 2 -->
        <div class="flex flex-col justify-between h-full p-4 transition-colors duration-200 bg-blue-400 rounded-2xl hover:bg-blue-500">
          <h5 class="text-sm font-semibold text-center">臨床訓練課程</h5>
          <div class="space-y-1">
            <h5 class="text-xs">• 上課形式：實體、混合</h5>
            <h5 class="text-xs">• 報名方式：個人</h5>
          </div>
        </div>
  
        <!-- Quadrant 3 -->
        <div class="flex flex-col justify-between h-full p-4 transition-colors duration-200 bg-teal-400 rounded-2xl hover:bg-teal-500">
          <h5 class="text-sm font-semibold text-center">整合創新課程</h5>
          <div class="space-y-1">
            <h5 class="text-xs">• 上課形式：實體、線上、混合</h5>
            <h5 class="text-xs">• 報名方式：個人、團體</h5>
          </div>
        </div>
  
        <!-- Empty space for layout -->
        <div></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CoursesDiagram",
  };
  </script>
  