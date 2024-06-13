import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
  } from "@/components/ui/card"
import { CameraIcon, ReaderIcon } from '@radix-ui/react-icons'
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Badge } from "@/components/ui/custom/badge";

export function ModeCards() {
    return (
      <div className="flex items-center justify-center gap-[40px] cards">
        <ToggleGroup type="single">
          <ToggleGroupItem value="image" className="h-[auto] p-1">
            {/* Card 1 */}
            <Card className="w-96 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
              <CardHeader>
                <CardTitle className="flex item-center justify-between">
                  Prendre une photo
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    indisponible
                  </Badge>
                </CardTitle>
                <div className="flex justify-center">
                  <CameraIcon className="icon" />
                </div>
                <CardDescription>
                  Prenez une photo de vos ingrédient et l'IA les analysera pour vous faire gagner du temps.
                </CardDescription>
              </CardHeader>
            </Card>
          </ToggleGroupItem>
          <ToggleGroupItem value="text" className="h-[auto] p-1">
            {/* Card 2 */}
            <Card className="w-96  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
              <CardHeader>
                <CardTitle className="flex item-center justify-between">
                  Ajouter manuellement
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                  disponible
                  </Badge>
                </CardTitle>
                <div className="flex justify-center">
                  <ReaderIcon className="icon"/>
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
