const UserHeader = () => {
    return <header className="bg-red-500 h-[70px]">
        <div className="container m-auto flex gap-4 items-center">
            <img className="w-[80px] h-[70px]" src="/logo.png" alt="" />
            <div className="search bg-white grow flex">
                <button className="btn h-[40px] items-center">
                    <img src="../../public/images/Vector.png" className="w-[25px] h-[25px] leading-10" />
                </button>
                <input className="grow h-[40px] p-[10px]" type="text" placeholder="Search" />
            </div>

            {/* <nav className="flex sm:justify-center space-x-4">
                {[
                    ['Home', '/dashboard'],
                    ['Team', '/team'],
                    ['Projects', '/projects'],
                    ['Reports', '/reports'],
                ].map(([title, url]) => (
                    <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
                ))}
            </nav> */}
        </div>
    </header>
}

export default UserHeader