import React, {useState, useEffect} from 'react'
import Header from './Header'
import Container from './Container'
import Footer from './Footer'
import menuService from '../services/menu'
import stringsService from '../services/strings'

function App() {
  const [menu, setMenu] = useState([])
  const [strings, setStrings] = useState([])

  useEffect(() => {
    menuService
          .getAll()
          .then(menu => {
            console.log(menu)
            setMenu(menu)
          })
  }, [])

  useEffect(() => {
    stringsService
          .getAll('EN')
          .then(strList => {
            console.log(strList)
            setStrings(strList)
          })
  }, [])

  return (
    <div className="app"> 
      <Header menu={menu} strings={strings} />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
