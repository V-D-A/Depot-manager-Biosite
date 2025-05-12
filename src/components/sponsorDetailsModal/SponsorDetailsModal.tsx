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
import { Textarea } from "@/components/ui/textarea"


export function SponsorDetailsModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold mb-4">
            Edit sponsor details
          </DialogTitle>
        </DialogHeader>
        <form className="space-y-6">
          {/* Sponsor Name */}
          <div className="grid gap-2">
            <Label htmlFor="sponsorName" className="font-medium">
              Sponsor Name
            </Label>
            <p className="text-sm text-muted-foreground mb-1">
              Enter the full legal name of the sponsoring organization.
            </p>
            <Input
              id="sponsorName"
              type="text"
              placeholder="Enter sponsor name"
            />
          </div>

          {/* Study Email Id */}
          <div className="grid gap-2">
            <Label htmlFor="emailId" className="font-medium">
              Study Email Id
            </Label>
            <p className="text-sm text-muted-foreground mb-1">
              Enter the email address of the sponsoring organization or contact
              person.
            </p>
            <Textarea
              id="emailId"
              placeholder="Enter email id"
              className="resize-none"
            />
          </div>

          {/* Sponsor Contact Person */}
          <div className="grid gap-2">
            <Label htmlFor="contactPerson" className="font-medium">
              Sponsor Contact Person
            </Label>
            <p className="text-sm text-muted-foreground mb-1">
              Enter the name of the primary contact person at the sponsoring
              organization.
            </p>
            <Input
              id="contactPerson"
              type="text"
              placeholder="Enter contact person name"
            />
          </div>

          {/* Sponsor Phone */}
          <div className="grid gap-2">
            <Label htmlFor="phone" className="font-medium">
              Sponsor Phone
            </Label>
            <p className="text-sm text-muted-foreground mb-1">
              Enter the phone number of the sponsoring organization or contact
              person (+91 for India).
            </p>
            <Input id="phone" type="text" placeholder="Enter phone" />
          </div>
        </form>

        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button type="button" className="w-32 bg-[#0B3558] text-white">
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
