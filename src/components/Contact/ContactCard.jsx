const ContactCard = ({Icon, Title, Contact, Link}) => {
    return (
        <article className="rounded-lg border border-gray-100 bg-gray-100 drop-shadow-xl p-6">
            <div className="flex flex-col items-center gap-2">
                <span className="rounded-full bg-gray-100 p-2 text-gray-600 sm:block">
                    {Icon}
                </span>

                <div>
                    <p className="flex text-2xl text-blue-500 font-meduim justify-center">{Title}</p>
                    <p className="flex text-sm font-medium text-gray-900 justify-center"><a  href={Link}>{Contact}</a></p>
                </div>
            </div>

        </article>
    );
}

export default ContactCard