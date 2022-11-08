import Welcome from "./components/Welcome";

const names = ['Brad', 'Gabby', 'Art', 'Gerly', 'Jonathan']
function App() {
  return (
    <>
    <h1>Passing Props</h1>
    {names.map(name => (
      <Welcome name='Fanessa' />
      <Welcome name={name[4]} />
      <hr />
      {names.map(fname => ( 
        <Welcome key={fname} name={fname} />

      ))}
    ))}
    
    </>
  );
}

export default App;

/*
    <Welcome name={names[0]} greeting="Welcome back"/>
    <Welcome name={names[1]} greeting="Thanks for coming"/>
    <Welcome name={names[2]} greeting="Thanks for helping"/>
    <Welcome name="Gerly" greeting="You rock"/>
  */

