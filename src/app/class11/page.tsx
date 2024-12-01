"use client"
import Button from "@/components/button"
import { useState } from "react"

const ClassEleven = () => {

    // state : current information of component 

    // react hooks: predefined (jo react ma phly sy bna kr rkhy hwy hain) react functions use to get cureent information about component 
    
    // use state(): 
    
    // use Effect(): 
    
    // use Memo(): 

    // use Callback(): 
    
    
    const [counter,setcounter] = useState<number>(0)
       const increment =()=>{
        setcounter(counter + 1)

       }
       const decrement=()=>{
            // counter 0 sy bara hoto jb hi decrement ho
            if(counter > 0 ){
                setcounter(counter-1)
            }

       }
       const reset=()=>{
            // counter 0 sy bara hoto jb hi decrement ho
            setcounter(0)
            

       }

    return (
        // <div className="mx-2 grid xs:grid-cols-2 sm:grid-cols-3  gap-6">
        //     <div className="bg-slate-400 h-40  mt-2">
                
        //     </div>
        //     <div className="bg-slate-500 h-40  mt-2">

        //     </div>
        //     <div className="bg-slate-600 h-40  mt-2">

        //     </div>
        //     <div className="bg-slate-700 h-40  mt-2">

        //     </div>
        // </div>
        <div className="flex flex-col h-screen justify-center items-center">
            <h1 className="text-4xl">
                {counter}
            </h1>

            <div className="grid sm:grid-cols-3 gap-3 w-[70%] mt-5">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
                <Button onClick={reset}>Rest</Button>
            </div>
        </div>
    )
}
export default ClassEleven
