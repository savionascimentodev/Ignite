import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className="wrapper">
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}
