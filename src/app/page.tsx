import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col mt-10 xl:mx-20 mx-10 my-20 ">
    <h1 className="text-4xl my-5 flex items-center justify-center">Governor Sindh Cards</h1>
    <div className="flex flex-wrap justify-between mt-10 m-3 sm:m-0 sm:gap-0 gap-3">
      
        <Image
          className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover sm:w-[32%] w-full"
          src="/images/card1.jpg"
          alt="Card 1"
         width="1088" height="896"
        />
      
      
        <Image
          className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover sm:w-[32%] w-full"
          src="/images/card2.jpg"
          alt="Card 2"
         width="1088" height="896"
        />
      
      
        <Image
          className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover sm:w-[32%] w-full"
          src="/images/card3.jpg"
          alt="Card 3"
         width="1088" height="896"
        />
      
    </div>

    <h1 className="text-4xl my-5 flex items-center justify-center mt-20">Governor Second Cards</h1>
    <div className="grid xl:grid-cols-2 sm:grid-cols-3 grid-cols-1 xl:gap-10 gap-5 mt-10">
    <a className="hover:scale-105 duration-200 transition-all" href="/tracks/ai/4">
        <Card/>
    </a>
    <a className="hover:scale-105 duration-200 transition-all" href="/tracks/ai/4">
        <Card/>
    </a>
    <a className="hover:scale-105 duration-200 transition-all" href="/tracks/ai/4">
        <Card/>
    </a>
    <a className="hover:scale-105 duration-200 transition-all" href="/tracks/ai/4">
        <Card/>
    </a>
    <a className="hover:scale-105 duration-200 transition-all" href="/tracks/ai/4">
        <Card/>
    </a>
    <a className="hover:scale-105 duration-200 transition-all" href="/tracks/ai/4">
        <Card/>
    </a>
    <a className="hover:scale-105 duration-200 transition-all" href="/tracks/ai/4">
        <Card/>
    </a>
  
</div>
  </div>
  
  );
}
{/* <div className=" bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
  <Image className="w-full h-auto rounded-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Card Image"/>
 
</div> */}