import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

export function IndicationModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-2xl p-6 bg-[#E5E8EC] rounded-lg shadow-md">
        {/* Visually Hidden DialogTitle for Accessibility */}
        <DialogHeader>
          <DialogTitle>
            <VisuallyHidden>Edit Indication Modal</VisuallyHidden>
          </DialogTitle>
        </DialogHeader>

        <form className="space-y-6">
          {/* Edit Indication */}
          <div className="grid gap-2">
            <Label htmlFor="indication" className="font-semibold text-lg">
              Edit Indication
            </Label>
            <Input
              id="indication"
              type="text"
              placeholder="Input text"
              className="w-full"
            />
          </div>

          {/* Edit Start Date */}
          <div className="grid gap-2">
            <Label htmlFor="startDate" className="font-semibold text-lg">
              Edit Start date
            </Label>
            <Input
              id="startDate"
              type="text"
              placeholder="Input text"
              className="w-full"
            />
          </div>
        </form>

        <DialogFooter className="mt-4 flex justify-center">
          <DialogClose asChild>
            <Button type="button" className="w-20 bg-[#0B3558] text-white">
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
