import { RouterProvider } from "react-router-dom"
import { MainRoute } from "./Router/MainRoutes"


const App = () => {
  return (
    <div>
       <RouterProvider router={MainRoute}/>
    </div>
  )
}

export default App
