import { ChevronDown, ImageUpIcon, VideoIcon } from "lucide-react";
import Button from "../../components/Button";
import { useState } from "react";

const images = Array.from({ length: 18 }, (_, i) => {
    let type: "image" | "video" = "image"
    if (i % 4 === 0) type = "video"

    return {
        id: i,
        title: `Media ${i + 1}`,
        src: "/1x1.png",
        type: type
    }
})

export default function Media() {
    const [activeFilter, setActiveFilter] = useState<"all" | "image" | "video">("all")

    const activeFilterStyle = (filter: string) => {
        if (activeFilter === filter) return "bg-primary text-white"
        return ""
    }

    return (
        <main className="flex-1 flex flex-col gap-8">
            <div className="flex gap-2">
                <Button size="sm"><ImageUpIcon />Add Image</Button>
                <Button size="sm"><VideoIcon />Add Video</Button>
            </div>
            <div className="flex justify-between">
                <div className="flex items-center gap-2 border-2 rounded-full py-2 px-4">
                    <h1>Bulk Action</h1>
                    <ChevronDown />
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex border-2 rounded-lg text-sm overflow-hidden cursor-pointer">
                        <h1 onClick={() => setActiveFilter("all")} className={`${activeFilterStyle("all")} px-4 py-2`}>All</h1>
                        <h1 onClick={() => setActiveFilter("image")} className={`${activeFilterStyle("image")} px-4 py-2 border-x-2`}>Images</h1>
                        <h1 onClick={() => setActiveFilter("video")} className={`${activeFilterStyle("video")} px-4 py-2`}>Videos</h1>
                    </div>
                    <span className="text-sm text-primary/70">18 Items</span>
                </div>
            </div>
            <div className="grid grid-cols-6 gap-2">
                {images.filter(image => activeFilter === "all" ? true : image.type === activeFilter)
                    .map(({ id, title, src, type }) => (
                        <div key={id} className="relative rounded-lg overflow-hidden aspect-square cursor-pointer hover:scale-95 transition">
                            {type === "image" ?
                                <img src={src} alt="images" />
                                :
                                <video src={src} controls></video>
                            }
                            <p className="absolute bottom-0 w-full px-2 py-1 text-sm text-white bg-primary/50">{title}</p>
                        </div>
                    ))}
            </div>
        </main>
    )
}
