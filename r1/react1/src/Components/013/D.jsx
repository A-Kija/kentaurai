import { useContext } from "react"
import { ColorContext } from "../../013"

export default function D({nr}) {

    const color = useContext(ColorContext);

    return (
        <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: color
        }}
        >{nr}</div>
    )
}