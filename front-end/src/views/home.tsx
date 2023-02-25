import { TopBar } from "../components/topbar";

export function Home () {
    return (
        <>
           <TopBar /> 
           <section className="mt-10 flex bg-gray-300 justify-center h-96 rounded-2xl mx-60 xsm:flex xsm:w-50 xsm:mx-2 sm:mx-2 bg-opacity-60">
                <div>
                    <p className="text-bold ">Ofertas</p>
                </div>
           </section>       
           
        </>
    )
}