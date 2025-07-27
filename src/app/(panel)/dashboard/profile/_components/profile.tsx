"use client"

import { FormProvider } from "react-hook-form"
import { useProfleForm } from "./profile-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Input } from '@/components/ui/input'
import imgUser from '../../../../../../public/professional.png'
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ProfileContent() {
    const form = useProfleForm()
    


    return(
        <div className="mx-auto">
            <FormProvider {...form}>
                <form>
                    <Card>
                        <CardHeader>
                            <CardTitle>Meu Perfil</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex justify-center">
                                <div className="bg-gray-200 relative h-40 w-40 rounded-full overflow-hidden">
                                    <Image 
                                        src={imgUser}
                                        alt="Foto do usuário"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <FormField 
                                    control={form.control}
                                    name="name"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Nome Completo</FormLabel>
                                            <FormControl>
                                                <Input {...field}
                                                    placeholder="Digite o nome da empresa..."
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField 
                                    control={form.control}
                                    name="address"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Endereço</FormLabel>
                                            <FormControl>
                                                <Input {...field}
                                                    placeholder="Digite o endereço da empresa..."
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField 
                                    control={form.control}
                                    name="phone"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Telefone</FormLabel>
                                            <FormControl>
                                                <Input {...field}
                                                    placeholder="Digite o telefone da empresa..."
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField 
                                    control={form.control}
                                    name="status"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Status da empresa</FormLabel>
                                            <FormControl>
                                                <Select 
                                                    onValueChange={field.onChange} 
                                                    defaultValue={field.value ? "active" : "inactive"}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder='Selecione o status da empresa' />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="active">ATIVO</SelectItem>
                                                        <SelectItem value="inactive">INATIVO</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </FormProvider>
        </div>
    )
}