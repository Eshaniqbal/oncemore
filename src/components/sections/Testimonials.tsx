import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "I absolutely adore the jacket I bought from OnceMore. The quality is incredible, and I love knowing it has a history. It's my new favorite piece!",
    name: "Jessica L.",
    handle: "Vintage Lover",
    avatar: "https://placehold.co/40x40"
  },
  {
    quote: "Finally, a brand that aligns with my values. Beautiful, sustainable clothing that doesn't compromise on style. Shipping was fast and the packaging was eco-friendly.",
    name: "Michael B.",
    handle: "Conscious Consumer",
    avatar: "https://placehold.co/40x40"
  },
  {
    quote: "The Pashmina shawl is a work of art. It's so soft and the craftsmanship is evident. I get compliments every time I wear it. Thank you, OnceMore!",
    name: "Aisha K.",
    handle: "Style Enthusiast",
    avatar: "https://placehold.co/40x40"
  },
   {
    quote: "Shopping at OnceMore feels good. I found a unique pair of trousers that fit perfectly, and I love supporting a business that cares about the planet.",
    name: "David R.",
    handle: "Happy Customer",
    avatar: "https://placehold.co/40x40"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Stories from Our Community
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                See what our customers are saying about their OnceMore pieces.
            </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col justify-between h-full p-6">
                      <blockquote className="text-lg text-foreground mb-6">
                        “{testimonial.quote}”
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
