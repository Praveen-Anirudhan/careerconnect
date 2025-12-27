import {useEffect, useState} from "react";

const useSlowLoading = (isLoading: boolean, delay=5000) => {
    const [isSlow, setIsSlow] = useState(false);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        if(isLoading)
            timer = setTimeout(() => {
                setIsSlow(true);
            }, delay)
        else {
            setIsSlow(false);
        }

        return (() => clearTimeout(timer))
    }, [isLoading, delay])

    return isSlow;
}

export default useSlowLoading;