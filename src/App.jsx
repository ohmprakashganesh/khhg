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
// import ProductList from './products/Products'
// import TodoApp from './todo/Todo'

function App() {
  return (
    <>
      {/* <Navbar1 /> */}

      <CounterProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Form />} />

















            <Route path='/products' element={<Products />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='/' element={<Form />} />
          </Routes>
        </BrowserRouter>
      </CounterProvider>
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
