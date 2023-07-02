import logo from './logo.svg';
import banner from "./assets/banner.png";
import Card from './components/Card';
import { createSignal } from 'solid-js';

function App() {

  const [name, setName] = createSignal('luigi');
  const [bool, setBoolean] = createSignal(true);
  const [age, setAge] = createSignal(25);
  const [person, setPerson] = createSignal({
    name: {
      first: 'brandon',
      last: 'sanderson'
    },
    age: 45
  })

  setTimeout(() => {
    setName('mario');
  }, 1000);

  setTimeout(() => {
    // setBoolean(false);
    setBoolean(!bool())
    setBoolean((prev) => !prev)
  }, 1000);

  setInterval(() => {
    setAge(age() + 1)
  }, 1000);

  return (
    <div class='container m-auto'>
      <header>
        <h1>Ninja Merch - {name()} - {JSON.stringify(bool())} - {age()}</h1>
        <p>{person().name.first} {person().name.last}</p>
      </header>

      <img class='rounded-md' src={banner} alt="site banner" />

      <div class='grid grid-cols-4 gap-10 my-4'>
        <Card rounded={true} flat={false} >
          <h2>ninja tee, Black</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse totam, debitis voluptate dolorem non beatae ex eaque laboriosam autem corporis laudantium dolores iste temporibus officiis tempore odio quisquam ipsam eos?</p>
          <button class="btn">View</button>
        </Card>

        <Card rounded={false} flat={true} >
          <h2>ninja tee, White</h2>
          <button class="btn">Click me!</button>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse totam, debitis voluptate dolorem non beatae ex eaque laboriosam autem corporis laudantium dolores iste temporibus officiis tempore odio quisquam ipsam eos?</p>
        </Card>

      </div>

    </div>
  );

}

export default App;
