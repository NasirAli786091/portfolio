import Skills from "../components/Skills";

export default function Home() {
    return (
        <section className="flex-1">

            <div className="gap-5 px-3 flex items-center flex-col sm:flex-row sm:items-center">

                {/* Image */}
                <div className="w-50 h-60 sm:w-60 sm:h-90">
                    <div className="w-full h-full">
                        <img src="/assets/myImg.JPG" alt="me" className="w-full h-full object-cover rounded-[100px]" />
                    </div>
                </div>

                {/* Intro */}
                <div className="flex-1 flex text-2xl flex-col sm:text-4xl gap-5">
                    <h1 className="text-4xl sm:text-6xl">Hi, I'm <span className="text-gray-300">Naser</span></h1>
                    <p>
                        I'm <span className="text-gray-300">Full Stack developer</span>, passionate about building clean and interactive web experieneces.
                    </p>
                </div>

            </div>

            {/* Skills */}
            <div className="bg-gray-900 w-full h-0.5 my-4"></div>
                <Skills />
        </section>
    )
}