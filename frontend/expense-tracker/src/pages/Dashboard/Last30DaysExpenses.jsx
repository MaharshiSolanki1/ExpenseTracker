import React, { useEffect, useState } from "react";
import { prepareExpenseBarChartData } from "../../utils/helper";
import CustomBarChart from "../../components/Charts/CustomBarChart";

const Last30DaysExpenses = ({ data }) => {

    const [charData, setCharData] = useState([]);
    useEffect(() => {
        const result = prepareExpenseBarChartData(data);
        setCharData(result);
        return () => {};
    }, [data]);

    return (
        <div className="card col-span-1">
            <div className="flex items-center justify-between">
                <h5 className="text-lg">Last 30 Days Expense</h5>
            </div>
            <CustomBarChart data={charData} />
        </div>
    )
}

export default Last30DaysExpenses;