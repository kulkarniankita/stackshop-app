import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <>
      <header className="p-4 flex items-center bg-gray-800 text-white shadow-lg">
        <Link to="/">StackShop</Link>
      </header>
    </>
  )
}
