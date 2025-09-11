import React from "react";
import Link from "next/link";
import PanelWrapper from "@/components/ui/PanelWrapper";
import GenreLine from "@/components/features/MainSide/Section/Genres/GenresBlock/GenreLine";

export default function Page({ genre }) {
  return (
    <div className="break-inside-avoid h-auto max-w-full rounded-lg">
      <PanelWrapper className="border-0 p-[15px_13px]">
        <GenreLine id={genre.id} title={genre.name} reads={7203} isParent />

        {genre.subGenres && genre.subGenres.length > 0
          ? genre.subGenres?.map((subGenre, index) => (
              <GenreLine key={index} title={subGenre.name} reads={7203} />
            ))
          : null}
      </PanelWrapper>
    </div>
  );
}
