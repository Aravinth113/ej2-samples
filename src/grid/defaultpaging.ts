import { Grid, Page, Selection } from '@syncfusion/ej2-grids';
import { orderData } from './datasource';

Grid.Inject(Page, Selection);

/**
 * Default Page sample
 */
this.default = (): void => {
    let grid: Grid = new Grid(
        {
            dataSource: orderData,
            allowPaging: true,
            columns: [
                { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'right' },
                { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
                { field: 'OrderDate', headerText: 'Order Date', width: 135, format: 'yMd', textAlign: 'right' },
                { field: 'Freight', width: 120, format: 'C', textAlign: 'right' },
                { field: 'ShippedDate', headerText: 'Shipped Date', width: 140, format: 'yMd', textAlign: 'right' },
                { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
            ],
            pageSettings: { pageCount: 4, pageSizes: true }
        });
    grid.appendTo('#Grid');
};
