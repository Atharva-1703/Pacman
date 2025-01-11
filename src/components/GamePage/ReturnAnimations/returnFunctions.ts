

const updateMessageClassList = (pacRef: React.RefObject<HTMLDivElement>, classesToRemove: string[]) => {
  const message = document.getElementById("message");
  if (pacRef.current && message) {
    const originalClassList = [...pacRef.current.classList];
    const updatedClassList = originalClassList.filter(
      (className) => !classesToRemove.includes(className)
    );
    updatedClassList.push("hidden")
    message.className = updatedClassList.join(" ");
  }
};
export const messageMove=(toRemove:string,toAdd:string)=>{
  const message=document.getElementById("message");
  if(message){
    if(toRemove){

      message.classList.remove(toRemove);
    }
    if(toAdd){

      message.classList.add(toAdd);
    }
  }
}


const ReturnActions = (pacRef: React.RefObject<HTMLDivElement>) => [
  // ? return from 1st option
  ()=>{
     const message=document.getElementById("message");
     updateMessageClassList(pacRef,["-rotate-90","-scale-x-100"])
    setTimeout(() => {
      pacRef.current?.classList.remove("-scale-x-100");
      messageMove("hidden","")
    }, 1000);
    setTimeout(() => {
      pacRef.current?.classList.remove("translate-y-[140px]");
      pacRef.current?.classList.add("translate-y-[70px]");
      messageMove("translate-y-[140px]","translate-y-[70px]")
      
    }, 1500);
    setTimeout(() => {
      pacRef.current?.classList.remove("-rotate-90");
    }, 2000);
    setTimeout(() => {
      pacRef.current?.classList.remove("translate-x-[-20px]");
      pacRef.current?.classList.add("translate-x-[50px]");
      messageMove("translate-x-[-20px]","translate-x-[50px]")
    }, 2500);
    setTimeout(() => {
      pacRef.current?.classList.add("-rotate-90");
    }, 3000);
  },
  // ? return form 2nd option 
  () => {
    const message=document.getElementById("message");
     updateMessageClassList(pacRef,["-scale-x-100"])
     setTimeout(() => {
       pacRef.current?.classList.remove("-scale-x-100");
       messageMove("hidden","")
    }, 1000);
    setTimeout(() => {
      pacRef.current?.classList.remove("translate-x-[10px]");
      pacRef.current?.classList.add("translate-x-[140px]");
      messageMove("translate-x-[10px]","translate-x-[140px]")
    }, 1500);
    setTimeout(() => {
      pacRef.current?.classList.add("rotate-90");
    }, 2000);
    setTimeout(() => {
      pacRef.current?.classList.remove("translate-y-[-130px]");
      messageMove("translate-y-[-130px]","")
    }, 2500);
    setTimeout(() => {
      pacRef.current?.classList.remove("rotate-90");
      pacRef.current?.classList.add("-scale-x-100");
    }, 3000);
  },
  // ? return from 3rd option
  () => {
    const message=document.getElementById("message");
     updateMessageClassList(pacRef,["-scale-x-100"])
    setTimeout(() => {
      pacRef.current?.classList.add("-scale-x-100");
      messageMove("hidden","")
    }, 1000);
    setTimeout(() => {
      pacRef.current?.classList.remove("translate-x-[250px]");
      pacRef.current?.classList.add("translate-x-[200px]");
      messageMove("translate-x-[250px]","translate-x-[200px]")
    }, 1500);
    setTimeout(() => {
      pacRef.current?.classList.add("-rotate-90");
    }, 2000);
    setTimeout(() => {
      pacRef.current?.classList.remove("translate-y-[-90px]");
      messageMove("translate-y-[-90px]","")
    }, 2500);
    setTimeout(() => {
      pacRef.current?.classList.remove("-rotate-90");
    }, 3000);
  },
  // ? return from 4th option
  () => {
    const message=document.getElementById("message");
     updateMessageClassList(pacRef,["-scale-x-100"])
    setTimeout(() => {
      pacRef.current?.classList.add("-scale-x-100");
      messageMove("hidden","")
    }, 1000);
    setTimeout(() => {
      pacRef.current?.classList.remove("translate-x-[290px]");
      pacRef.current?.classList.add("translate-x-[250px]");
      messageMove("translate-x-[290px]","translate-x-[250px]")
    }, 1500);
    setTimeout(() => {
      pacRef.current?.classList.add("rotate-90");
    }, 2000);
    setTimeout(() => {
      pacRef.current?.classList.remove("translate-y-[130px]");
      messageMove("translate-y-[130px]","")
    }, 2500);
    setTimeout(() => {
      pacRef.current?.classList.remove("rotate-90");
    }, 3000);
  },
];

export default ReturnActions;
