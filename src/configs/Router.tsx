import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavigationConfig from './NavigationConfig'

const Home = lazy(()=> import('../pages/home'))

export default function Router(){
  return <Routes>
    {/* this routes doesn't exists in NavigationConfig.tsx, so we need to add them manually. */}
    <Route path="/" element={<Home/>} />

    {/* 
      This maps all routes from NavigationConfig.tsx dinamically.
      
      Note: need to verify performance impact.
    */}
    {Object.keys(NavigationConfig).map((key:string)=>{
      return NavigationConfig[key].children.map((child:any, index:number)=>{
        return <Route path={child.path} element={lazy(()=> import(`../pages${child.path}`))}/>
      })
    })}

  </Routes>
} 