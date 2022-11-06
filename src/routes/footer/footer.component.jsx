import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
import { ReactComponent as DiscordIcon } from "../../assets/discord.svg";
import { ReactComponent as SenseLogo } from "../../assets/SenseLogo.svg";
import { Link } from "react-router-dom";

// niggles

const Footer = () => {
  return (
    <footer className="bg-[#1b193a] border-t-4 border-orange-400 relative z-10 py-20">
      <div className="  text-white font-bold text-xl rounded-3xl max-w-7xl mx-auto bg-[#3b108c] opacity-80">
        <div className="flex justify-between px-20 py-12">
          <div>
            <SenseLogo />
          </div>

          {/* OUR SERVICES */}
          <div>
            <div className="border-b-4 pb-6 mb-6 border-orange-300 ">
              OUR SERVICES
            </div>
            <div className="font-light space-y-3 text-base">
              <div>
                <Link className="hover:text-orange-400">
                  Advisory & Consultancy
                </Link>
              </div>
              <div>
                <Link className="hover:text-orange-400">Web Development</Link>
              </div>
              <div>
                <Link className="hover:text-orange-400">NFT Art Designing</Link>
              </div>
              <div>
                <Link className="hover:text-orange-400">
                  Collaborations Management
                </Link>
              </div>
              <div>
                <Link className="hover:text-orange-400">
                  Community Management
                </Link>
              </div>
              <div>
                <Link className="hover:text-orange-400">Moderation</Link>
              </div>
              <div>
                <Link className="hover:text-orange-400">Marketing</Link>
              </div>
              <div>
                <Link className="hover:text-orange-400">Copywriting</Link>
              </div>
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <div className="border-b-4 pb-6 mb-6 border-orange-300">
              USEFUL LINKS
            </div>
            <div className="font-light space-y-3 text-base">
              <div>
                <Link className="hover:text-orange-400">
                  Partners & Associates
                </Link>
              </div>

              <div>
                <Link className="hover:text-orange-400">
                  Schedule A Meeting
                </Link>
              </div>

              <div>
                <Link className="hover:text-orange-400" to="/about-us">
                  About Us
                </Link>
              </div>

              <div>
                <Link className="hover:text-orange-400" to="FAQs">
                  FAQs
                </Link>
              </div>
            </div>
          </div>

          {/* REACH US */}
          <div>
            <div className="border-b-4 pb-6 mb-6 border-orange-300">
              REACH US
            </div>

            <div className="font-light text-orange-400 space-y-10 text-base">
              <div className="space-y-3">
                <p>Global Team Location:</p>

                <div className="space-y-1 text-white">
                  <p>📍 Toronto | Canada</p>
                  <p>📍 Dubai | United Arab Emirates</p>
                  <p>📍 Sydney | Australia</p>
                  <p>📍 New York | USA</p>
                  <p>📍 Tokyo | Japan</p>
                </div>
              </div>

              <div className="space-y-3">
                <p>Email:</p>
                <div className="text-white">Support@lynxconnect.com</div>
              </div>

              <div className="space-y-3">
                <p>Social Media:</p>
                <div className="flex gap-2 ">
                  <a
                    href="https://twitter.com/LynxWeb3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon className="hover:scale-125 duration-300" />
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
            </div>
          </div>
        </div>
        <div className="text-white text-center pb-10 font-light">
          © 2022 LynxConnect Media. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
