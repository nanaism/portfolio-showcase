import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchRepoData } from "@/utils/api";
import { Star } from "lucide-react";
import Link from "next/link";
import ReactionGroup from "./reaction-group";

const MetaDataCard = async ({ repoUrl }: { repoUrl: string }) => {
  const repoData = await fetchRepoData(repoUrl);
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>About</CardTitle>
          <div className="flex items-center gap-1">
            <Star className="text-yellow-500" />
            <span>{repoData.stargazersCount}</span>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <CardDescription className="text-3xl">
            {repoData.description}
          </CardDescription>
          <div className="flex gap-2 w-full">
            <Button className="w-full" size={"lg"} asChild>
              <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </Button>
            <Button className="w-full" size={"lg"} variant={"outline"} asChild>
              <Link
                href={repoData.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Demo
              </Link>
            </Button>
          </div>
        </CardContent>

        <CardFooter className="flex-col items-start">
          {/* 追加 */}
          <ReactionGroup contentId={repoData.id} />
        </CardFooter>
      </Card>
      <p className="text-muted-foreground text-sm p-4">
        ログインせずに、リアクションできます;)
      </p>
    </>
  );
};

export default MetaDataCard;
