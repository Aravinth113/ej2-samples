import { loadCultureFiles } from '../common/culture-loader';
import { VirtualScroll, TreeGrid } from '@syncfusion/ej2-treegrid';
import { virtualData, dataSource } from './data-source';
/**
 * virtualscrolling sample
 */
TreeGrid.Inject(VirtualScroll);

(window as any).default = (): void => {
    loadCultureFiles();
    if (!virtualData.length) {
        dataSource();
    }
    let treegrid: TreeGrid = new TreeGrid(
        {
            dataSource: virtualData,
            enableVirtualization: true,
            treeColumnIndex: 1,
            childMapping: 'Crew',
            height: 400,
            columns: [
                { field: 'TaskID', headerText: 'Player Jersey', width: 140, textAlign: 'Right' },
                { field: 'FIELD1', headerText: 'Player Name', width: 140 },
                { field: 'FIELD2', headerText: 'Year', width: 120, textAlign: 'Right' },
                { field: 'FIELD3', headerText: 'Stint', width: 120, textAlign: 'Right' },
                { field: 'FIELD4', headerText: 'TMID', width: 120, textAlign: 'Right' }
               ]
        });
    treegrid.appendTo('#TreeGrid');
};
