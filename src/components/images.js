const Image = ({ images }) => {
    return (
        <div>
            <h1>List of Images</h1>
            {
                images?.map((image) => (
                    <div>
                        <img alt="not loadable" loading="lazy" src={image.url} height={300} width={300} />
                    </div>
                ))
            }
        </div>
    )
}

export default Image