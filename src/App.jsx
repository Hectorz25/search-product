import './components-css/NavBar.css'
import './components-css/SearchTable.css'
import './components-css/SearchInput.css'

import { NavBar } from './components/NavBar'
import { SearchInput } from './components/SearchInput'
import { SearchTable } from './components/SearchTable'

function App() {

  return (
    <>
      <NavBar/>
      <SearchInput/>
      <SearchTable/>
    </>
  )
}

export default App
