<script>
	import { pagename } from '../../stores';
  pagename.set('/about');
  console.log('pagename is', $pagename)
</script>

<div class="mx-auto max-w-screen-lg pt-8 md:pt-16 text-white">
  <h1
    class="mb-16 text-3xl md:mb-24 md:text-6xl font-headings pl-8"
  >
    About
  </h1>
  <div class="md:grid grid-cols-12 gap-4 p-8 text-black">
    <aside
      class="col-span-4 mb-8 pb-8 md:mb-0 text-white bg-[#101010] rounded"
    >
      <img
         src="/images/me.jpg"
        alt="Justin"
        class="-mt-16 mx-auto border-solid border-2 border-sky-500 rounded-full"
      />
      <ul class="space-y-2 mt-16 px-8">
        <li>
          <a
            href="mailto:jubrook1@vt.edu"
            class="group flex text-md font-medium text-zinc-800 transition hover:text-light-blue dark:text-zinc-200 dark:hover:text-light-blue"
          >
            <svg
              class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:group-hover:text-light-blue"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span class="ml-3">jubrook1@vt.edu</span>
          </a>
        </li>
        <li class="pb-4 group flex text-md font-medium">
          <svg
            class="flex-shrink-0 w-6 h-6 text-white transition duration-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span class="flex-1 ml-3 text-left whitespace-nowrap">
            Blacksburg, Va
          </span>
        </li>
        <li class="border-t border-[#3f3f46] pt-8 dark:border-zinc-700/40 flex">
          <a
            class="group flex text-md font-medium text-zinc-800 transition hover:text-light-blue dark:text-zinc-200 dark:hover:text-light-blue"
            href="https://github.com/mountainhokie"
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="h-6 w-6 flex-none fill-white transition group-hover:fill-light-blue"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
              ></path>
            </svg>
            <span class="ml-4 leading-6">Follow on GitHub</span>
          </a>
        </li>
        <li class="flex">
          <a
            class="group flex text-md font-medium text-zinc-800 transition hover:text-light-blue dark:text-zinc-200 dark:hover:text-light-blue"
            href="https://www.linkedin.com/in/justin-brooks-a1046119/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="h-6 w-6 flex-none fill-white transition group-hover:fill-light-blue"
            >
              <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
            </svg>
            <span class="ml-4 leading-6">Follow on LinkedIn</span>
          </a>
        </li>
        <li class="flex">
          <a
            class="group flex text-md font-medium text-zinc-800 transition hover:text-light-blue dark:text-zinc-200 dark:hover:text-light-blue"
            href="https://codepen.io/jbrooksdev/"
            aria-label="Codepen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 flex-none transition group-hover:stroke-light-blue"
            >
              <title>CodePen</title>
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
              <line x1="12" y1="22" x2="12" y2="15.5"></line>
              <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
              <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
              <line x1="12" y1="2" x2="12" y2="8.5"></line>
            </svg>
            <span class="ml-4 leading-6">Follow on CodePen</span>
          </a>
        </li>
        <li class="flex">
          <a
            class="group flex text-md font-medium text-zinc-800 transition hover:text-light-blue dark:text-zinc-200 dark:hover:text-light-blue"
            href="https://stackblitz.com/@mountainhokie"
            aria-label="Stackblitz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="h-6 w-6 flex-none fill-white transition group-hover:fill-light-blue"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span class="ml-4 leading-6">Follow on Stackblitz</span>
          </a>
        </li>
      </ul>
    </aside>
    <main
      class="p-8  col-span-8 text-white bg-[#101010] rounded"
    >
      <h2 class="mb-8 text-3xl text-light-blue font-headings">
        Dev History
      </h2>
      <p class="mb-4 font-display">
        I&lsquo;m Justin. I&lsquo;m a web developer specializing in
        Javascript and React based projects, but can contribute to
        projects of all types.
      </p>
      <p class="mb-4 font-display">
        I built my first personal website in 1998. In 2005 after
        graduating Virginia Tech I took my first professional web
        developer position at the start-up, E-Site Marketing. I continued
        working in the professional field as an employee until 2019. In
        2019 I decided to leave web development professionally and take on
        a new career in woodworking. In 2020 I opened my own woodworking
        shop and continued until December 2022. During that time I
        continued web development for personal projects and the occasional
        freelance opportunity. At the beginning of 2023 I decided to go
        back to web development full-time after a foot injury that kept me
        from running my business. Running my own business was a great
        learning experience and I hope to apply the knowledge I gained to
        future web development projects.
      </p>
      <p class="mb-12 font-display">
        I&lsquo;m currently accepting new work,
        <a href="mailto:jubrook1@vt.edu"
          class="hover:underline underline-offset-8"
        >
          contact me
      </a>
        for more details.
      </p>
      <h2 class="mb-8 text-3xl text-light-blue font-headings">
        Personal Stuff
      </h2>
      <p class="mb-4 font-display">
        I&lsquo;ve enjoyed woodworking for most of my life. Woodworking
        started out as a hobby, but eventually became a business. Even
        though I no longer work in woodworking I still enjoy the
        occasional woodworking project.
      </p>
      <p>
        I&lsquo;m also a motorsport enthusiast. I love motorsports of all
        kinds and enjoy trying my hand on occassion. I&lsquo;m currently
        building a 2003 Mini Cooper S for HillClimb racing. In the future
        I hope to convert an old dodge truck to an electric vehicle.
      </p>
    </main>
  </div>
</div>