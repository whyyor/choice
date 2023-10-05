import React, { useEffect, useRef, useState } from 'react';
import { Line } from '@antv/g2plot';
import { Spin, Row, Col } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import data from './data';
import './LineChart.css';  // Import the CSS file

interface LineChartProps {
    // Define your component props here, if needed
}

const LineChart: React.FC<LineChartProps> = () => {
    const containerRef = useRef(null);
    const [loading, setLoading] = useState(true);

    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 24,
            }}
            spin
        />
    );

    useEffect(() => {
        let linePlot;

        if (containerRef.current) {
            linePlot = new Line(containerRef.current, {
                data,
                xField: 'date',
                yField: 'schemes',
                seriesField: 'name',
                yAxis: {
                    label: {
                        formatter: (v) => v.toString(),
                    },
                },
                legend: {
                    position: 'top',
                },
                smooth: true,
                area: {
                    style: {
                        fillOpacity: 0.15,
                    },
                },
                animation: {
                    appear: {
                        animation: 'wave-in',
                        duration: 3000,
                    },
                },
            });

            linePlot.render();
            setLoading(false);
        }

        return () => {
            if (linePlot) {
                linePlot.destroy();
            }
        };
    }, []);

    return (
                <div className="chart-container" style={{ position: 'relative' }}> {/* Added a class name */}
                    {loading && (
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            <Spin indicator={antIcon} />
                        </div>
                    )}
                    <div ref={containerRef} style={{ width: '100%', height: '100%' }}></div>
                </div>
    );
};

export default LineChart;
