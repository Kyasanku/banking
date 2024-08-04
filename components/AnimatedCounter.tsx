'use client';

import CountUp from "react-countup";

const AnimatedCounter = ({amount}: { amount: number }) => {
    return (
        <>
            <CountUp
                decimal={"."}
                decimals={2}
                prefix={'UGX '}
                end={amount}
            />
        </>
    );
}

export default AnimatedCounter;
