export default function text (props) {
    return <div style={{color:props.cor}}>
                <p>{props.texto.toUpperCase()}</p>
            </div>

}