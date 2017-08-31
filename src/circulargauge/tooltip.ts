/**
 * Default sample
 */
import { CircularGauge, ITooltipRenderEventArgs } from '@syncfusion/ej2-circulargauge';
import { GaugeTooltip } from '@syncfusion/ej2-circulargauge';
CircularGauge.Inject(GaugeTooltip);

this.default = (): void => {
    let circulargauge: CircularGauge = new CircularGauge({
        title: 'Tooltip Customization',
        titleStyle: { size: '15px', color: 'grey' },
        axes: [{
            radius: '90%',
            minimum: 0,
            maximum: 120,
            startAngle: 240,
            endAngle: 120,
            lineStyle: { width: 0 },
            majorTicks: { color: 'white', offset: -5, height: 12 },
            minorTicks: { width: 0 },
            labelStyle: { useRangeColor: true, font: { color: '#424242', size: '13px', fontFamily: 'Roboto' } },
            pointers: [{
                value: 70,
                radius: '60%',
                color: '#33BCBD',
                cap: { radius: 10, border: { color: '#33BCBD', width: 5 } },
                animation: { enable: true, duration: 1500 }
            }],
            ranges: [{
                start: 0,
                end: 50,
                startWidth: 10, endWidth: 10,
                radius: '102%',
                color: '#3A5DC8',
            }, {
                start: 50,
                end: 120,
                radius: '102%',
                startWidth: 10, endWidth: 10,
                color: '#33BCBD',
            }]
        }],
        tooltip: {
            enable: true,
            template: '#gauge-tooltip', border: {
                color: '#33BCBD',
                width: 2
            }
        },
        tooltipRender: (args: ITooltipRenderEventArgs) => {
            let color: string;
            let value: number = args.pointer.currentValue;
            let content: HTMLElement = <HTMLElement>args.content;
            if (value >= 0 && value <= 50) {
                color = '#3A5DC8'; content.children[1].remove();
            } else {
                color = '#33BCBD'; content.children[0].remove();
            }
            args.textStyle.color = color; args.border.color = color;
            circulargauge.axes[0].pointers[0].animation.enable = false;
            circulargauge.axes[0].pointers[0].color = color;
            circulargauge.axes[0].pointers[0].cap.border.color = color;
            circulargauge.setPointerValue(0, 0, value);
        },
        enablePointerDrag: true
    });
    circulargauge.appendTo('#tooltip-container');
};
