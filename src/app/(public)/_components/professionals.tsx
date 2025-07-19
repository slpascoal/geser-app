import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import professionalImg from "../../../../public/professional.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Professionals() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Profissionais Disponíveis
                </h2>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Example Professional Card */}
                    <Card className="overflow-hidden p-0">
                        <CardContent className="p-0">
                            <div>
                                <div className="relative h-48">
                                    <Image 
                                        src={professionalImg}
                                        alt="Profissional"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">
                                            Clínica centro
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Rua x, centro, 123, Cidade - UF
                                        </p>
                                    </div>

                                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                                </div>
                                <Link
                                    href="/clinica/123"
                                    className="w-full bg-blue-500 hover:bg-blue-400 text-white flex
                                    items-center transition-colors justify-center py-2 rounded-md text-sm md:text-base font-medium"
                                >
                                    Agendar horário
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </CardContent>
                    </Card>                    
                </section>
            </div>
        </section>
    );
}