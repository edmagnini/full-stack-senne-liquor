import { toast } from "./ui/use-toast"

export default function Logout() {
    localStorage.removeItem('senneToken')
    toast({
        title: `Logout realizado com sucesso`,
        description: `Estamos redirecionando você para página de login`,
    });
}