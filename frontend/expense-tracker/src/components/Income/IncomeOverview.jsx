import React, { useState, useEffect } from "react";
import { LuPlus } from "react-icons/lu";
import CustomBarChart from "../Charts/CustomBarChart";
import { prepareIncomeBarChartData } from "../../utils/helper";

const IncomeOverview = ({ transactions, onAddIncome }) => {
    const [charData, setCharData] = useState([]);
    useEffect(() => {
        // console.log("transactions:", transactions);
        const result = prepareIncomeBarChartData(transactions);
        setCharData(result);
        return () => {};
    }, [transactions]);

    return <div className="card">
        <div className="flex items-center justify-between">
            <div className="">
                <h5 className="text-lg">Income Overview</h5>
                <p className="text-xs text-gray-400 mt-0.5">
                    Track your earnings over time and analyze your income trends.
                </p>
            </div>

            <button className="add-btn" onClick={onAddIncome}>
                <LuPlus className="text-lg" />
                Add Income
            </button>

        </div>

        <div className="mt-10">
            <CustomBarChart data={charData} />
        </div>
    </div>
}

export default IncomeOverview;