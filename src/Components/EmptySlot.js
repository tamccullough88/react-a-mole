import { useEffect } from 'react'
import moleHillImg from './molehill.png'
function MoleHill(props) {
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{ 'width': '10vw' }}
                src={moleHillImg}
                alt="molehill" />
        </div>
    )
}

export default MoleHill