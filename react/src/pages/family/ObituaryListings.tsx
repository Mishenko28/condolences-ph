import { PhoneIcon } from "lucide-react";
import { PostCard, PostCardButton, PostCardHeading } from "../../components/PostCard";
import { ContentCard, ContentCardTitle, ContentCardContent } from "../../components/ContentCard";

export default function ObituaryListings() {
    return (
        <main className="flex gap-8">
            <div className="flex-1 flex flex-col gap-8">
                <ContentCard>
                    <ContentCardTitle>OBITUARY LISTINGS</ContentCardTitle>
                    <ContentCardContent>sample content</ContentCardContent>
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
