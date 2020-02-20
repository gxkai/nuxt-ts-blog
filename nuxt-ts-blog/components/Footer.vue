<template>
  <footer id="footer" class="bg-black fixed bottom-0 w-full z-50">
    <div class="container  mx-auto hidden md:flex items-center px-2">
      <div class="w-full mx-auto flex flex-wrap items-center">
        <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          <a class="text-black no-underline hover:text-black hover:no-underline" href="#">
            👻 <span class="text-base text-green-500"> {{$store.state.title}}</span>
          </a>
        </div>
        <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
          <ul class="list-none flex justify-center flex-1 md:flex-none items-center">
            <li>
              <a
                class="inline-block py-2 px-3 text-white no-underline"
                href="https://juejin.im/user/59f900066fb9a044fa192a6a"
                target="_blank"
                >掘金</a
              >
            </li>
            <li>
              <a
                class="inline-block py-2 px-3 text-white no-underline"
                href="            https://github.com/gxkai
"
                target="_blank"
                >Github</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
