import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
//   DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Help from '@/assets/help.jpg'
    
    const hover = () => {
        return (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="rounded-full border border-white text-white">
                <img src={Help} className="h-8"  />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-slate-200" >
                <DialogHeader>
                  <DialogTitle>Contact Details</DialogTitle>
                  
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4 ">
                    contact No:xxxxxxxxx
                    <br />
                    Email Id:xxxxxxxxx@email.com
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Describe your Issue
                    </Label>
                    <Input
                      id="username"
                      defaultValue="Write something..."
                      className="col-span-3"
                      required
                    />

                  </div>
                </div>
                <DialogFooter>
                  <Button className="border-black " type="submit">Report</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )
    }
    
    export default hover;
 

