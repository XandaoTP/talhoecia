import { TopBar } from "../components/topbar";

export function Home () {
    return (
        <>
           <TopBar /> 
           <section className="mt-5 flex bg-gray-300 justify-center h-96 rounded-2xl mx-60">
                <div>
                    <p className="text-bold">Ofertas</p>
                </div>
           </section>       
           
        </>
    )
}