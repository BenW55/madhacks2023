import {useState} from "react";
import styles from "./PromptForm.module.css"

export default function PromptForm({ onSubmit })
{
    const [prompt, setPrompt] = useState("");
    return (
        <form className={styles.form} onSubmit={(e) =>{
            e.preventDefault();
            if(prompt === "")
            {
                return;
            }
            onSubmit(prompt);
            setPrompt("");
        }}>
            <label> Question</label>
            <input 
                className={styles.input} 
                type="text" 
                value = {prompt} 
                onChange={(e) =>{
                    setPrompt(e.target.value);
                }}/>
            <input type="submit"/>
        </form>
    );
}
