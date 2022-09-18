import { useRef } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect } from 'react';



const useAnimateInView = () => {
    const ref = useRef(null);
    const control = useAnimation();
    const inView = useInView(ref);


    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
      }, [control, inView]);


    return [
        ref, control, inView
    ]
}

export default useAnimateInView