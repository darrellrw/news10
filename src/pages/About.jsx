import srcDarrell from "../assets/darrell.jpg"
import srcDwiko from "../assets/Dwiko.jpeg"
import srcBagus from "../assets/Bagus.jpeg"
import srcCarol from "../assets/carol.png"

function About() {

    return (

        <div className="flex flex-col justify-between xl:mx-[15%] md:mx-[10%] mx-[5%]">
            <h1 className="text-3xl self-center my-5">Kelompok 10</h1>
            <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 bg-white">
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                        <h3 className="text-lg font-semibold text-gray-900">Navigation Bar, Footer Bar dan Integrasi API</h3>
                        <p className="my-4">Kapan GTA 6 Keluar?</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <img className="rounded-full w-9 h-9" src={srcDarrell} alt="profile picture"/>
                        <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                            <div>Darrell</div>
                            <div className="text-sm text-gray-500 ">Bangkit Cohort ML Path</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                        <h3 className="text-lg font-semibold text-gray-900">Login, Register dan LocalStorage Management</h3>
                        <p className="my-4">Ya Begitulah :)</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <img className="rounded-full w-9 h-9" src={srcCarol} alt="profile picture"/>
                        <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                            <div>Carol</div>
                            <div className="text-sm text-gray-500">Mahasiswa Informatika ITK</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                        <h3 className="text-lg font-semibold text-gray-900">Article Management dan Article Page</h3>
                        <p className="my-4">Beli ayam geprek di warung panko14</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <img className="rounded-full w-9 h-9" src={srcDwiko} alt="profile picture"/>
                        <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                            <div>Dwiko</div>
                            <div className="text-sm text-gray-500">Mahasiswa Informatika ITK</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                        <h3 className="text-lg font-semibold text-gray-900">Home dan Card</h3>
                        <p className="my-4">Sebagai mahasiswa ITK saya Bangga SPECTA!!!</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <img className="rounded-full w-9 h-9" src={srcBagus} alt="profile picture"/>
                        <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                            <div>Bagus</div>
                            <div className="text-sm text-gray-500">Mahasiswa Informatika ITK</div>
                        </div>
                    </figcaption>    
                </figure>
            </div>
        </div>

    )
}

export default About