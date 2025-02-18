interface ButtonProp {
    title: string,
    disabled: boolean,
    onClick: () => void
}


export default function Button({ title, disabled, onClick}: ButtonProp) {
    return (
        <button className='btn' disabled={disabled} type='button' onClick={onClick}>{title}</button>
    )
}