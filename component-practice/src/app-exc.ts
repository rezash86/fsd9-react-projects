import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
      address: "asasdfasdf",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "bob" } });
  };

  const [pizza, setPizza] = useState({
    name: "spicy pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick2 = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "olive"] });
  };

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "P1", quantity: 1 },
      { id: 2, title: "P2", quantity: 1 },
    ],
  });

  const handleClick3 = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 2 ? { ...item, quantity: 2 } : item
      ),
    });
  };
}
