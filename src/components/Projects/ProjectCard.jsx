const ProjectCard = ( {Title, SRC, Description, Techonologies, Link} ) => {
    return (
        <>
            <ul className='bg-gray-100 mb-6 rounded-2xl p-5 drop-shadow-xl'>
                <h2 className="font-bold text-lg md:text-xl text-blue-500 pb-4 text-left">{Title}</h2>
                <div className="flex xl:flex-row flex-col items-center gap-5">
                    <img class="flex w-64 h-auto object-contain" src={SRC}></img>
                    <div>
                        <p className="text-left mb-5">{Description}</p>
                        <p className="text-left text-gray-500 mb-5">{Techonologies}</p>
                        {Link}
                    </div>
                </div>
            </ul>
        </>
    );
}

export default ProjectCard