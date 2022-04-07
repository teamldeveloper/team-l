import { images } from "../constants";


const Navbar = () => {
    return <nav className="border-2 border-solid border-black/10  py-2 px-2  ">

        <div className="container mx-auto flex flex-wrap items-center justify-between">
            <div className="flex items-center ">
                <a href="#home" className="flex items-center">
                    <img src={images.logo} alt="logo" className="h-10 mr-3" />
                    <span className="text-xl font-semibold text-opacity-80" >Team-L</span>
                </a>

            </div>
            <ul className="flex items-center flex-col  mt-4 md:mt-0 md:space-x-6 md:flex-row ">
                {["home", "featured app", "our team", "contact us"].map((menu) => (
                    <li key={menu} className="uppercase font-medium" >
                        <a href={`#{menu}`} >{menu}</a> </li>
                ))}
            </ul>
        </div>


    </nav>
};

export default Navbar;