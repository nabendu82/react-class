// const Greet = ({ name, children }) => {
const Greet = (props) => {
    const { name, children } = props;
    return (
        <>
            <h1>Greet from {name}</h1>
            <p>{children}</p>
        </>
    )
}

export default Greet