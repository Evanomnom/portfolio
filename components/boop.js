
import { animated, useSpring } from 'react-spring';
import React from 'react'

const Boop = ({ rotation = 3, timing = 125, children }) => {
    const [isBooped, setIsBooped] = React.useState(false);
    const style = useSpring({
        display: 'inline-block',
        backfaceVisibility: 'hidden',
        transform: isBooped
            ? `rotate(${rotation}deg)`
            : `rotate(0deg)`,
        config: {
            tension: 250,
            friction: 10,
        },
    });1
    React.useEffect(() => {
        if (!isBooped) {
            return;
        }
        const timeoutId = window.setTimeout(() => {
            setIsBooped(false);
        }, timing);
        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [isBooped, timing]);
    const trigger = () => {
        setIsBooped(true);
    };
    return (
        <animated.span onMouseEnter={trigger} style={style}>
            {children}
        </animated.span>
    );
};

export default Boop;