
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TopBar } from "../components/topbar";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export function Home () {
    return (
        <>
           <TopBar /> 
           <section className="mt-10 flex bg-gray-300 justify-center h-96 rounded-2xl mx-60 xsm:flex xsm:w-50 xsm:mx-2 sm:mx-2 bg-opacity-60">
                <div className="flex justify-center items-center">
                <FontAwesomeIcon icon={faCoffee} className="text-emerald-700"/>
                <p className="text-bold px-5 text-3xl">Site em construção</p>
                <FontAwesomeIcon icon={faCoffee} className="text-emerald-700"/>
                </div>
           </section>       
           
        </>
    )
}