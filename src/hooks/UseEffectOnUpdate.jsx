import { useEffect, useRef } from "react"


function useEffectOnUpdate(callback, dependenciesArray) {
    const firstRender = useRef(true)
    useEffect(() => {
        if(firstRender.current) {
          firstRender.current = false
        } else {
          callback()
        }
      }, dependenciesArray)
}

export default useEffectOnUpdate
