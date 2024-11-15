import './components/card-produto/style.css'
import banner from '../src/images/banner com texto.png'
import Produtos from './pages/produtos'

function App() {

  return (
    <>
      <header>
        <img id='banner' src={banner} alt="" />
      </header>

      <main>
        <h2 className='title'>Produtos</h2>

        <section className='cards'>
          <Produtos/>
        </section>
      </main>
    </>
  )
}

export default App
