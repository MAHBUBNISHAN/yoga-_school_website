import React, { useContext } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    IconButton,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    ChevronDownIcon,

    PowerIcon,
} from "@heroicons/react/24/outline";
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from "../../providers/AuthProviders";
const profileMenuItems = [
    {
        label: "Dashboard",
        icon: UserCircleIcon,
    },

    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];
function ProfileMenu() {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user)
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    const profilePic = user?.photo || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="candice wu"
                        className="border border-blue-500 p-0.5"
                        src={profilePic}
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                            }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onClick={label === "Sign Out" ? logOut : closeMenu}
                            className={`flex items-center gap-2 rounded ${isLastItem
                                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                : ""
                                }`}
                        >
                            {React.createElement(icon, {
                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2,
                            })}
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}


export default function Header() {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user)
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >

                <NavLink to="/instructors" className="flex items-center">
                    Instructors
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to="/classes" className="flex items-center">
                    Classes
                </NavLink>
            </Typography>
            {
                user?.role === 'student'
                &&
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal"
                >
                    <NavLink to="/student/dashboard" className="flex items-center">
                        Student Dashboard
                    </NavLink>
                </Typography>
            }
            {
                user?.role === 'instructor'
                &&
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal"
                >
                    <NavLink to="/instructor/" className="flex items-center">
                        Teachers Dashboard
                    </NavLink>
                </Typography>
            }

            {
                user?.role === 'admin'
                &&
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal"
                >
                    <NavLink to="/admin/" className="flex items-center">
                        Admin Dashboard
                    </NavLink>
                </Typography>
            }



        </ul>
    );

    return (
        <>
            <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-16 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Link to="/">
                        <Typography
                            as="a"
                            href="#"
                            className="mr-4 cursor-pointer py-1.5 font-medium"
                        >
                            Yoga School
                        </Typography>
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        {
                            user ?
                                <ProfileMenu />
                                :
                                <>
                                    <Link to="/login" >
                                        <Button
                                            variant="gradient"
                                            size="sm"
                                            className="hidden lg:inline-block"
                                        >
                                            <span>Login</span>
                                        </Button>
                                    </Link>
                                    <Link to="/signup" >
                                        <Button

                                            variant="filled"
                                            color="blue-gray"
                                            size="sm"
                                            className="hidden lg:inline-block"
                                        >
                                            <span>SignUp</span>
                                        </Button>
                                    </Link>
                                </>
                        }

                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    {navList}
                    {
                        user ?
                            <></>
                            :
                            <>
                                <Link to="/login" >
                                    <Button
                                        variant="gradient"
                                        size="sm"
                                        className="hidden lg:inline-block"
                                    >
                                        <span>Login</span>
                                    </Button>
                                </Link>
                                <Link to="/signup" >
                                    <Button

                                        variant="filled"
                                        color="blue-gray"
                                        size="sm"
                                        className="hidden lg:inline-block"
                                    >
                                        <span>SignUp</span>
                                    </Button>
                                </Link>
                            </>
                    }
                </Collapse>
            </Navbar>

        </>
    );
}