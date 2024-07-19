import { createFileRoute } from '@tanstack/react-router'
import Header from '../components/Header/Header.tsx'
import Introduction from '../components/Introduction/Introduction.tsx'
import Separator from '../components/Separator/Separator.tsx'
import Topics from '../components/Topics/Topics.tsx'
import NewsPanel from '../components/NewsPanel/NewsPanel.tsx'
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
