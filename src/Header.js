export default function Header({ children }) {


    return (
        <>
            <h1>
                Nick's Portfolio Site
            </h1>
            <div>
                {children}
            </div>
        </>
    );
}