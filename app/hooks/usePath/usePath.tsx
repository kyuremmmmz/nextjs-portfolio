import  { useState } from 'react'

function usePath() {
    const [pathHash, setPathHash] = useState<string | undefined>();
    const pathName = (path: string) => {
        setPathHash(path);
        console.log(path);
    }
    return {
        pathName: pathName,
        path: pathHash
    }
}

export default usePath