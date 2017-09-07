import { Chart, BubbleSeries, Tooltip, IPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { EmitType } from '@syncfusion/ej2-base';
Chart.Inject(BubbleSeries, Tooltip);

let materialColors: string[] = ['#00bdae', '#404041', '#357cd2', '#e56590', '#f8b883', '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb',
'#ea7a57', '#404041', '#00bdae' ];
let fabricColors: string[] = ['#4472c4', '#ed7d31', '#ffc000', '#70ad47', '#5b9bd5',
    '#c1c1c1', '#6f6fe2', '#e269ae', '#9e480e', '#997300', '#4472c4', '#70ad47', '#ffc000', '#ed7d31'];
let labelRender: EmitType<IPointRenderEventArgs> = (args: IPointRenderEventArgs): void => {
    let selectedTheme: string = location.hash.split('/')[1];
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = fabricColors[args.point.index];
    } else {
        args.fill = materialColors[args.point.index];
    }
};

/**
 * Bubble series
 */
this.default = (): void => {
    let chart: Chart = new Chart({

        //Initializing Primary X Axis
        primaryXAxis: {
            title: 'Literacy Rate',
            minimum: 60,
            maximum: 100,
            interval: 5
        },

        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'GDP growth rate',
            minimum: -2,
            maximum: 16,
            interval: 2
        },

        //Initializing Chart Series
        series: [
            {
                type: 'Bubble',
                dataSource: [{ x: 92.2, y: 7.8, size: 1.347, text: 'China' },
                { x: 74, y: 6.5, size: 1.241, text: 'India' },
                { x: 90.4, y: 6.0, size: 0.238, text: 'Indonesia' },
                { x: 99.4, y: 2.2, size: 0.312, text: 'US' },
                { x: 88.6, y: 1.3, size: 0.197, text: 'Brazil' },
                { x: 99, y: 0.7, size: 0.0818, text: 'Germany' },
                { x: 72, y: 2.0, size: 0.0826, text: 'Egypt' },
                { x: 99.6, y: 3.4, size: 0.143, text: 'Russia' },
                { x: 99, y: 0.2, size: 0.128, text: 'Japan' },
                { x: 86.1, y: 4.0, size: 0.115, text: 'Mexico' },
                { x: 92.6, y: 6.6, size: 0.096, text: 'Philippines' },
                { x: 61.3, y: 14.5, size: 0.162, text: 'Nigeria' }],
                xName: 'x', yName: 'y', size: 'size', name: 'pound',
                marker: { dataLabel: { name: 'text' } }
            },
        ],
        pointRender: labelRender,
        title: 'World Countries Details',
        tooltip: {
            enable: true,
            format: '${point.text}<br>Literacy Rate:${point.x}%<br>GDP Annual Growth Rate:${point.y}<br>Population: ${point.size} Billion'
        },
        legendSettings: { visible: false }
    });
    chart.appendTo('#container');
};