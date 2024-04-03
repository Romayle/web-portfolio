import React from "react";

const Blogs = () => {
    return(
        <div className="mt-20">
            <h1 className="font-bold text-2xl mt-10 mb-3 justify-center flex">Favourite Stuffs</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                <div className="bg-gray-100 rounded-2xl p-10 drop-shadow-xl text-left">
                    <h2 className="font-bold text-xl">Exploring Git: Repositories, Discussion groups, Issues & Features</h2>
                    <img src="https://prasadchavan.me/images/posts/repo-dis-issue-git.png"></img>
                    <p className="pb-4">Posted on Oct 6, 2023</p>
                    <p className="pb-4">This post will cover topic of exploring Git</p>
                    <button className="bg-blue-900 text-white px-4 py-2 rounded">Read More</button>
                </div>

                <div className="bg-gray-100 rounded-2xl p-10 drop-shadow-xl text-left">
                    <h2 className="font-bold text-xl">Exploring Git: Repositories, Discussion groups, Issues & Features</h2>
                    <img src="https://prasadchavan.me/images/posts/gitbash.jpg"></img>
                    <p className="pb-4">Posted on Oct 6, 2023</p>
                    <p className="pb-4">This post will cover topic of exploring Git</p>
                    <button className="bg-blue-900 text-white px-4 py-2 rounded">Read More</button>
                </div>

                <div className="bg-gray-100 rounded-2xl p-10 drop-shadow-xl text-left">
                    <h2 className="font-bold text-xl">Exploring Git: Repositories, Discussion groups, Issues & Features</h2>
                    <img src="https://prasadchavan.me/images/posts/git.png"></img>
                    <p className="pb-4">Posted on Oct 6, 2023</p>
                    <p className="pb-4">This post will cover topic of exploring Git</p>
                    <button className="bg-blue-900 text-white px-4 py-2 rounded">Read More</button>
                </div>

                <div className="bg-gray-100 rounded-2xl p-10 drop-shadow-xl text-left">
                    <h2 className="font-bold text-xl">Exploring Git: Repositories, Discussion groups, Issues & Features</h2>
                    <img src="https://prasadchavan.me/images/posts/blogDjangomodels.jpg"></img>
                    <p className="pb-4">Posted on Oct 6, 2023</p>
                    <p className="pb-4">This post will cover topic of exploring Git</p>
                    <button className="bg-blue-900 text-white px-4 py-2 rounded">Read More</button>
                </div>

            </div>
            
        </div>
    );
}

export default Blogs