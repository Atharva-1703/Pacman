
const ReturnActions = (pacRef: React.RefObject<HTMLDivElement>) => [
  // ? return from 1st option
   ()=>{
    setTimeout(() => {
      pacRef.current?.classList.remove("scale-x-[-1]");
    }, 1000);
    setTimeout(() => {
      pacRef.current?.classList.remove("translate-y-[140px]");
      pacRef.current?.classList.add("translate-y-[70px]");
      
    }, 1500);
    setTimeout(() => {
      pacRef.current?.classList.remove("rotate-[-90deg]");
    }, 2000);
    setTimeout(() => {
      pacRef.current?.classList.add("translate-x-[50px]");
        pacRef.current?.classList.remove("translate-x-[-20px]");
    }, 2500);
    setTimeout(() => {
      pacRef.current?.classList.add("-rotate-90");
    }, 3000);
  },
  // ? return form 2nd option 
  () => {
    setTimeout(() => {
      pacRef.current?.classList.remove("scale-x-[-1]");
    }, 1000);
    setTimeout(() => {
      pacRef.current?.classList.remove("translate-x-[10px]");
      pacRef.current?.classList.add("translate-x-[140px]");
    }, 1500);
    setTimeout(() => {
      pacRef.current?.classList.add("rotate-90");
    }, 2000);
    setTimeout(() => {
      pacRef.current?.classList.remove("translate-y-[-130px]");
    }, 2500);
    setTimeout(() => {
      pacRef.current?.classList.remove("rotate-90");
      pacRef.current?.classList.add("scale-x-[-1]");
    }, 3000);
  },
  // ? return from 3rd option
  () => {
    setTimeout(() => {
      pacRef.current?.classList.add("scale-x-[-1]");
    }, 1000);
    setTimeout(() => {
      pacRef.current?.classList.remove("translate-x-[250px]");
      pacRef.current?.classList.add("translate-x-[200px]");
    }, 1500);
    setTimeout(() => {
      pacRef.current?.classList.add("-rotate-90");
    }, 2000);
    setTimeout(() => {
      pacRef.current?.classList.remove("translate-y-[-90px]");
    }, 2500);
    setTimeout(() => {
      pacRef.current?.classList.remove("-rotate-90");
    }, 3000);
  },
  // ? return from 4th option
  () => {
    setTimeout(() => {
      pacRef.current?.classList.add("scale-x-[-1]");
    }, 1000);
    setTimeout(() => {
      pacRef.current?.classList.remove("translate-x-[290px]");
      pacRef.current?.classList.add("translate-x-[250px]");
    }, 1500);
    setTimeout(() => {
      pacRef.current?.classList.add("rotate-90");
    }, 2000);
    setTimeout(() => {
      pacRef.current?.classList.remove("translate-y-[130px]");
    }, 2500);
    setTimeout(() => {
      pacRef.current?.classList.remove("rotate-90");
    }, 3000);
  },
];

export default ReturnActions;
