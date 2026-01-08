import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";




export default function NewsCard({
    image = "https://placehold.co/200x200",
    title = "News Title",
    discriptions = "lorem ipsum dolor sit amet consectetur adipiscing elit",
    slug= "news-1" , 
    id = 1 
}) {
    const navigate = useNavigate();
    return (
        <Card className="relative w-[250px]  rounded-2xl shadow-md hover:shadow-lg transition flex-shrink-0 py-0 overflow-hidden">




            <CardContent className="p-0">
                {/* Image */}
                <img
                    src={image}
                    alt={title}
                    className="mx-auto w-full object-contain"
                />
                <div className="p-4">

                    {/* Title */}
                    <h3 className="mt-4 text-sm font-semibold leading-tight">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs text-muted-foreground">
                        {discriptions}
                    </p>
                </div>
            </CardContent>

            <CardFooter className="flex justify-end py-2">
                <Button className=" hover:bg-blue-600 text-white cursor-pointer active:scale-95" size="sm" onClick={() => navigate(`news/${slug}`)}>Läs mer</Button>
            </CardFooter>
        </Card>
    )
}
