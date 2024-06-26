const WithColor = Component => color => <Component color={color} />

export default function Figure({children, color}) {

    return (
        <>
            {
               WithColor(children.type)({color}) 
            }
        </>
    );
}