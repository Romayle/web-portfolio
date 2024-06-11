import React from "react";
import ContactCard from "./ContactCard";
import { Icon } from "@iconify/react";

const Contact = () => {
    return(
        <div className="lg:px-20 mt-20 lg:mx-20">
            <h1 className="font-bold text-2xl mt-10 mb-3 justify-center flex">Get In Touch</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <ContactCard Icon={<Icon icon="skill-icons:gmail-light" width="48" height="48" />} Title={"Email"} Contact={"Click To Mail"} Link={"mailto:romayle.dharmasena@gmail.com"} />
                <ContactCard Icon={<Icon icon="ic:baseline-phone" width="48" height="48" />} Title={"Call"} Contact={"076-552-2477"} Link={"tel:076-552-2477"} />
                <ContactCard Icon={<Icon icon="mdi:location" width="48" height="48" />} Title={"Address"} Contact={"View My Address"} Link={""}/>
                <ContactCard Icon={<Icon icon="skill-icons:linkedin" width="48" height="48" />} Title={"LinkedIn"} Contact={"View My LinkedIn"} Link={"http://www.linkedin.com/in/romayle-dharmasena-0ab19326a"} />
                <ContactCard Icon={<Icon icon="mdi:github" width="48" height="48" />} Title={"GitHub"} Contact={"View My Github"} Link={"https://github.com/Romayle"}/>
                <ContactCard Icon={<Icon icon="logos:facebook" width="48" height="48" />} Title={"Facebook"} Contact={"View My Facebook"} Link={"https://web.facebook.com/romayle.dharmasena/"}/>
                <ContactCard Icon={<Icon icon="skill-icons:instagram" width="48" height="48" />} Title={"Instagram"} Contact={"View My Instagram"} Link={"https://www.instagram.com/romayle_/"} />

            </div>
            
        </div>
    );
}

export default Contact