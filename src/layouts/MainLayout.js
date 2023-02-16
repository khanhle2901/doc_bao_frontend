import Header from './layoutComponents/Header'

function MainLayout({ children }) {
  return (
    <div className='main'>
      <Header />
      <div className='hi'>{children}</div>
    </div>
  )
}

export default MainLayout
