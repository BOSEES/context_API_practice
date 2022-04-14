import { useContext } from "react";
import { CountContext } from "../Contexts/Count/index";

export const  CountLabel = () => {
    const { count } = useContext(CountContext);
    return (
        <div>
            {count}
        </div>
    )
}