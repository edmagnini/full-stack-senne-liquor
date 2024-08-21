import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger
} from "@/components/ui/menubar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logout from "./logout";


export default function Navigate() {
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('senneToken');

        if (token) {
            setLoggedIn(!!token);
        }
    }, []);
    return (
        <Menubar className='flex justify-around'>
            <MenubarMenu>
                <MenubarTrigger>Chamados</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <Link to="/chamados">Ver chamados</Link>
                    </MenubarItem>
                    <MenubarItem>
                        <Link to="/chamados/create">Criar chamado</Link>
                    </MenubarItem>
                    <MenubarItem>
                        <Link to="/chamados/assign">Atribuir chamado</Link>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Medicos</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <Link to="/medicos">Ver medicos</Link>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Hospitais</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <Link to="/hospitais">Ver hospitais</Link>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>{loggedIn ? 'Logout' : 'Login'}</MenubarTrigger>
                <MenubarContent>
                    {loggedIn ? (
                        <MenubarItem>
                            <Link to="/login" onClick={() => Logout}>Fazer Logout</Link>
                        </MenubarItem>
                    ) : (
                        <MenubarItem>
                            <Link to="/login">Fazer Login</Link>
                        </MenubarItem>
                    )}
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}
