export default function Textarea({onChange, value, type, name, label = null, placeholder = null, autoComplete = null, errors = {}}) {

    return (
        <>
        
        <div className="error-text"><span className={errors[name] ? 'show' : ''}>{errors[name] ?? ''}</span></div>
        {label && <label htmlFor={name}>{label}</label>}
        <textarea className={errors[name] ? 'error' : ''} onChange={onChange} value={value} type={type} name={name} placeholder={placeholder} autoComplete={autoComplete} />
        </>
    );
}