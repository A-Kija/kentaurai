export default function Input({onChange, value, type, name, placeholder = null, autoComplete = null, errors = {}}) {

    return (
        <>
        <div className="error-text"><span className={errors[name] ? 'show' : ''}>{errors[name] ?? ''}</span></div>
        <input className={errors[name] ? 'error' : ''} onChange={onChange} value={value} type={type} name={name} placeholder={placeholder} autoComplete={autoComplete} />
        </>
    );
}