import React from "react";
import CustomTooltip from "./CustomTooltip";
import CustomLegend from "./CustomLegend";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

const CustomPieChart = ({
    data, 
    label, 
    totalAmount, 
    colors, 
    showTextAnchor,
    useCustomLegend = false
}) => {
    // Debug logging
    // console.log("CustomPieChart props:", { data, label, totalAmount, colors, showTextAnchor, useCustomLegend });
    
    return <ResponsiveContainer width="100%" height={380}>
        <PieChart>
            <Pie
                data={data}
                dataKey="amount"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={130}
                innerRadius={100}
                labelLine={false}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]}></Cell>
                ))}
            </Pie>
            
            <Tooltip content={<CustomTooltip />} />
            
            {useCustomLegend ? (
                <Legend content={<CustomLegend />} />
            ) : (
                <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    iconType="circle"
                    wrapperStyle={{
                        paddingTop: "20px"
                    }}
                />
            )}

            {showTextAnchor && (
                <>
                    <text
                        x="50%"
                        y="50%"
                        dy={-25}
                        textAnchor="middle"
                        fill="#374151"
                        fontSize="16px"
                        fontWeight="500"
                        dominantBaseline="middle"
                    >
                        {label || "Total"}
                    </text>
                    <text
                        x="50%"
                        y="50%"
                        dy={8}
                        textAnchor="middle"
                        fill="#111827"
                        fontSize="28px"
                        fontWeight="600"
                        dominantBaseline="middle"
                    >
                        {totalAmount || "Rs. 0"}
                    </text>
                </>
            )}
        </PieChart>
    </ResponsiveContainer>

}

export default CustomPieChart;