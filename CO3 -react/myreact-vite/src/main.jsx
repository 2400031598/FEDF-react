import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MaterialUI from './MaterialUI'
//import Redux from './Redux'
//import ReusableComponent from './ReusableComponent'
//import ReactRouter from './assets/ReactRouter'
//import ChildtoParent from './ChildtoParent'
//import Form from './Form'
//import Timer from './Timer'
//import ListRender from './ListRender'
//import App from './App.jsx'
//import App2 from './App2.jsx'
//import App3 from './App3.jsx'
//import PropsDemo from './PropsDemo.jsx'
//import NonStateObject from './NonStateObject.jsx'
//import StateObjectDemo from './StateObjectDemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MaterialUI />
  </StrictMode>,
)
