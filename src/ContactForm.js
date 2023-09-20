import { useState } from "react";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [requiredFieldBlank, setRequiredFieldBlank] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        if (!/^[\w-\.!#\$&'*\+=?\^`\{\}|~\/]+@([\w-]+\.)+[\w-]{2,}$/.test(email)) {
            alert("Not a valid email address!")
            return;
        }

        form.childNodes.forEach(element => element.value = '');
        setSubmitted(true);
        setRequiredFieldBlank(null);
    }

    function handleBlur(e) {
        e.preventDefault();

        if (e.target.value === '') {
            setRequiredFieldBlank(e.target.name);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    name="name" 
                    type="text"
                    disabled={submitted}
                    onBlur={handleBlur}
                />
                <label htmlFor="email">Email</label>
                <input 
                    name="email" 
                    type="text"
                    disabled={submitted}
                    onBlur={handleBlur}
                />
                <label htmlFor="message">Message</label>
                <input
                    name="message"
                    type="text"
                    disabled={submitted}
                    onBlur={handleBlur}
                />
                <button>Submit</button>
            </form>
            {requiredFieldBlank && <p>{requiredFieldBlank} field is required</p>}
            {submitted && <p>Thanks!</p>}
        </>
    )
}