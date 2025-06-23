import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { fetchRepoData } from "@/utils/api";
import { marked } from "marked";

interface MarkdownViewerProps {
  repoUrl: string;
}

export default async function MarkdownViewer({ repoUrl }: MarkdownViewerProps) {
  const repoData = await fetchRepoData(repoUrl);

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardDescription>/README.md</CardDescription>
      </CardHeader>
      <CardContent>
        {repoData.readme && (
          <article
            className="prose max-w-full"
            dangerouslySetInnerHTML={{
              __html: marked.parse(repoData.readme),
            }}
          />
        )}
      </CardContent>
    </Card>
  );
}
