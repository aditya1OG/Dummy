async function getData() {
  const res = await fetch('https:fakestoreapi.com/products')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Store() {
  const data = await getData()
  return <main>
    <h1>All Posts</h1>
    {data && data.map((post) => {
      return (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      )
    }
    )}

  </main>
}
