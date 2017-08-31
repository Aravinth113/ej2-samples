import { LinearGauge, Annotations } from '@syncfusion/ej2-lineargauge';
LinearGauge.Inject(Annotations);

/**
 * Default linear gauge
 */
this.default = (): void => {
    let gauge: LinearGauge = new LinearGauge({
        orientation: 'Horizontal',
        axes: [{
            line: {
                color: '#9E9E9E'
            },
            pointers: [{
                value: 10,
                height: 15,
                width: 15,
                placement: 'Near',
                color: '#757575',
                offset: -50,
                markerType: 'Triangle'
            }],
            majorTicks: {
                color: '#9E9E9E',
                interval: 10
            },
            minorTicks: {
                color: '#9E9E9E',
                interval: 2
            },
            labelStyle: {
                font: {
                    color: '#424242'
                },
                offset: 48
            }
        }],
        annotations: [{
            content: '<div id="pointer" style="width:70px"><h1 style="font-size:14px;color:#424242">10 Kms</h1></div>',
            axisIndex: 0,
            axisValue: 10,
            x: 10,
            y: -70
        }]
    });
    gauge.appendTo('#defaultContainer');
};
