import { createFileRoute } from '@tanstack/react-router'
import "./css/projects.css"

const projects = [
    ["Project Euler", "Project Euler Solutions, in many languages too", "https://github.com/pchagas72/projectEuler"],
    ["My dotfiles", "My system dotfiles. DWM for Xorg, Hyprland for Wayland", "https://github.com/pchagas72/pchagas72-dots"],
    ["This website", "The whole codebase for this website, made with react-ts", "https://github.com/pchagas72/react_website"],
]

export const Route = createFileRoute('/projects')({
    component: () => (
        <div className="Projects_div">
            <h2>Projects</h2>
            <div className="Projects_list">
                {projects.map(project => (
                    <div className="project_div">
                        <a href={project[2]}><h3>{project[0]}</h3></a>
                        <p>{project[1]}</p>
                    </div>
                ))}
            </div>
        </div>
    )
})
