import { PhoneIcon } from "lucide-react";
import { PostCard, PostCardButton, PostCardHeading } from "../../components/PostCard";
import { ContentCard, ContentCardContent, ContentCardTitle } from "../../components/ContentCard";
import type { BadgeColors } from "../../components/Badge";
import { format } from "date-fns";
import Badge from "../../components/Badge";

type EventType = {
    id: string
    title: string
    location: string
    date: Date
    time: {
        from: string
        to: string | null
    }
    status: {
        text: string
        color: BadgeColors
    }
}

const events: EventType[] = [
    {
        id: "4944a183-11eb-4c72-b224-6ab2eed8f94e",
        title: "Wake — Maria Dought",
        location: "Sta. Rita Parish Church",
        date: new Date("2026-02-27"),
        time: {
            from: "2:00 PM",
            to: "9:00 PM"
        },
        status: {
            text: "Upcoming",
            color: "blue"
        }
    },
    {
        id: "2e17f91e-31f1-415f-a7dd-8e274c5009ef",
        title: "Funeral Mass — Maria Dought",
        location: "Sta. Rita Parish Church",
        date: new Date("2026-02-28"),
        time: {
            from: "9:00 AM",
            to: "11:00 AM"
        },
        status: {
            text: "Upcoming",
            color: "blue"
        }
    },
    {
        id: "f014d62d-9743-4d92-ac97-47bb28352588",
        title: "Burial — Maria Dought",
        location: "Kalaklan Cemetery",
        date: new Date("2026-02-28"),
        time: {
            from: "12:00 PM",
            to: null
        },
        status: {
            text: "Upcoming",
            color: "blue"
        }
    },
    {
        id: "c58f0f54-c91d-41eb-bcf1-5c701f8b2a1c",
        title: "40th Day Memorial",
        location: "Dought Residence, Olongapo",
        date: new Date("2026-04-01"),
        time: {
            from: "3:00 PM",
            to: null
        },
        status: {
            text: "Upcoming",
            color: "blue"
        }
    },
]

export default function Events() {
    return (
        <main className="flex gap-8">
            <div className="flex-1 flex flex-col gap-8">
                <ContentCard>
                    <ContentCardTitle>UPCOMING EVENTS</ContentCardTitle>
                    <ContentCardContent>
                        {events.map(({ id, title, date, location, status: { color, text }, time: { from, to } }) => (
                            <div key={id} className="flex gap-4 w-full rounded-2xl bg-gray-100 p-6 border border-gray-200" >
                                <div className="flex flex-col justify-center items-center gap-1 bg-primary w-18 h-20 rounded-lg">
                                    <h1 className="text-white text-sm font-bold">{format(date, "MMM").toUpperCase()}</h1>
                                    <h2 className="text-white text-xl font-black">{format(date, "dd")}</h2>
                                </div>
                                <div className="space-y-1.5">
                                    <h1 className="font-bold text-lg">{title}</h1>
                                    <h2 className="text-sm text-primary/70">{location}</h2>
                                    <h3 className="text-sm text-primary/90">{from}{to && "-" + to}</h3>
                                    <Badge color={color}>{text}</Badge>
                                </div>
                            </div>
                        ))}
                    </ContentCardContent>
                </ContentCard>
            </div>
            <div className="flex flex-col gap-6">
                <PostCard>
                    <PostCardHeading>Are you ready to publish your first post?</PostCardHeading>
                    <PostCardButton>
                        <PhoneIcon />
                        Create Post
                    </PostCardButton>
                </PostCard>
            </div>
        </main>
    )
}
