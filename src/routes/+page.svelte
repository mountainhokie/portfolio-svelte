<script>
	import { pagename } from '../stores';
  pagename.set('/');
</script>


<div class="container-home md:grid grid-cols-2 sm:text-3xl md:text-6xl">
  <div
    class="text-center mx-auto my-10 me static left:0 right:0 md:fixed md:my-0 z-[100] md:left-1/2 md:top-1/2 md:-translate-x-1/2	md:-translate-y-1/2	"
  >
    <img
      src="/images/me.jpg"
      alt="Justin"
      class=" border-solid border-2 border-sky-500 rounded-full"
    />
    <div class="quick-links">
      <!-- <Social /> -->
      <div class="mt-6 text-sm flex justify-center">
        <a
          href="/pdf/Resume-JustinBrooks-SeniorWebDeveloper.pdf"
          download
          class="py-2 px-4 bg-white rounded-md font-bold hover:bg-dark-grey hover:text-white"
        >
          <svg
            class="h-8 w-8 inline-block"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
            <line x1="12" y1="11" x2="12" y2="17" />
            <polyline points="9 14 12 17 15 14" />
          </svg>
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  </div>
  <div
    class="home-grid-item py-3 mx-3 md:mx-0 mb-3 md:mb-0 md:h-[50vh] About border-solid border-2 border-sky-500 rounded-md md:rounded-none"
  >
    <a
      href="/about"
      class="h-full w-full block flex items-center justify-center text-3xl font-headings md:text-6xl hover:text-white"
    >
      About
</a>
  </div>
  <div
    class="home-grid-item py-3 mb-3 mx-3 md:mx-0 md:mb-0 md:h-[50vh] Work border-solid border-2 border-sky-500 rounded-md md:rounded-none"
  >
    <a
      href="/Experience"
      class="h-full w-full block flex items-center justify-center text-3xl font-headings md:text-6xl hover:text-white"
    >
      Experience
</a>
  </div>
  <div
    class="home-grid-item py-3 mb-3 mx-3 md:mx-0 md:mb-0 md:h-[50vh] Experience border-solid border-2 border-sky-500 rounded-md md:rounded-none"
  >
    <a
      href="/work"
      class="h-full w-full block flex items-center justify-center text-3xl font-headings md:text-6xl  hover:text-white"
    >
      Work
</a>
  </div>
  <div
    class="home-grid-item py-3 mx-3 md:mx-0 md:h-[50vh] Resume border-solid border-2 border-sky-500 rounded-md md:rounded-none"
  >
    <a
      href="/contact"
      class="h-full w-full block flex items-center justify-center text-3xl font-headings md:text-6xl hover:text-white"
    >
      Contact
</a>
  </div>
</div>
