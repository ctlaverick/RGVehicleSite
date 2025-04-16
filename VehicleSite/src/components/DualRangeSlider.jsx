import react from 'react';
import { Range } from 'react-range';

const DualRangeSlider = ({
    min = 0,
    max = 1000,
    step = 1,
    values,
    onChange,
    label = "",
    className = "",
    unitFormatter = (v) => v
  }) => {
    const getPercentage = (value) => ((value - min) / (max - min)) * 100;

    const COLORS = {
        primary: "var(--color-primary)",
        track: "var(--color-admin-background)",
    };

    return (
        <div className={`w-full max-w-md mx-auto ${className}`}>
        {label && (
            <p className="text-sm font-medium mb-2 text-gray-700">{label}</p>
        )}

        <Range
            step={step}
            min={min}
            max={max}
            values={values}
            onChange={onChange}
            renderTrack={({ props, children }) => {
            const minPercent = getPercentage(values[0]);
            const maxPercent = getPercentage(values[1]);

            return (
                <div
                {...props}
                className="h-2 rounded-full"
                style={{
                    ...props.style,
                    background: `linear-gradient(to right,
                    ${COLORS.track} ${minPercent}%,
                    ${COLORS.primary} ${minPercent}%,
                    ${COLORS.primary} ${maxPercent}%,
                    ${COLORS.track} ${maxPercent}%)`,
                }}
                >
                {children}
                </div>
            );
            }}
            renderThumb={({ props, index }) => (
            <div
                {...props}
                className="w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-md cursor-pointer"
            >
                <div className="absolute -bottom-8 text-xs bg-primary text-white px-2 py-1 rounded whitespace-nowrap">
                {unitFormatter(values[index])}
                </div>
            </div>
            )}
        />
        </div>
    );
};

export default DualRangeSlider;