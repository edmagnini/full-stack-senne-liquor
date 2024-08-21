import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { apiUrl } from "../constants/api-url";
import { useNavigate } from 'react-router-dom';

const FormSchema = z.object({
    email: z.string().email({
        message: "Endereço de e-mail inválido",
    }),
    senha: z.string().min(6, {
        message: "Senha deve conter ao menos 6 caracteres",
    }),
});

export default function InputForm() {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            senha: "",
        },
    });
    const navigate = useNavigate();

    async function onSubmit(data) {
        let messageTitle = ''
        let messageDescription = ''
        try {
            const loginHandler = await axios.post(`${apiUrl}/usuario/login`, data)
            console.log(data)
            if (loginHandler.status == 200) messageTitle = 'Login realizado com sucesso', messageDescription = 'Estamos te direcionando para página principal'
            localStorage.setItem('senneToken', loginHandler.data.accessToken);
            localStorage.setItem('refreshToken', loginHandler.data.refreshToken);
            navigate('/chamados/create');
        // eslint-disable-next-line no-unused-vars
        } catch (err) {
            console.log(err)
            messageTitle = 'Falha na tentativa de acesso', messageDescription = 'Credenciais inválidas'
        }
        toast({
            title: `${messageTitle}`,
            description: `${messageDescription}`,
        });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/3 space-y-6">
            <FormLabel className='text-7xl'>Login</FormLabel>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="email@example.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="senha"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="senha"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className='ml-[40%]' type="submit">Entar</Button>
            </form>
        </Form>
    );
}
