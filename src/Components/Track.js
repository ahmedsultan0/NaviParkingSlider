const Track = ({ min, max, minPercent, maxPercent, unhighlightedColor, highlightedColor }) => {
    const trackStyle = {
        background: `linear-gradient(to right, ${unhighlightedColor} ${minPercent}%, ${highlightedColor} ${minPercent}%, ${highlightedColor} ${maxPercent}%, ${unhighlightedColor} ${maxPercent}%)`,
    };

    const handleStyle = {
        position: "absolute",
        top: -50,
        width: "20%",
        background: "white",
        height: 30
    };

    return (
        <div className="double_range_slider" style={trackStyle}>
            <div
                className="handle"
                style={{ ...handleStyle, left: `${minPercent}%`, zIndex: 0 }}
            >
                {min} AED
            </div>
            <div
                className="handle"
                style={{ ...handleStyle, marginLeft: -25, left: `${maxPercent}%`, zIndex: 999 }}
            >
                {max} AED
            </div>
        </div>
    );
};

export default Track