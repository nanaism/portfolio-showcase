"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Tables } from "@/types/database.types";
import useReactionButtonLogic from "../_hooks/useReactionButtonLogic";

const REACTION_ICONS = {
  like: "👍",
  interest: "👀",
  heart: "❤️‍🔥",
  check: "✅",
  memo: "🫐",
};

interface ReactionButtonProps {
  contentId: number;
  reactionType: Tables<"reactions">["reaction_type"];
  reactionCount: number;
  hasReacted: boolean;
}

const ReactionButton = (props: ReactionButtonProps) => {
  const { isPending, optimisticState, handleClick } = useReactionButtonLogic(
    props.reactionCount,
    props.hasReacted,
    props.contentId,
    props.reactionType
  );
  return (
    <Button
      variant={"ghost"}
      size={"sm"}
      className="px-2.5 py-0.5 h-6.5"
      asChild
      // 追加
      onClick={handleClick}
      disabled={isPending}
    >
      <Badge
        variant={"outline"}
        // 自分がリアクションしているかどうかで、スタイルを分岐
        className={cn(
          "rounded-full text-sm text-muted-foreground hover:bg-emerald-100/80",
          optimisticState.hasReacted && "bg-emerald-50 border-emerald-500"
        )}
      >
        {REACTION_ICONS[props.reactionType]} {optimisticState.reactionCount}
      </Badge>
    </Button>
  );
};

export default ReactionButton;
