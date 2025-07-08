---
# You can also start simply with 'default'
theme: apple-basic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Case Study
info: |
  ## Healthcare Academy
  Speaker: Tina Chen

# apply unocss classes to the current slide
class: p-0
# https://sli.dev/features/drawing
layout: full
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-up
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

<div class="flex flex-row items-center justify-center h-full gap-24 px-32 text-white py-14 bg-[#23232E]">
  <div class="relative w-1/2">
    <div class="absolute z-10 -left-4 -top-8 w-52">
      <ChatBubble />
    </div>
    <img
    ref="image"
    src="https://i.imgur.com/XiOOKB4.jpeg"
    class="object-cover object-top shadow-lg  rounded-[64px] aspect-square"
  />
  </div>
  <div class="w-full">
    <p class="text-lg font-black tracking-wide">
      我是一位具有 3 年經驗的 UI/UX 設計師，擁有企業管理碩士背景。
    </p>
    <ul class="text-md">
      <li>熱情驅動</li>
      <li>充滿好奇心</li>
      <li>學習速度快</li>
    </ul>
  </div>
</div>

<style>
  .slidev-layout p {
    line-height: unset;
}
</style>

<!--
大家好，我是 Tina，擁有三年的 UI/UX 設計經驗，並具備<span style="color:red;">***企業管理碩士學位***</span>。

在這段經歷中，我培養了一些<span style="color:red;">***人格特質***</span>，讓我能夠<span style="color:red;">***勝任這份工作並為團隊創造價值***</span>：

1. 熱情驅動 – 對設計的熱愛讓我持續精進，投入每個專案都全力以赴。
2. 充滿好奇心 – 我樂於探索<span style="color:red;">***新技術與趨勢***</span>，並會將<span style="color:red;">***創新思維***</span>應用於設計中。
3. 快速學習能力 – 能迅速<span style="color:red;">***掌握新工具與技能***</span>，應對多變的專案需求。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="flex flex-col h-full gap-20 text-center bg-[#23232E] text-white py-14">
  <p class="text-4xl font-black">工作經驗</p>
  <div class="flex items-center w-full px-6 py-4 bg-[#4A4A58]">
    <Timeline />
  </div>
</div>

<!--
接下來，我想與大家分享我的工作經歷。

我曾在「中經院」擔任研究員，這段經歷讓我培養了<span style="color:red;">***資料分析與市場洞察的能力***</span>。同年，我也在 TCA 擔任 PM，負責行動支付的專案管理，與 Line Pay、街口支付等業者合作，進一步提升了我<span style="color:red;">***跨部門溝通的能力***</span>。

後續職涯中，我轉職成為 UI/UX 設計師，目前於「諾亞克科技」任職，在這個職位中，我更專注於<span style="color:red;">***跨團隊協作與大型專案的執行***</span>。

這些多元的經歷，豐富了我的專業能力，也讓我能夠以更全面的角度理解<span style="color:red;">***使用者需求***</span>與<span style="color:red;">***產品開發流程***</span>。
-->

---
transition: slide-left
class: p-0
layout: full
---

<div class="flex flex-col h-full gap-24 px-24 text-center py-14 bg-[#23232E] text-white">
  <p class="text-4xl font-black">認識更多關於我</p>
  <div class="grid items-center grid-cols-4 gap-8 text-sm">
    <div class="flex flex-col items-center">
      <img
        ref="image"
        src="https://i.imgur.com/gHSQpym.png"
        class="object-cover object-center shadow  rounded-[64px] aspect-square"
      />
      <p class="text-[#B1B1BE]">
        旅遊
      </p>
    </div>
    <div class="flex flex-col items-center">
      <a href="https://cafe2-ecru.vercel.app/" target="_blank" class="">
        <img
          ref="image"
          src="https://i.imgur.com/v9ocHR9.jpeg"
          class="object-cover object-center shadow rounded-[64px] aspect-square"
        />
      </a>  
      <p class="text-[#B1B1BE]">
        咖啡廳
      </p>
    </div>
    <div class="flex flex-col items-center">
      <img
        ref="image"
        src="https://i.imgur.com/FmfJSWq.jpeg"
        class="object-cover object-center shadow  rounded-[64px] aspect-square"
      />
      <p class="text-[#B1B1BE]">
        自我學習
      </p>
    </div>
    <div class="flex flex-col items-center">
      <a href="https://www.figma.com/community/plugin/1420953914431407843/shape-mask" target="_blank" class="">
        <img
          ref="image"
          src="https://cdn-images-1.medium.com/max/1600/1*VUK2az0HJHzilzN0Rpgv0A.png"
          class="object-cover object-center shadow rounded-[64px] aspect-square"
        />
      </a>  
      <p class="text-[#B1B1BE]">
        Plugin
      </p>
    </div>
  </div>
</div>

<style>
.slidev-layout a {
  border-style: none;
}
</style>

<!--
在我的個人生活中，我喜歡旅行、看影集和打電動。

假日裡，我會去探索不同的咖啡廳，這也讓我開發了一個「咖啡廳尋店」的專案。
主要目標是為了幫助用戶<span style="color:red;">***更快速找到適合的咖啡廳***</span>。

此外，我獨自開發了一個 Figma 插件，並且在上架不久後，受到了 Adobe 團隊的開發邀請。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="relative flex flex-row items-center h-full py-24 px-14 bg-[#23232E] text-white">
  <div class="space-y-8 z-1">
    <div class="flex flex-row items-center gap-3">
      <span class="relative flex w-3 h-3">
        <span class="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
        <span class="relative inline-flex w-3 h-3 bg-green-500 rounded-full"></span>
      </span>
      <p class="text-sm text-gray-400">
        專案進行中
      </p>
    </div>
    <div>
      <p class="pb-6 text-5xl font-black whitespace-nowrap">海外醫事人員<br><br><br>培訓平台</p>
      <p class="text-base tracking-wider text-[#B7B3F4]">
        財團法人醫院評鑑暨醫療品質策進會
      </p>
    </div>
  </div>
  <div class="z-1">
    <img
    ref="image"
    src="https://i.imgur.com/2MygSlS.png"
    class="origin-right scale-90"
  />
  </div>
  <!-- Circle -->
  <div 
    v-motion
    :initial="{ x: 200 }"
    :enter="final"
    class="absolute -z-10 bg-blue-50 dark:bg-blue-900 rounded-full w-[700px] aspect-square -top-1/12 -translate-y-1/2 -right-1/5">
  </div>
</div>

<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

<!--
接下來，我想與大家分享這次的專案——《海外醫事人員培訓平台》。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid grid-cols-2 items-center justify-start h-full gap-64 px-32 py-14 bg-[#23232E] text-white"> 
  <p class="text-6xl font-black z-2">議程</p>
  <ol class="list-decimal text-md">
    <li>專案背景</li>
    <li>研究 & 定義</li>
    <li>設計系統</li>
    <li>畫面展示</li>
    <li>數據分析</li>
  </ol>
  <!-- Circle -->
  <div 
    v-motion
    :initial="{ x: -200 }"
    :enter="final"
    class="absolute -z-10 bg-[#4A4A58] rounded-full w-[700px] aspect-square -top-[1/13] -translate-y-1/2 -left-1/4 z-1">
  </div>
</div>

<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

<!--
這是今天的議程，我將帶領大家了解這項專案的設計歷程。

1. 從「專案背景」開始，了解這個專案的<span style="color:red;">***需求與動機***</span>。

2. 接著，在「研究定義階段」的<span style="color:red;">***重點發現與專案目標***</span>。

3. 之後，我將介紹我們的「設計系統」。

4. 最後，透過一些「功能演示」來展示這項專案的成果。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="flex flex-col justify-between h-full px-14 py-12  bg-[#23232E] text-white"> 
  <div class="space-y-2">
    <p class="text-2xl font-black text-[#B7B3F4]">專案背景</p>
    <p class="text-xl tracking-wide">
      此平台旨在為<span class="text-[#D8D5FF] underline underline-offset-4 ">外國醫療專業人士</span>提供台灣醫療與健康訓練課程及成果的全方位資訊，並透過平台提供更完整的教育訓練與申請服務。
    </p>
  </div>
  <div class="grid grid-cols-4 gap-6 bg-[#4A4A58] rounded-2xl px-6 pb-3">
    <div class="space-y-2">
      <p class="text-md font-black text-[#B7B3F4]">角色</p>
      <ul class="text-md">
        <li>UI/UX 設計師</li>
        <li>產品架構設計</li>
      </ul>
    </div>
    <div class="space-y-2">
      <p class="text-md font-black text-[#B7B3F4]">團隊成員</p>
      <ul class="text-md">
        <li>1 產品設計師</li>
        <li>1 專案經理</li>
        <li>1 系統分析師</li>
        <li>1 前端工程師</li>
        <li>3 後端工程師</li>
      </ul>
    </div>
    <div class="space-y-2">
      <p class="text-md font-black text-[#B7B3F4]">專案時程</p>
      <p class="text-md">
        一年以上
        <br>
        <span class="text-[#B1B1BE]">
          (2023.10 - 至今)
        </span>
      </p>
    </div>
    <div class="space-y-2">
      <p class="text-md font-black text-[#B7B3F4]">服務對象</p>
      <p class="text-md">
        財團法人醫院評鑑暨醫療品質策進會
      </p>
    </div>
  </div>
</div>

<style>
  .slidev-layout p {
    line-height: unset;
}
</style>
<!--
這項專案由隸屬於衛福部的「醫策會」委託，主要目的是為了<span style="color:red;">***提供台灣醫療資源給海外醫療專業人員，促進彼此間的學習交流***</span>。

專案涵蓋前台與後台的設計規劃，今天我將專注於分享前台的設計部分。

***

在這個專案中，我擔任 UI/UX 設計師，負責<span style="color:red;">***功能規劃與介面設計***</span>的工作。

我與跨領域的團隊密切合作，包括專案經理、系統分析師與工程師。

此專案自 2023 年 10 月啟動至今，已歷經一年多的開發歷程，並將持續迭代改進。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="flex flex-col justify-between h-full px-14 py-12  bg-[#23232E] text-white"> 
  <div class="space-y-2">
    <p class="text-2xl font-black text-[#B7B3F4]">設計流程</p>
    <p class="text-xl tracking-wide">
      在這個專案中，我專注於整體<span class="text-[#D8D5FF] underline underline-offset-4 ">網站架構的設計</span>，確保使用者能順利<span class="text-[#D8D5FF] underline underline-offset-4 ">瀏覽課程並完成申請流程</span>。我的主要責任是規劃一個使用者友善的線上課程報名系統，讓使用者能夠輕鬆報名課程以及查詢申請結果。
    </p>
  </div>
  <div class="grid grid-cols-4 gap-6 bg-[#4A4A58] rounded-2xl px-6 pb-3">
    <div class="space-y-2">
      <p class="text-md font-black text-[#B7B3F4]">研究</p>
      <ul class="text-md">
        <li>網站資訊架構（IA）</li>
        <li>課程資訊顯示</li>
        <li>課程註冊</li>
        <li>課程審查系統</li>
      </ul>
    </div>
    <div class="space-y-2">
      <p class="text-md font-black text-[#B7B3F4]">定義</p>
      <ul class="text-md">
        <li>網站設計規範</li>
        <li>針對不同角色的註冊流程</li>
        <li>線上課程報名流程</li>
        <li>線上課程報名審查流程</li>
      </ul>
    </div>
    <div class="space-y-2">
      <p class="text-md font-black text-[#B7B3F4]">設計</p>
      <ul class="text-md">
        <li>元件設計</li>
        <li>網站 UI 設計</li>
        <li>響應式網站相容性</li>
      </ul>
    </div>
    <div class="space-y-2">
      <p class="text-md font-black text-[#B7B3F4]">測試 & 迭代</p>
      <ul class="text-md">
        <li>測試</li>
        <li>回饋收集</li>
      </ul>
    </div>
  </div>
</div>

<style>
  .slidev-layout p {
    line-height: unset;
}
</style>

<!--
我們深入研究<span style="color:red;">***用戶需求***</span>，專注打造<span style="color:red;">***直覺且友善***</span>的網站，確保使用者能輕鬆瀏覽課程並順利完成報名。

我們的設計流程，包含了<span style="color:red;">***用戶研究到功能設計***</span>，以及後續的設計迭代。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="flex flex-col gap-4 h-full px-14 py-12  bg-[#23232E] text-white"> 
  <p class="text-2xl font-black ">
  ☹️ 使用者痛點
  </p>
  <div class="grid grid-cols-3 gap-6 ">
    <div class="bg-[#4A4A58] rounded-2xl px-4 py-1">
      <p class="text-md font-black text-[#5F5ADF] bg-white rounded-md text-center px-2 py-1">1. 醫院宣傳力道不足</p>
      <p class="text-[#B1B1BE] text-md tracking-wide">
        醫院擁有完善的權威部門，但在<span class="text-[#D8D5FF] underline underline-offset-4 ">推廣上較為低調</span>。
      </p>
    </div>
    <div class="bg-[#4A4A58] rounded-2xl px-4 py-1">
      <p class="text-md font-black text-[#5F5ADF] bg-white rounded-md text-center px-2 py-1">2. 訓練資訊不足</p>
      <p class="text-[#B1B1BE] text-md tracking-wide">
        訓練資訊不夠完整，導致<span class="text-[#D8D5FF] underline underline-offset-4 ">難以清楚了解整體申請流程</span>。
      </p>
    </div>
    <div class="bg-[#4A4A58] rounded-2xl px-4 py-1">
      <p class="text-md font-black text-[#5F5ADF] bg-white rounded-md text-center px-2 py-1">3. 訓練成果難以評估</p>
      <p class="text-[#B1B1BE] text-md tracking-wide">
        海外學員<span class="text-[#D8D5FF] underline underline-offset-4 ">難以查詢訓練成果與評估結果</span>，使訓練成效難以對外展示。
      </p>
    </div>
    <div class="bg-[#4A4A58] rounded-2xl px-4 py-1">
      <p class="text-md font-black text-[#5F5ADF] bg-white rounded-md text-center px-2 py-1">4. 補件流程問題</p>
      <p class="text-[#B1B1BE] text-md tracking-wide">
        補交文件的<span class="text-[#D8D5FF] underline underline-offset-4 ">流程耗時費力</span>，且較為混亂。
      </p>
    </div>
    <div class="bg-[#4A4A58] rounded-2xl px-4 py-1">
      <p class="text-md font-black text-[#5F5ADF] bg-white rounded-md text-center px-2 py-1">5. 客製化訓練需求</p>
      <p class="text-[#B1B1BE] text-md tracking-wide">
        海外醫療人員有<span class="text-[#D8D5FF] underline underline-offset-4 ">明確的學習目標</span>，並需要客製化的訓練課程。
      </p>
    </div>
  </div>
</div>

<style>
  .slidev-layout p {
    line-height: unset;
}
</style>

<!--
在研究過程中，我們發現了幾個使用者痛點。

**1. 許多醫院在宣傳上薄弱。**

儘管台灣的醫院在醫療資源都非常完備，但在宣傳與推廣方面卻較為低調，造成<span style="color:red;">***參與者對課程的了解不足***</span>。

***

**2.培訓資訊不足。**

資訊混雜，使用者難以理解相關<span style="color:red;">***課程內容及申請流程***</span>，進而影響他們的參與意願。

***

**3. 缺乏課程培訓成果與評價。**

海外醫療人員很難獲取相關課程的<span style="color:red;">***回饋***</span>，這使得他們在<span style="color:red;">***尋找適合課程***</span>時遇到困難。

***

**4. 文件重新提交的問題。**

使用者在報名過程中常常需要<span style="color:red;">***提交各種資料***</span>，這個過程既耗時又費力，尤其是專業醫療人員的資格審核也相對嚴格，過程不順利會影響他們的報名意願。

***

**5. 客製化的培訓計劃。**

醫療人員的進修常常會需要<span style="color:red;">***特定的課程規劃***</span>，以幫助他們有效地達成學習目標。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid items-center h-full grid-cols-2 px-14 py-12  bg-[#23232E] text-white"> 
  <p class="text-6xl font-black">我們的目標</p>
  <div class="grid grid-cols-1 gap-1.5 tracking-wide">
    <div class="bg-[#4A4A58] rounded-lg px-4">
      <p class="tracking-wide text-md">
        1. 建立包含<span class="text-[#D8D5FF] underline underline-offset-4 ">身分驗證</span>的註冊系統
      </p>
    </div>
    <div class="bg-[#4A4A58] rounded-lg px-4">
      <p class="tracking-wide text-md">
        2. <span class="text-[#D8D5FF] underline underline-offset-4 ">整合全國醫療機構</span>的課程資源
      </p>
    </div>
    <div class="bg-[#4A4A58] rounded-lg px-4">
      <p class="tracking-wide text-md">
        3. 提供網站<span class="text-[#D8D5FF] underline underline-offset-4 ">多語言切換</span>功能
      </p>
    </div>
    <div class="bg-[#4A4A58] rounded-lg px-4">
      <p class="tracking-wide text-md">
        4. 提供課程的<span class="text-[#D8D5FF] underline underline-offset-4 ">分類與篩選功能</span>
      </p>
    </div>
    <div class="bg-[#4A4A58] rounded-lg px-4">
      <p class="tracking-wide text-md">
        5. 提供<span class="text-[#D8D5FF] underline underline-offset-4 ">個人 & 團體課程申請功能</span>
      </p>
    </div>
    <div class="bg-[#4A4A58] rounded-lg px-4">
      <p class="tracking-wide text-md">
        6. 讓學員查詢<span class="text-[#D8D5FF] underline underline-offset-4 ">申請審核結果</span>
      </p>
    </div>
    <div class="bg-[#4A4A58] rounded-lg px-4">
      <p class="tracking-wide text-md">
        7. 學員可<span class="text-[#D8D5FF] underline underline-offset-4 ">線上諮詢</span>課程提供單位
      </p>
    </div>
  </div>
</div>

<!--
我們的目標：
1. 建立一個包含<span style="color:red;">***身份驗證***</span>的註冊系統。
2. <span style="color:red;">***整合***</span>全國醫療機構的課程資源。
3. 提供網站的<span style="color:red;">***多語言切換***</span>功能，確保不同語言使用者的可訪問性。
4. 提供課程<span style="color:red;">***分類與過濾***</span>功能，幫助使用者輕鬆找到相關課程。
5. 提供<span style="color:red;">***個人和團體報名***</span>功能，滿足不同學習者的需求。
6. 讓參與者查看<span style="color:red;">***報名審核結果***</span>。
7. 學生可以在線上進行<span style="color:red;">***諮詢***</span>，獲得支援與指導。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid items-center h-full grid-cols-2 px-14 py-12  bg-[#23232E] text-white"> 
  <p class="text-6xl font-black">解決方法</p>
  <div class="grid grid-cols-1 gap-1.5 tracking-wide">
    <div class="bg-[#4A4A58] rounded-lg px-4">
      <p class="tracking-wide text-md">
        ✅ 設計具備<span class="text-[#D8D5FF] underline underline-offset-4 ">自動驗證功能</span>的文件上傳系統
      </p>
    </div>
    <div class="bg-[#4A4A58] rounded-lg px-4">
      <p class="tracking-wide text-md">
        ✅ 提供課程資訊與<span class="text-[#D8D5FF] underline underline-offset-4 ">篩選功能</span>
      </p>
    </div>
    <div class="bg-[#4A4A58] rounded-lg px-4">
      <p class="tracking-wide text-md">
        ✅ 顯示課程訓練的<span class="text-[#D8D5FF] underline underline-offset-4 ">評估結果</span>
      </p>
    </div>
    <div class="bg-[#4A4A58] rounded-lg px-4">
      <p class="tracking-wide text-md">
        ✅ 建立<span class="text-[#D8D5FF] underline underline-offset-4 ">多語言系統</span>
      </p>
    </div>
    <div class="bg-[#4A4A58] rounded-lg px-4">
      <p class="tracking-wide text-md">
        ✅ 建立具有動態表單的<span class="text-[#D8D5FF] underline underline-offset-4 ">雙重申請機制</span>
      </p>
    </div>
    <div class="bg-[#4A4A58] rounded-lg px-4">
      <p class="tracking-wide text-md">
        ✅ 開發申請流程的<span class="text-[#D8D5FF] underline underline-offset-4 ">進度追蹤功能</span>
      </p>
    </div>
    <div class="bg-[#4A4A58] rounded-lg px-4">
      <p class="tracking-wide text-md">
        ✅ 建置<span class="text-[#D8D5FF] underline underline-offset-4 ">線上諮詢系統</span>以提供即時協助
      </p>
    </div>
  </div>
</div>

<!--
有了用戶**痛點**和**目標**後，我們提出了解決方案：
1. 在身份驗證功能上，設計<span style="color:red;">***自動驗證系統***</span>，提升效率。
2. 提供課程資訊與<span style="color:red;">***篩選功能***</span>，幫助使用者輕鬆找到符合需求的課程。
3. 顯示課程培訓<span style="color:red;">***回饋結果***</span>，讓使用者能夠清楚了解課程評價。
4. 建立<span style="color:red;">***多語言框架***</span>，使平台能夠服務來自不同國家的使用者。
5. 創建<span style="color:red;">***雙重報名模式***</span>，適應個人與團體報名需求。
6. 開發<span style="color:red;">***報名狀態追蹤***</span>功能，讓使用者能隨時查看其報名進度與審核結果。
7. 建立<span style="color:red;">***線上諮詢系統***</span>，提供即時的協助。
-->

---
transition: slide-left
class: p-0
layout: full
---

<div class="grid items-center h-full grid-cols-2 bg-[#23232E] text-white"> 
  <div class="px-12 py-6 space-y-6">
    <p class="text-3xl font-black">💬 專案中遇到的挑戰</p>
    <ol class="text-xl list-decimal">
      <li>
        <ToggleText 
          :initialText="'客戶無法提供明確需求'" 
          :toggledText="'參考市場上成熟產品的功能，並依現有架構進行規劃'" 
        />
      </li>
      <li>
        <ToggleText 
          :initialText="'專案架構龐大'" 
          :toggledText="'拆解為模組，並優先處理核心元件'" 
        />
      </li>
      <li>
        <ToggleText 
          :initialText="'開發時程緊迫'" 
          :toggledText="'簡化流程，聚焦於關鍵功能'" 
        />
      </li>
    </ol>
  </div>
  <img
    ref="image"
    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    class="object-cover object-center h-full"
  />
</div>

<script setup>
import { ref } from 'vue';

const message = ref('點擊我來更換文字');
</script>

<!--
專案中的一些挑戰：
1. 客戶未能提供<span style="color:red;">***明確的需求***</span>，這使得我們在設計過程中需要更多的溝通與確認。

👉🏻 解決：參考市面上成熟之產品功能，並針對既有功能規劃

***

2. 專案<span style="color:red;">***架構較為龐大***</span>，包含了前後台的設計，涉及的功能與設計需求較為複雜。

👉🏻 解決：分解模組並確定關鍵功能的優先順序。

***

3. 開發<span style="color:red;">***時間緊迫***</span>，我們需要在有限的時間內高效完成設計與開發工作。

👉🏻 解決：簡化工作流程，並專注於基本功能。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid items-center h-full grid-cols-2 px-14 py-12  bg-[#23232E] text-white"> 
  <p class="text-6xl font-black leading-loose">研究 & 定義</p>
  <div>
    <p>
      在分析使用者需求與功能架構後，我為此專案設定了兩個設計方向：
    </p>
    <ol class="list-decimal text-md">
      <li>
        以目標使用者為導向
        <br>
        <span>
          <ul class="text-[#B1B1BE]">
            <li>依照專業領域分類課程。</li>
            <li>色彩選用穩重且具醫療感的色調。</li>
          </ul>
        </span>
      </li>
      <li>
        提升使用者體驗
        <br>
        <span>
          <ul class="text-[#B1B1BE]">
            <li>提供自訂搜尋與篩選功能。</li>
            <li>簡單易懂的申請流程。</li>
            <li>審查進度清楚可見。</li>
          </ul>
        </span>
      </li>
    </ol>
  </div>
</div>

<!--
在深入分析<span style="color:red;">***使用者需求和功能架構***</span>後，我設定了兩個關鍵的設計方向。

1. 第一個方向是<span style="color:red;">***以目標受眾為導向***</span>

a. 確保課程根據**專業領域**進行分類

b. 並在色彩選擇上使用**醫療相關的色調**，以增強專業性和信任感

***

2. 第二個方向則<span style="color:red;">***強調使用者體驗***</span>，著重在<span style="color:red;">***功能流程***</span>的設計

a. 針對課程提供自訂搜尋和過濾選項

b. 簡便的註冊和報名流程

c. 清楚的課程審核狀態
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="flex flex-col items-center h-full gap-16 text-center px-14 py-12  bg-[#23232E] text-white"> 
  <p class="text-4xl font-black">培訓課程分類</p>
  <Course />
</div>

<!--
為了幫助各位更加了解這個專案的設計邏輯，我簡單介紹我們的課程分類。

課程分類會影響的功能有：<span style="color:red;">***課程篩選、課程報名、報名審核***</span>，也是我們專案的幾個核心功能。

***

X 軸的分類為：「一般課程」和「臨床培訓」課程。

Y 軸的分類為：「醫療專業」和「醫務應用」。

***

若分類是「臨床培訓＆醫療專業」的課程（右上角），對於<span style="color:red;">***課程報名的資格***</span>會比較嚴格，需要<span style="color:red;">***上傳更多專業的醫事人員執照***</span>，並且會對於<span style="color:red;">***團體報名***</span>的功能有限制。
-->

---
transition: slide-left
class: p-0
layout: full
---

<div class="flex flex-col h-full px-14 py-12  bg-[#23232E] text-white gap-8"> 
  <div class="space-y-2">
    <p class="text-2xl font-black text-[#B7B3F4]">競品分析</p>
    <p class="text-xl tracking-wide">
      我調查了市面上具有類似課程報名功能的產品，但<span class="text-[#D8D5FF] underline underline-offset-4 ">沒有找到合適的範本</span>，這也讓我們發現，我們專案開發的功能是比較<span class="text-[#D8D5FF] underline underline-offset-4 ">創新</span>的，這會是一個比較困難的挑戰。
    </p>
  </div>
  <div class="grid grid-cols-3 gap-y-4 gap-x-32">
    <div class="space-y-3 text-center">
      <div class="overflow-hidden border border-gray-100 rounded-2xl aspect-video">
        <img
          ref="image"
          src="https://i.imgur.com/7VlO2nB.png"
          class="h-full transition-all duration-200 ease-in-out hover:scale-110"
        />
      </div>
      <p class="text-sm font-black text-[#B1B1BE]">Hahow</p>
    </div>
    <div class="space-y-3 text-center">
      <div class="overflow-hidden border border-gray-100 rounded-2xl aspect-video">
        <img
          ref="image"
          src="https://i.imgur.com/IZHmUjI.png"
          class="h-full transition-all duration-200 ease-in-out hover:scale-110"
        />
      </div>
      <p class="text-sm font-black text-[#B1B1BE]">Udemy</p>
    </div>
    <div class="space-y-3 text-center">
      <div class="overflow-hidden border border-gray-100 rounded-2xl aspect-video">
        <img
          ref="image"
          src="https://i.imgur.com/BM5WXVl.png"
          class="h-full transition-all duration-200 ease-in-out hover:scale-110"
        />
      </div>
      <p class="text-sm font-black text-[#B1B1BE]">Coursera</p>
    </div>
    <div class="space-y-3 text-center">
      <div class="overflow-hidden border border-gray-100 rounded-2xl aspect-video">
        <img
          ref="image"
          src="https://i.imgur.com/G2pCFYH.png"
          class="h-full transition-all duration-200 ease-in-out hover:scale-110"
        />
      </div>
      <p class="text-sm font-black text-[#B1B1BE]">Future Learn</p>
    </div>
    <div class="space-y-3 text-center">
      <div class="overflow-hidden border border-gray-100 rounded-2xl aspect-video">
        <img
          ref="image"
          src="https://i.imgur.com/mHWGOe8.png"
          class="h-full transition-all duration-200 ease-in-out hover:scale-110"
        />
      </div>
      <p class="text-sm font-black text-[#B1B1BE]">Techable</p>
    </div>
    <div class="space-y-3 text-center">
      <div class="overflow-hidden border border-gray-100 rounded-2xl aspect-video">
        <img
          ref="image"
          src="https://i.imgur.com/IL9zMOt.png"
          class="h-full transition-all duration-200 ease-in-out hover:scale-110"
        />
      </div>
      <p class="text-sm font-black text-[#B1B1BE]">Klook</p>
    </div>
  </div>
</div>

<style>
  .slidev-layout p {
    line-height: unset;
}
</style>

<!--
在<span style="color:red;">***功能設計***</span>時，因為我們專案的時程較緊迫，我選擇對市場上幾個成熟的平台進行了深入研究。

我們的功能需求涵蓋<span style="color:red;">***個人及團體報名，以及不同角色的資格審核***</span>。

***

我研究了類似功能的平台包括 Hahow、Udemy、Coursera 和 Klook 等。

1. Hahow
提供了豐富的課程選擇，但它的報名系統主要偏重個人報名，且缺乏團體報名的功能，並且他們是針對線上課程運作的平台。

2. Udemy 
擁有廣泛的國際課程選擇，但同樣未針對團體報名做出專門設計，以及同樣是線上課程的平台。

3. Future Learn 和 Coursera 
提供了相對完善的學習平台和多樣化的課程，儘管它們有一定的報名功能，但在團體註冊的支持上不夠靈活，且整體的報名流程較為繁瑣。

4. Techable 
以科技與創新課程為主，支持部分報名功能，但缺少個人化與團體報名的選項，無法滿足多樣化需求。

5. Klook 
提供的是旅遊和體驗型課程，報名流程更偏向活動註冊，而非完整的學習管理，無法提供足夠的課程分類與報名選項。

***

雖然它們都是市場上成熟的產品，但都未能完全滿足我們專案的需求。這也讓我們發現，<span style="color:red;">***我們專案開發的功能是比較創新的***</span>，但也因為沒有前例的參考，這會是一個比較困難的挑戰。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="flex flex-row items-center justify-between h-full bg-[#23232E] text-white"> 
  <p class="text-5xl font-black px-14">資訊架構</p>
  <div class="h-full p-4 ">
    <img
    ref="image"
    src="https://i.imgur.com/E3rF3z9.png"
    class="h-full rounded-lg object-fit"
  />
  </div>
</div>

<!--
在搜集了相關資訊後，我規劃了資訊架構，讓我們可以更瞭解<span style="color:red;">***彼此頁面及功能之間的關聯性***</span>。

並且我也將<span style="color:red;">***相關的元件***</span>使用顏色做區分，在檢視上可以更加便利。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="h-full text-center bg-[#23232E] text-white"> 
  <img
    ref="image"
    src="https://i.imgur.com/RiAO6LO.png"
    class="w-full mb-20 bg-white"
  />
  <p class="text-5xl font-black tracking-wide">課程報名流程圖</p>
</div>

<!--
接下來是使用者流程圖的說明，我以<span style="color:red;">***課程報名功能***</span>為範例。

在這個過程中，我們設計了多個決策點，<span style="color:red;">***根據使用者的回應，提供他們選擇合適的選項***</span>。

並且針對報名功能採用<span style="color:red;">***動態適應設計***</span>，分為「個人及團體報名」。

這個功能是指，在報名的流程中，會有兩套不同的版型，如何區分採用哪一套的版型，則是取決於課程報名的<span style="color:red;">***人數***</span>，若是報名人數大於 1，則會自動轉換為團體報名的模板。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid grid-cols-2 items-center justify-start h-full gap-64 px-32 py-14 bg-[#23232E] text-white"> 
  <p class="text-6xl font-black z-2">設計<br><br><br>系統</p>
  <ul class="text-md">
    <li>變數設定</li>
    <li>多語系設定</li>
    <li>Figma 設計檔案</li>
    <li>Storybook 管理</li>
  </ul>
  <!-- Circle -->
  <div 
    v-motion
    :initial="{ x: -200 }"
    :enter="final"
    class="absolute -z-10 bg-[#4A4A58] rounded-full w-[700px] aspect-square -top-[1/13] -translate-y-1/2 -left-1/4 z-1">
  </div>
</div>

<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

<!--
在設計系統上我定義了以下幾個項目，使我們的團隊可以<span style="color:red;">***保持一致的設計***</span>。
1. 針對變數進行設置
2. 多語言設定
3. Figma 設計文件管理
4. Storybook 文件管理
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid h-full grid-cols-4 gap-4 bg-[#23232E] text-white">
  <div class="flex flex-col justify-between h-full col-span-1 px-10 py-6">
    <!-- 左邊內容 -->
    <p class="text-4xl font-black"><span class="font-extrabold text-[#B7B3F4]">01</span><br><br>變數設定</p>
    <p class="text-sm text-justify text-[#B1B1BE]">
      本專案使用<span v-mark.circle.orange>Tailwind</span>進行開發。  
      <br><br>
      我在檔案中設定了變數，方便工程師在開發時直接查看相關的 class 設定。
    </p>
  </div>
  <div class="flex items-center h-full col-span-3 px-10 bg-[#4A4A58]">
    <!-- 右邊內容 -->
    <img
      ref="image"
      src="https://i.imgur.com/HkDOiYr.png"
      class="w-full"
    />
  </div>
</div>

<!--
在變數設定的部分，我們專案使用 Tailwind 開發，所以我也將相關的變數直接納入設計中。

我們對各種變數進行了設定，包括間距、圓角等。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid h-full grid-cols-4 gap-4 bg-[#23232E] text-white">
  <div class="flex flex-col justify-between h-full col-span-1 px-10 py-6">
    <!-- 左邊內容 -->
    <p class="text-4xl font-black"><span class="font-extrabold text-[#B7B3F4]">01</span><br><br>變數設定</p>
    <p class="text-sm text-justify text-[#B1B1BE]">
      此專案使用 Tailwind 進行開發。  
      <br><br>
      我在檔案中設定了變數，讓工程師能在開發時直接查看相關的 class 設定。
    </p>
  </div>
  <div class="flex items-center h-full col-span-3 px-10 bg-[#4A4A58]">
    <!-- 右邊內容 -->
    <Video
      src="https://tinaaa071.github.io/Case-Study-ppt/video1.mp4"
    />
  </div>
</div>

<!--
有了剛剛的設定，已設定的變數會直接顯示在元件上，便於開發人員快速參考。

側邊欄也會即時顯示<span style="color:red;">***變數名稱***</span>，如間距、圓角、顏色等。

這樣不僅提高<span style="color:red;">***設計與開發的一致性***</span>，也大大提高了開發的效率。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid h-full grid-cols-4 gap-4 bg-[#23232E] text-white">
  <div class="flex flex-col justify-between h-full col-span-1 px-10 py-6">
    <!-- 左邊內容 -->
    <p class="text-4xl font-black"><span class="font-extrabold text-[#B7B3F4]">02</span><br><br>i18n 設定</p>
    <p class="text-sm text-justify text-[#B1B1BE]">
      我設定了多語系變數，讓開發過程中可以在檔案中直接切換與查看。
    </p>
  </div>
  <div class="flex items-center h-full col-span-3 px-10 bg-[#4A4A58]">
    <!-- 右邊內容 -->
    <img
      ref="image"
      src="https://i.imgur.com/3huTlpN.png"
      class="w-full"
    />
  </div>
</div>

<!--
另外，我也設置了多語系變數，使得<span style="color:red;">***切換和查看不同語言的內容***</span>變得更加便捷。

表格中展示了中英文的變數。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid h-full grid-cols-4 gap-4 bg-[#23232E] text-white">
  <div class="flex flex-col justify-between h-full col-span-1 px-10 py-6">
    <!-- 左邊內容 -->
    <p class="text-4xl font-black"><span class="font-extrabold text-[#B7B3F4]">02</span><br><br>i18n 設定</p>
    <p class="text-sm text-justify text-[#B1B1BE]">
      我設定了多語系變數，讓開發過程中可以在檔案中直接切換與查看。
    </p>
  </div>
  <div class="flex items-center h-full col-span-3 px-10 bg-[#4A4A58]">
    <!-- 右邊內容 -->
    <Video
      src="https://tinaaa071.github.io/Case-Study-ppt/video2.mp4"
    />
  </div>
</div>

<!--
從影片中可以看到，在設計面板上，我們可以<span style="color:red;">***直接設定語系的切換***</span>，這樣畫面就能即時更新為不同語言版本。

讓開發人員可以方便地<span style="color:red;">***參考各種語系的樣式***</span>。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid h-full grid-cols-4 gap-4 bg-[#23232E] text-white">
  <div class="flex flex-col justify-between h-full col-span-1 px-10 py-6">
    <!-- 左邊內容 -->
    <p class="text-4xl font-black"><span class="font-extrabold text-[#B7B3F4]">03</span><br><br>Figma<br><br>設計檔案</p>
    <p class="text-sm text-justify text-[#B1B1BE]">
      我在檔案中定義了設計系統與元件，包含其使用情境與各種狀態。
    </p>
  </div>
  <div class="flex items-center h-full col-span-3 px-10 bg-[#4A4A58]">
    <!-- 右邊內容 -->
    <Video
      src="https://tinaaa071.github.io/Case-Study-ppt/video3.mp4"
    />
  </div>
</div>

<!--
我製作了 Figma Library 檔案，定義了<span style="color:red;">***完整的「設計系統」以及各種「元件」***</span>，並標註了每個元件的使用情境、狀態與細節，這些元件依功能分類，方便查找。

設計系統能在<span style="color:red;">***大型文件更新***</span>時提升工作效率。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid h-full grid-cols-4 gap-4 bg-[#23232E] text-white">
  <div class="flex flex-col justify-between h-full col-span-1 px-10 py-6">
    <!-- 左邊內容 -->
    <p class="text-4xl font-black"><span class="font-extrabold text-[#B7B3F4]">03</span><br><br>Figma<br><br>設計檔案</p>
    <p class="text-sm text-justify text-[#B1B1BE]">
      我在檔案中標示了不同頁面的尺寸，並定義了各種使用情境與操作流程。
    </p>
  </div>
  <div class="flex items-center h-full col-span-3 px-10 bg-[#4A4A58]">
    <!-- 右邊內容 -->
    <Video
      src="https://tinaaa071.github.io/Case-Study-ppt/video4.mp4"
    />
  </div>
</div>

<!--
我將<span style="color:red;">***不同使用情境的頁面***</span>進行了分類，並依照<span style="color:red;">***流程***</span>進行排序。

此外，我也展示了 RWD 畫面設計，呈現各個頁面在不同裝置下的呈現。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid h-full grid-cols-4 gap-4 bg-[#23232E] text-white">
  <div class="flex flex-col justify-between h-full col-span-1 px-10 py-6">
    <!-- 左邊內容 -->
    <p class="text-4xl font-black"><span class="font-extrabold text-[#B7B3F4]">04</span><br><br>Storybook</p>
    <p class="text-sm text-justify text-[#B1B1BE]">
      我使用 Storybook 作為視覺指引與元件展示的平台，協助開發團隊在實作過程中參考具體的設計標準。
    </p>
  </div>
  <div class="flex items-center h-full col-span-3 px-10 bg-[#4A4A58]">
    <!-- 右邊內容 -->
    <a href="https://main--6758f1bddc4388960f8ac32f.chromatic.com/?path=/story/guides-color--color-list" target="_blank" class="overflow-hidden transition-all duration-300 ease-in-out border rounded-2xl group hover:shadow-lg border-white/80">
      <img
        ref="image"
        src="https://i.imgur.com/6pMAdyR.png"
        class="w-full transition-all duration-300 ease-in-out group-hover:scale-110 "
      />
    </a>
  </div>
</div>

<style>
.slidev-layout a {
  border-style: none;
}
</style>

<!--
在此專案中，我也使用了 Storybook 管理元件。

Storybook 加強了設計人員與開發人員之間的協作，確保設計與開發的一致性。

像是在畫面中，我們可以直接複製樣式，或是直接在畫面上輸入資料查看更多細節的設定，以及<span style="color:red;">***參考元件使用的程式碼***</span>，讓我和工程團隊溝通更流暢。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid grid-cols-2 items-center justify-start h-full gap-64 px-32 py-14 bg-[#23232E] text-white"> 
  <p class="text-6xl font-black z-2">畫面<br><br><br>展示</p>
  <ul class="text-md">
    <li>註冊</li>
    <li>課程分類</li>
    <li>課程頁面</li>
    <li>課程報名</li>
    <li>申請進度查詢</li>
    <li>線上諮詢</li>
  </ul>
  <!-- Circle -->
  <div 
    v-motion
    :initial="{ x: -200 }"
    :enter="final"
    class="absolute -z-10 bg-[#4A4A58] rounded-full w-[700px] aspect-square -top-[1/13] -translate-y-1/2 -left-1/4 z-1">
  </div>
</div>

<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

<!--
接下來，我們將展示平台的主要功能：

1. 註冊
2. 課程分類
3. 課程頁面
4. 課程報名
5. 報名審核進度
6. 線上諮詢
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid h-full grid-cols-4 gap-4 bg-[#23232E] text-white">
  <div class="flex flex-col justify-between h-full col-span-1 px-10 py-6">
    <!-- 左邊內容 -->
    <p class="text-4xl font-black"><span class="font-extrabold text-[#B7B3F4]">01</span><br><br>註冊</p>
    <p class="text-sm text-justify text-[#B1B1BE]">
      使用<span v-mark.underline.orange>動態切換</span>在不同表單間切換，滿足不同使用者的註冊需求，同時維持設計一致性並降低額外的開發成本。
    </p>
  </div>
  <div class="flex items-center justify-center h-full col-span-3 px-10 py-12 bg-[#4A4A58]">
    <!-- 右邊內容 -->
    <img
      ref="image"
      src="https://i.imgur.com/p981WCv.png"
      class="w-3/4 border border-white/80 rounded-2xl"
    />
  </div>
</div>

<!--
註冊的頁面中，我們通過<span style="color:red;">***動態切換***</span>來適應<span style="color:red;">***不同的使用者類型***</span>，分為「一般使用者」及「開課單位」。

這種方法不僅保持了<span style="color:red;">***設計的一致性***</span>，還<span style="color:red;">***減少了開發成本***</span>。

此外，用戶可以選擇使用 Google 或 Facebook 帳戶進行註冊，讓註冊過程更加便捷。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid h-full grid-cols-4 gap-4 bg-[#23232E] text-white">
  <div class="flex flex-col justify-between h-full col-span-1 px-10 py-6">
    <!-- 左邊內容 -->
    <p class="text-4xl font-black"><span class="font-extrabold text-[#B7B3F4]">01</span><br><br>註冊</p>
    <p class="text-sm text-justify text-[#B1B1BE]">
      根據不同選項動態顯示欄位。
    </p>
  </div>
  <div class="overflow-hidden bg-cover bg-center bg-no-repeat flex col-span-3 justify-center items-center h-full bg-[#4A4A58] bg-[url('https://i.imgur.com/kxCbId4.png')]">
    <!-- 右邊內容 -->
    <img
      v-click
      ref="image"
      src="https://i.imgur.com/EdWAeho.png"
      class=""
    />
    <img
      v-click
      ref="image"
      src="https://i.imgur.com/iy4pMl8.png"
      class="absolute origin-right scale-[0.46]"
    />
  </div>
</div>

<!--
另外，因為對象是針對<span style="color:red;">***專業醫療人員***</span>，使用者需要根據自己的<span style="color:red;">***專業***</span>選擇不同的選項，系統會根據這些選擇<span style="color:red;">***動態調整顯示的欄位***</span>。

我也在設計檔案中同步附上了<span style="color:red;">***各種選項所產生的結果***</span>，提供工程團隊<span style="color:red;">***參考樣式變化***</span>。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid h-full grid-cols-4 gap-4 bg-[#23232E] text-white">
  <div class="flex flex-col justify-between h-full col-span-1 px-10 py-6">
    <!-- 左邊內容 -->
    <p class="text-4xl font-black"><span class="font-extrabold text-[#B7B3F4]">01</span><br><br>註冊</p>
    <p class="text-sm text-justify text-[#B1B1BE]">
      整合 API 資料以實現即時驗證，減少人工審核時間。
    </p>
  </div>
  <div class="flex items-center justify-center h-full col-span-3 px-10 py-12 bg-[#4A4A58]">
    <!-- 右邊內容 -->
    <img
      ref="image"
      src="https://i.imgur.com/KuVaTU4.png"
      class="w-4/5 border rounded-2xl border-white/80"
    />
  </div>
</div>

<!--
由於註冊的人員多為<span style="color:red;">***專業領域的人員***</span>，對於<span style="color:red;">***身份審核上較嚴格***</span>，會有較多欄位需要填寫及上傳相關執照。

透過<span style="color:red;">***API 資料整合***</span>，系統能進行<span style="color:red;">***即時驗證***</span>，顯示<span style="color:red;">***錯誤訊息提示***</span>，這有助於他們快速修正問題，也減少了<span style="color:red;">***人工審核***</span>的需要。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid h-full grid-cols-4 gap-4 bg-[#23232E] text-white">
  <div class="flex flex-col justify-between h-full col-span-1 px-10 py-6">
    <!-- 左邊內容 -->
    <p class="text-4xl font-black"><span class="font-extrabold text-[#B7B3F4]">02</span><br><br>課程分類</p>
    <p class="text-sm text-justify text-[#B1B1BE]">
      提供可收合的篩選器，讓使用者依據不同條件進行篩選。  
      <br><br>
      課程以卡片形式設計，重點資訊清楚呈現，讓使用者可即時查看所需項目。
    </p>
  </div>
  <div class="flex items-center h-full col-span-3 px-10 bg-[#4A4A58]">
    <!-- 右邊內容 -->
    <Video
      src="https://tinaaa071.github.io/Case-Study-ppt/video5.mp4"
    />
  </div>
</div>

<!--
針對課程分類頁面，包含一個<span style="color:red;">***可折疊的篩選器***</span>，使用者可以根據各種選項對課程進行篩選和排序。

課程以卡片形式呈現，基本資訊一目了然，讓使用者能夠快速找到所需的課程。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid h-full grid-cols-4 gap-4 bg-[#23232E] text-white">
  <div class="flex flex-col justify-between h-full col-span-1 px-10 py-6">
    <!-- 左邊內容 -->
    <div class="flex flex-col gap-2">
      <p class="text-4xl font-black"><span class="font-extrabold text-[#B7B3F4]">03</span><br><br>課程頁面</p>
      <span class="text-xs font-black text-white bg-[#5F5ADF] px-3 py-2 rounded-full w-fit">⭐️ 重點設計</span>
    </div>
    <p class="text-sm text-justify text-[#B1B1BE]">
      使用者可即時切換資訊，方便快速搜尋所需內容。
    </p>
  </div>
  <div class="flex items-center h-full col-span-3 px-10 bg-[#4A4A58]">
    <!-- 右邊內容 -->
    <Video
      src="https://tinaaa071.github.io/Case-Study-ppt/video6.mp4"
    />
  </div>
</div>

<!--
在課程詳細頁面，由於內容較為豐富，我們將資訊分為<span style="color:red;">***不同區塊***</span>來呈現。

並且加入了<span style="color:red;">***切換按鈕***</span>，讓使用者能<span style="color:red;">***快速跳轉***</span>到相關區塊，避免一一瀏覽冗長的內容。

右邊的固定式卡片包含了<span style="color:red;">***報名及諮詢***</span>按鈕，在瀏覽的同時可以隨時進行操做。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid h-full grid-cols-4 gap-4 bg-[#23232E] text-white">
  <div class="flex flex-col justify-between h-full col-span-1 px-10 py-6">
    <!-- 左邊內容 -->
    <div class="flex flex-col gap-2">
      <p class="text-4xl font-black"><span class="font-extrabold text-[#B7B3F4]">04</span><br><br>個人<br><br>課程報名</p>
      <span class="text-xs font-black text-white bg-[#5F5ADF] px-3 py-2 rounded-full w-fit">⭐️ 重點設計</span>
    </div>
    <p class="text-sm text-justify text-[#B1B1BE]">
      以<span v-mark.underline.orange>進度條</span>顯示申請階段，將步驟拆分，避免填寫流程過長。
    </p>
  </div>
  <div class="flex items-center h-full col-span-3 px-10 bg-[#4A4A58]">
    <!-- 右邊內容 -->
    <Video
      src="https://tinaaa071.github.io/Case-Study-ppt/video7.mp4"
    />
  </div>
</div>

<!--
在課程報名的部分，我設計了<span style="color:red;">***進度條***</span>來顯示報名的<span style="color:red;">***各個階段***</span>，讓使用者知道還有幾步。

另外報名系統是<span style="color:red;">***動態適應設計***</span>，根據<span style="color:red;">***選擇的人數***</span>會決定使用的是「個人報名」還是「團體報名」的模板，這個頁面是以個人報名為例，根據選擇的課程會需要填寫多項資格證明文件。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid h-full grid-cols-4 gap-4 bg-[#23232E] text-white">
  <div class="flex flex-col justify-between h-full col-span-1 px-10 py-6">
    <!-- 左邊內容 -->
    <div class="flex flex-col gap-2">
      <p class="text-4xl font-black"><span class="font-extrabold text-[#B7B3F4]">04</span><br><br>團體<br><br>課程報名</p>
      <span class="text-xs font-black text-white bg-[#5F5ADF] px-3 py-2 rounded-full w-fit">⭐️ 重點設計</span>
    </div>
    <p class="text-sm text-justify text-[#B1B1BE]">
      根據選擇課程的<span v-mark.underline.orange>數量</span>，動態調整欄位為團體申請模式。
    </p>
  </div>
  <div class="flex items-center h-full col-span-3 px-10 bg-[#4A4A58]">
    <!-- 右邊內容 -->
    <Video
      src="https://tinaaa071.github.io/Case-Study-ppt/video8.mp4"
    />
  </div>
</div>

<!--
在團體報名部分，選擇人數大於 1 時，系統會動態調整填寫欄位，切換為「團體報名」的表單。

這種設計避免了開發兩套系統的複雜性，符合<span style="color:red;">***彈性設計原則***</span>。

另外團體報名在新增成員時使用<span style="color:red;">***抽屜式設計***</span>，會於右側跳出成員的填寫資料，對於需<span style="color:red;">***同時檢視和填寫資料***</span>上提升效率。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid h-full grid-cols-4 gap-4 bg-[#23232E] text-white">
  <div class="flex flex-col justify-between h-full col-span-1 px-10 py-6">
    <!-- 左邊內容 -->
    <p class="text-4xl font-black"><span class="font-extrabold text-[#B7B3F4]">05</span><br><br>申請<br><br>審核進度</p>
    <p class="text-sm text-justify text-[#B1B1BE]">
      學生可以切換不同狀態，以查看所申請課程的審核進度。點擊卡片後，將顯示詳細資訊。
    </p>
  </div>
  <div class="flex items-center h-full col-span-3 px-10 bg-[#4A4A58]">
    <!-- 右邊內容 -->
    <Video
      src="https://tinaaa071.github.io/Case-Study-ppt/video9.mp4"
    />
  </div>
</div>

<!--
在完成報名後，學員可於「會員中心」檢視報名的審核進度。

學生可以<span style="color:red;">***依照狀態***</span>點擊切換按鈕，檢視各種狀態的課程。

點擊課程卡片後，可以查看該課程的詳細資訊。

並且在<span style="color:red;">***團體報名***</span>的課程中，主要報名者可以查看到所有成員的審核狀態以及詳細資料。
-->

---
transition: fade-out
class: p-0
layout: full
---

<div class="grid h-full grid-cols-4 gap-4 bg-[#23232E] text-white">
  <div class="flex flex-col justify-between h-full col-span-1 px-10 py-6">
    <!-- 左邊內容 -->
    <div class="flex flex-col gap-2">
      <p class="text-4xl font-black"><span class="font-extrabold text-[#B7B3F4]">06</span><br><br>線上諮詢</p>
      <span class="text-xs font-black text-white bg-[#5F5ADF] px-3 py-2 rounded-full w-fit">⭐️ 重點設計</span>
    </div>
    <p class="text-sm text-justify text-[#B1B1BE]">
      我們提供線上諮詢系統，讓學員能即時聯繫課程主辦單位，解決相關問題。
    </p>
  </div>
  <div class="flex items-center h-full col-span-3 px-10 bg-[#4A4A58]">
    <!-- 右邊內容 -->
    <Video
      src="https://tinaaa071.github.io/Case-Study-ppt/video10.mp4"
    />
  </div>
</div>

<!--
對於線上諮詢功能，列表中可以查看所有對話過的開課單位，並且也支援上傳檔案。

這項功能確保學生能即時<span style="color:red;">***獲得他們所需的資源及協助***</span>。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="grid items-center justify-start h-full grid-cols-2 gap-64 px-32 py-14 bg-[#23232E] text-white"> 
  <p class="text-6xl font-black z-2">數據<br><br><br>分析</p>
  <ul class="text-md">
    <li>Google Analytics</li>
    <li>漏斗分析</li>
  </ul>
  <!-- Circle -->
  <div 
    v-motion
    :initial="{ x: -200 }"
    :enter="final"
    class="absolute -z-10 bg-[#4A4A58] rounded-full w-[700px] aspect-square -top-[1/13] -translate-y-1/2 -left-1/4 z-1">
  </div>
</div>

<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

---
transition: slide-up
class: p-0
layout: full
---

<div class="flex flex-col h-full px-14 py-6  bg-[#23232E] text-white gap-2"> 
  <div class="space-y-2">
    <p class="text-2xl font-black text-[#B7B3F4]">漏斗分析（會員註冊）</p>
    <p class="text-xl tracking-wide">
      共有124位使用者造訪註冊頁面，其中94位成功完成註冊，轉換率達76%。在<span class="text-[#D8D5FF] underline underline-offset-4 ">「填寫表單欄位」階段流失最多</span>，有10位使用者中途退出，顯示該階段可能因<span class="text-[#D8D5FF] underline underline-offset-4 ">表單複雜度或使用者猶豫產生阻礙</span>。未來可透過優化表單設計與欄位清晰度，提升完成率。
    </p>
  </div>
  <div class="mx-auto mt-2 overflow-hidden border border-gray-300 w-2xl rounded-xl">
    <table class="w-full text-xs text-gray-900 bg-white">
      <thead class="text-center bg-gray-100">
        <tr>
          <th class="px-4 py-2 text-center">步驟</th>
          <th class="px-4 py-2 text-center">事件名稱</th>
          <th class="px-4 py-2 text-center">使用者數</th>
          <th class="px-4 py-2 text-center">完成數</th>
          <th class="px-4 py-2 text-center">流失數</th>
          <th class="px-4 py-2 text-center">留存率</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <td class="px-4 py-2">開啟註冊頁</td>
          <td class="px-4 py-2"><code>view_signup_page</code></td>
          <td class="px-4 py-2">124</td>
          <td class="px-4 py-2">124</td>
          <td class="px-4 py-2">-</td>
          <td class="px-4 py-2">100%</td>
        </tr>
        <tr class="text-center bg-gray-50">
          <td class="px-4 py-2">輸入 Email</td>
          <td class="px-4 py-2"><code>input_email</code></td>
          <td class="px-4 py-2">124</td>
          <td class="px-4 py-2">115</td>
          <td class="px-4 py-2">9</td>
          <td class="px-4 py-2">92.7%</td>
        </tr>
        <tr class="text-center">
          <td class="px-4 py-2">發送驗證碼</td>
          <td class="px-4 py-2"><code>send_verification_code</code></td>
          <td class="px-4 py-2">115</td>
          <td class="px-4 py-2">110</td>
          <td class="px-4 py-2">5</td>
          <td class="px-4 py-2">88.7%</td>
        </tr>
        <tr class="text-center bg-gray-50">
          <td class="px-4 py-2">填寫表單欄位</td>
          <td class="px-4 py-2"><code>complete_form_fields</code></td>
          <td class="px-4 py-2">110</td>
          <td class="px-4 py-2">100</td>
          <td class="px-4 py-2">10</td>
          <td class="px-4 py-2">80.6%</td>
        </tr>
        <tr class="text-center">
          <td class="px-4 py-2">勾選同意條款</td>
          <td class="px-4 py-2"><code>agree_terms</code></td>
          <td class="px-4 py-2">100</td>
          <td class="px-4 py-2">98</td>
          <td class="px-4 py-2">2</td>
          <td class="px-4 py-2">79.0%</td>
        </tr>
        <tr class="text-center bg-gray-50">
          <td class="px-4 py-2">點擊註冊按鈕</td>
          <td class="px-4 py-2"><code>click_signup</code></td>
          <td class="px-4 py-2">98</td>
          <td class="px-4 py-2">96</td>
          <td class="px-4 py-2">2</td>
          <td class="px-4 py-2">77.4%</td>
        </tr>
        <tr class="text-center">
          <td class="px-4 py-2">註冊成功</td>
          <td class="px-4 py-2"><code>signup_success</code></td>
          <td class="px-4 py-2">96</td>
          <td class="px-4 py-2">94</td>
          <td class="px-4 py-2">2</td>
          <td class="px-4 py-2">76.0%</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<style>
  .slidev-layout p {
    line-height: unset;
}
</style>

<!--
在124位造訪註冊頁面的使用者中，有94位成功完成註冊，轉換率為76%。

最大流失點發生在「填寫表單欄位」階段，共有10位使用者中途退出。

這顯示表單複雜度或使用者猶豫可能造成阻礙。進一步優化表單設計與欄位清晰度，有助提升完成率。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="flex flex-col h-full px-14 py-6 bg-[#23232E] text-white gap-6"> 
  <div class="space-y-2">
    <p class="text-2xl font-black text-[#B7B3F4]">漏斗分析（會員註冊）</p>
    <p class="text-xl tracking-wide">
      這份漏斗分析比較了「優化前」與「優化後」的課程註冊流程使用者行為。 
      <br>
      透過將註冊流程<span class="text-[#D8D5FF] underline underline-offset-4 ">拆分為多個步驟</span>，使用者在填寫表單階段的流失率明顯下降，最終註冊完成率由44.4%提升至65.4%。
    </p>
  </div>
   <ToggleTable />
</div>

<style>
  .slidev-layout th {
    text-align: center;
  }
  .slidev-layout p {
    line-height: unset;
  }
</style>

<!--
本次漏斗分析對比了「優化前」與「優化後」課程報名流程的使用者行為。

優化後將報名流程拆分為多步驟並加入暫存功能，有效減少填寫表單階段的流失，最終報名完成率從44.4%提升至65.4%。
-->

---
transition: slide-up
class: p-0
layout: full
---

<div class="flex flex-col h-full px-14 py-6  bg-[#23232E] text-white gap-6"> 
  <div class="space-y-2">
    <p class="text-2xl font-black text-[#B7B3F4]">漏斗分析（課程報名）</p>
    <p class="text-xl tracking-wide">
      分組分析顯示，使用暫存功能的使用者在各關鍵步驟均有較高留存率，顯示<span class="text-[#D8D5FF] underline underline-offset-4 ">暫存功能顯著提升使用者完成報名的意願與體驗</span>。
    </p>
  </div>
  <div class="w-full mx-auto mt-4 overflow-hidden border border-gray-300 rounded-xl">
    <table class="w-full text-xs text-gray-900 bg-white">
      <thead class="text-center bg-gray-100">
        <tr>
          <th class="px-4 py-2 text-center">項目</th>
          <th class="px-4 py-2 text-center">事件名稱</th>
          <th class="px-4 py-2 text-center bg-green-100">暫存<br>使用者數</th>
          <th class="px-4 py-2 text-center bg-green-100">暫存<br>完成數</th>
          <th class="px-4 py-2 text-center bg-green-100">暫存<br>流失數</th>
          <th class="px-4 py-2 text-center bg-green-100">暫存<br>留存率</th>
          <th class="px-4 py-2 text-center bg-red-100">未暫存<br>使用者數</th>
          <th class="px-4 py-2 text-center bg-red-100">未暫存<br>完成數</th>
          <th class="px-4 py-2 text-center bg-red-100">未暫存<br>流失數</th>
          <th class="px-4 py-2 text-center bg-red-100">未暫存<br>留存率</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <td class="px-4 py-2">填寫個人資料表</td>
          <td class="px-4 py-2"><code>fill_personal_info</code></td>
          <td class="px-4 py-2 bg-green-50">20</td>
          <td class="px-4 py-2 bg-green-50">15</td>
          <td class="px-4 py-2 bg-green-50">5</td>
          <td class="px-4 py-2 bg-green-50">75.0%</td>
          <td class="px-4 py-2 bg-red-50">38</td>
          <td class="px-4 py-2 bg-red-50">35</td>
          <td class="px-4 py-2 bg-red-50">3</td>
          <td class="px-4 py-2 bg-red-50">92.1%</td>
        </tr>
        <tr class="text-center">
          <td class="px-4 py-2">填寫上傳文件表</td>
          <td class="px-4 py-2"><code>fill_upload_documents</code></td>
          <td class="px-4 py-2 bg-green-50">18</td>
          <td class="px-4 py-2 bg-green-50">17</td>
          <td class="px-4 py-2 bg-green-50">1</td>
          <td class="px-4 py-2 bg-green-50">94.4%</td>
          <td class="px-4 py-2 bg-red-50">35</td>
          <td class="px-4 py-2 bg-red-50">31</td>
          <td class="px-4 py-2 bg-red-50">4</td>
          <td class="px-4 py-2 bg-red-50">88.6%</td>
        </tr>
        <tr class="text-center">
          <td class="px-4 py-2">送出報名表單</td>
          <td class="px-4 py-2"><code>submit_registration</code></td>
          <td class="px-4 py-2 bg-green-50">17</td>
          <td class="px-4 py-2 bg-green-50">15</td>
          <td class="px-4 py-2 bg-green-50">2</td>
          <td class="px-4 py-2 bg-green-50">88.2%</td>
          <td class="px-4 py-2 bg-red-50">31</td>
          <td class="px-4 py-2 bg-red-50">29</td>
          <td class="px-4 py-2 bg-red-50">2</td>
          <td class="px-4 py-2 bg-red-50">93.5%</td>
        </tr>
        <tr class="text-center">
          <td class="px-4 py-2">報名成功頁</td>
          <td class="px-4 py-2"><code>registration_success</code></td>
          <td class="px-4 py-2 bg-green-50">15</td>
          <td class="px-4 py-2 bg-green-50">15</td>
          <td class="px-4 py-2 bg-green-50">0</td>
          <td class="px-4 py-2 bg-green-50">100.0%</td>
          <td class="px-4 py-2 bg-red-50">29</td>
          <td class="px-4 py-2 bg-red-50">27</td>
          <td class="px-4 py-2 bg-red-50">2</td>
          <td class="px-4 py-2 bg-red-50">93.1%</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="text-xl tracking-wide">
      整體來看，<span class="text-[#D8D5FF] underline underline-offset-4 ">流程拆分與暫存功能</span>是提升報名轉化率的重要優化策略。
    </p>
</div>

<style>
  .slidev-layout th {
    text-align: center;
  }
  .slidev-layout p {
    line-height: unset;
  }
</style>

<!--
分組分析顯示，使用暫存功能的使用者在各關鍵步驟均有較高留存率，顯示暫存功能顯著提升使用者完成報名的意願與體驗。

整體來看，流程拆分與暫存功能是提升報名轉化率的重要優化策略。
-->

---
transition: fade-out
class: p-0
layout: full
---

<div class="grid items-center h-full grid-cols-2 px-12 py-6 bg-[#23232E] text-white"> 
  <p class="text-5xl font-black leading-loose">持續優化<br><br><br>Optimization</p>
  <ol class="space-y-12 text-base">
    <li class="font-black">
      <span class="flex items-center gap-3">
        <span class="relative flex w-3 h-3">
          <span class="absolute inline-flex w-full h-full rounded-full opacity-75 bg-[#D8D5FF] animate-ping"></span>
          <span class="relative inline-flex w-3 h-3 rounded-full bg-[#B7B3F4]"></span>
        </span>
        課程功能擴展
      </span>
      <p class="font-normal text-">
        我們計劃未來開發線上課程系統，以提升平台的使用性並滿足多元需求。
      </p>
    </li>
    <li class="font-black">
      <span class="flex items-center gap-3">
        <span class="relative flex w-3 h-3">
          <span class="absolute inline-flex w-full h-full rounded-full opacity-75 bg-[#D8D5FF] animate-ping"></span>
          <span class="relative inline-flex w-3 h-3 rounded-full bg-[#B7B3F4]"></span>
        </span>
        課程報名流程優化
      </span>
      <p class="font-normal text-">
        我仍持續優化課程報名流程的設計，特別是在使用者需處理大量資料輸入時，提供更順暢的操作體驗。
      </p>
    </li>
    <li class="font-black">
      <span class="flex items-center gap-3">
        <span class="relative flex w-3 h-3">
          <span class="absolute inline-flex w-full h-full rounded-full opacity-75 bg-[#D8D5FF] animate-ping"></span>
          <span class="relative inline-flex w-3 h-3 rounded-full bg-[#B7B3F4]"></span>
        </span>
        線上諮詢系統
      </span>
      <p class="font-normal text-">
        目前仍依賴人工回覆，我們希望提供部分基礎的智慧客服功能，以減輕人力不足所帶來的問題。
      </p>
    </li>
  </ol>
</div>

<!--
未來我們也將持續優化提升平台的功能。

***

1. 我們計劃擴展<span style="color:red;">***線上課程系統***</span>

提升平台的應用性，以更好地滿足用戶需求。

***

2. 目前，我們持續改進課程報名流程

為<span style="color:red;">***大量資料輸入***</span>的用戶提供更加流暢的體驗，預計提供批次資料上傳。

***

3. 此外，我們還計劃實施<span style="color:red;">***常見問答系統***</span>

提供基本的智慧客服支持，以解決人力不足的問題，進一步提升整體服務質量。
-->

---
class: p-0
layout: full
---

<div class="relative flex flex-col items-center justify-center h-full px-12 py-6 bg-[#23232E] text-white "> 
  <p class="text-3xl font-black leading-loose z-2">Thank You</p>
  <div class="text-sm tracking-wide text-[#B1B1BE] z-2">
    <a href="https://tinachen-portfolio.vercel.app/" target="_blank" class="">
      Portfolio
    </a>
    <span>|</span>
    <a href="https://medium.com/@tina.uiux" target="_blank" class="">
      Medium
    </a>
    <span>|</span>
    <a href="https://www.figma.com/community/plugin/1420953914431407843/shape-mask" target="_blank" class="">
      Figma Plugin
    </a>
  </div>
  <!-- Circle -->
  <div 
    v-motion
    :initial="{ x: 200 }"
    :enter="final"
    class="absolute -z-10 bg-[#4A4A58] rounded-full w-[700px] aspect-square -top-[1/13] -translate-y-1/2 -right-1/5 z-1">
  </div>
  <div 
    v-motion
    :initial="{ x: -200 }"
    :enter="final"
    class="absolute -z-10 bg-[#4A4A58] rounded-full w-[700px] aspect-square -top-[1/13] -translate-y-1/2 -left-1/5 z-1">
  </div>
</div>

<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

<style>
.slidev-layout a {
  border-style: none;
  transition: color 0.3s ease-in-out;
}

.slidev-layout a:hover {
  color: #D8D5FF;
}
</style>

<!--
感謝大家今天的參與！


如果您對其他內容感興趣，歡迎隨時查看我的作品集。
-->
