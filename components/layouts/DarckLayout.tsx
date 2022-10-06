import { FC, PropsWithChildren } from "react"


export const DarckLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
   <div style = {{
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: '5px',
    padding: '10px',
   }}>
    <h3> Darck - Layout </h3>
    { children }
   </div>
  )
}
