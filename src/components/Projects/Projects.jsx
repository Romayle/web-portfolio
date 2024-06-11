import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import TaskSystmImg from "../../Images/TaskSystmImg.png";

const Projects = () => {
    return (
        <div className="h-screen lg:px-20 mt-20 lg:mx-20">

            <h1 className="font-bold text-2xl mt-10 mb-3 justify-center flex">Projects</h1>

            <ProjectCard 
                Title={"A MOBILE APP FOR THE DEAF"}
                SRC={"https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                Description={"A Developed mobile application for assisting the deaf community, featuring text to ASL, audio to ASL and video to ASL translation functionalities. Additionally, implemented a floating doc feature for ASL output in YouTube videos. Collaborated on the project as part of a second-year group project"}
                Techonologies={"Flutter, Flask"}
                Link={<Link to={"https://github.com/Deshan0802/SDGP"}><Icon icon="mingcute:github-line" width="48" height="48" /></Link>}
            />

            <ProjectCard 
                Title={"A TASK MANAGEMENT APPLICATION"}
                SRC={TaskSystmImg}
                Description={"Developed a full-stack web application utilizing the MERN stack (MongoDB, Express, React, and Node.js). The project involved creating a dynamic and responsive user interface with React, implementing server-side logic with Node.js and Express, and managing data storage with MongoDB. The application features CRUD operations, and RESTful API integration, showcasing proficiency in modern web development technologies."}
                Techonologies={"MERN Stack"}
                Link={<Link to={"https://github.com/Romayle/Task-Management-System-MERN"}><Icon icon="mingcute:github-line" width="48" height="48" /></Link>}
            />

            <ProjectCard 
                Title={"A SHOPPING CART MANAGEMENT SYSTEM"}
                SRC={"https://images.pexels.com/photos/236910/pexels-photo-236910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                Description={"Created a Java Swing-based Shopping Cart Management System facilitating easy browsing, item selection. Features include inventory management, total calculation, and seamless user interface, demonstrating expertise in Java programming and user-centric design."}
                Techonologies={"Java Swing, Java"}
                Link={<Link to={"https://github.com/Romayle/shopping-cart-system"}><Icon icon="mingcute:github-line" width="48" height="48" /></Link>}
            />

            <ProjectCard 
                Title={"A GALLERY WEBPAGE"}
                SRC={"https://images.pexels.com/photos/1674049/pexels-photo-1674049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                Description={"A gallery webpage, that contains images and content related to a Sport Page which contains features such as Allowing the user to change the color scheme of the webpage. Having up to 3 options to increase/decrease the font size of the web page."}
                Techonologies={"HTML, CSS and JavaScript"}
                Link={<Link to={"https://github.com/Romayle/gallery-web-page"}><Icon icon="mingcute:github-line" width="48" height="48" /></Link>}
            />

            <ProjectCard 
                Title={"WEB PORTFOLIO"}
                SRC={"https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                Description={"Explore a showcase of my skills, projects, and accomplishments in a dynamic online format. Navigate through a collection of my work, including website designs, coding projects and creative endeavors."}
                Techonologies={"React, Tailwind"}
                Link={<Link to={"https://github.com/Romayle/web-portfolio"}><Icon icon="mingcute:github-line" width="48" height="48" /></Link>}
            />

        </div>
    );
}

export default Projects