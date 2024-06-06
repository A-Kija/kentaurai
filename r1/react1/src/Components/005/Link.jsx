export default function Link({to, children}) {
    return (
        <a href={to} style={{
            textDecoration: 'none',
            color: 'crimson'
        }}>{children[2]}{children[0]}</a>
    )
}