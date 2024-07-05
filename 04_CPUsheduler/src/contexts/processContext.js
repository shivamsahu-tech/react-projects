import React from "react";
import { useContext } from "react";


export const processContext = React.createContext({
    processes: [],
    helper: [],
    type: '',
    setType: () => {},
    setProcess: () => {},
    makeHelper: () => {},
    setComplete: () => {},
    addProcess: () => {}
})

export const ProcessContextProvider = processContext.Provider;


export function useProcess(){
    return useContext(processContext)
}