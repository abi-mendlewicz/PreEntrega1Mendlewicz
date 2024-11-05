import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1 className="py-4 px-6 text-3xl text-blue-900 font-bold">
          Productos
        </h1>
        <ItemListContainer greeting='Próximamente podrás ver aquí el listado de todos nuestros productos!' />
      </main>
      <footer />
    </>
  )
}

export default App