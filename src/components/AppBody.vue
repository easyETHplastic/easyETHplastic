<template>
  <div
    class="text-5xl font-semibold text-zinc-200 text-center font-dmsans tracking-normal pt-10"
  >Pay with crypto anywhere</div>
  <div class="text-2xl font-dmsans text-zinc-400 text-center pt-6">using pre-paid VISA card</div>
  <div
    class="text-center text-xl tracking-normal leading-relaxed text-zinc-200 w-1/3 mx-auto font-dmsans pt-16"
  >
    Tired of waiting for your crypto to hit your bank account after offramp? Send it straight to the pre-paid VISA! We’ve got the balanace pre-loaded, so your jurney from crypto to FIAT will take only 15sec!
    See what others think about it:
  </div>

  <div class="flex items-center mx-auto max-w-screen-xl pt-16" @click="open != open">
    <div class="flex items-center w-1/3">
      <div class="rounded-full w-14 h-14 bg-zinc-200">
        <img src="face3.jpeg" class="object-fill rounded-full">
      </div>
      <div class="p-4 flex-1">
        <div
          class="text-xl text-zinc-300"
        >I love that app! It is so fast and secure that it blows my mind!</div>
        <div class="text-sm text-zinc-400">vitalik.eth</div>
      </div>
    </div>
    <div class="flex items-center">
      <div class="rounded-full w-14 h-14 bg-zinc-200">
        <img src="face1.jpg" class="object-fill rounded-full">
      </div>
      <div class="p-4 flex-1">
        <div class="text-xl text-zinc-300">OMG this is so fast - almost instant!</div>
        <div class="text-sm text-zinc-400">a16z.eth</div>
      </div>
    </div>
    <div class="flex items-center w-1/3">
      <div class="rounded-full w-14 h-14 bg-zinc-200">
        <img src="face2.jpeg" class="object-fill rounded-full">
      </div>
      <div class="p-4 flex-1" @click="checkoutModalOpen = !checkoutModalOpen">
        <div class="text-xl text-zinc-300">I’ve been waiting for this my whole life. Once you buy you never stop buying!</div>
        <div class="text-sm text-zinc-400">accel.eth</div>
      </div>
    </div>
  </div>

  <div class="flex items-center mx-auto max-w-screen-xl pt-16">
    <div class="w-1/3 m-10">
      <div class="group p-6 hover:bg-zinc-400 rounded-lg">
        <div
          class="relative rounded-md text-xl h-48 p-6 bg-gradient-to-tr from-cyan-500 to-blue-500 group-hover:shadow-xl group-hover:animate-pulse font-roboto"
        >
          <p class="text-5xl font-dmsans pt-3 pb-6">$25</p>
          <p>0123 0432 1043 3405</p>
          <p class="text-sm">01/26</p>
          <svg
            class="w-24 absolute bottom-0 right-0"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 3384.54 2077.85"
            style="enable-background:new 0 0 3384.54 2077.85;"
            xml:space="preserve"
          >
            <defs id="defs840"></defs>
            <path
              class="st0"
              fill="#ffffff"
              d="M1461.26,739.84l-251.37,599.74h-164l-123.7-478.62c-7.51-29.48-14.04-40.28-36.88-52.7  c-37.29-20.23-98.87-39.21-153.05-50.99l3.68-17.43h263.99c33.65,0,63.9,22.4,71.54,61.15l65.33,347.04l161.46-408.2H1461.26z   M2103.84,1143.77c0.66-158.29-218.88-167.01-217.37-237.72c0.47-21.52,20.96-44.4,65.81-50.24c22.23-2.91,83.48-5.13,152.95,26.84  l27.25-127.18c-37.33-13.55-85.36-26.59-145.12-26.59c-153.35,0-261.27,81.52-262.18,198.25c-0.99,86.34,77.03,134.52,135.81,163.21  c60.47,29.38,80.76,48.26,80.53,74.54c-0.43,40.23-48.23,57.99-92.9,58.69c-77.98,1.2-123.23-21.1-159.3-37.87l-28.12,131.39  c36.25,16.63,103.16,31.14,172.53,31.87C1996.72,1348.96,2103.34,1268.45,2103.84,1143.77 M2508.78,1339.58h143.49l-125.25-599.74  h-132.44c-29.78,0-54.9,17.34-66.02,44l-232.81,555.74h162.91L2291,1250h199.05L2508.78,1339.58z M2335.67,1127.08l81.66-225.18  l47,225.18H2335.67z M1682.93,739.84l-128.29,599.74H1399.5l128.34-599.74H1682.93z"
              id="path835"
            ></path>
          </svg>
        </div>
        <button data-product="visa25USD" class="p-3 mx-auto w-full rounded-full text-center group-hover:bg-zinc-800 hover:text-indigo-300 hover:shadow-xl mt-4" @click="productClick">Buy me!</button>
      </div>
    </div>
    <div class="w-1/3 m-10">
      <div class="group p-6 hover:bg-zinc-400 rounded-lg">
        <div
          class="relative rounded-md text-xl h-48 p-6 bg-gradient-to-tr from-orange-300 to-orange-600 group-hover:shadow-xl group-hover:animate-pulse font-roboto"
        >
          <p class="text-5xl font-dmsans pt-3 pb-6">$100</p>
          <p>0123 0432 1043 3405</p>
          <p class="text-sm">01/26</p>
          <svg
            class="w-24 absolute bottom-0 right-0"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 3384.54 2077.85"
            style="enable-background:new 0 0 3384.54 2077.85;"
            xml:space="preserve"
          >
            <defs id="defs840"></defs>
            <path
              class="st0"
              fill="#ffffff"
              d="M1461.26,739.84l-251.37,599.74h-164l-123.7-478.62c-7.51-29.48-14.04-40.28-36.88-52.7  c-37.29-20.23-98.87-39.21-153.05-50.99l3.68-17.43h263.99c33.65,0,63.9,22.4,71.54,61.15l65.33,347.04l161.46-408.2H1461.26z   M2103.84,1143.77c0.66-158.29-218.88-167.01-217.37-237.72c0.47-21.52,20.96-44.4,65.81-50.24c22.23-2.91,83.48-5.13,152.95,26.84  l27.25-127.18c-37.33-13.55-85.36-26.59-145.12-26.59c-153.35,0-261.27,81.52-262.18,198.25c-0.99,86.34,77.03,134.52,135.81,163.21  c60.47,29.38,80.76,48.26,80.53,74.54c-0.43,40.23-48.23,57.99-92.9,58.69c-77.98,1.2-123.23-21.1-159.3-37.87l-28.12,131.39  c36.25,16.63,103.16,31.14,172.53,31.87C1996.72,1348.96,2103.34,1268.45,2103.84,1143.77 M2508.78,1339.58h143.49l-125.25-599.74  h-132.44c-29.78,0-54.9,17.34-66.02,44l-232.81,555.74h162.91L2291,1250h199.05L2508.78,1339.58z M2335.67,1127.08l81.66-225.18  l47,225.18H2335.67z M1682.93,739.84l-128.29,599.74H1399.5l128.34-599.74H1682.93z"
              id="path835"
            ></path>
          </svg>
        </div>
        <button data-product="visa50USD" class="p-3 mx-auto w-full rounded-full text-center group-hover:bg-zinc-800 hover:text-indigo-300 hover:shadow-xl mt-4" @click="productClick">Buy me!</button>
      </div>
    </div>
    <div class="w-1/3 m-10">
      <div class="group p-6 hover:bg-zinc-400 rounded-lg">
        <div
          class="relative rounded-md text-xl h-48 p-6 bg-gradient-to-tr from-zinc-700 to-zinc-900 group-hover:shadow-xl group-hover:animate-pulse font-roboto"
        >
          <p class="text-5xl font-dmsans pt-3 pb-6">$Custom</p>
          <p>0123 0432 1043 3405</p>
          <p class="text-sm">01/26</p>
          <svg
            class="w-24 absolute bottom-0 right-0"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 3384.54 2077.85"
            style="enable-background:new 0 0 3384.54 2077.85;"
            xml:space="preserve"
          >
            <defs id="defs840"></defs>
            <path
              class="st0"
              fill="#ffffff"
              d="M1461.26,739.84l-251.37,599.74h-164l-123.7-478.62c-7.51-29.48-14.04-40.28-36.88-52.7  c-37.29-20.23-98.87-39.21-153.05-50.99l3.68-17.43h263.99c33.65,0,63.9,22.4,71.54,61.15l65.33,347.04l161.46-408.2H1461.26z   M2103.84,1143.77c0.66-158.29-218.88-167.01-217.37-237.72c0.47-21.52,20.96-44.4,65.81-50.24c22.23-2.91,83.48-5.13,152.95,26.84  l27.25-127.18c-37.33-13.55-85.36-26.59-145.12-26.59c-153.35,0-261.27,81.52-262.18,198.25c-0.99,86.34,77.03,134.52,135.81,163.21  c60.47,29.38,80.76,48.26,80.53,74.54c-0.43,40.23-48.23,57.99-92.9,58.69c-77.98,1.2-123.23-21.1-159.3-37.87l-28.12,131.39  c36.25,16.63,103.16,31.14,172.53,31.87C1996.72,1348.96,2103.34,1268.45,2103.84,1143.77 M2508.78,1339.58h143.49l-125.25-599.74  h-132.44c-29.78,0-54.9,17.34-66.02,44l-232.81,555.74h162.91L2291,1250h199.05L2508.78,1339.58z M2335.67,1127.08l81.66-225.18  l47,225.18H2335.67z M1682.93,739.84l-128.29,599.74H1399.5l128.34-599.74H1682.93z"
              id="path835"
            ></path>
          </svg>
        </div>
        <button data-product="visaCustom" class="p-3 mx-auto w-full rounded-full text-center group-hover:bg-zinc-800 hover:text-indigo-300 hover:shadow-xl mt-4" @click="productClick">Buy me!</button>
      </div>
    </div>
  </div>
  <div v-if="open" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full backdrop-blur-md text-2xl text-white">
    <div
      @click="modalClick"
      class="relative top-1/3 mx-auto flex items-center p-4 w-full max-w-md h-full md:h-auto"
    >
      <div class="bg-zinc-400 rounded-xl p-10 w-full">
        <div class="flex items-center justify-between w-full font-semibold">
          <div class="text-sm font-dmsans">Almost finished!</div>
          <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" class="h-4 w-4">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <div class="text-sm p-2 pt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-14 h-14 mx-auto pb-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            ></path>
          </svg>
          Soon you'll enjoy your VISA gift card.
          Before we can send it to you, we need to finish one last compliance hurdle.
          We need to check your ID to proceed.
          <div
            class="mt-10 rounded-full mx-auto bg-zinc-800 text-center p-3 hover:shadow-xl hover:text-indigo-300 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              ></path>
            </svg>
            Start KYC verification
          </div>
          <div class="text-center text-xs pt-2 text-zinc-200">Secure ID check powered by Authologic</div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="checkoutModalOpen" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full backdrop-blur-md text-2xl text-white">
    <div
      
      class="relative top-1/3 mx-auto flex items-center p-4 w-full max-w-md h-full md:h-auto"
    >
      <div class="bg-zinc-400 rounded-xl p-10 w-full">
        <div class="flex items-center justify-between w-full font-semibold">
          <div class="text-sm font-dmsans">How much money you want on your card?</div>
          <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" class="h-4 w-4" @click="checkoutModalOpen = !checkoutModalOpen">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <div class="text-sm p-2 pt-6">
          Amount to transfer:
          <div class="flex items-center text-zinc-800 space-x-2 pt-2">
          <input class="w-2/3  rounded-l-md p-3 bg-zinc-100" value="100"/>
          <div class="flex-1 rounded-r-md p-3 bg-zinc-100">
          <select id="crypto" name="crypto" class="bg-zinc-100">
  <option value="eth">ETH</option>
  <option value="matic">Matic</option>
  <option value="usdc" selected>USDC</option>
  <option value="usdt">USDT</option>
</select>
</div>
</div>
          <div
            class="mt-10 rounded-full mx-auto bg-zinc-800 text-center p-3 hover:shadow-xl hover:text-indigo-300 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
</svg>


            Turn crypto into VISA card!
          </div>
          <div class="text-center text-xs pt-2 text-zinc-200"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ethers } from "ethers";
import plasticETHABI from "../../contracts/PlasticETH.json";

export default {
  name: "AppBody",
  components: {},
  data: () => ({
    open: false,
    checkoutModalOpen: false,
    selectedProduct: null,
  }),
  methods: {
    async productClick(event) {
      this.open = !this.open;
      this.selectedProduct = event.target.getAttribute("data-product");

      let provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const plasticETH = new ethers.Contract(
        '0xe968093Af7534cFe06bC423B552E774aE8Ac9725',
        plasticETHABI,
        signer
      )
      console.log(await plasticETH.buy({value: 1}));
    },
    async checkoutClick(event) {
        this.checkoutModalOpen = !this.checkoutModalOpen;
    },
    modalClick(event) {
      this.open = !this.open;
      this.selectedProduct = null;
    }
  }
};
</script>

<style>
</style>
