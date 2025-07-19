import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import professionalImg from "../../../../public/professional.png";

export function Professionals() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Profissionais Disponíveis
                </h2>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Example Professional Card */}
                    <Card>
                        <CardContent>
                            <div>
                                <div className="relative h-48">
                                    <Image 
                                        src={professionalImg}
                                        alt="Profissional"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3>
                                            Clínica centro
                                        </h3>
                                        <p>
                                            Rua x, centro, 123, Cidade - UF
                                        </p>
                                    </div>

                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500">

                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>                    
                </section>
            </div>
        </section>
    );
}