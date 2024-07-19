import { createFileRoute } from '@tanstack/react-router'
import "./css/gallery.css"
import polar_bear_1 from "./gallery/polar_bear_1.png"
import polar_bear_2 from "./gallery/polar_bear_2.png"
import polar_bear_3 from "./gallery/polar_bear_3.png"

const images = [[polar_bear_2, "Polar bear"],
    [polar_bear_2, "Polar bear"],
    [polar_bear_2, "Polar bear"],
    [polar_bear_2, "Polar bear"],
    [polar_bear_2, "Polar bear"],
    [polar_bear_2, "Polar bear"]]

export const Route = createFileRoute('/gallery')({
    component: () => (
        <div className="Gallery_div">
            <h2> My gallery </h2>
            <div className="Gallery_content">
                {images.map(image => (
                <div key={image[1]} className="Content_div">
                    <img src={image[0]}/>
                    <p> {image[1]} </p>
                </div>
                ))}
            </div>
        </div>
    )
})
