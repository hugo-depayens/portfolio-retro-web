import GitHubCalendar from "react-github-calendar";
import Image from "next/image";

function Experience() {
    return (
        <section className="w-full bg-black py-10">
            <div className="-mt-24 cursor-pointer animate-pulse  m-4 p-8 rounded-2xl font-black text-xl text-end w-fit">
                <div className="bg-red-700 rounded-xl w-full h-auto p-3">
                    Experience
                </div>
            </div>
            <div className="w-full mx-auto grid grid-cols-1 items-start md:grid-cols-3 gap-6 px-4">
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
                        className="bg-[#f6340d] relative  aspect-square rounded-lg shadow-lg p-4 group overflow-hidden">
                        <div className="z-10 relative flex flex-col items-center justify-center h-full">
                            <div
                                className=" w-auto h-30 bg-transparent backdrop-blur px-5 py-2 rounded-full flex items-center justify-center text-white mb-5">
                                <Image src='/xspresso.png' alt={'icon'} width={65} height={40}/>
                            </div>
                            <h4 className="text-sm text-center font-bold text-white mb-1">Xspresso </h4>
                            <p className="font-sans text-xs text-gray-200 text-center">
                                Backend TeamLead
                            </p>
                        </div>
                    </div>

                    <div
                        className="bg-gradient-to-bl from-indigo-400 to-cyan-800 relative  aspect-square rounded-lg shadow-lg p-4 group overflow-hidden">
                        <div className="z-10 relative flex flex-col items-center justify-center h-full">
                            <div
                                className=" w-auto h-30 bg-transparent backdrop-blur px-5 py-2 rounded-full flex items-center justify-center text-white mb-5">
                                <Image src='/atexai.png' alt={'icon'} width={150} height={60}/>
                            </div>
                            <h4 className="text-sm font-bold text-white mb-1">Atex AI</h4>
                            <p className="font-sans text-xs text-gray-200 text-center">
                                TeamLead
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
                    className="relative h-fit flex-col justify-center col-span-2 rounded-lg shadow-lg group overflow-hidden">
                    <div
                        className="relative h-fit flex mb-4 justify-center col-span-2 rounded-lg shadow-lg py-5 px-4 group overflow-hidden">
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-800 opacity-0 group-hover:opacity-30 transition duration-500"></div>
                        <div className="z-10 font-black relative">
                            <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
                            <div className='font-sans'>
                                <GitHubCalendar username="hugo-depayens"/>
                            </div>
                        </div>
                    </div>
                    <div
                        className="relative h-fit flex justify-center col-span-2 rounded-2xl shadow-xl py-11 overflow-hidden bg-gradient-to-br from-[#1f1c2c] to-indigo-600 group"
                    >
                        {/* Glow Layer */}
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition duration-700 pointer-events-none"></div>

                        {/* Glass Effect Layer */}
                        <div
                            className="absolute inset-0 backdrop-blur-md bg-white/5 rounded-2xl border border-white/10"></div>

                        {/* Content */}
                        <div className="z-10 text-center space-y-3">
                            <h3 className="text-2xl font-extrabold text-white drop-shadow-lg">
                                Contact me
                            </h3>
                            <p className="text-neutral-300 font-light text-sm max-w-sm mx-auto">
                                Let's build something amazing together.
                            </p>
                            <a href="mailto:vasv29834@gmail.com" className="group">
                                <div
                                    className="mt-4 px-6 py-2 inline-block text-sm sm:text-base font-medium text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 group-hover:shadow-xl"
                                >
                                    vasv29834@gmail.com
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full mx-auto px-4 sm:px-6 py-10">
                <div
                    className="relative bg-white/5 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-md px-6 sm:px-10 py-10 flex flex-col lg:flex-row justify-between overflow-hidden">
                    {/* Glow background */}
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10 opacity-50 pointer-events-none"/>

                    {/* Text Section */}
                    <div className="lg:w-8/12 z-10 text-white">
                        <h1 className="text-2xl sm:text-3xl font-black mb-6 tracking-tight">
                            Shortly about my experience:
                        </h1>

                        <div className="text-sm sm:text-base text-neutral-200 leading-relaxed text-justify space-y-5"
                             style={{textIndent: '1.5em'}}>
                            <p>
                                I have worked as a Full-stack Engineer, focusing on both front-end and back-end
                                development. My responsibilities included improving existing features, fixing critical
                                bugs, and developing new pages to expand platform capabilities. I also explored advanced
                                functionalities like Text-to-Speech (TTS) and Speech-to-Text (STT).
                            </p>

                            <p>
                                On the DevOps side, I optimized CI/CD pipelines, automated deployments, and scaled
                                infrastructure. I implemented smart monitoring to ensure high availability and
                                performance under pressure.
                            </p>

                            <p>
                                Before that, I worked with React.js, Vue.js, and Node.js on dynamic projects, leveling
                                up in databases and API architecture while polishing my full-stack skills.
                            </p>

                            <p>
                                My stack includes JavaScript, Node.js, PostgreSQL, and other cutting-edge techs, always
                                aiming for clean, scalable, and user-focused applications.
                            </p>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:w-4/12 w-full h-64 lg:h-auto mt-10 lg:mt-0 flex justify-center items-center">
                        <div
                            className="w-full h-full max-w-xs bg-neutral-800/50 overflow-hidden rounded-2xl border border-white/10 shadow-inner backdrop-blur-lg flex justify-center items-center">
                            <p className="text-white text-sm italic opacity-60 ">
                                <Image className="w-full" src='/musashi.jpg' alt={'icon'} width={200} height={150}/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}

export default Experience;
