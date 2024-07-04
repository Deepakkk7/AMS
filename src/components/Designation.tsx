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
      <SelectContent className="bg-slate-200 rounded-2xl " >
        <SelectItem value="light "  className="hover:text-blue-300">Admin</SelectItem>
        <SelectItem value="dark" className="hover:text-blue-300">Manager</SelectItem>
        <SelectItem value="system" className="hover:text-blue-300">Employee</SelectItem>
        <SelectItem value="system" className="hover:text-blue-300">Intern</SelectItem>
        <SelectItem value="system" className="hover:text-blue-300">Sub-contractor</SelectItem>
      </SelectContent>
    </Select>
    </div>
  );
};
export default Designation;
