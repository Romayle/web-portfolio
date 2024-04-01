import React from "react";
import { Icon } from "@iconify/react";

const Projects = () => {
    return (
        <div className="mt-20">

            <ul className='bg-gray-100 mb-10 rounded-2xl p-5 drop-shadow-2xl'>
                <h2 className="font-bold text-lg md:text-xl text-blue-500 pb-4 text-left">A MOBILE APP FOR THE DEAF</h2>
                <div className="flex sm:flex-row flex-col items-center gap-5">
                    <img class="w-64 h-auto object-contain" src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <div>
                        <p className="text-left mb-5">A Developed mobile application for assisting the deaf community, featuring text to ASL, audio to ASL and video to ASL translation functionalities. Additionally, implemented a floating doc feature for ASL output in YouTube videos. Collaborated on the project as part of a second-year group project</p>
                        <p className="text-left text-gray-500 mb-5">Flutter, Flask</p>
                        <Icon icon="mingcute:github-line" width="48" height="48" />
                    </div>
                </div>
            </ul>

            <ul className='bg-gray-100 mb-10 rounded-2xl p-5 drop-shadow-2xl'>
                <h2 className="font-bold text-lg md:text-xl text-blue-500 pb-4 text-left">A SHOPPING CART MANAGEMENT SYSTEM</h2>
                <div className="flex sm:flex-row flex-col items-center gap-5">
                    <img class="w-64 h-auto object-contain" src="https://images.pexels.com/photos/236910/pexels-photo-236910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <div>
                        <p className="text-left mb-5">Created a Java Swing-based Shopping Cart Management System facilitating easy browsing, item selection. Features include inventory management, total calculation, and seamless user interface, demonstrating expertise in Java programming and user-centric design.</p>
                        <p className="text-left text-gray-500 mb-5">Java Swing, Java</p>
                        <Icon icon="mingcute:github-line" width="48" height="48" />
                    </div>
                </div>
            </ul>

            <ul className='bg-gray-100 mb-10 rounded-2xl p-5 drop-shadow-2xl'>
                <h2 className="font-bold text-lg md:text-xl text-blue-500 pb-4 text-left">A GALLERY WEBPAGE</h2>
                <div className="flex sm:flex-row flex-col items-center gap-5">
                    <img class="w-64 h-auto object-contain" src="https://images.pexels.com/photos/1674049/pexels-photo-1674049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <div>
                        <p className="text-left mb-5">A gallery webpage, that contains images and content related to a Sport Page which contains features such as Allowing the user to change the color scheme of the webpage. Having up to 3 options to increase/decrease the font size of the web page.</p>
                        <p className="text-left text-gray-500 mb-5">HTML, CSS and JavaScript</p>
                        <Icon icon="mingcute:github-line" width="48" height="48" />
                    </div>
                </div>
            </ul>

            <ul className='bg-gray-100 mb-10 rounded-2xl p-5 drop-shadow-2xl'>
                <h2 className="font-bold text-lg md:text-xl text-blue-500 pb-4 text-left">WEB PORTFOLIO</h2>
                <div className="flex sm:flex-row flex-col items-center gap-5">
                    <img class="w-64 h-auto object-contain" src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <div>
                        <p className="text-left mb-5">Explore a showcase of my skills, projects, and accomplishments in a dynamic online format. Navigate through a collection of my work, including website designs, coding projects and creative endeavors.</p>
                        <p className="text-left text-gray-500 mb-5">React, Tailwind</p>
                        <Icon icon="mingcute:github-line" width="48" height="48" />
                    </div>
                </div>
            </ul>

        </div>
    );
}

export default Projects