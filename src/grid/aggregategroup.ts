import { Grid, Page, Aggregate, Group } from '@syncfusion/ej2-grids';
import { categoryData } from './datasource';

Grid.Inject(Page, Group, Aggregate);
/**
 * Aggregates
 */
this.default = (): void => {
    let grid: Grid = new Grid(
        {
            dataSource: categoryData,
            allowPaging: true,
            allowGrouping: true,
            groupSettings: { showDropArea: false, columns: ['CategoryName'] },
            columns: [
                { field: 'CategoryName', headerText: 'Category Name', width: 160 },
                { field: 'ProductName', headerText: 'Product Name', width: 170 },
                { field: 'QuantityPerUnit', headerText: 'Quantity Per Unit', width: 170, textAlign: 'right' },
                { field: 'UnitsInStock', headerText: 'Units In Stock', width: 170, textAlign: 'right' },
                {
                    field: 'Discontinued', headerText: 'Discontinued', width: 150,
                    textAlign: 'center', displayAsCheckBox: true, type: 'boolean'
                }
            ],
            aggregates: [{
                    columns: [{
                        type: 'sum',
                        field: 'UnitsInStock',
                        groupFooterTemplate: 'Total units: ${sum}'
                    },
                    {
                        type: 'truecount',
                        field: 'Discontinued',
                        groupFooterTemplate: 'Discontinued: ${truecount}'
                    },
                    {
                        type: 'max',
                        field: 'UnitsInStock',
                        groupCaptionTemplate: 'Maximum: ${max}'
                    }]
                }]
        });
    grid.appendTo('#Grid');
};

