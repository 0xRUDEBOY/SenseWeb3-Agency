import { Fragment, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
import { ReactComponent as DiscordIcon } from "../../assets/discord.svg";
import SenseWeb3Logo from "../../assets/SenseLogo.svg";

const Navigation = () => {
  // FROSTED NAV BAR ON SCROLL 👇
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 208) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  // ANIMATION ON SCROLL 👇
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Fragment>
      <header className={color ? "HeaderActive" : "HeaderNonActive"}>
        <div className=" max-w-7xl mx-auto items-center flex justify-between space-x-6 px-6">
          <div data-aos="fade-right">
            <Link className="logo-container" to="/">
              <div
                className="w-6 h-6 md:w-16 md:h-14 
              flex gap-2 items-center"
              >
                <img src={SenseWeb3Logo} alt="" />
                <div className="font-sense text-2xl">
                  <div>sense</div>
                  <div className="text-[#99A0FF]">WeB3</div>
                </div>
              </div>
            </Link>
          </div>

          {/* NAVIGATION ROUTE LINKS 👇 */}
          <nav
            data-aos="fade-down"
            data-aos-duration="1000"
            className="space-x-12"
          >
            <Link className="hover:text-[#99A0FF] relative group" to="/">
              HOME
              <span className="Animeline"></span>
            </Link>

            <Link
              className=" hover:text-[#99A0FF] relative group"
              to="/services"
            >
              WEB3 SERVICES
              <span class="Animeline"></span>
            </Link>

            <Link
              className=" hover:text-[#99A0FF] relative group"
              to="/about-us"
            >
              ABOUT US
              <span className="Animeline"></span>
            </Link>

            <Link
              className=" hover:text-[#99A0FF]  relative group"
              to="/contact-us"
            >
              CONTACT US
              <span className="Animeline"></span>
            </Link>
          </nav>

          {/* ICONs FUNCTIONALITY / STYLING 👇*/}
          <div data-aos="fade-left" className="grid grid-cols-2 gap-2">
            <a
              href="https://twitter.com/LynxWeb3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="hover:scale-125 duration-300 " />
            </a>
            <a
              href="https://discord.gg/V3A8NfVhke"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordIcon className="hover:scale-125 duration-300" />
            </a>
          </div>
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
