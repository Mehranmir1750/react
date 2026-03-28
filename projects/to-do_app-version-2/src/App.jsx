import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import './App.css';
import Todoitem from "./components/Todoitem";
function App() {
 
  return <center>
    
    <AppName/>

    <AddTodo/>

    <Todoitem TodoName="buy milk" TodoDate="28/03/2026"></Todoitem>
    <Todoitem TodoName="Go to School" TodoDate="13/03/2026"></Todoitem>
  



  </center>

}

export default App
