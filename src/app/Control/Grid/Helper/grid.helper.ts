import { Injectable } from '@angular/core';
import { GridContextModel, SortDirection } from '../Model/grid-context.model';
@Injectable()
export class GridHelper {
    Sort(context: GridContextModel, columnName: string) {
        if (context !== undefined && context !== null) {
            this.ToggleSort(context,columnName);
            context.sorting.SortColumn = columnName;
            context.Data = this.OrderByArray(context.Data, columnName, context.sorting.SortDirection);
        }
    }

    private OrderByArray(values: any[], orderType: any, sortDirection: SortDirection) {
        return values.sort((a, b) => {
            let valLt = a[orderType];
            let valRt = b[orderType];
            if (typeof (valLt) === "string") {
                valLt = (a[orderType] as String).toLowerCase();
                valRt = (b[orderType] as String).toLowerCase();
            }
            if (sortDirection === SortDirection.Asc) {
                if (valLt < valRt) {
                    return -1;
                }

                if (valLt > valRt) {
                    return 1;
                }
            }
            else if (sortDirection === SortDirection.Desc) {
                if (valLt < valRt) {
                    return 1;
                }

                if (valLt > valRt) {
                    return -1;
                }
            }

            return 0
        });
    }

    private ToggleSort(context: GridContextModel, columnName: string) {
        if (context.sorting.SortColumn === columnName)
            if (context.sorting.SortDirection === SortDirection.Asc) {
                context.sorting.SortDirection = SortDirection.Desc;
            }
            else {
                context.sorting.SortDirection = SortDirection.Asc;
            }
        else {
            context.sorting.SortColumn = columnName;
            context.sorting.SortDirection = SortDirection.Asc;
        }
    }
}