import { useState } from "react";
import { food } from "./food";

const App = () => {
  const [menu, setmenu] = useState(food);

  const menuHandler = (category) => {
    const newMenu = food.filter((item) => category === item.category);
    setmenu(newMenu);
  };

  return (
    <>
      <header>
        <h1>Food Menu</h1>
        <div>
          <button className="btn" onClick={() => setmenu(food)}>
            All
          </button>
          <button className="btn" onClick={() => menuHandler("lunch")}>
            Lunch
          </button>
          <button className="btn" onClick={() => menuHandler("dinner")}>
            Dinner
          </button>
          <button className="btn" onClick={() => menuHandler("drinks")}>
            Drinks
          </button>
        </div>
      </header>
      <section>
        {menu.map((item) => {
          return <Item key={item.id} item={item}></Item>;
        })}
      </section>
      <footer>&copy;Design and Coded by gawhar salman</footer>
    </>
  );
};

const Item = (props) => {
  const { img, name, price } = props.item;
  const [show, setShow] = useState(false);
  const titleCase = (name) => {
    return name
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <article>
      <img src={img} alt={name}></img>
      <h2>{titleCase(name)}</h2>
      <div>
        <p className="price">{price}$</p>
        <button className="show_hide_btn" onClick={() => setShow(!show)}>
          {show ? "Know Less" : "Know More"}
        </button>
      </div>
      <div>
        {show && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien
            lacus, sagittis ut lacinia nec, hendrerit eu ex. Fusce velit magna,
            convallis in ultricies eu, scelerisque quis mauris. Vivamus augue
            sem, consectetur sit amet aliquet at, ultrices eu metus. Mauris a
            malesuada ligula, dapibus facilisis erat.
          </p>
        )}
      </div>
    </article>
  );
};

export default App;
