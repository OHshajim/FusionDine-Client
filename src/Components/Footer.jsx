import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer items-center p-5 md:p-10 bg-neutral text-neutral-content place-items-center">
                <aside>
                    <h2 className="text-3xl font-bold ">Name</h2>
                    <p>Providing reliable tech since 2006</p>
                </aside>
                <nav className=" ">
                    <h2 className="text-2xl font-bold">Contact With Us</h2>
                    <p>Number : +8801741942510 </p>
                    <p>Gmail : ajshajimmax@gamil.com </p>
                    <p>Location : 36/D Brahmondi , Dhaka , Bangladesh  </p>
                </nav>
                <aside className="flex flex-col items-center ">
                    <h2 className="text-2xl font-bold">Social</h2>
                    <div className="grid grid-flow-col gap-4 text-3xl">
                        <a href="https://www.facebook.com"><FaFacebook /></a>
                        <a href="https://www.linkedin.com"><FaLinkedin /></a>
                        <a href="https://www.github.com"><FaGithub /></a>
                    </div>
                </aside>
            </footer>
            <footer className="footer footer-center p-5 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by <span className="font-bold text-sm">Name</span> Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;