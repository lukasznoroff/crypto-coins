import { useEffect, useState } from 'react';
import { CurrencyState } from '../context/CurrencyContext';
import { HistoricalChart } from '../constants/api';
import { ReactComponent as Spinner } from '../images/spinner.svg';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);





function ChartGraph({ coin }) {


    const [historicalChart, setHistoricalChart] = useState();
    const [days, setDays] = useState(1);
    const { currency } = CurrencyState();
    const fetchHistoricalChart = async () => {
        const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
        setHistoricalChart(data.prices);
    }

    useEffect(() => {
        fetchHistoricalChart();
    }, [currency, days, coin]);

    return (
        <div style={{ backgroundColor: '#e5e3e5' }}>
            {!historicalChart ? (
                <Spinner />
            ) : (
                <div>
                    <Line
                        data={{
                            labels: historicalChart.map((item) => {
                                let date = new Date(item[0]);
                                let time = date.getHours() > 12
                                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                                    : `${date.getHours()}:${date.getMinutes()} AM`;
                                return days === 1 ? time : date.toLocaleDateString();
                            }),
                            datasets: [
                                {
                                    data: historicalChart.map((item) => item[1]),
                                    label: `Price (Past ${days} Days) in ${currency}`,
                                    borderColor: '#ffc800'
                                },
                            ],
                        }}
                    />
                </div>
            )}
        </div>
    )
}
export default ChartGraph;