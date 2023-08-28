<script>
// @ts-nocheck
import { pagename } from '../stores';
  import "../app.css";
  let menuVis = true;

  function handleMenu() {
    console.log('handleMenu')
  }
</script>


{#if $pagename!=='/'}
<nav class="border-gray-200 bg-[#101010] md:bg-transparent">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div class="flex md:order-2">
      <button
        data-collapse-toggle="navbar-search"
        type="button"
        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-search"
        aria-expanded="false"
      >
        <span class="sr-only">Open menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <div
      class="items-center justify-between {
        menuVis ? "block" : "hidden"
      } w-full md:flex md:w-full md:order-1"
      id="navbar-search"
    >
      <ul class="flex flex-col justify-center w-full p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 ">
        <li>
          <a
          href="/"
            class="{
              $pagename === "/" ? "text-light-blue" : "text-white"
            } block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:underline underline-offset-8"
            aria-current="{pagename === "/" ? "current" : "false"}"
            on:click={handleMenu}
            
          >
            Home
          </a>
        </li>
        <li>
          <a
          href="/about"
            class="{
              $pagename === "/about" ? "text-light-blue" : "text-white"
            } block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:underline underline-offset-8"
            onClick={handleMenu}
            aria-current={pagename === "/about" ? "current" : "false"}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/experience"
            class="{
              $pagename === "/experience" ? "text-light-blue" : "text-white"
            } block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:underline underline-offset-8"
            onClick={handleMenu}
            aria-current={pagename === "/experience" ? "current" : "false"}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="/work"
            class="{
              $pagename === "/work" || /case-study/g.test(pagename) ? "text-light-blue" : "text-white"
            } block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:underline underline-offset-8"
            onClick={handleMenu}
            aria-current={
              pagename === "/work" || /case-study/g.test(pagename)
                ? "current"
                : "false"
            }
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="/contact"
            class="{
              $pagename === "/contact" ? "text-light-blue" : "text-white"
            } block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:underline underline-offset-8"
            onClick={handleMenu}
            aria-current={pagename === "/contact" ? "current" : "false"}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{/if}

<slot />
