export default function button(props) {
    return <button className="btn" onClick={() => alert("A label desse botão é : " + props.label)}>{props.label}</button>
}
