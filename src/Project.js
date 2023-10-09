export default function Project({ imgPath, title, deployedLink, githubLink }) {


    return (
        <>
            <div className="card">
                <h2>
                    {title}
                </h2>
                <img className="projectImage" src={imgPath} />
                <div className="projectLinks">
                    <a href={deployedLink}>Deployment</a>
                    <a href={githubLink}>Github</a>
                </div>
            </div>
        </>
    );
}