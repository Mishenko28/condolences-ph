import { EyeIcon, PenIcon } from "lucide-react";
import { PostCard, PostCardButton, PostCardHeading } from "../../components/PostCard";
import { ContentCard, ContentCardContent, ContentCardTitle } from "../../components/ContentCard";
import Button from "../../components/Button";
import Badge from "../../components/Badge";

type BlogType = {
    id: string
    title: string
    publishedDate: string | null
    isDraft: boolean
    description: string
}

const blogs: BlogType[] = [
    {
        id: "a1ad7c50-4b34-4b36-a983-388481f95927",
        title: "Remembering Nanay: Her Favorite Recipes",
        publishedDate: "Feb 25, 2026",
        isDraft: false,
        description: "Growing up, our kitchen was always filled with the aroma of Nanay's cooking. Her adobo was legendary in our neighborhood, and every fiesta she would prepare enough food for the entire street..."
    },
    {
        id: "485d4b02-9009-4650-9aab-6fa3816080ba",
        title: "A Life Well Lived: Celebrating Nanay's Legacy",
        publishedDate: "Feb 24, 2026",
        isDraft: false,
        description: "Maria Santos was born on March 15, 1948 in Olongapo City. She dedicated her life to her family and community, working as a teacher for over 30 years at the local elementary school..."
    },
    {
        id: "1d015f83-8bef-4844-a8ac-933d6cc51154",
        title: "Thank You to Everyone Who Came",
        publishedDate: null,
        isDraft: true,
        description: "The Santos family would like to express our heartfelt gratitude to everyone who visited, sent flowers, and shared messages of love and support during this difficult time..."
    },
]

export default function Blog() {
    return (
        <main className="flex gap-8">
            <div className="flex-1 flex flex-col gap-8">
                <ContentCard>
                    <ContentCardTitle>BLOG POSTS</ContentCardTitle>
                    <ContentCardContent>
                        {blogs.map(({ id, title, description, publishedDate, isDraft }) => (
                            <div key={id} className={`${isDraft ? "border-l-4 border-l-orange-700" : ""} w-full space-y-6 rounded-2xl bg-gray-100 p-5 border border-gray-200`}>
                                <div className="space-y-2">
                                    <h1 className="font-bold">{title}</h1>
                                    {isDraft ?
                                        <Badge color="orange">Draft</Badge>
                                        :
                                        <h2 className="text-sm text-primary/80">Published On: {publishedDate}</h2>
                                    }
                                </div>
                                <p className="text-primary/80 text-justify leading-relaxed">{description}</p>
                                <Button size="sm"><EyeIcon />View</Button>
                            </div>
                        ))}
                    </ContentCardContent>
                </ContentCard>
            </div>
            <div className="flex flex-col gap-6">
                <PostCard>
                    <PostCardHeading>Are you ready to publish your first post?</PostCardHeading>
                    <PostCardButton>
                        <PenIcon />
                        Create Post
                    </PostCardButton>
                </PostCard>
            </div>
        </main>
    )
}
