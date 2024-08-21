import Navigate from "./navigate";

export default function Header() {
    return (
            <div className="pt-4">
                <img
                className="w-[20rem] items-center m-auto
                    py-5"
                    src="https://senneliquor.com.br/wp-content/themes/senneliquor/assets/images/logo-senne-liquor-new.svg"
                    alt="Senne Liquor Logo"
                />
                <Navigate />
            </div>
    )
}