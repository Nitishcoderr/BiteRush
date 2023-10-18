import { useEffect, useState } from "react";

const useOnlinestatus = ()=>{

    const [onlineStatus, setOnlineStatus] = useState(true)

    // Check if online or offline

    useEffect(() => {
      window.addEventListener("offline",()=>{
        setOnlineStatus(false)
      })

      window.addEventListener("online",()=>{
        setOnlineStatus(false)
      })
    }, [])
    
    
    return onlineStatus;
}


export default useOnlinestatus;