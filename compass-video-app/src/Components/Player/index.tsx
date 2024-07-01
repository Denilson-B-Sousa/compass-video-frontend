import ReactPlayer from 'react-player'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react';
import { Button } from '@components/Button';
// Render a YouTube video player
export function Player() {
    
    const [isClose, setIsClose] = useState<boolean>(true);

    const handleClosePlayer = () => {
         if(!isClose) {
            setIsClose(true);
        } else setIsClose(false)
    }

    return(
      isClose ? 
        <div className='absolute w-[98.8vw] h-[99vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <ReactPlayer url='https://www.youtube.com/watch?v=wmlcMkj2H70' loop width="100%" height="100%" controls playing={true} muted={true} />     
            <div className='absolute md:top-20 md:left-10 top-20 left-20'>
                <Button outlined size='md' onClick={handleClosePlayer}> <ArrowLeft size="24px" className='mr-3'/> Close Player</Button>
            </div>
        </div>
       : null
    )
}