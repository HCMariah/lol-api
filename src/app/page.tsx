"use client"

import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ToggleTheme } from "@/components/toggle-theme";
import { useState } from "react";

export default function Home() {
  const [gameName, setGameName] = useState("");
  const [tagLine, setTagLine] = useState("");
  //Riot summoner name pull url
  const apiKey = `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`;

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <ToggleTheme />
      <h1 className="text-4xl">Summoner Name</h1>
      <div className="flex gap-x-2">
        <Input
          placeholder="gameName"
          onChange={(e) => { setGameName(e.target.value) }}
          value={`${gameName}`}
        />
        <Input
          placeholder="tagLine"
          onChange={(e) => { setTagLine(e.target.value.replace('#', '')) }}
          value={`#${tagLine}`}
        />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <h1>NA1</h1>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2">
            <DropdownMenuItem>
              <Link href="/sign-in">Sign out</Link>
            </DropdownMenuItem>
            <Separator className="my-1" />
            <DropdownMenuItem>
              <Link href={`/dashboard/profile/`}>Profile</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
