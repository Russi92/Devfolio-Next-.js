import { projects } from "@/contents/project";
import Image from "next/image";
import Link from "next/link";
import { FaGithub ,FaExternalLinkAlt} from "react-icons/fa";


export default function Projects(){
    return(
        <section className="container max-w-7xl mx-auto py-20">
            <h1 className="text-4xl text-center font-bold mb-4">My Projects</h1>
            <p className="text-lg text-secondary mb-24 text-center">Here are some of my recent projects. Click on the links to view the code or live demo.</p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {
                        projects.map((project) => (
                            <article key={project.title} className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 duration-300 ease-in-out 
                            hover:-translate-y-2 hover:border-primary hover:shadow-lg'>
                                <div className='relative aspect-video mb-4 rounded-lg overflow-hidden'>   
                                    <Image src={project.image} alt={project.title} fill className='object-cover' 
                                    sizes='(max-width : 768px) 100vw (max-width: 1200px) 50vw , 33vw'/>
                                </div>

                                <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>

                                <p className='text-gray-600 dark:text-gray-300 mb-4'>{project.description}</p>

                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {
                                        project.technologies.map((tech , index) => (
                                            <span key={index} className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'>
                                                {tech}
                                            </span>

                                        ))
                                    }
                                </div>

                                <div className='flex gap-4 mt-2'>
                                    <Link href={project.githubLink} target='_blank' className='flex items-center gap-2 text-secondary hover:text-primary
                                    transition-colors'>
                                    <FaGithub className='w-5 h-5'/> <span>Code</span>
                                    </Link>

                                    <Link href={project.demoLink} target='_blank' className='flex items-center gap-2 text-secondary hover:text-primary
                                    transition-colors'>
                                    <FaExternalLinkAlt className='w-5 h-5'/> <span>Live Demo</span>
                                    </Link>
                                </div>

                            </article>
                        ))
                    }
                </div>
        </section>
    )
}