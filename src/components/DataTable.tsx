import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "DD-MM-YYYY",
    totalAmount: "$250.00",
    paymentMethod: "Computer",
  },
  {
    invoice: "INV002",
    paymentStatus: "DD-MM-YYYY",
    totalAmount: "$150.00",
    paymentMethod: "Laptop",
  },
  {
    invoice: "INV003",
    paymentStatus: "DD-MM-YYYY",
    totalAmount: "$350.00",
    paymentMethod: "Mouse",
  },
  {
    invoice: "INV004",
    paymentStatus: "DD-MM-YYYY",
    totalAmount: "$450.00",
    paymentMethod: "Keyboard",
  },
  // {
  //   invoice: "INV004",
  //   paymentStatus: "DD-MM-YYYY",
  //   totalAmount: "$450.00",
  //   paymentMethod: "Keyboard",
  // },
  
];
const calculateTotalAmount = (invoices) => {
  return invoices.reduce((total, invoice) => {
    // Remove the dollar sign and parse the amount as a float
    const amount = parseFloat(invoice.totalAmount.replace('$', ''));
    return total + amount;
  }, 0);
};

const DataTable = () => {
  const totalAmount = calculateTotalAmount(invoices);
  const formattedTotalAmount = `$${totalAmount.toFixed(2)}`;
  return (
    <div className="flex justify-center mt-8 ml-8 mr-8 bg-slate-100">
      <Table className="border border-gray-300 ">
        <TableCaption className="text-black text-xl">List of your Assets</TableCaption>
        <TableHeader>
          <TableRow className="text-black">
            <TableHead className="w-[100px] border  border-gray-300 ">Model No</TableHead>
            <TableHead className="border  border-gray-300">Issued Date</TableHead>
            <TableHead className="border  border-gray-300">Category</TableHead>
            <TableHead className="text-right border  border-gray-300">Asset Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-black">
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium border border-gray-300">{invoice.invoice}</TableCell>
              <TableCell className="border border-gray-300">{invoice.paymentStatus}</TableCell>
              <TableCell className="border border-gray-300">{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right border border-gray-300">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="text-black">
            <TableCell colSpan={3} className="border border-gray-300">Total</TableCell>
            <TableCell className="text-right border border-gray-300">{formattedTotalAmount}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default DataTable;
