import GitHubCalendar from "react-github-calendar";
import Image from "next/image";

function Experience() {
    return (
        <section className="w-full bg-black py-10">
            <div className="m-4 p-4 rounded-2xl font-black text-3xl text-end bg-blue-700 w-fit">
                Experience
            </div>
            <div className="w-full mx-auto grid grid-cols-1 items-center md:grid-cols-3 gap-6 px-4">
                <div className="grid grid-cols-2 gap-4">
                    <div
                        className="bg-gradient-to-bl from-violet-800 to-cyan-800 relative  aspect-square rounded-lg shadow-lg p-4 group overflow-hidden">
                        <div className="z-10 relative flex flex-col items-center justify-center h-full">
                            <div
                                className=" w-auto h-30 bg-transparent backdrop-blur px-5 py-2 rounded-full flex items-center justify-center text-white mb-5">
                                <Image src='https://uzbekvoice.ai/new-logo.svg' alt={'icon'} width={150} height={40}/>
                            </div>
                            <h4 className="text-sm font-bold text-white mb-1">UzbekVoice.AI</h4>
                            <p className="font-sans text-xs text-gray-200 text-center">
                                Full-stack Engineer
                            </p>
                        </div>
                    </div>

                    <div
                        className="relative bg-neutral-900 aspect-square rounded-lg shadow-lg p-4 group overflow-hidden">
                        <div className="z-10 relative flex flex-col items-center justify-center h-full">
                            <div
                                className="h-24 w-auto bg-transparent backdrop-blur px-5 py-2 rounded-full flex items-center justify-center text-white mb-5">

                                <Image src='https://jetsite.ru/wp-content/uploads/2018/12/logo1.png' alt={'icon'}
                                       width={150} height={40}/>

                            </div>
                            <h4 className="text-sm font-bold text-white mb-1">JetSite</h4>
                            <p className="font-sans text-xs text-gray-200 text-center">
                                Full-stack Engineer
                            </p>
                        </div>
                    </div>
                </div>

                {/* Блок с графиком из GitHub */}
                <div
                    className="relative h-fit flex justify-center col-span-2 rounded-lg shadow-lg p-4 group overflow-hidden">
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-800 opacity-0 group-hover:opacity-30 transition duration-500"></div>
                    <div className="z-10 font-black relative">
                        <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
                        <div className='font-sans'>
                            <GitHubCalendar username="Zoha2400"/>
                        </div>
                    </div>
                </div>
            </div>

                <div className="w-full mx-auto p-4">
                    <div
                        className="relative bg-neutral-900  rounded-2xl shadow-lg p-8 flex justify-between overflow-hidden">
                        <div className="w-8/12 pr-6">
                            <h1 className="text-3xl font-bold text-white mb-4">
                                Shortly about my experience:
                            </h1>

                            <div className='text-xs ext-gray-300 leading-relaxed text-justify' style={{textIndent: '2em'}}>
                                <p>
                                    I have worked as a Full-stack Engineer, focusing on both front-end and back-end
                                    development. My responsibilities included improving existing features, fixing
                                    critical
                                    bugs, and developing new pages to expand platform capabilities. I also explored
                                    advanced
                                    functionalities like Text-to-Speech (TTS) and Speech-to-Text (STT) to enhance user
                                    experience.
                                </p>

                                <br/>
                                <p style={{textIndent: '2em'}}>
                                    On the DevOps side, I optimized CI/CD pipelines, automated deployments, and worked
                                    on
                                    infrastructure scalability. Additionally, I implemented monitoring solutions to
                                    ensure
                                    high availability and performance.
                                </p>

                                <br/>

                                <p>
                                    Prior to that, I contributed to front-end and back-end development for various
                                    projects,
                                    primarily working with React.js and Vue.js for front-end tasks and Node.js for
                                    back-end
                                    development. I significantly improved my skills in back-end development and database
                                    management, while also gaining substantial experience in full-stack development.
                                </p>

                                <br/>

                                <p>
                                    Throughout my career, I have worked with modern technologies such as JavaScript,
                                    Node.js, PostgreSQL, and various frameworks, focusing on building robust, scalable,
                                    and
                                    user-friendly applications. I am always eager to learn and grow in my field,
                                    ensuring
                                    high-quality technical outcomes.
                                </p>

                            </div>
                        </div>


                        {/* Блок для фото - 30% ширины */}
                        <div className="w-3/12 h-96 bg-neutral-700 rounded-xl overflow-hidden">
                            <div className="w-full h-full flex justify-center items-center">
                                <p className="text-white text-lg">Your Image Here</p>
                            </div>
                        </div>
                    </div>
                </div>

        </section>
    );
}

export default Experience;
