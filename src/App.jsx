
import { useState } from 'react'
import './App.css'
import db from "./db/db.json"
import { getRandonPhrases } from './util/random'
import PhrasesBox from './components/PhrasesBox'

const listBg = ["bg1","bg2","bg3","bg4"]

function App() {
  const [Phrasesdb, setPhrasesdb] = useState(getRandonPhrases(db))
  const [changedbg, setChangedbg] = useState(getRandonPhrases(listBg))
  const handleChangePhrases = ( ) =>{
    setPhrasesdb(getRandonPhrases(db))
    setChangedbg(getRandonPhrases(listBg))
  }

  return (
    <main className={`app ${changedbg}`}>
      <PhrasesBox handleChangePhrases={handleChangePhrases} db={Phrasesdb}/>
    
    </main>
  )
}

export default App

