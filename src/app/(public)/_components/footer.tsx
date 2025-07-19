export function Footer() {
    return (
        <footer className="py-6 bg-gray-800 text-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    <p className="text-sm md:text-base mb-4">Todos os direitos reservados. © {new Date().getFullYear()}</p>
                    <p className="text-xs md:text-sm">
                        Desenvolvido por <span className="hover:text-white duration-300">sCode</span>    
                    </p>
                </div>
            </div>
        </footer>
    );
}