import Introduction from './components/Introduction/Introduction.tsx';
import Header from './components/Header/Header.tsx';
import Separator from './components/Separator/Separator.tsx';
import NewsPanel from './components/NewsPanel/NewsPanel.tsx';
import Topics from './components/Topics/Topics.tsx';

import {createRouter, RouterProvider} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

import "./App.css";

const router = createRouter({routeTree});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

function App() {
    return ( 
        <RouterProvider router={router}/> 
    );
}
export default App
