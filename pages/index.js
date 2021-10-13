import React from "react";
import Link from "next/link";

const Index = () => {
    return (
        <>
            <h1>Seja bem-vindo(a)</h1>
            <p>O restaurante devpleno busca atender da melhor forma possível os seus clientes.</p>
            <p>Por isso, gostariamos de ouvir a sua opinião sobre o atendimento em nosso restaurante.</p>
            
            <div className="text-center block my-12">
                <Link href="">
                    <a className="inline-block bg-blue-500 px-6 py-4 font-bold rounded-sm shadow text-white hover:bg-blue-700 transition ease-linear duration-200">Enviar sugestões</a>
                </Link>
            </div>

            <div className="block mt-12">
                <p className="font-bold text-gray-400">Ao dar a sua sugestão você ganha um cupom de 10% de desconto na próxima compra.</p>
            </div>
        </>
    );
}

export default Index 