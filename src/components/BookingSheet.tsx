import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { useBooking } from "@/contexts/BookingContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner"; // Assuming sonner is installed or use standard callback

const BookingSheet = () => {
    const { isOpen, closeBooking } = useBooking();
    const [date, setDate] = useState<Date>();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            closeBooking();
            toast.success("Request received! We will contact you shortly to confirm.");
        }, 1500);
    };

    return (
        <Sheet open={isOpen} onOpenChange={closeBooking}>
            <SheetContent className="w-full sm:max-w-md overflow-y-auto">
                <SheetHeader className="mb-6 text-left">
                    <SheetTitle className="text-2xl font-serif text-warm-brown">Book Your Consultation</SheetTitle>
                    <SheetDescription className="text-warm-gray">
                        Confidential, one-on-one numerology consultation. Available worldwide via video call.
                    </SheetDescription>
                </SheetHeader>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Consultation Type */}
                    <div className="space-y-4">
                        <Label className="text-base font-medium text-warm-brown">Consultation Type</Label>
                        <RadioGroup defaultValue="personal" className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-3 space-y-0">
                                <RadioGroupItem value="personal" id="personal" />
                                <Label htmlFor="personal" className="font-normal cursor-pointer">Personal Numerology</Label>
                            </div>
                            <div className="flex items-center space-x-3 space-y-0">
                                <RadioGroupItem value="name" id="name" />
                                <Label htmlFor="name" className="font-normal cursor-pointer">Name Correction</Label>
                            </div>
                            <div className="flex items-center space-x-3 space-y-0">
                                <RadioGroupItem value="business" id="business" />
                                <Label htmlFor="business" className="font-normal cursor-pointer">Business / Career Guidance</Label>
                            </div>
                            <div className="flex items-center space-x-3 space-y-0">
                                <RadioGroupItem value="relationship" id="relationship" />
                                <Label htmlFor="relationship" className="font-normal cursor-pointer">Relationship Compatibility</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Consultation Mode */}
                    <div className="space-y-4">
                        <Label className="text-base font-medium text-warm-brown">Preferred Mode</Label>
                        <RadioGroup defaultValue="video" className="flex flex-row space-x-6">
                            <div className="flex items-center space-x-3 space-y-0">
                                <RadioGroupItem value="video" id="video" />
                                <Label htmlFor="video" className="font-normal cursor-pointer">Video Call</Label>
                            </div>
                            <div className="flex items-center space-x-3 space-y-0">
                                <RadioGroupItem value="whatsapp" id="whatsapp" />
                                <Label htmlFor="whatsapp" className="font-normal cursor-pointer">WhatsApp Call</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* User Details */}
                    <div className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" required placeholder="Enter your full name" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="dob">Date of Birth</Label>
                            <Input id="dob" type="date" required />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="whatsapp-num">WhatsApp Number</Label>
                            <Input id="whatsapp-num" type="tel" required placeholder="+91 XXXXX XXXXX" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="Optional" />
                        </div>
                    </div>

                    {/* Preferred Time */}
                    <div className="space-y-4">
                        <Label className="text-base font-medium text-warm-brown">Preferred Date & Time</Label>
                        <div className="grid grid-cols-2 gap-4">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                        disabled={(date) => date < new Date()}
                                    />
                                </PopoverContent>
                            </Popover>

                            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                <option value="">Select Time Slot</option>
                                <option value="morning">Morning (9am - 12pm)</option>
                                <option value="afternoon">Afternoon (12pm - 4pm)</option>
                                <option value="evening">Evening (4pm - 8pm)</option>
                            </select>
                        </div>
                    </div>

                    <Button type="submit" variant="default" className="w-full" size="lg" disabled={isSubmitting}>
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Confirm Consultation
                    </Button>

                    <p className="text-center text-xs text-warm-gray/60 mt-4">
                        Typical session duration: 30–45 minutes
                    </p>
                </form>
            </SheetContent>
        </Sheet>
    );
};

export default BookingSheet;
