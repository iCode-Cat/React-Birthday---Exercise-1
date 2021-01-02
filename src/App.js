import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [birthday, setBirthday] = useState(data)

  return (
    <main>
      <section className="container">
        <h3>{birthday.length} birthdays left</h3>
        <List birthday={birthday} />
        <button onClick={()=>setBirthday([])}>Clear All</button>
      </section>
      
    </main>
  )
}

export default App;
