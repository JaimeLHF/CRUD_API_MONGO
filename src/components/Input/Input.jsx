import './Input.css'

const Input = (props) => {


    const evento_input = (event) => {
        props.evento_input(event.target.value)
    }

    return (
        <div className={`campo_${props.type}`}>
            <label className={`label_${props.type}`}>{props.label}</label>
            <input name={props.radio} type={props.type} value={props.valor} onChange={evento_input} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}
Input.defaultProps = {
    type: 'text',
};

export default Input;