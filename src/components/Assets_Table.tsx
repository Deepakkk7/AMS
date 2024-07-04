import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

export type Payment = {
  id: string;
  amount: string;
  status: "pending" | "processing" | "success" | "failed";
  Product: string;
  Category : string;
  date:string;
};

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: "316",
    status: "success",
    Product: "ken99@yahoo.com",
    Category: "computer",
    date : "dd-mm-yyyy",
  },
  {
    id: "3u1reuv4",
    amount: "242",
    status: "success",
    Product: "Abe45@gmail.com",
    Category: "computer",
    date : "dd-mm-yyyy",
  },
  {
    id: "derv1ws0",
    amount: "837",
    status: "processing",
    Product: "Monserrat44@gmail.com",
    Category: "computer",
    date : "dd-mm-yyyy",
  },
  {
    id: "5kma53ae",
    amount: "874",
    status: "success",
    Product: "Silas22@gmail.com",
    Category: "computer",
    date : "dd-mm-yyyy",
  },
  {
    id: "bhqecj4p",
    amount: "721",
    status: "failed",
    Product: "Camlin",
    Category: "computer",
    date : "dd-mm-yyyy",
  },
];

export const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "Product",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className="text-black border-black"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product <ArrowUpDown className="ml-2 h-4 w-4 text-black" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("Product")}</div>
      ),
    },
    {
      accessorKey: "Category",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className="text-black border-black"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category <ArrowUpDown className="ml-2 h-4 w-4 text-black" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("Category")}</div> // Update to use "Category" accessor key
      ),
    },
    {
      accessorKey:"date",
      header :() =><div className="text-center rounded-2xl">Delivered Date</div>,
      cell: ({row}) =><div className="text-center">{row.getValue("date")}</div>,
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        // const amount = parseFloat(row.getValue("amount").toString());
        const amount = parseFloat(row.getValue("amount").toString());
  
        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);
  
        return <div className="text-right font-medium">{formatted}</div>;
      },
    },
   
  ];
  

  export function DataTable() {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
      []
    );
    const [columnVisibility, setColumnVisibility] =
      React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});
  
    const table = useReactTable({
      data,
      columns,
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onColumnVisibilityChange: setColumnVisibility,
      onRowSelectionChange: setRowSelection,
      state: {
        sorting,
        columnFilters,
        columnVisibility,
        rowSelection,
      },
    });
  
    const totalAmount = data.reduce(
      (acc, curr) => acc + parseFloat(curr.amount),
      0
    );
  
    const navigate = useNavigate();
  
    const handleCellClick = (productId: string) => {
      navigate(`/MyAssets/${productId}`);
    };
  
    return (
      <div className="w-full text-white">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter categories..."
            value={(table.getColumn("Product")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("Product")?.setFilterValue(event.target.value)
            }
            className="max-w-sm text-black"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border border-gray-300">
          <Table>
            <TableHeader className="bg-gray-100">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} className="px-4 py-2 text-black">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    className="hover:bg-gray-800 cursor-pointer"
                    key={row.id}
                    data-state={row.getIsSelected() ? "selected" : undefined}
                    onClick={() => handleCellClick(row.original.id)}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell className="px-4 py-2" key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center text-slate-200"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
              {/* Total row */}
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell key={index} className="px-4 py-2 font-bold">
                    {column.accessorKey === "amount"
                      ? new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(totalAmount)
                      : index === 0
                      ? "Total:"
                      : ""}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
  
