import { createFileRoute } from '@tanstack/react-router'
import "./css/projects.css"

const projects = [
    ["Project Euler", "Project Euler Solutions, in many languages too", "https://github.com/pchagas72/projectEuler"],
    ["My dotfiles", "My system dotfiles. DWM for Xorg, Hyprland for Wayland", "https://github.com/pchagas72/pchagas72-dots"],
]

export const Route = createFileRoute('/projects')({
    component: () => (
        <div class="Projects_div">
            <h2>Projects</h2>
            <div class="Projects_list">
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
