import React, { createContext } from "react"

export interface IImmerContainerProps {
    children?: React.ReactNode,
}

export const immerContext = createContext<IImerContext>({} as IImerContext)

export interface IImerContext {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ImmerContainer = (
    {
        children
    }: IImmerContainerProps
) => {

    const [open, setOpen] = React.useState<boolean>(true)

    return (
        <immerContext.Provider value={{
            open: open,
            setOpen: setOpen
        }}>
            {children}
        </immerContext.Provider>
    )
}

export default ImmerContainer;