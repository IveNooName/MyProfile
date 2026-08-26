import "./ProjectPage.css";
import ProjectCard from "./ProjectCard/ProjectCard.tsx";

function ProjectPage() {

    interface ProjectCard {
        title: string;
        description: string;
        image: string;
        tags: string[];
        link: string;
    }

    const cardData: ProjectCard[] = [
        {
            title: "My Portfolio",
            description: "Made with Angular",
            image: "https://raw.githubusercontent.com/IveNooName/Bucket/refs/heads/main/Gibb-Profile/projects/Angular-Website.png",
            tags: ["Angular", "Cloudflare", "CI/CD", "TypeScript"],
            link: "https://ivenooname.ch",
        },
        {
            title: "Weather API",
            description: "An API for the ESP32 to send data with MQTT",
            image: "https://raw.githubusercontent.com/IveNooName/Bucket/refs/heads/main/Gibb-Profile/projects/Weather-API.png",
            tags: ["Spring Boot", "Java", "MQTT", "Postgres"],
            link: "https://github.com/IveNooName/WeatherAPI-Backend"
        },
        {
            title: "My first Portfolio",
            description: "My first personal website, that i coded",
            image: "https://raw.githubusercontent.com/IveNooName/Bucket/refs/heads/main/Gibb-Profile/projects/First-Website.png",
            tags: ["HTML", "CSS"],
            link: "https://www.github.com/ivenooname/"
        },
        {
            title: "Blackflag",
            description: "A small programm for downloading music",
            image: "https://raw.githubusercontent.com/IveNooName/Bucket/refs/heads/main/Gibb-Profile/projects/Blackflag.png",
            tags: ["Music", "Spring Boot", "Java", "Bootstrap", "TypeScript"],
            link: "https://github.com/ivenooname/blackflag",
        },
        {
            title: "Q7n",
            description: "???",
            image: "https://raw.githubusercontent.com/IveNooName/Bucket/refs/heads/main/Gibb-Profile/projects/Placeholder.png",
            tags: ["???"],
            link: "https://www.github.com/ivenooname/"
        },
        {
            title: "PassGen",
            description: "Password Generator, written in C#",
            image: "https://raw.githubusercontent.com/IveNooName/Bucket/refs/heads/main/Gibb-Profile/projects/Placeholder.png",
            tags: ["C#", "Passwords"],
            link: "https://github.com/IveNooName/"
        },
        {
            title: "React Portfolio",
            description: "A little portfolio, build with React",
            image: "https://raw.githubusercontent.com/IveNooName/Bucket/refs/heads/main/Gibb-Profile/projects/Placeholder.png",
            tags: ["React", "Cloudflare", "CI/CD", "TypeScript"],
            link: "https://github.com/IveNooName/MyProfile"
        }
    ];

    return (
        <div className="project-page">
            {cardData.length > 0 ? (
                cardData.map((card) => <ProjectCard {...card}></ProjectCard>)
            ): (
                <p>Nothing here <strong>°︵°</strong></p>
            )}
        </div>
    );
}

export default ProjectPage;
