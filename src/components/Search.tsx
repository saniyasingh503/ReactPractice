import {FaSearch} from "react-icons/fa";
import "./Search.css";
import { useEffect, useState } from "react";

export default function Search(props: { onSearch: (arg0: any) => void; }) {
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            props.onSearch(inputValue.trim());
        }, 300); 

        return () => clearTimeout(timeoutId); 
    }, [inputValue, props]);

    const handleInputChange = (e: { target: { value: any; }; }) => {
        setInputValue(e.target.value);
    }

    return (
        <div className="search-wrapper">
            <div className="search-icon">
                <FaSearch size={20} />
            </div>
            <input className="search-input" type="text" onChange={handleInputChange} placeholder="Search" />
            <div className="end-icon">
            </div>
        </div>
    )
}