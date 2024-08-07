import { createFileRoute } from '@tanstack/react-router'
import Introduction from '../components/Introduction/Introduction'
import Separator from '../components/Separator/Separator'
import Topics from '../components/Topics/Topics'
import NewsPanel from '../components/NewsPanel/NewsPanel'
import '../App.css'

export const Route = createFileRoute('/')({
    component: () => (
        <>
            <div className="App_div">
                <Introduction/> 
                <Separator/> 
                <Topics/>
                <NewsPanel/>
            </div>
        </>

    )
})
