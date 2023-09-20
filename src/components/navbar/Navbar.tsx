import logo from "@assets/logo.svg";

function Navbar() {
    return (
        <nav className="p-4 border-b-[1px] border-paragraph border-opacity-30 fixed top-0 left-0 w-full z-50 bg-background flex items-center justify-between">
            <div className="flex items-center gap-4">
                <img className="w-8 sm:w-12" src={logo} alt="" />
                <p className="text-secondary text-xl font-thin sm:text-3xl">Nested Border Radius</p>
            </div>
            <a
                href="https://gustavevensson.com"
                className="py-2 px-3 text-paragraph rounded-md hidden sm:block transition-all hover:bg-highlight hover:text-secondary"
            >
                by Gustav
            </a>
            <a href="https://gustavevensson.com" className="p-2 rounded-md block sm:hidden transition-all hover:bg-highlight group">
                <svg width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30 transition-all group-hover:opacity-100">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M32 9.5H17V13C17 14 17.5 14.5 18.5 14.5H32V16.5H0V14.5H13.5C14.5 14.5 15 14 15 13V9.5H0V3.5C0 1.5 1.5 0 3.5 0L13.5 0C15.5 0 16 1.25 16 1.25C16 1.25 16.5 0 18.5 0H28.5C30.5 0 32 1.5 32 3.5V9.5ZM2 7.5H15V3.5C15 2.5 14.5 2 13.5 2H3.5C2.5 2 2 2.5 2 3.5V7.5ZM30 7.5H17V3.5C17 2.5 17.5 2 18.5 2H28.5C29.5 2 30 2.5 30 3.5V7.5Z"
                        fill="white"
                    />
                </svg>
            </a>
        </nav>
    );
}

export default Navbar;
