import PageTitle from "../components/PageTitle";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Index = () => {

    const { data, error } = useSWR('/api/getPromo', fetcher)

    return (
        <>
            <PageTitle title="Página inicial" />
            <h1 className="text-center font-bold my-4 text-2xl">Seja bem-vindo(a)</h1>
            <p>O restaurante devpleno busca atender da melhor forma possível os seus clientes.</p>
            <p>Por isso, gostariamos de ouvir a sua opinião sobre o atendimento em nosso restaurante.</p>
            
            <div className="text-center block my-12">
                <Link href="./pesquisa">
                    <a className="inline-block bg-blue-500 px-6 py-4 font-bold rounded-sm shadow text-white hover:bg-blue-700 transition ease-linear duration-200">Enviar sugestões</a>
                </Link>
            </div>

            {!data && <p>Carregando...</p>}
            {data && data.showCoupon &&
                <div className="block mt-12">
                    <p className="font-bold text-gray-400">
                        {data.message}
                    </p>
                </div>
            }
        </>
    );
}

export default Index 