import React from 'react';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from "@/components/ui/table";
import { useRouter } from 'next/navigation';

interface IInventoryTableData {
  status: string;
  kitId: string;
  kitName: string;
  quantity: string;
  expirationDate: string;
}

const Inventory = () => {
  const router=useRouter();
   const columns: ColumnDef<IInventoryTableData>[] = [
          {
              accessorKey: "status",
              header: "Status",
          },
          {
              accessorKey: "kitId",
              header: "Kit ID",
          },
          {
              accessorKey: "kitName",
              header: "Kit Name",
          },
          {
              accessorKey: "quantity",
              header: "Quantity",
          },
          {
              accessorKey: "expirationDate",
              header: "Expiration Date",
          },
         
      ];
       const inventoryData: IInventoryTableData[] = [
        {
          status: "Available",
          kitId: "KIT-001",
          kitName: "Blood Pressure Monitor",
          quantity: "10",
          expirationDate: "2025-08-01",
        },
        {
          status: "Low Stock",
          kitId: "KIT-002",
          kitName: "Glucose Test Kit",
          quantity: "3",
          expirationDate: "2024-12-15",
        },
        {
          status: "Expired",
          kitId: "KIT-003",
          kitName: "COVID-19 Test Kit",
          quantity: "0",
          expirationDate: "2023-09-30",
        },
        {
          status: "Available",
          kitId: "KIT-004",
          kitName: "Thermometer",
          quantity: "25",
          expirationDate: "2026-01-10",
        },
        {
          status: "Out of Stock",
          kitId: "KIT-005",
          kitName: "Pulse Oximeter",
          quantity: "0",
          expirationDate: "2024-03-22",
        },
      ];
      
       const table = useReactTable({
               data: inventoryData,
              columns,
              getCoreRowModel: getCoreRowModel(),
          });
  
          // console.log('Invettory Table Data: ', table.getRowModel());
  return (
    <div className="p-6 bg-white rounded-lg space-y-6">
      {/* Kit Summary Cards */}
      <div className="flex flex-wrap gap-4">
        {["Total Available Kits", "Kits Sent", "Kits Returned"].map((label, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center border border-gray-300 rounded-md w-44 h-24 shadow-sm"
          >
            <p className="text-sm font-semibold">{label}</p>
            <p className="text-2xl font-bold text-gray-800">0</p>
          </div>
        ))}
      </div>

     
      <div className="flex justify-end">
        <button className="bg-[#064777] text-white px-4 py-2 rounded-md hover:bg-[#043456]" onClick={()=>router.push("/iwrs/kits/create")}>
       Send kits to sites
        </button>
      </div>

      {/* Table Header */}
      <div className="rounded-md border overflow-hidden">
                <Table>
                    <TableHeader className="bg-gray-200">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder ? null : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    {inventoryData.length>0? <TableBody>
                        {table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow className="cursor-pointer" key={row.id}
                                //  onClick={() => routeToSite(row.original.id)}
                                onClick={()=>router.push(`/iwrs/kits/${row.id}`)}
                                 >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>:<div>
                    Add your first kit in the trial.
                      </div>}
                   
                </Table>
            </div>
    </div>
  )
}

export default Inventory