import * as React from 'react'

function Name() {
  const [name, setName] = React.useState('')
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={e => setName(e.target.value)} />
    </div>
  )
}

// 🐨 aceite as props `animal` e `onAnimalChange` neste componente
function FavoriteAnimal({animal, onAnimalChange}) {
  // 💣 delete this, it's now managed by the App
  //const [animal, setAnimal] = React.useState('')
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        animal={animal}
        onChange={onAnimalChange}
        // onChange={event => setAnimal(event.target.value)}
      />
    </div>
  )
}

// 🐨 descomente isso
function Display({animal}) {
  //return <div>{`Olá ${name}, seu animal favorito é: ${animal}!`}</div>
  return <div>{`Olá, seu animal favorito é: ${animal}!`}</div>
}


// 💣 exclua esse componente e use o novo
// function Display({name}) {
//   return <div>{`Hey ${name}, you are great!`}</div>
// }

function Exercicio03() {
  // 🐨 adicione um useState para o animal
  const [animal, setAnimal] = React.useState('')
  return (
    <form>
      <Name/>
      {/* 🐨 passe o animal e a prop onAnimalChange aqui (similar ao componente Name acima) */}
      <FavoriteAnimal animal={animal} onAnimalChange={e => setAnimal(e.target.value)} />
      {/* 🐨 passe a prop do animal aqui */}
      <Display animal={animal}/>
    </form>
  )
}

export default Exercicio03