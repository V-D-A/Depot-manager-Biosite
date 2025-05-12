'use client'

import { Button } from "@/components/ui/button";
import React from "react";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from "@/components/ui/table";
import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { setActiveSiteId } from "@/lib/store/features/sitesSlice";
// import { ISiteDataResponse } from "@/modules/edc/sites/types/site.type";
 interface ITeamMember {
    name:string
    email: string;
    role: "pi" | "crc";
}

 interface ISiteDataResponse {
    id: string;
    siteName: string;
    siteType: "Hospital" | "Clinic" | "Research Center";
    address: string;
    city: string;
    pincode: string;
    country: string;
    teamMembers: ITeamMember[];
    siteManager: { name: string, email: string };
}

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    siteData: any;
}

const Site: React.FC<Props> = ({ siteData }) => {
    // const dispatch = useDispatch()
    const columns: ColumnDef<ISiteDataResponse>[] = [
        {
            accessorKey: "id",
            header: "Id",
        },
        {
            accessorKey: "siteName",
            header: "Site Name",
        },
        {
            accessorKey: "type",
            header: "Type",
        },
        {
            accessorKey: "siteManager",
            header: "Site Manager",
        },
        {
            accessorKey: "city",
            header: "City",
        },
        {
            accessorKey: "contact",
            header: "Contact",
        },
        {
            accessorKey: "status",
            header: "Status",
        }
    ];

    // Create table instance using useReactTable
    const table = useReactTable({
        data: siteData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const router = useRouter();

    const routeToSiteCreation = () => {
        router.push('/edc/sites/create');
    }

    const routeToSite = (id: string) => {
        console.log("Site ID: ", id);
        // dispatch(setActiveSiteId(id))
        router.push(`/edc/sites/${id}`);
    }

    console.log('Table Data: ', table.getRowModel());

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            {/* Add Site Button */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Sites</h2>
                <Button onClick={ routeToSiteCreation } className="bg-[#044372] px-6 hover:bg-[#142b3d]"> Add Site </Button>
            </div>

            {/* Table */}
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
                    <TableBody>
                        {table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow className="cursor-pointer" key={row.id} onClick={() => routeToSite(row.original.id)}>
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
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default Site;
