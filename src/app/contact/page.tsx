import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";


export default function ContactPage() {
  return (
    <section className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-x-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

          <p className="text-secondary md:w-2/3">
            I'm always open to discussing exciting projects, innovative ideas,
            or meaningful opportunities where I can contribute and add value.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
                <FaEnvelope className="w-6 h-6 text-primary"/>

                <div>
                    <h3 className="font-semibold">Email: </h3>
                    <Link href="mailto:mr.rossy2020@gmail.com" className="text-secondary 
                        hover:text-primary">Mr.rossy2020@gmail.com</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
