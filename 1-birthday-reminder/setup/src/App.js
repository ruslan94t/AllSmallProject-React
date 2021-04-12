import React, { useState } from 'react';
import data from './data';
import List from './List';




function App() {

    const  clearAllList = ()=>{
        setPerson([]);
    }



const [person, setPerson]=useState(data)


    return (<main>

         <section className="container">
             <h3>{person.length} birthdays today</h3>
             <List person={person} />
             <button
             onClick={clearAllList}
             >
                 clear all
             </button>

        </section>



    </main>);
}

export default App;
