import { useState } from "react";
import PageTitle from "../components/PageTitle";

const Pesquisa = () => {
    const [formData, setFormData ] = useState({
        "Nome": "",
        "Email": "",
        "Whatsapp": "",
        "Nota": 0
    });

    const notas = [1, 2, 3, 4, 5];
    const [success, setSuccess] = useState(false);
    const [formReturn, setFormReturn] = useState({});

    const saveForm = async(event) => {
        event.preventDefault();

        try {
            const response = await fetch("/api/save", {
                method:"POST",
                body: JSON.stringify(formData)
            });
    
            const data = await response.json();
            setSuccess(true);
            setFormReturn(data);

        }catch(error) {
            console.log(error)
        }
    }

    const typeOnForm = event => {
        const inputValue = event.target.value;
        const inputKey = event.target.name;
        setFormData(old => ({
            ...old,
            [inputKey]: inputValue
        }));
    }
    
    return (
        <>
            <PageTitle title="Pesquisa" />
            <h1 className="text-center font-bold my-4 text-2xl max-w-screen-sm mx-auto">Pesquisa</h1>
            <p className="max-w-screen-sm mx-auto">O restaurante sempre busca melhorar o atendimento para os nossos clientes. Queremos escutar a sua opinião :)</p>

            {!success && 
                <form className="max-w-screen-sm mx-auto text-center" method="POST">
                    <label className="my-4 block text-left">
                        <span className="my-2 block font-bold text-gray-700">Seu nome:</span>
                        <input type="text" className="px-2 py-4 block w-full border-2 border-gray-700 rounded" placeholder="Maria" required onChange={typeOnForm} name="Nome" value={formData.Nome} />
                    </label>

                    <label className="my-4 block text-left">
                        <span className="my-2 block font-bold text-gray-700">Seu e-mail:</span>
                        <input type="email" className="px-2 py-4 block w-full border-2 border-gray-700 rounded" placeholder="seu@email.com" required onChange={typeOnForm} name="Email" value={formData.Email} />
                    </label>

                    <label className="my-4 block text-left">
                        <span className="my-2 block font-bold text-gray-700">Seu whatsapp:</span>
                        <input type="text" className="px-2 py-4 block w-full border-2 border-gray-700 rounded" placeholder="(00) 98765-4321" required onChange={typeOnForm} name="Whatsapp" value={formData.Whatsapp} />
                    </label>

                    <label className="my-4 block text-left">
                        <span className="my-2 block font-bold text-gray-700">Sua nota:</span>
                        <div className='flex py-6'>
                            {notas.map(nota => {
                                return (
                                <label className='block w-1/5 text-center font-bold' key={nota+"-radio"}>
                                    {nota}<br />
                                    <input type='radio' name='Nota' value={nota} onChange={typeOnForm} className="cursor-pointer" />
                                </label>
                                )
                            })
                            }
                        </div>
                    </label>

                    <button
                    className="nline-block bg-blue-500 px-6 py-4 font-bold rounded-sm shadow text-white hover:bg-blue-700 transition ease-linear duration-200"
                    onClick={saveForm}>
                        Enviar
                    </button>
                </form>
            }
            {success && 
            <div className="max-w-screen-sm mx-auto text-center">
                <h2 className="bg-blue-200 border-t border-b border-blue-500 text-blue px-4 py-3 my-4 mt-12 font-bold text-blue-900">Obrigado por contribuir com a melhoria do restaurante</h2>
                <span className="block border border-black-500 p-4">
                    <p><i>{formReturn.promo}</i></p>
                    <br />
                    <p>
                        <b>O seu cupom é:</b> <br />
                        <span className="text-2xl block mt-4 text-blue-900 font-bold">{formReturn.cupom}</span>
                    </p>
                </span>
            </div>
            }
        </>
    );
}

export default Pesquisa;