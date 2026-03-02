import { FaGithub } from "react-icons/fa";

const Project = () => {
  const projectDatas = [
    {
      name: "Chat App",
      detail: "It is a real-time chat application where users can connect, chat privately. It is built with the MERN stack and utilizes Socket.io for real time bi-directional communication and mongoDB for data storing.",
      gitLink: "https://github.com/NasirAli786091/ChatSphere"
    },
    {
      name: "Sudoku Solver",
      detail: `A simple terminal based Python program to generate Sudoku Answer(s). it will generate the output if there are multiple answers it will print all of them.`,
      gitLink: "https://github.com/NasirAli786091/Sudoku_Solver"
    },
  ]

  return (
    <section className="flex-1 flex flex-col items-center gap-10 px-6 hover:cursor-default">

      <h1 className="text-5xl text-gray-300">
        Projects
      </h1>
      <div className="flex-1 flex flex-col gap-5 sm:px-20">
        {
          projectDatas.map((project) => {
            return (
              <div key={project.name} className="flex flex-col gap-3">

                <div className="p-2 flex items-center self-start gap-4 text-3xl border-b-5">
                  <h1 className="">{project.name}</h1>
                  <a className=" hover:text-gray-200"
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    <FaGithub />
                  </a>
                </div>

                <p className="text-md px-3">{project.detail}</p>
              </div>)
          })
        }
      </div>
    </section>
  )
}

export default Project