import { useContext, useEffect } from "react";
import Button from "./Button"; 
import { ThemeContext } from "../App"; 

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleTheme = () => {
        toggleTheme(); 
    };

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [theme]);

    return (
        <div className="app_header">
            <Button title="Toggle Theme" disabled={false} onClick={handleTheme} />
        </div>
    );
}
