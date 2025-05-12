import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ListCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import DualRange from "@/components/dualrangecomponent/DualRange";
import { DateMonthYearSelector } from "@/components/date-time-year-selector/DateTimeYearSelector";

const Filter = () => {
    const filterOptions = [
        {
            title: 'By Phase',
            options: ['Phase I', 'Phase II', 'Phase III', 'Phase IV'],
            type: 'multipleChoice'
        },
        {
            title: 'Therapy Area',
            options: ['Oncology', 'Infectitious Diseases', 'Immunology', 'Neurology'],
            type: 'multipleChoice'
        }
    ];
    return (
        <div>
            <Popover>
                <PopoverTrigger className="flex gap-2 items-center border p-2 shadow rounded-full bg-[#2B3A67]">
                    <ListCheck size={26} className="text-white"/> 
                </PopoverTrigger>
                <PopoverContent className="mr-12 rounded-xl p-0">
                    <form action="">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h2>Filters</h2>
                            <X size={14} />
                        </div>

                        {
                            filterOptions.map((option, index) => (
                                <Accordion key={index} type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="px-4" >{option.title}</AccordionTrigger>
                                        <AccordionContent className="px-4 grid grid-cols-2 gap-2">
                                            {
                                                option.options.map((data, i) => (
                                                    <div key={i} className="flex items-center space-x-2">
                                                        <Checkbox id={data} />
                                                        <Label
                                                            htmlFor={data}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {data}
                                                        </Label>
                                                    </div>
                                                ))
                                            }
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            ))
                        }

                        <div>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="px-4">
                                        Patient Enrolled
                                    </ AccordionTrigger>
                                    <AccordionContent className="px-4">
                                        <DualRange />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="px-4">
                                        Dates
                                    </AccordionTrigger>
                                    <AccordionContent className="px-4">

                                        <h3 className="mb-1">By Date</h3>
                                        <DateMonthYearSelector />

                                        <h3 className="mt-4 mb-1">to</h3>
                                        <DateMonthYearSelector />

                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* button options */}
                        <div className="p-4 flex gap-4">
                            <Button variant={"outline"} type="reset" className="flex-1">
                                Reset
                            </Button>
                            <Button type="button" className="flex-1" >Apply</Button>
                        </div>
                    </form>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default Filter;
