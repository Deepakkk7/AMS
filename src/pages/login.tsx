import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Designation from "@/components/Designation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="max-w-lg w-full rounded-2xl border p-6 bg-slate-200">
        <CardHeader className="flex items-center">
          <CardTitle className="font-bold text-4xl ">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="font-semibold mb-4">
            Mail ID
          </CardDescription>
          <Input type="email" placeholder="Email" className="mb-4" />
          <p className="font-medium  mb-2">Password</p>
          <Input type="password" placeholder="Password" className="mb-4" />
        </CardContent>
        <Button
          onClick={() => {
            handleLogin();
          }}
          className="rounded-2xl  border-black  mb-4 justify-center items-center align-mid ml-48 mt-4"
        >
          Login
        </Button>
        <Designation />
      </Card>
    </div>
  );
};

export default Login;
