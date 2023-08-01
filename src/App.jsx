import './App.css';
import MarkDownInput from './components/MarkdownInput';
import NavBar from './components/NavBar';

function App() {

  return (
      <div className='fullContainer'>
        <nav>
          <NavBar/>
        </nav>
        <main>
          <MarkDownInput/>
        </main>
      </div>
  )
}
export default App
