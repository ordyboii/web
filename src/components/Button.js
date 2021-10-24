export default function Button({ link, href, secondary, onClick, children }) {
  return (
    <>
      {link ? (
        <a
          href={href}
          className={`inline-block px-6 py-4 rounded-md font-medium hover:shadow-lg hover:scale-95 hover:opacity-70 transition ${
            secondary ? 'bg-yellow-200 text-black' : 'bg-blue-900 text-white'
          }`}
        >
          {children}
        </a>
      ) : (
        <button
          onClick={onClick}
          className={`px-6 py-4 rounded-md font-medium hover:shadow-lg hover:scale-95 hover:opacity-70 transition cursor-pointer ${
            secondary ? 'bg-yellow-200 text-black' : 'bg-blue-900 text-white'
          }`}
        >
          {children}
        </button>
      )}
    </>
  )
}
