import { Link, useParams } from "react-router-dom";
import { PostCard, PostCardButton, PostCardHeading } from "../../components/PostCard";
import { LinkIcon, MessageCircleCheckIcon, PenIcon, PhoneIcon, Undo2Icon } from "lucide-react";
import type { BadgeColors } from "../../components/Badge";
import Badge from "../../components/Badge";
import { format } from "date-fns";
import { ContentCard, ContentCardContent, ContentCardTitle } from "../../components/ContentCard";
import Button from "../../components/Button";

type ObituaryType = {
    id: string
    name: string
    message: string
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
    comments: {
        id: string
        name: string
        message: string
        createdAt: Date
    }[]
    createdAt: Date
}

const comments: ObituaryType["comments"] = [
    {
        id: "5f414968-74f8-4d3c-a389-115fb4d6a961",
        name: "Jinifir Dought",
        message: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis.",
        createdAt: new Date("2026-02-27")
    },
    {
        id: "1b2e2431-2233-441d-a0d8-9f085f28ce53",
        name: "Carlos Garcia",
        message: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis.",
        createdAt: new Date("2026-02-25")
    },
    {
        id: "ebf495e4-67b5-4a02-bacb-3682f7a701be",
        name: "Pedro Reyes",
        message: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis.",
        createdAt: new Date("2026-02-27")
    },
    {
        id: "38e3368a-d00f-4d97-b395-3c8699653682",
        name: "Rosa Perez",
        message: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis.",
        createdAt: new Date("2026-02-24")
    },
]

const obituaries: ObituaryType[] = [
    {
        id: "167e2a4d-601a-4113-9131-e231fc564bac",
        name: "Maria Dought",
        message: "laborum consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
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
        comments,
        createdAt: new Date("2026-02-24")
    },
    {
        id: "56d89263-bd54-4aaa-9d07-05c432616d1a",
        name: "Roberto Dought",
        message: "laborum consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
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
        comments,
        createdAt: new Date("2026-02-25")
    },
    {
        id: "e99a45cc-9ef1-4d1e-a92f-be6ddfc05136",
        name: "Jorge Dought",
        message: "laborum consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
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
        comments,
        createdAt: new Date("2026-02-26")
    },
    {
        id: "427a95a9-f19f-4831-95dc-d01633d67bcc",
        name: "Andres Dought",
        message: "laborum consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
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
        comments,
        createdAt: new Date("2026-02-27")
    },
    {
        id: "954d2377-94fa-44a8-85ec-82f94347fd9b",
        name: "Ana Dought",
        message: "laborum consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
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
        comments,
        createdAt: new Date("2026-02-28")
    },
]

export default function ObituaryListing() {
    const { id } = useParams()
    const obituary = obituaries.find(obi => obi.id === id)

    return (
        <main className="flex gap-8">
            {!obituary ?
                <div className="flex-1 flex flex-col justify-center items-center gap-4">
                    <h1 className="text-2xl font-bold">Obituary Not Found</h1>
                    <p className="text-primary/80">The obituary you are looking for does not exist.</p>
                </div>
                :
                <div className="flex-1 flex flex-col gap-8">
                    <Link to="/family-access/obituary-listings" className="flex gap-2 items-center w-fit rounded-2xl bg-gray-100 p-4 border border-gray-200">
                        <Undo2Icon size={16} className="stroke-primary/80" />
                        <span className="text-primary/80">Go Back</span>
                    </Link>
                    <div className="w-full space-y-4 rounded-2xl bg-gray-100 p-6 border border-gray-200">
                        <div className="flex gap-4 items-center">
                            <img src="./1x1.png" alt="profile_img" className="w-18 h-18 rounded-full border-4" />
                            <div className="space-y-1.5">
                                <h1 className="font-bold text-lg">In Loving Memory of {obituary.name}</h1>
                                <h2 className="font-medium text-sm text-primary/70">{obituary.dates.birth} - {obituary.dates.death}</h2>
                                <h3 className="font-medium text-sm text-primary/70">{obituary.address}</h3>
                            </div>
                        </div>
                        <p className="text-primary/80 text-justify leading-relaxed">{obituary.message}</p>
                        <hr className="border-primary/20" />
                        <div className="flex items-center gap-2">
                            <Badge color={obituary.status.color}>{obituary.status.text}</Badge>
                            <span className="text-sm text-primary/70">Created {format(obituary.createdAt, "MMM dd, yyy")}</span>
                        </div>
                    </div>
                    <ContentCard>
                        <ContentCardTitle className="flex justify-between items-end">MESSAGES OF SYMPATHY<Button size="sm"><MessageCircleCheckIcon /> Edit Comments</Button></ContentCardTitle>
                        <ContentCardContent>
                            {obituary.comments.map(({ id, name, message, createdAt }) => (
                                <div key={id} className="w-full space-y-4 rounded-2xl bg-gray-100 p-4 border border-gray-200">
                                    <div className="flex items-center gap-4">
                                        <img src="./1x1.png" alt="profile_img" className="w-12 h-12 rounded-full border-4" />
                                        <div className="space-y-1.5">
                                            <h1 className="font-bold text-lg">{name}</h1>
                                            <h2 className="font-medium text-sm text-primary/70">{format(createdAt, "MMM dd, yyy")}</h2>
                                        </div>
                                    </div>
                                    <p className="text-primary/80 text-justify leading-relaxed">{message}</p>
                                </div>
                            ))}
                        </ContentCardContent>
                    </ContentCard>
                </div>
            }
            <div className="flex flex-col gap-6">
                <PostCard>
                    <PostCardHeading>Manage your Obituary Listing.</PostCardHeading>
                    <PostCardButton>
                        <PenIcon />
                        Edit Content
                    </PostCardButton>
                </PostCard>
                <PostCard>
                    <PostCardHeading>Share this page with family & friends.</PostCardHeading>
                    <PostCardButton>
                        <LinkIcon />
                        Copy Link
                    </PostCardButton>
                </PostCard>
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
