import { PenIcon } from "lucide-react";
import Button from "./components/Button";

export default function Sidebar() {
    return (
        <div className='flex flex-col items-center gap-8 w-xs h-150 p-12 bg-border/30 border rounded-3xl'>
            <img src="./1x1.png" alt="profile_img" className="w-30 h-30 rounded-full border-4" />
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-lg">Jinifir Dought</h1>
                <h2 className="text-primary/90">jinifirdought@gmail.com</h2>
            </div>
            <h1 className="font-medium text-lg text-primary/70">Olongapo City</h1>
            <Button>
                <PenIcon color="#fff" />
                Edit Profile
            </Button>
        </div>
    )
}
