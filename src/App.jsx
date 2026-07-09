import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Calculator from './calculator/Calculator';
import Counter from './counter/Counter';
// import Calculator from './calculator/Calculator'
// import LibrarySelect from './components/Select'
// import Footer from './footer/Footer'
// import Form from './form/Form'
// import Landing from './HomePage/Landing'
// import Landing2 from './HomePage/Landing2'
// import Navbar from './navbar/Navbar'
import Navbar1 from './navbar1/Navbar1'
import TodoApp from './todo/Todo';
import Form from './form/Form';
import Products from './products/Products';
import Prods from './prod/Prods';
import { CounterProvider } from './context/CounterContext';
import Navbar from './navbar/Navbar';
import TestCss from './counterApp/TestCss';
import Tuesday from './tuesday/Tuesday';
import Tuesday2 from './tuesday/Tuesday2';
import Footer from './footer/Footer';
// import ProductList from './products/Products'
// import TodoApp from './todo/Todo'

function App() {
  return (
    <>
 {/* <Navbar/> 
 <Counter  /> 

 <Form /> */}
 <Products />

 {/* <Footer />  */}
    </>
  )
};
export default App;





{/* <Navbar/> */ }
{/* <CounterApp  /> */ }
{/* <Landing /> */ }
{/* <Landing2 />
  <Footer /> */}

{/* <Form /> */ }

{/* <TodoApp /> */ }

{/* <Calculator /> */ }

{/* <LibrarySelect /> */ }


{/* <ProductList /> */ }



//  </>
//   )
// }

// export default App
