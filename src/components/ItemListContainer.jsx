export default function ItemListContainer({greeting}) {
  return (
    <div className='container py-4 px-6'>
      <h2 className="text-2xl text-blue-900 font-bold">{greeting}</h2>
    </div>
  )
}