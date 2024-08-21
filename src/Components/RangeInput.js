import "../App.css";

const RangeInput = ({ min, max, value, onChange, className }) => (
    <input
        type="range"
        min={min}
        max={max}
        className={className}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
    />
);

export default RangeInput