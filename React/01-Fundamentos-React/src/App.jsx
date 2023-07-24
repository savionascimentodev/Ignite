import { Post } from './Post'
import { Header } from './components/Header'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Savio Nascimento"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
      />
      <Post author="Gabriel Oliveira" content="Um novo post" />
    </div>
  )
}
