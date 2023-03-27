export default function CreateProduct() {
  const [inputProductName, setInputProductName] = useState('');
  async function handleSubmit(data) {
    const newProduct = {
      name: inputProductName
    };

    await fetch(`...`, {
      method: "POST",
      body: JSON.stringify(newProduct),
    })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      // some handleSubmit function
    }}>
      <input type="text" placeholder="Product name..." value={inputProductName} onChange={(e) => ...} />
      <button type="submit">Add</button>
    </form>
  )
}
