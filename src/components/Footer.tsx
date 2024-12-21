function Footer() {
    return (
        <footer className="w-full bg-black text-gray-400 py-6 border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-sm mt-1">
                        Создано с любовью к технологиям и стилю ретро.
                    </p>
                </div>
                <div className="flex gap-6">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-300 transition duration-200"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-300 transition duration-200"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:your-email@example.com"
                        className="text-gray-500 hover:text-gray-300 transition duration-200"
                    >
                        Email
                    </a>
                </div>
            </div>
            <div className="mt-6 text-center text-xs text-gray-600">
                &copy; {new Date().getFullYear()} RetroPortfolio. Все права защищены.
            </div>
        </footer>
    );
}

export default Footer;
