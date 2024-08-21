import InputForm from "@/components/loginForm";
import { Separator } from "../components/ui/separator";

export default function Login() {

    return (
        <>
            <div className="flex items-center justify-between py-8 px-12 h-[82rem]">
                <InputForm />
                <Separator orientation="vertical" className='ml-32'/>
                <div className="flex items-center m-auto">
                    <img
                        className="w-[600px]"
                        src="https://senneliquor.com.br/wp-content/themes/senneliquor/assets/images/logo-senne-liquor-new.svg"
                        alt="Senne Liquor Logo"
                    />
                </div>
            </div>
        </>
    );
}

