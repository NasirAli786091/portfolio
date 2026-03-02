import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
    const datas = [
        {name: "HTML", icon:  <FaHtml5/>},
        {name:"CSS", icon: <FaCss3/>},
        {name:"REACT", icon: <FaReact/>},
        {name:"JAVA", icon: <FaJava/>},
        {name:"TYPESCRIPT", icon: <SiTypescript/>},
        {name:"PYTHON", icon: <FaPython/>},
        {name:"MYSQL", icon: <SiMysql/>},
        {name:"NODEJS", icon: <FaNodeJs/>},
        {name:"TAILWIND", icon: <RiTailwindCssFill/>},
    ]
    return (
    <div className="grid grid-cols-3 gap-12 sm:gap-15">
        {
            datas.map((skill) => {
                return (
                    <div key={skill.name} className="flex flex-col items-center justify-center">
                        <div className="text-2xl">{skill.icon}</div>
                        <h2 className="text-sm">{skill.name}</h2>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Skills