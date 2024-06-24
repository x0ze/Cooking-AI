import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
} from "@/components/ui/card";

export const Recipe: React.FC = () => {
  return (
    <div className="container flex flex-row justify-between mt-10">
       <div className="h-full w-[60%]">
            <Skeleton className="h-[400px] w-full rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-10 w-[85%] mt-4" />
                <Skeleton className="h-4 w-[95%]" />
                <Skeleton className="h-4 w-[95%]" />
                <Skeleton className="h-4 w-[60%]" />
            </div>
       </div>
      <Card className="w-[400px] h-[600px] m-0">
      </Card>
    </div>
  );
};
