import React, { useState } from 'react';


function Heroes() {
    const [names, setNames] = useState([
        "Шерлок Холмс",
        "Доктор Ватсон",
        "Профессор Мориарти",
        "Миссис Хадсон",
        "Ирен Адлер"
      ]);
    
      return (
        <div>
          <h2>Список героев:</h2>
          <ul>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      );
  }
  
  export default Heroes;