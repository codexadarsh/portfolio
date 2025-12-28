import { ArrowUpRightIcon } from "lucide-react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export default function page() {
  return (
    <Empty className="min-h-screen">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ArrowUpRightIcon />
        </EmptyMedia>
        <EmptyTitle>No Blog Here</EmptyTitle>
        <EmptyDescription>Stay tuned. We are working on it</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
