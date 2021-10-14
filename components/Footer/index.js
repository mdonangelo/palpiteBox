import React from "react";
import Link from "next/link";

const Footer = () => {
    return(
        <>
            <footer className="bg-gray-900">
                <div className="container text-center text-white mx-auto py-4 px-1">
                    <p>Primeiro projeto em Next - devpleno</p>
                    <p className="pt-2"><Link href="https://br.linkedin.com/matheusdonangelo"><a className="hover:underline font-bold" target="_blank">Linkedin - @matheusdonangelo</a></Link></p>
                </div>

            </footer>
        </>
    );
}

export default Footer;