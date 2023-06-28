import logo from './logo.svg';
import banner from "./assets/banner.png";
import Card from './components/Card';

function App() {

  return (
    <div class='container m-auto'>
      <header>
        <h1>Ninja Merch</h1>
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
