export default function button(props) {
    const mostraLabel = () => {
        alert("A label desse botão é : " + props.label)
    }
    return (
        <button className="btn" onClick={() => mostraLabel()}>{props.label}</button>
    )
}