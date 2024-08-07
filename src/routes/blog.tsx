import { createFileRoute } from '@tanstack/react-router'
import "./css/blog.css"
import Post from "../components/Post/Post"


const posts = [
    <Post title="Experiência com typescript, e amanhã embarque digital" date="06/08/2024" content={
        <>
        <p> Até agora, desenvolver esse site com react e typescript tem sido até que bem fácil.
            Programação com tipagens mais restritas torna o código bem mais limpo e tranquilo de ser utilizado
        </p>
        <p> O grande problema é aprender a utilizar aproriadamente arquivos externos, é uma vergonha esse post ser "hard-coded"</p>
        <p> Enfim, amanhã vai ser meu primeiro dia no embarque digital, e dia 08, no consevatório. Talvez seja meio punk manter conservatório, UFPE e católica, mas, veremos onde isso leva </p>
        <p> Por agora, quero focar no meu portifólio, adicionar alguns projetos decentes e voltar com disciplina para minha carreira </p>
        </>
}/>,
]



export const Route = createFileRoute('/blog')({
    component: () => (
        <div className="Posts_div">
            <h2>Welcome to my blog</h2>
            <div className="posts">
                {posts.map(post => (
                    post
                ))} 
                
            </div>
        </div>
    )
})
