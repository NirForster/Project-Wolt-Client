// import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Restaurant {
  id: string;
  name: string;
  category: string;
  photo: string;
}

interface CarouselSpacingProps {
  restaurants: Restaurant[];
}

export function CarouselSpacing({ restaurants }: CarouselSpacingProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div>
        <h2>Late-night snacks nearby</h2>
        <div>
          <a
            data-variant="brand"
            href="/discovery/lunch-venues"
            data-test-id="Discovery.AllLink"
            aria-label="See all Lunch near you"
            className="--sr88i7j-0: var(--cb-color-text-brand); --sr88i7j-1: var(--cb-color-text-brand-hovered); --sr88i7j-2: var(--cb-color-text-brand); --sr88i7j-3: var(--cb-color-text-brand);"
          >
            See all
          </a>
          <a href="">See all</a>
        </div>
      </div>
      {/* Centered carousel container */}
      <Carousel className="w-full max-w-4xl relative">
        <CarouselContent className="-ml-1 flex justify-center items-center">
          {restaurants.map((restaurant) => (
            <CarouselItem
              key={restaurant.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center aspect-square p-6">
                    <img
                      src={restaurant.photo}
                      alt={restaurant.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <p className="text-xl font-semibold mt-2">
                      {restaurant.name}
                    </p>
                    <p className="text-sm text-muted">{restaurant.category}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Center arrows within the viewport */}
        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  );
}
