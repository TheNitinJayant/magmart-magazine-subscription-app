import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import "react-circular-progressbar/dist/styles.css";

function ProgressBarExport({valueEnd}) {
    return (
        <div>
            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={valueEnd}
                duration={1.4}
                easingFunction={easeQuadInOut}

            >
                {value => {
                    const roundedValue = Math.round(value);
                    return (
                        <CircularProgressbar
                            value={value}
                            text={`${roundedValue}%`}
                            /* This is important to include, because if you're fully managing the
                      animation yourself, you'll want to disable the CSS animation. */
                            styles={buildStyles({ pathTransition: "none" })}
                        />
                    );
                }}
            </AnimatedProgressProvider>

        </div>
    )
}

export default ProgressBarExport
