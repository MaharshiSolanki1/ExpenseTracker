import React from "react";

const CustomLegend = ({ payload }) => {
    // Debug logging
    console.log("CustomLegend payload:", payload);
    
    if (!payload || payload.length === 0) return null;
    
    return (
        <g>
            {payload.map((entry, index) => (
                <g key={`legend-${index}`} transform={`translate(0, ${index * 30})`}>
                    <circle
                        cx="8"
                        cy="12"
                        r="4"
                        fill={entry.color}
                        stroke="#e5e7eb"
                        strokeWidth="1"
                    />
                    <text
                        x="20"
                        y="16"
                        fontSize="11"
                        fill="#374151"
                        fontWeight="500"
                        dominantBaseline="middle"
                    >
                        {entry.value}
                    </text>
                </g>
            ))}
        </g>
    );
};

export default CustomLegend;