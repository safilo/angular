import { ChangeDetectionStrategy } from './constants';
export class ChangeDetectorRef {
}
export class ChangeDetectorRef_ extends ChangeDetectorRef {
    constructor(_cd) {
        super();
        this._cd = _cd;
    }
    markForCheck() { this._cd.markPathToRootAsCheckOnce(); }
    detach() { this._cd.mode = ChangeDetectionStrategy.Detached; }
    detectChanges() { this._cd.detectChanges(); }
    checkNoChanges() { this._cd.checkNoChanges(); }
    reattach() {
        this._cd.mode = ChangeDetectionStrategy.CheckAlways;
        this.markForCheck();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlX2RldGVjdG9yX3JlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtNjdZZW5KdXMudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdG9yX3JlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FDTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sYUFBYTtBQUVuRDtBQStMQSxDQUFDO0FBRUQsd0NBQXdDLGlCQUFpQjtJQUN2RCxZQUFvQixHQUFtQjtRQUFJLE9BQU8sQ0FBQztRQUEvQixRQUFHLEdBQUgsR0FBRyxDQUFnQjtJQUFhLENBQUM7SUFFckQsWUFBWSxLQUFXLElBQUksQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUQsTUFBTSxLQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDcEUsYUFBYSxLQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25ELGNBQWMsS0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsdUJBQXVCLENBQUMsV0FBVyxDQUFDO1FBQ3BELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0FBQ0gsQ0FBQztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rvcn0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3l9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENoYW5nZURldGVjdG9yUmVmIHtcbiAgLyoqXG4gICAqIE1hcmtzIGFsbCB7QGxpbmsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kjT25QdXNofSBhbmNlc3RvcnMgYXMgdG8gYmUgY2hlY2tlZC5cbiAgICpcbiAgICogPCEtLSBUT0RPOiBBZGQgYSBsaW5rIHRvIGEgY2hhcHRlciBvbiBPblB1c2ggY29tcG9uZW50cyAtLT5cbiAgICpcbiAgICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L0dDNTEyYj9wPXByZXZpZXcpKVxuICAgKlxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqIEBDb21wb25lbnQoe1xuICAgKiAgIHNlbGVjdG9yOiAnY21wJyxcbiAgICogICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICogICB0ZW1wbGF0ZTogYE51bWJlciBvZiB0aWNrczoge3tudW1iZXJPZlRpY2tzfX1gXG4gICAqIH0pXG4gICAqIGNsYXNzIENtcCB7XG4gICAqICAgbnVtYmVyT2ZUaWNrcyA9IDA7XG4gICAqXG4gICAqICAgY29uc3RydWN0b3IocmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgKiAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgKiAgICAgICB0aGlzLm51bWJlck9mVGlja3MgKytcbiAgICogICAgICAgLy8gdGhlIGZvbGxvd2luZyBpcyByZXF1aXJlZCwgb3RoZXJ3aXNlIHRoZSB2aWV3IHdpbGwgbm90IGJlIHVwZGF0ZWRcbiAgICogICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAqICAgICB9LCAxMDAwKTtcbiAgICogICB9XG4gICAqIH1cbiAgICpcbiAgICogQENvbXBvbmVudCh7XG4gICAqICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgKiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgKiAgIHRlbXBsYXRlOiBgXG4gICAqICAgICA8Y21wPjxjbXA+XG4gICAqICAgYCxcbiAgICogICBkaXJlY3RpdmVzOiBbQ21wXVxuICAgKiB9KVxuICAgKiBjbGFzcyBBcHAge1xuICAgKiB9XG4gICAqXG4gICAqIGJvb3RzdHJhcChBcHApO1xuICAgKiBgYGBcbiAgICovXG4gIGFic3RyYWN0IG1hcmtGb3JDaGVjaygpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBEZXRhY2hlcyB0aGUgY2hhbmdlIGRldGVjdG9yIGZyb20gdGhlIGNoYW5nZSBkZXRlY3RvciB0cmVlLlxuICAgKlxuICAgKiBUaGUgZGV0YWNoZWQgY2hhbmdlIGRldGVjdG9yIHdpbGwgbm90IGJlIGNoZWNrZWQgdW50aWwgaXQgaXMgcmVhdHRhY2hlZC5cbiAgICpcbiAgICogVGhpcyBjYW4gYWxzbyBiZSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGgge0BsaW5rIENoYW5nZURldGVjdG9yUmVmI2RldGVjdENoYW5nZXN9IHRvIGltcGxlbWVudFxuICAgKiBsb2NhbCBjaGFuZ2VcbiAgICogZGV0ZWN0aW9uIGNoZWNrcy5cbiAgICpcbiAgICogPCEtLSBUT0RPOiBBZGQgYSBsaW5rIHRvIGEgY2hhcHRlciBvbiBkZXRhY2gvcmVhdHRhY2gvbG9jYWwgZGlnZXN0IC0tPlxuICAgKiA8IS0tIFRPRE86IEFkZCBhIGxpdmUgZGVtbyBvbmNlIHJlZi5kZXRlY3RDaGFuZ2VzIGlzIG1lcmdlZCBpbnRvIG1hc3RlciAtLT5cbiAgICpcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGRlZmluZXMgYSBjb21wb25lbnQgd2l0aCBhIGxhcmdlIGxpc3Qgb2YgcmVhZG9ubHkgZGF0YS5cbiAgICogSW1hZ2luZSB0aGUgZGF0YSBjaGFuZ2VzIGNvbnN0YW50bHksIG1hbnkgdGltZXMgcGVyIHNlY29uZC4gRm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsXG4gICAqIHdlIHdhbnQgdG8gY2hlY2sgYW5kIHVwZGF0ZSB0aGUgbGlzdCBldmVyeSBmaXZlIHNlY29uZHMuIFdlIGNhbiBkbyB0aGF0IGJ5IGRldGFjaGluZ1xuICAgKiB0aGUgY29tcG9uZW50J3MgY2hhbmdlIGRldGVjdG9yIGFuZCBkb2luZyBhIGxvY2FsIGNoZWNrIGV2ZXJ5IGZpdmUgc2Vjb25kcy5cbiAgICpcbiAgICogYGBgdHlwZXNjcmlwdFxuICAgKiBjbGFzcyBEYXRhUHJvdmlkZXIge1xuICAgKiAgIC8vIGluIGEgcmVhbCBhcHBsaWNhdGlvbiB0aGUgcmV0dXJuZWQgZGF0YSB3aWxsIGJlIGRpZmZlcmVudCBldmVyeSB0aW1lXG4gICAqICAgZ2V0IGRhdGEoKSB7XG4gICAqICAgICByZXR1cm4gWzEsMiwzLDQsNV07XG4gICAqICAgfVxuICAgKiB9XG4gICAqXG4gICAqIEBDb21wb25lbnQoe1xuICAgKiAgIHNlbGVjdG9yOiAnZ2lhbnQtbGlzdCcsXG4gICAqICAgdGVtcGxhdGU6IGBcbiAgICogICAgIDxsaSAqbmdGb3I9XCIjZCBvZiBkYXRhUHJvdmlkZXIuZGF0YVwiPkRhdGEge3tkfX08L2xpZz5cbiAgICogICBgLFxuICAgKiAgIGRpcmVjdGl2ZXM6IFtOZ0Zvcl1cbiAgICogfSlcbiAgICogY2xhc3MgR2lhbnRMaXN0IHtcbiAgICogICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZGF0YVByb3ZpZGVyOkRhdGFQcm92aWRlcikge1xuICAgKiAgICAgcmVmLmRldGFjaCgpO1xuICAgKiAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgKiAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAqICAgICB9LCA1MDAwKTtcbiAgICogICB9XG4gICAqIH1cbiAgICpcbiAgICogQENvbXBvbmVudCh7XG4gICAqICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgKiAgIHByb3ZpZGVyczogW0RhdGFQcm92aWRlcl0sXG4gICAqICAgdGVtcGxhdGU6IGBcbiAgICogICAgIDxnaWFudC1saXN0PjxnaWFudC1saXN0PlxuICAgKiAgIGAsXG4gICAqICAgZGlyZWN0aXZlczogW0dpYW50TGlzdF1cbiAgICogfSlcbiAgICogY2xhc3MgQXBwIHtcbiAgICogfVxuICAgKlxuICAgKiBib290c3RyYXAoQXBwKTtcbiAgICogYGBgXG4gICAqL1xuICBhYnN0cmFjdCBkZXRhY2goKTogdm9pZDtcblxuICAvKipcbiAgICogQ2hlY2tzIHRoZSBjaGFuZ2UgZGV0ZWN0b3IgYW5kIGl0cyBjaGlsZHJlbi5cbiAgICpcbiAgICogVGhpcyBjYW4gYWxzbyBiZSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGgge0BsaW5rIENoYW5nZURldGVjdG9yUmVmI2RldGFjaH0gdG8gaW1wbGVtZW50IGxvY2FsXG4gICAqIGNoYW5nZSBkZXRlY3Rpb25cbiAgICogY2hlY2tzLlxuICAgKlxuICAgKiA8IS0tIFRPRE86IEFkZCBhIGxpbmsgdG8gYSBjaGFwdGVyIG9uIGRldGFjaC9yZWF0dGFjaC9sb2NhbCBkaWdlc3QgLS0+XG4gICAqIDwhLS0gVE9ETzogQWRkIGEgbGl2ZSBkZW1vIG9uY2UgcmVmLmRldGVjdENoYW5nZXMgaXMgbWVyZ2VkIGludG8gbWFzdGVyIC0tPlxuICAgKlxuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgZGVmaW5lcyBhIGNvbXBvbmVudCB3aXRoIGEgbGFyZ2UgbGlzdCBvZiByZWFkb25seSBkYXRhLlxuICAgKiBJbWFnaW5lLCB0aGUgZGF0YSBjaGFuZ2VzIGNvbnN0YW50bHksIG1hbnkgdGltZXMgcGVyIHNlY29uZC4gRm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsXG4gICAqIHdlIHdhbnQgdG8gY2hlY2sgYW5kIHVwZGF0ZSB0aGUgbGlzdCBldmVyeSBmaXZlIHNlY29uZHMuXG4gICAqXG4gICAqIFdlIGNhbiBkbyB0aGF0IGJ5IGRldGFjaGluZyB0aGUgY29tcG9uZW50J3MgY2hhbmdlIGRldGVjdG9yIGFuZCBkb2luZyBhIGxvY2FsIGNoYW5nZSBkZXRlY3Rpb25cbiAgICogY2hlY2tcbiAgICogZXZlcnkgZml2ZSBzZWNvbmRzLlxuICAgKlxuICAgKiBTZWUge0BsaW5rIENoYW5nZURldGVjdG9yUmVmI2RldGFjaH0gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAqL1xuICBhYnN0cmFjdCBkZXRlY3RDaGFuZ2VzKCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0aGUgY2hhbmdlIGRldGVjdG9yIGFuZCBpdHMgY2hpbGRyZW4sIGFuZCB0aHJvd3MgaWYgYW55IGNoYW5nZXMgYXJlIGRldGVjdGVkLlxuICAgKlxuICAgKiBUaGlzIGlzIHVzZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSB0byB2ZXJpZnkgdGhhdCBydW5uaW5nIGNoYW5nZSBkZXRlY3Rpb24gZG9lc24ndCBpbnRyb2R1Y2VcbiAgICogb3RoZXIgY2hhbmdlcy5cbiAgICovXG4gIGFic3RyYWN0IGNoZWNrTm9DaGFuZ2VzKCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJlYXR0YWNoIHRoZSBjaGFuZ2UgZGV0ZWN0b3IgdG8gdGhlIGNoYW5nZSBkZXRlY3RvciB0cmVlLlxuICAgKlxuICAgKiBUaGlzIGFsc28gbWFya3MgT25QdXNoIGFuY2VzdG9ycyBhcyB0byBiZSBjaGVja2VkLiBUaGlzIHJlYXR0YWNoZWQgY2hhbmdlIGRldGVjdG9yIHdpbGwgYmVcbiAgICogY2hlY2tlZCBkdXJpbmcgdGhlIG5leHQgY2hhbmdlIGRldGVjdGlvbiBydW4uXG4gICAqXG4gICAqIDwhLS0gVE9ETzogQWRkIGEgbGluayB0byBhIGNoYXB0ZXIgb24gZGV0YWNoL3JlYXR0YWNoL2xvY2FsIGRpZ2VzdCAtLT5cbiAgICpcbiAgICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L2FVaFpoYT9wPXByZXZpZXcpKVxuICAgKlxuICAgKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgY3JlYXRlcyBhIGNvbXBvbmVudCBkaXNwbGF5aW5nIGBsaXZlYCBkYXRhLiBUaGUgY29tcG9uZW50IHdpbGwgZGV0YWNoXG4gICAqIGl0cyBjaGFuZ2UgZGV0ZWN0b3IgZnJvbSB0aGUgbWFpbiBjaGFuZ2UgZGV0ZWN0b3IgdHJlZSB3aGVuIHRoZSBjb21wb25lbnQncyBsaXZlIHByb3BlcnR5XG4gICAqIGlzIHNldCB0byBmYWxzZS5cbiAgICpcbiAgICogYGBgdHlwZXNjcmlwdFxuICAgKiBjbGFzcyBEYXRhUHJvdmlkZXIge1xuICAgKiAgIGRhdGEgPSAxO1xuICAgKlxuICAgKiAgIGNvbnN0cnVjdG9yKCkge1xuICAgKiAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgKiAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEgKiAyO1xuICAgKiAgICAgfSwgNTAwKTtcbiAgICogICB9XG4gICAqIH1cbiAgICpcbiAgICogQENvbXBvbmVudCh7XG4gICAqICAgc2VsZWN0b3I6ICdsaXZlLWRhdGEnLFxuICAgKiAgIGlucHV0czogWydsaXZlJ10sXG4gICAqICAgdGVtcGxhdGU6IGBEYXRhOiB7e2RhdGFQcm92aWRlci5kYXRhfX1gXG4gICAqIH0pXG4gICAqIGNsYXNzIExpdmVEYXRhIHtcbiAgICogICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZGF0YVByb3ZpZGVyOkRhdGFQcm92aWRlcikge31cbiAgICpcbiAgICogICBzZXQgbGl2ZSh2YWx1ZSkge1xuICAgKiAgICAgaWYgKHZhbHVlKVxuICAgKiAgICAgICB0aGlzLnJlZi5yZWF0dGFjaCgpO1xuICAgKiAgICAgZWxzZVxuICAgKiAgICAgICB0aGlzLnJlZi5kZXRhY2goKTtcbiAgICogICB9XG4gICAqIH1cbiAgICpcbiAgICogQENvbXBvbmVudCh7XG4gICAqICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgKiAgIHByb3ZpZGVyczogW0RhdGFQcm92aWRlcl0sXG4gICAqICAgdGVtcGxhdGU6IGBcbiAgICogICAgIExpdmUgVXBkYXRlOiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJsaXZlXCI+XG4gICAqICAgICA8bGl2ZS1kYXRhIFtsaXZlXT1cImxpdmVcIj48bGl2ZS1kYXRhPlxuICAgKiAgIGAsXG4gICAqICAgZGlyZWN0aXZlczogW0xpdmVEYXRhLCBGT1JNX0RJUkVDVElWRVNdXG4gICAqIH0pXG4gICAqIGNsYXNzIEFwcCB7XG4gICAqICAgbGl2ZSA9IHRydWU7XG4gICAqIH1cbiAgICpcbiAgICogYm9vdHN0cmFwKEFwcCk7XG4gICAqIGBgYFxuICAgKi9cbiAgYWJzdHJhY3QgcmVhdHRhY2goKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIENoYW5nZURldGVjdG9yUmVmXyBleHRlbmRzIENoYW5nZURldGVjdG9yUmVmIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yKSB7IHN1cGVyKCk7IH1cblxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7IHRoaXMuX2NkLm1hcmtQYXRoVG9Sb290QXNDaGVja09uY2UoKTsgfVxuICBkZXRhY2goKTogdm9pZCB7IHRoaXMuX2NkLm1vZGUgPSBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZXRhY2hlZDsgfVxuICBkZXRlY3RDaGFuZ2VzKCk6IHZvaWQgeyB0aGlzLl9jZC5kZXRlY3RDaGFuZ2VzKCk7IH1cbiAgY2hlY2tOb0NoYW5nZXMoKTogdm9pZCB7IHRoaXMuX2NkLmNoZWNrTm9DaGFuZ2VzKCk7IH1cbiAgcmVhdHRhY2goKTogdm9pZCB7XG4gICAgdGhpcy5fY2QubW9kZSA9IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkNoZWNrQWx3YXlzO1xuICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gIH1cbn0iXX0=