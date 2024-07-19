import { useEffect, useState } from 'react';

const useFadeIn = () => {
    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        setShowContent(true)
    }, [])

    const className = `fade-in ${showContent ? 'show' : ''}`

    return className
};

export default useFadeIn;
