import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
   { id: 2, title: "About Us", path: "/about" },
  { id: 3, title: "Academics", path: "/services" },
  { id: 4, title: "Our Team", path: "/our-team" },
  { id: 5, title: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="relative z-20 bg-white shadow-md">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-4 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl">Springdale Public School</h1>
        </div>
        {/* Menu section */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    `inline-block py-2 px-4 ${
                      isActive ? "text-secondary" : "text-dark"
                    } hover:text-secondary transition`
                  }
                >
                  {menu.title}
                </NavLink>
              </li>
            ))}
            <button className="primary-btn ml-4">Enroll Now</button>
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
