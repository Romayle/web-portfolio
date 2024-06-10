const Skill = ( {Icon, skillName} ) => {
    return (
        <>
            <li class=" text-xl font-bold flex justify-center items-center flex-col">{ Icon }<span>{ skillName }</span></li>
        </>
    )
}

export default Skill;