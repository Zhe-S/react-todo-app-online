import React,{useState} from "react";

const Practice = () => {
  const [someText, setSomeText] = useState("Hallo Reacter!")
  const [names, setNames] = useState(["Manuel", "Christian", "Alina"])
  
  const handleWordChange = ()=>{
    setSomeText("Hallo Welt!");
  }

  const nameChanger = () =>{
      const newNamesArray = names.map( name => {
        return `Hello ${name}`
      })
      setNames(newNamesArray)
  }

return (
      <div className="nur-zum-lernen">
          <h3>Nur zum üben</h3>
          <p>{someText}</p>
          <button
            onClick={handleWordChange}
          >
            Ändere oberen Text
          </button>
          <ul>
            { names.map( (name, i) => {
              return <li key={i}>{name}</li>
            }) }
            {/* { [<li>Manuel</li>, <li>Christian</li>, <li>Alina</li>] } */}
          </ul>
          <button
            onClick={nameChanger}
          >
            Hello!
          </button>
        </div>
    );
}
export default Practice;
