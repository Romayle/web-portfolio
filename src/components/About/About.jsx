import React from 'react';
import { Icon } from "@iconify/react";

const About = () => {
    return(
        <div className='h-screen lg:px-20 mt-20 lg:mt-32 mx-auto'>
            
            <div className='flex flex-col sm:flex-row items-center gap-5'>

                <div className='text-left'>
                    <h1 className='text-3xl font-bold sm:text-4xl pb-6'>Hello, I'm <span className='text-blue-500'>Romayle</span></h1>
                    <h1 className='text-3xl font-bold sm:text-4xl'>I'm a <span className='text-blue-500'>FullStack Developer </span>with a passion for <span className='text-blue-500'>Cloud Computing</span>.</h1>
                </div>

                <div className='text-left'>
                    <p className='pb-3'>I have a strong passion for technology in the field of Software Development. My future ambitions and career goals is to become a full-stack / application developer with a particular focus on utilizing Machine Learning technology. </p>
                    <p>I am confident that with the right opportunities, guidance and dedication that I can achieve my goals and make a meaningful impact in the industry.</p>
                </div>
            
            </div>

            <div className='pt-12 pb-2'>
                <h1 className='text-3xl font-bold sm:text-4xl mb-4 md:mb-8 text-blue-900 flex justify-center'>Skills</h1>

                <div>
                    <ul className='bg-blue-50 flex p-5 md:p-10 mb-5 items-center rounded-2xl flex-col md:flex-row gap-8'>
                        <span className='text-blue-500 text-2xl'>Frameworks</span>
                        <div className='flex gap-8 flex-wrap justify-center'>
                            <li class=" text-xl font-bold flex justify-center items-center flex-col"><Icon icon="logos:react" width="48" height="48" /><span>React</span></li>
                            <li class=" text-xl font-bold flex justify-center items-center flex-col"><Icon icon="vscode-icons:file-type-tailwind" width="48" height="48" /><span>Tailwind</span></li>
                            <li class=" text-xl font-bold flex justify-center items-center flex-col"><Icon icon="logos:flutter" width="48" height="48" /><span>Flutter</span></li>
                            <li class=" text-xl font-bold flex justify-center items-center flex-col"><Icon icon="bxl:flask" width="48" height="48" /><span>Flask</span></li>
                            <li class=" text-xl font-bold flex justify-center items-center flex-col"><Icon icon="skill-icons:java-light" width="48" height="48" /><span>Java Swing</span></li>
                        </div>
                    </ul>

                    <ul className='bg-blue-50 flex p-5 md:p-10 mb-5 items-center rounded-2xl flex-col md:flex-row gap-8'>
                        <span className='text-blue-500 text-2xl'>Languages</span>
                        <div className='flex gap-8 flex-wrap justify-center'>
                            <li class=" text-xl font-bold flex justify-center items-center flex-col"><Icon icon="skill-icons:java-dark" width="48" height="48" /><span>Java</span></li>
                            <li class=" text-xl font-bold flex justify-center items-center flex-col"><Icon icon="logos:python" width="48" height="48" /><span>Python</span></li>
                            <li class=" text-xl font-bold flex justify-center items-center flex-col"><Icon icon="logos:html-5" width="48" height="48" /><span>HTML</span></li>
                            <li class=" text-xl font-bold flex justify-center items-center flex-col"><Icon icon="logos:css-3" width="48" height="48" /><span>CSS</span></li>
                            <li class=" text-xl font-bold flex justify-center items-center flex-col"><Icon icon="tabler:brand-javascript" width="48" height="48" /><span>JavaScript</span></li>
                            <li class=" text-xl font-bold flex justify-center items-center flex-col"><Icon icon="mdi:language-r" width="48" height="48" /><span>R</span></li>
                            <li class=" text-xl font-bold flex justify-center items-center flex-col"><Icon icon="logos:dart" width="48" height="48" /><span>Dart</span></li>
                        </div>
                        
                    </ul>

                    <ul className='bg-blue-50 flex p-5 md:p-10 mb-5 items-center rounded-2xl flex-col md:flex-row gap-8'>
                        <span className='text-blue-500 text-2xl'>Tools</span>
                        <div className='flex gap-8 flex-wrap justify-center'>
                            <li class=" text-xl font-bold flex justify-center items-center flex-col"><Icon icon="logos:react" width="48" height="48" /><span>React</span></li>
                            <li class=" text-xl font-bold flex justify-center items-center flex-col"><Icon icon="vscode-icons:file-type-tailwind" width="48" height="48" /><span>Tailwind</span></li>
                            <li class=" text-xl font-bold flex justify-center items-center flex-col"><Icon icon="logos:flutter" width="48" height="48" /><span>Flutter</span></li>
                            <li class=" text-xl font-bold flex justify-center items-center flex-col"><Icon icon="bxl:flask" width="48" height="48" /><span>Flask</span></li>
                            <li class=" text-xl font-bold flex justify-center items-center flex-col"><Icon icon="skill-icons:java-light" width="48" height="48" /><span>Java Swing</span></li>
                        </div>
                    </ul>

                </div>
            </div>
            
        </div>
    );
}

export default About;