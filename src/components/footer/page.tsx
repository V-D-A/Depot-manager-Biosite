import { ListChecks } from "lucide-react";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
    return (
        <div className="bg-white border border-t-1">
            <Drawer>
                <DrawerTrigger className="flex items-center gap-2 w-full px-3 py-1" >
                    <ListChecks size={14} />
                    <p>To Do List</p>
                </DrawerTrigger>
                <DrawerContent className="px-8">
                    <DrawerHeader className="p-0" >
                        <DrawerTitle>Todo List</DrawerTitle>
                        <DrawerDescription>Plan and oraganise your day with our simple todo list.</DrawerDescription>
                    </DrawerHeader>

                    <form action="" className="mt-8" >
                        <div className="flex gap-2">
                            <Input type="text" placeholder="Enter task name" />
                            <Button variant={"outline"} type={"button"} >Edit</Button>
                            <Button variant={"default"} type={"submit"} >Save</Button>
                        </div>
                        <DrawerFooter className="p-0 mt-16 mb-4 flex-row justify-end">
                            <DrawerClose> Close
                            </DrawerClose>
                            <Button>Submit</Button>
                        </DrawerFooter>
                    </form>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default Footer;