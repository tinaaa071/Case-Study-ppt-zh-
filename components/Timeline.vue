<template>
    <div class="relative flex items-center gap-28 left-1/12">
      <div
        v-for="(event, index) in events"
        :key="index"
        class="relative flex flex-col items-center space-y-4"
      >
        <!-- 上方的時間 -->
        <div class="text-center">
          <p class="text-sm font-medium text-gray-400">{{ event.time }}</p>
        </div>
  
        <!-- 圓點 -->
        <span class="relative flex w-3 h-3">
          <span class="absolute inline-flex w-full h-full rounded-full opacity-75 bg-[#D8D5FF] animate-ping"></span>
          <span class="relative inline-flex w-3 h-3 rounded-full bg-[#B7B3F4]"></span>
        </span>
  
        <!-- 下方的事件內容 -->
        <div class="flex flex-col items-center w-20 whitespace-nowrap">
          <p class="text-sm font-black">{{ event.work }}</p>
          <p class="text-xs font-semibold text-[#B7B3F4] dark:text-blue-300">{{ event.content }}</p>
        </div>
  
        <!-- 水平線 -->
        <div
          class="absolute top-16 w-32 h-0.5 bg-[#B7B3F4] rounded-full transform translate-x-1/2 left-1/9"
          v-if="index < events.length - 1"
        ></div>
  
        <!-- 最後一個圓點右方的虛線水平線 -->
        <div
          v-if="index === events.length - 1"
          class="absolute w-32 transform translate-x-1/2 border-t-2 border-orange-300 border-dashed top-16 left-1/9"
        ></div>
  
        <!-- 右側箭頭 -->
        <div
          v-if="index === events.length - 1"
          class="absolute top-[56px] left-[200px] text-orange-300"
        >
          <svg
            class="w-4 h-4 text-orange-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            fill="currentColor"
          >
            <path
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    events: {
      type: Array,
      required: true,
      default: () => [
        { time: "2021", work: "研究人員", content: "中華經濟研究院" },
        { time: "2021", work: "專案經理", content: "台北市電腦公會" },
        { time: "2022", work: "UI/UX 設計師", content: "經緯電通" },
        { time: "2023", work: "UI/UX 設計師", content: "諾亞克科技" },
      ],
    },
  });
  </script>
  
  <!-- <style scoped>
  /* 自定義 Tailwind CSS 動畫 */
  @keyframes ring-blink {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.2);
    }
  }
  .animate-ring-blink {
    animation: ring-blink 1.5s infinite ease-in-out;
  }
  </style> -->
  