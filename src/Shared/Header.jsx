// import { Link } from "react-router-dom";
import { NavbarContent, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Navbar } from "@nextui-org/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";



const Header = () => {
    const li = <>
        <li><Link className="font-bold text-lg text-[#5C3D1E] hover:bg-gray-700 hover:text-white duration-500 rounded-large">Home</Link></li>
        <li><Link className="font-bold text-lg text-[#5C3D1E] hover:bg-gray-700 hover:text-white duration-500 rounded-large">All Toys</Link></li>
        <li><Link className="font-bold text-lg text-[#5C3D1E] hover:bg-gray-700 hover:text-white duration-500 rounded-large">My Toys</Link></li>
        <li><Link to={"/blog"} className="font-bold text-lg text-[#5C3D1E] hover:bg-gray-700 hover:text-white duration-500 rounded-large">blogs</Link></li>
        
        
    </>

    return (

        <nav className="bg-[#DAC0A3] h-[120px]">
            <div className="pt-4">

                <div className="navbar h-[90px] border-[#976737] border-2 bg-white rounded-lg w-9/12 mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {li}
                            </ul>
                        </div>
                        <img className="w-[40px] lg:ml-6" src="https://i.ibb.co/wL7rJHP/teddy-22-778x1024.png" alt="" />
                        <a className="btn btn-ghost normal-case text-3xl text-[#5C3D1E] font-bold">Teddy Hugs</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {li}
                        </ul>
                    </div>

                    <div className="indicator">
                        <span className="indicator-item w-5 badge badge-secondary">7</span>
                        <FaShoppingCart className="text-2xl mx-5 text-[#5C3D1E]" />


                    </div>
                    <Navbar className="w-4 ml-8 h-4">
                        <NavbarContent as="div" justify="end">
                            <Dropdown placement="bottom-end">
                                <DropdownTrigger>
                                    <Avatar
                                        isBordered
                                        as="button"
                                        className="transition-transform"
                                        color="secondary"
                                        name="Jason Hughes"
                                        size="sm"
                                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                    />
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Profile Actions" variant="flat">
                                    <DropdownItem key="profile" className="h-14 gap-2">
                                        <p className="font-semibold">Signed in as</p>
                                        <p className="font-semibold">zoey@example.com</p>
                                    </DropdownItem>
                                    
                                    <DropdownItem key="logout" color="danger">
                                        Log Out
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavbarContent>
                    </Navbar>
                </div>
            </div>
        </nav>

    );
};

export default Header;