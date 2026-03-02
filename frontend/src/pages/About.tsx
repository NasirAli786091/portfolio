import Contact from "./Contact";

const About = () => {
    const highLightText = `text-gray-300`;

    return (
        <section className="flex-1 gap-5 mb-3 flex flex-col items-center">

            <h1 className="text-5xl text-gray-300">About Me</h1>

            <div className="flex-1 flex flex-col justify-center px-5 gap-8 leading-relaxed text-lg">
                <p>I'm <span className={`${highLightText}`}>Syed Naser Ali</span>, currently pursuing my MCA at UEM Kolkata.</p>
                <p>I enjoy working across both <span className={`${highLightText}`}>frontend</span> and <span className={`${highLightText}`}>backend</span>.</p>
                <p>I have experience with technologies like <span className={`${highLightText}`}>React</span>, <span className={`${highLightText}`}>TypeScript</span>, <span className={`${highLightText}`}>Node.js</span>, and <span className={`${highLightText}`}>Express</span> for building dynamic applications. I also work with tools like <span className={`${highLightText}`}>Postman</span> for API testing and <span className={`${highLightText}`}>Tailwind CSS</span> for creating clean UI designs.</p>
                {/* <p>I'm continuously improving my development skills by building projects and exploring better architecture and system design practices.</p> */}
            </div>

            <div className="self-stretch flex flex-col items-center gap-4">
                <Contact/>
            </div>
        </section>
    )
}

export default About