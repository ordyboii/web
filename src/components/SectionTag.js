export default function SectionTag({ children }) {
  return (
    <div>
      <div className='bg-blue-900 w-28 mb-2 h-[2px] rounded-lg' />
      <p className='relative uppercase text-sm'>{children}</p>
    </div>
  )
}
