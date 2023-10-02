import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit{
  @Input() enableRateRange: boolean = true;
  @Input() data: any[] = [];
  @Input() sortableColumns: string[] = [];
  filteredData: any[] = [];
  tableColumns: string[] = [];
  searchValue: string = '';

  minRate: number | null = null;
  maxRate: number | null = null;

  columnFilters: { [key: string]: string} = {};


  sortColumn: string = '';
  sortDirection: string = '';



  ngOnInit() {
    this.filteredData = [...this.data];
    this.getTableColumns();
  }

  isColumnSortable(column: string): boolean {
    return this.sortableColumns.includes(column);
  }
  getTooltipContent(carrierName: string): string {
    switch (carrierName) {
      case 'Big Rig':
        return 'Large vehicles';
      case 'Juggernaut Trucking':
        return 'Big Loads';
      case 'Another Carrier':
        return 'More trucks';
      default:
        return '';
    }
  }

  toggleRowExpand(row: any): void {
    row.isExpanded = !row.isExpanded;
  }

  getCarrierBlurb(carrierName: string): string {
    // Provide carrier blurb based on the carrier name
    // Replace with your own logic or data source
    switch (carrierName) {
      case 'Big Rig':
        return 'Larger larger vehicles';
      case 'Juggernaut Trucking':
        return 'Big bigger Loads';
      case 'Another Carrier':
        return 'More more trucks';
      default:
        return 'No blurb available for this carrier';
    }
  }

  private getTableColumns(): void {
    if (this.data.length === 0) {
      this.tableColumns = [];
      return;
    }
    this.tableColumns = Object.keys(this.data[0]);
  }

  applyColumnFilter(column: string, value: string): void {
    this.columnFilters[column] = value;
    this.applyFilter();
  }

  clearColumnFilter(column: string): void {
    delete this.columnFilters[column];
    this.applyFilter();
  }

  applyFilter(): void {
    this.filteredData = this.data.filter(item =>
      this.searchByFields(item) && this.filterByColumns(item) && this.filterByRate(item)
      );
  }

  private filterByColumns(item: any): boolean {
    let match = true;

    for (const column of this.tableColumns) {
      const value = this.columnFilters[column];
      if (value && item[column]) {
        const fieldValue = item[column].toString().toLowerCase();
        const filterValue = value.toString().toLowerCase();

        if (!fieldValue.includes(filterValue)) {
          match = false;
          break;
        }
      }
    }

    return match;
  }
  


  filterByRate(item: any): boolean {
    const rate = item['Rate'];
    if (this.minRate !== null && this.maxRate !== null) {
      return rate >= this.minRate && rate <= this.maxRate;
    } else if (this.minRate !== null) {
      return rate >= this.minRate;
    } else if (this.maxRate !== null) {
      return rate <= this.maxRate;
    } else {
      return true; // No rate filter applied
    }
  }

  search(): void {
    this.filteredData = this.data.filter(item =>
      this.searchByFields(item)
    );

    this.applyFilter();

  }

  clearSearch(): void {
    this.searchValue = '';
    this.filteredData = [...this.data];
    this.applyFilter();
  }

  clearRateRange(): void {
    this.minRate = null;
    this.maxRate = null;
    this.applyFilter();
  }


  private searchByFields(item: any): boolean {  // This will be handled in the API
    if (!this.searchValue) {
      return true;
    }

    for (const field of this.tableColumns) {
      const fieldValue = item[field];
      if (typeof fieldValue === 'string' && fieldValue.toLowerCase().includes(this.searchValue.toLowerCase())) {
        return true;
      }

      if (typeof fieldValue === 'number' && fieldValue === parseFloat(this.searchValue)) {
        return true;
      }
    }

    return false;
  }
  sortTable(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.filteredData.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  getSortIconClass(column: string): string {
    if (this.sortColumn === column) {
      return this.sortDirection === 'asc' ? 'fa fa-sort-up': 'fa fa-sort-down';
    }
    return 'fa fa-sort';
  }

  clearFilters(): void {
    this.searchValue = '';
    this.minRate = null;
    this.maxRate = null;
    this.columnFilters = { };
    this.applyFilter();
  }
}
