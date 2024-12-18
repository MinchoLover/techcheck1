import { Route, Routes } from "react-router-dom";
import Add from "./Add";
import Home from "./components/MindMap";


function MyRouter(){

  return(
      <Routes>
        <Route path="/" component={<Home/>}/>
        <Route path="/add" component={<Add/>} element="추가페이지"/>
      </Routes>
  );
}

export default MyRouter;