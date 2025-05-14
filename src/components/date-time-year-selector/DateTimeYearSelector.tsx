
"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function DateMonthYearSelector() {
  const [date, setDate] = React.useState<Date>()
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentDate, setCurrentDate] = React.useState(new Date())

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 201 }, (_, i) => currentYear - 100 + i)  

  const handleYearChange = (year: string) => {
    setCurrentDate(new Date(Number.parseInt(year), currentDate.getMonth(), 1))
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="p-3">
          <Select value={currentDate.getFullYear().toString()} onValueChange={handleYearChange}>
            <SelectTrigger className="flex justify-center gap-8">
              <SelectValue placeholder="Year"> {currentYear} </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => {
            setDate(newDate)
            setIsOpen(false)
          }}
          month={currentDate}
          onMonthChange={setCurrentDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

