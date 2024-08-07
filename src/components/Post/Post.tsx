import "./Post.css"

function Post(props: any){
    return (
        <>
            <div className="post">
                <h2>{props.title}</h2>
                <h3><i>{props.date}</i></h3>
                <section className="content">
                    {props.content}
                </section>
            </div>
        </>
    );
}

export default Post
