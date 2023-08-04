
import {useState} from "react";
import data from "./data.js";
import {List} from "./List.jsx";


const App = () => {
 const [tours, setTour] = useState(data) ;

  return <main>
   <section className={'container'}>
    <h3>
     {tours.length} Tours today

    </h3>
    <List tours={tours}/>
    <button type={'button'} className={'btn btn-block'} onClick={() => setTour([])}>
     Clear List
    </button>
   </section>
  </main>;
};
export default App;
