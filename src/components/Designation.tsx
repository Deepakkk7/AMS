import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Designation = () => {
  return (
    <div className="text-white ">
    <Select >
      <SelectTrigger className="text-black rounded-2xl">
        <SelectValue  placeholder="Select your Designation" />
      </SelectTrigger>
      <SelectContent className="bg-slate-200 rounded-2xl" >
        <SelectItem value="light ">Admin</SelectItem>
        <SelectItem value="dark">Manager</SelectItem>
        <SelectItem value="system">Employee</SelectItem>
      </SelectContent>
    </Select>
    </div>
  );
};
export default Designation;
