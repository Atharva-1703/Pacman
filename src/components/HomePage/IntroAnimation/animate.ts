export function animateIntro(): void {
  const pac = document.getElementById("pac") as HTMLElement | null;
  const startText = document.getElementById("start-text") as HTMLElement | null;
  const controls = document.getElementById("controls") as HTMLElement | null;
  const firstDash= document.getElementById("first-dash") as HTMLElement | null;
  const secondDash= document.getElementById("second-dash") as HTMLElement | null;
  const background= document.getElementById("background") as HTMLElement | null;
  const title= document.getElementById("title") as HTMLElement | null;
  const note= document.getElementById("note") as HTMLElement | null;
  const start= document.getElementById("start") as HTMLElement | null;
  

  const animations = [
    { time: 1000, actions: () => {
        firstDash?.classList.add("animate-fadeOut");
        pac?.classList.add("translate-x-[250px]");
      }},
    { time: 2500, actions: () => {
        pac?.classList.add("scale-[1.4]", "translate-y-[-240px]");
        background?.classList.add("opacity-30");
      }},
    { time: 4000, actions: () => {
        title?.classList.add("opacity-0");
        secondDash?.classList.add("animate-fadeOut");
        startText?.classList.toggle("opacity-100");
      }},
    { time: 5500, actions: () => {
        pac?.classList.remove("scale-[1.4]");
        pac?.classList.add("scale-[0.7]")
        startText?.classList.remove('text-[36px]')
        startText?.classList.toggle("text-[27px]");
        startText?.classList.remove("leading-[54px]");
        startText?.classList.toggle("leading-[37px]");
        controls?.classList.toggle("opacity-100");
        startText?.classList.add("translate-y-[180px]");
      }},
    { time: 7000, actions: () => {
        controls?.classList.add("translate-y-[-50px]");
        pac?.classList.toggle("translate-y-[-290px]");
        startText?.classList.toggle("opacity-100");
        note?.classList.toggle("opacity-100");
        start?.classList.remove("hidden");
        start?.classList.toggle("opacity-100");
      }},
  ];

  animations.forEach(({ time, actions }) => setTimeout(actions, time));
}
