import Message from "../components/Message";

function Home() {
  let fruits = [
    { id: 1, name: "apple", color: "red" },
    { id: 2, name: "orange", color: "orange" },
    { id: 3, name: "bannana", color: "yellow" },
  ];
  return (
    <>
      {fruits.map((fruit) => (<Message fruit={fruit} key={fruit.id}></Message>))}
    </>
  );
}

export default Home;
