import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  const myLinks = [
    {
      site: "Github",
      link: "https://github.com/NasirAli786091",
      logo: FaGithub,
    },
    {
      site: "Instagram",
      link: "https://www.instagram.com/currentpage999",
      logo: FaInstagramSquare
    },
    {
      site: "Mail",
      link: "mailto:nasirali786091@gmail.com",
      logo: IoMdMail
    },
  ]
  return (
    <div className="self-stretch flex items-center justify-center gap-12 py-10">
      {
        myLinks.map((curLink) => {
          const Icon = curLink.logo;
          return (
              <a
                key={curLink.site}
                href={curLink.link}
                target={curLink.site !== "Mail" ? "_blank" : undefined}
                rel={curLink.site !== "Mail" ? "noopener noreferer" : undefined}
                className="flex flex-col items-center gap-2 hover:text-gray-300 transition all duration 300 hover:scale-110 "
              >
                <Icon className="text-3xl"/>
                <span className="text-sm">{curLink.site}</span>
              </a>
          )
        })
      }
    </div>
  )
}

export default Contact