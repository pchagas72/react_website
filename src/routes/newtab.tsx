import { createFileRoute } from '@tanstack/react-router'
import './css/newtab.css'
import picture from '../assets/tab_image.png'

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let date: Date = new Date();
const day = date.getDate();
const month = months[date.getMonth()];
const year = date.getFullYear();
let date_string = day + "/" + month + " - " + year

export const Route = createFileRoute('/newtab')({
  component: () => (
        <div className="newTab_main_div">
            <img src={picture}/>
            <div className="newtab_div_text">
                <h1> Welcome </h1>
                <h2> {date_string}</h2>
                <ul>
                    <li> Github </li>
                </ul>
            </div>

        </div>

    )
})
