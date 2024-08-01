import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

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
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `inline-block py-2 px-4 ${
                    isActive ? "text-secondary" : "text-dark"
                  } hover:text-secondary transition`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `inline-block py-2 px-4 ${
                    isActive ? "text-secondary" : "text-dark"
                  } hover:text-secondary transition`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `inline-block py-2 px-4 ${
                    isActive ? "text-secondary" : "text-dark"
                  } hover:text-secondary transition`
                }
              >
                Academics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-team"
                className={({ isActive }) =>
                  `inline-block py-2 px-4 ${
                    isActive ? "text-secondary" : "text-dark"
                  } hover:text-secondary transition`
                }
              >
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `inline-block py-2 px-4 ${
                    isActive ? "text-secondary" : "text-dark"
                  } hover:text-secondary transition`
                }
              >
                Contact Us
              </NavLink>
            </li>
            <button className="primary-btn ml-4">Admission Open</button>
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
