function Message({ fruit }) {
  return (
    <>
      <h1>Id: {fruit.id}</h1>
      <h1>Name: {fruit.name}</h1>
      <h1>Color: {fruit.color}</h1>
    </>
  );
}

export default Message;
