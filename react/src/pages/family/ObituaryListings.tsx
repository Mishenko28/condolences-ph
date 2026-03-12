import { ChevronRightIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { PostCard, PostCardButton, PostCardHeading } from "../../components/PostCard";
import { ContentCard, ContentCardTitle, ContentCardContent } from "../../components/ContentCard";
import Badge, { type BadgeColors } from "../../components/Badge";
import { useState } from "react";

type ObituaryType = {
    id: string
    name: string
    relation: string
    dates: {
        birth: string
        death: string
    }
    address: string
    status: {
        text: string
        color: BadgeColors
    }
    numberOfMssg: number
}

const obituaries: ObituaryType[] = [
    {
        id: "167e2a4d-601a-4113-9131-e231fc564bac",
        name: "Maria Dought",
        relation: "Mother",
        dates: {
            birth: "March 15, 1948",
            death: "February 20, 2026"
        },
        address: "Olongapo City, Zambales, Philippines",
        status: {
            text: "Public",
            color: "green"
        },
        numberOfMssg: 3
    },
    {
        id: "56d89263-bd54-4aaa-9d07-05c432616d1a",
        name: "Roberto Dought",
        relation: "Father",
        dates: {
            birth: "June 8, 1945",
            death: "November 12, 2021"
        },
        address: "Olongapo City, Zambales, Philippines",
        status: {
            text: "Draft",
            color: "orange"
        },
        numberOfMssg: 7
    },
    {
        id: "e99a45cc-9ef1-4d1e-a92f-be6ddfc05136",
        name: "Jorge Dought",
        relation: "Grandfather",
        dates: {
            birth: "April 3, 1920",
            death: "January 5, 2015"
        },
        address: "Olongapo City, Zambales, Philippines",
        status: {
            text: "Private",
            color: "red"
        },
        numberOfMssg: 12
    },
    {
        id: "427a95a9-f19f-4831-95dc-d01633d67bcc",
        name: "Andres Dought",
        relation: "Uncle",
        dates: {
            birth: "September 22, 1950",
            death: "August 14, 2019"
        },
        address: "Olongapo City, Zambales, Philippines",
        status: {
            text: "Public",
            color: "green"
        },
        numberOfMssg: 5
    },
    {
        id: "954d2377-94fa-44a8-85ec-82f94347fd9b",
        name: "Ana Dought",
        relation: "Grandmother",
        dates: {
            birth: "December 1, 1918",
            death: "March 30, 2010"
        },
        address: "Olongapo City, Zambales, Philippines",
        status: {
            text: "Private",
            color: "red"
        },
        numberOfMssg: 12
    },
]

export default function ObituaryListings() {
    const [hoveredObi, setHoveredObi] = useState<number | null>(null)

    return (
        <main className="flex gap-8">
            <div className="flex-1 flex flex-col gap-8">
                <ContentCard>
                    <ContentCardTitle>OBITUARY LISTINGS</ContentCardTitle>
                    <ContentCardContent>
                        {obituaries.map(({ id, name, relation, dates: { birth, death }, address, status: { text, color }, numberOfMssg }, index) => (
                            <div
                                key={id}
                                className="w-full flex gap-4 items-center rounded-2xl bg-gray-100 hover:bg-gray-200/80 p-5 border border-gray-200 cursor-pointer"
                                onMouseEnter={() => setHoveredObi(index)}
                                onMouseLeave={() => setHoveredObi(null)}
                            >
                                <img src="./1x1.png" alt="profile_img" className="w-18 h-18 rounded-full border-4" />
                                <div className="flex-1 space-y-2 text-sm">
                                    <h1 className="text-lg font-bold">{name}</h1>
                                    <h2 className="font-bold text-primary/50 uppercase">{relation}</h2>
                                    <h3 className="font-medium text-primary/90">{birth} — {death}</h3>
                                    <h4 className="flex gap-2 font-medium text-primary/70 [&_svg]:stroke-primary/70"><MapPinIcon size={14} /> {address}</h4>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <Badge color={color}>{text}</Badge>
                                    <p className="text-sm font-medium text-primary/70">{numberOfMssg} Messages</p>
                                </div>
                                <ChevronRightIcon style={hoveredObi === index ? { translate: "8px" } : undefined} className="stroke-primary transition" />
                            </div>
                        ))}
                    </ContentCardContent>
                </ContentCard>
            </div>
            <div className="flex flex-col gap-6">
                <PostCard>
                    <PostCardHeading>Need help with your page?</PostCardHeading>
                    <PostCardButton>
                        <PhoneIcon />
                        Request Update
                    </PostCardButton>
                </PostCard>
            </div>
        </main>
    )
}
