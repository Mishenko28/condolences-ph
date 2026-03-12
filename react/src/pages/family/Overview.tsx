import * as Icons from "lucide-react"
import { ContentCard, ContentCardContent, ContentCardTitle } from "../../components/ContentCard"
import Badge from "../../components/Badge"
import { PostCard, PostCardButton, PostCardHeading } from "../../components/PostCard"
import { Fragment } from "react/jsx-runtime"

type RecetActivitiesType = {
    id: string
    message: {
        text: string
        boldText: string
    }
    time: string
    icon: {
        name: keyof typeof Icons
        color: "blue" | "red" | "green" | "orange" | "gray"
    }
}

const totals = [
    { title: "MESSAGES", value: 5 },
    { title: "MEDIAS", value: 12 },
    { title: "BLOG POSTS", value: 3 },
    { title: "EVENTS", value: 4 },
]

const recetActivities: RecetActivitiesType[] = [
    {
        id: "b22a672f-d860-4165-b5f0-2b775a95030b",
        message: {
            text: "Carlos Garcia left a message of sympathy on the Obituary Listing.",
            boldText: "Carlos Garcia"
        },
        time: "2 hours ago",
        icon: {
            color: "blue",
            name: "MessageSquareMoreIcon"
        }
    },
    {
        id: "13ef0d79-2a40-4d52-b71e-436653cfeae2",
        message: {
            text: "Pedro Reyes left a message of sympathy on the Obituary Listing.",
            boldText: "Pedro Reyes"
        },
        time: "5 hours ago",
        icon: {
            color: "blue",
            name: "MessageSquareMoreIcon"
        }
    },
    {
        id: "c0f701f5-9fcb-4972-a421-a23a3b48df04",
        message: {
            text: `You published a blog post: "Remembering Nanay: Her Favorite Recipes".`,
            boldText: "Remembering Nanay: Her Favorite Recipes"
        },
        time: "1 day ago",
        icon: {
            color: "orange",
            name: "MessageSquareTextIcon"
        },
    },
    {
        id: "2153c303-db1e-493c-a1b8-7508fd8c76a9",
        message: {
            text: "Your Obituary Listing for Maria Santos is now live and set to Public.",
            boldText: "Maria Santos"
        },
        time: "2 day ago",
        icon: {
            color: "green",
            name: "ScrollTextIcon"
        }
    },
    {
        id: "6125691a-3c56-4b8b-b0b9-138cca2c0de2",
        message: {
            text: "Event created: Wake — Maria Santos at Eternal Peace Chapel.",
            boldText: "Wake — Maria Santos"
        },
        time: "3 day ago",
        icon: {
            color: "blue",
            name: "CalendarDaysIcon"
        },
    },
]

export default function Overview() {
    return (
        <main className="flex gap-8">
            <div className="flex-1 flex flex-col gap-8">
                <div className="flex gap-3">
                    {totals.map(({ title, value }) => (
                        <div key={title} className="w-full flex flex-col items-center justify-center gap-2 rounded-2xl bg-gray-100 p-5 border border-gray-200">
                            <h2 className="font-bold text-2xl">{value}</h2>
                            <h1 className="text-sm font-medium text-primary/50" >{title}</h1>
                        </div>
                    ))}
                </div>
                <ContentCard>
                    <ContentCardTitle>ABOUT CONDOLENCES PH</ContentCardTitle>
                    <ContentCardContent>
                        <p className="text-primary/80 text-justify leading-relaxed">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam. nt sunt in culpa qui officia deserunt mollit anim id est.</p>
                        <p className="text-primary/80 text-justify leading-relaxed">laborum consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </ContentCardContent>
                </ContentCard>
                <ContentCard>
                    <ContentCardTitle>RECENT ACTIVITY</ContentCardTitle>
                    <ContentCardContent className="flex flex-col gap-3">
                        {recetActivities.map(({ id, message: { text, boldText }, time, icon: { color, name } }, index) => (
                            <Fragment key={id}>
                                <div className="flex items-center gap-4">
                                    <Badge color={color}>
                                        {stringToIcon(name)}
                                    </Badge>
                                    <div className="space-y-2">
                                        <WithBoldText message={text} boldText={boldText} />
                                        <p className="text-sm text-primary/70 font-medium">{time}</p>
                                    </div>
                                </div>
                                {index !== recetActivities.length - 1 && <hr className="border-primary/20" />}
                            </Fragment>
                        ))}
                    </ContentCardContent>
                </ContentCard>
            </div>
            <div className="flex flex-col gap-6">
                <PostCard>
                    <PostCardHeading>Share a memory or story about your loved one.</PostCardHeading>
                    <PostCardButton>
                        <Icons.PenIcon />
                        Create Post
                    </PostCardButton>
                </PostCard>
                <PostCard>
                    <PostCardHeading>Need help with your Obituary Listing?</PostCardHeading>
                    <PostCardButton>
                        <Icons.PhoneIcon />
                        Contact Us
                    </PostCardButton>
                </PostCard>
            </div>
        </main>
    )
}

type WithBoldTextType = {
    message: string;
    boldText: string;
}

const WithBoldText = ({ message, boldText }: WithBoldTextType) => {
    const parts = message.split(new RegExp(`(${boldText})`, 'gi'))

    return (
        <h1 className="text-primary/80">
            {parts.map((part, index) =>
                part.toLowerCase() === boldText.toLowerCase() ? (
                    <span key={index} className="font-semibold">
                        {part}
                    </span>
                ) : (
                    part
                )
            )}
        </h1>
    )
}

const stringToIcon = (iconName: keyof typeof Icons): React.ReactNode => {
    const Icon = Icons[iconName] as Icons.LucideIcon
    return <Icon />
}