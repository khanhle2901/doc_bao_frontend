import { Link } from 'react-router-dom'
import routers from '../../configs/baseRoutes'

function Home() {
  return (
    <div>
      <Link to={routers.category + 'demo'}>demo</Link>
    </div>
  )
}

export default Home
