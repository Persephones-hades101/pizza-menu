import './index.css'


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];






function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const styles = { color: 'green', fontSize: 48, textTransform: "uppercase" }
  const styles = {}
  return <header className='header'>
    <h1 style={styles} >Fast React Pizza Co.</h1>
  </header>
}

function Menu() {
  const noOfPizzas = pizzaData.length
  return <main className='menu'>
    <h2>Our Menu</h2>
    {noOfPizzas > 0 ? (
      <>
        <p>Authentic Italian Cuisine. 6 Creative dishes to choose from. All from our stone oven, all organic, all delicious</p>
        <ul className='pizzas'>
          {
            pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))
          }
        </ul>
      </>

    ) : (
      <p>We're still working on our Menu. Please Come back Later :)</p>
    )}


  </main>
}

function Pizza(props) {
  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>
          {props.pizzaObj.name}
        </h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.price + 3}</span>
      </div>
    </li>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen)
  return <footer className='footer'>
    {/* {isOpen && (<p>We're open until {closeHour}:00. Come visit us or order online</p>)} */}
    {isOpen ? <Order closeHour={closeHour} /> : (<p>Sorry we're currently closed. We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>)}
  </footer>
}

function Order(props) {
  return (
    <div className='order'>
      <p>We're open until {props.closeHour}:00. Come visit us or order online</p>
      <button className='btn'>Order</button>
    </div>
  )
}


export default App;
