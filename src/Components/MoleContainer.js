import { useState } from 'react'

import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props) {
    const [mole, setMole] = useState(false)


    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setMole(false)
    }

    let displayMole = mole ? <Mole setScore={props.setScore} handleClick={handleClick} setMole={setMole} /> : <EmptySlot setMole={setMole} />
    return (
        <div style={{ 'display': 'inline-block', 'width': '30vw' }}>
            {displayMole}
        </div>
    )
}

export default MoleContainer

//