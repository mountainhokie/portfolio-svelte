<script>
	import { pagename } from '../../stores';
  pagename.set('/work');
  console.log('pagename is', $pagename)
  let colSpan;
  let rowSpan;

  const items = [
    {
      img: "images/portfolio/comics-stash/thumb-large.png",
      title: "Comic Stash",
      subtitle: "Web app for managing a small comic book collections.",
      url: "/case-study/comics-stash",
    },
    {
      img: "images/portfolio/meritage/thumb.png",
      title: "Meritage Collection",
      subtitle: "Concrete5 based Hotel Chain website and CMS",
      url: "/case-study/meritage",
      featured: true,
    },
    {
      img: "images/portfolio/garage-manager/thumb-large.png",
      title: "Garage Manager",
      subtitle: "PWA for managing a small garage.",
      url: "/case-study/garage-manager",
    },
    {
      img: "images/portfolio/olivella/thumb-large.png",
      title: "Olivella Restaurant",
      subtitle: "Award winning restaurant website.",
      url: "/case-study/olivella",
      featured: true,
    },
    {
      img: "images/portfolio/react-plain-toast/thumb-large.png",
      title: "React Plain Toast",
      subtitle: "Node Package for React Plain Toast",
      url: "/case-study/react-plain-toast",
    },
    {
      img: "images/portfolio/ev-builder/thumb-large.png",
      title: "EV Builder",
      subtitle: "Web app for Electric Vehicle Conversions.",
      url: "/case-study/ev-builder",
    },
  ];


</script>

<div class="mx-auto max-w-screen-lg pt-8 md:pt-16 text-white">
  <h1
    class="mb-10 text-3xl md:mb-24 md:text-6xl font-headings pl-8"
  >
    Work
  </h1>

  <main
    class="mb-16 mx-8 md:mx-0 p-8 text-white bg-[#101010] rounded-lg"
  >
    <h2 class="mb-8 text-3xl text-light-blue font-headings pl-4 md:pl-0">
      Case Studies
    </h2>

    <div class="md:grid md:grid-rows-2 md:grid-cols-12 md:grid-flow-row md:gap-4 ">

      {#each items as item, index}
      <div
      class="overflow-hidden relative mb-6 md:mb-0 rounded-lg {index === 1 || index === 3 ? 'col-span-8' : 'col-span-4'} {rowSpan = index === 1 || index === 3 ? "row-span-2" : ""} bg-light-blue group/item"
    >
      <a href={item.url}>
        <img
        alt={item.title}
          src={item.img}
          class="h-full transform transition duration-1000 group-hover/item:scale-125"
        />
        <div class="p-1 px-4 md:p-4 absolute bottom-0 md:-bottom-full group-hover/item:bottom-0 bg-light-blue md:opacity-0 duration-300 w-full group-hover/item:opacity-100">
          {item.title} - {item.subtitle}
        </div>
      </a>
    </div>

      {/each}
    </div>
  </main>
</div>

