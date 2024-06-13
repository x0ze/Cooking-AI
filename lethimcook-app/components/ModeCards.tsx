import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
  } from "@/components/ui/card"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Badge } from "@/components/ui/custom/badge";
import { Camera, FileText } from 'lucide-react';

export function ModeCards() {
    return (
      <div className="flex items-center justify-center cards">
        <ToggleGroup type="single">
          <ToggleGroupItem value="image" className="h-[auto] p-1">
            {/* Card 1 */}
            <Card className="w-[300px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
              <CardHeader>
                <CardTitle className="flex item-center justify-center">
                  Prendre une photo
                </CardTitle>
                <Badge
                    variant="secondary"
                    className="text-sm text-[rgb(255,86,86)] w-[fit-content] m-2 m-[auto]"
                  >
                    indisponible
                  </Badge>
                <div className="flex justify-center">
                  <Camera className="icon" />
                </div>
                <CardDescription>
                  Prenez une photo de vos ingrédient et l'IA les analysera pour vous faire gagner du temps.
                </CardDescription>
              </CardHeader>
            </Card>
          </ToggleGroupItem>
          <div className="w-[40px]"></div>
          <ToggleGroupItem value="text" className="h-[auto] p-1">
            {/* Card 2 */}
            <Card className="w-[300px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
              <CardHeader>
                <CardTitle className="flex item-center justify-center">
                  Ajouter manuellement
                </CardTitle>
                <Badge
                    variant="secondary"
                    className="text-sm text-primary w-[fit-content] m-2 m-[auto]"
                  >
                  disponible
                  </Badge>
                <div className="flex justify-center">
                  <FileText className="icon" />
                </div>
                <CardDescription>
                  Entrez manuellement tout vos ingrédients si vous ne pouvez pas le faire avec l'IA.
                </CardDescription>
              </CardHeader>
            </Card>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    )
  }
