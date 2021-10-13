import React from "react";
import Link from "next/link";

const Header = () => {
    return(
        <header className="bg-gray-700 color-white p-4">
            <div className="container mx-auto text-center p-8">
                <Link href="/">
                    <a>
                        <span className="font-black text-3xl text-yellow-500">Palpitebox</span>
                    </a>
                </Link>
            </div>

            <nav className="container mx-auto text-center p-2">
                <ul className="flex space-x-4 text-center items-center justify-center text-white">
                    <li>
                        <Link href="/">
                            <a className="hover:underline">Página inicial</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/sobre">
                            <a className="hover:underline">Sobre</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/pesquisa">
                            <a className="hover:underline">Pesquisa</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contato">
                            <a className="hover:underline">Contato</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            
        </header>
    );
}

export default Header