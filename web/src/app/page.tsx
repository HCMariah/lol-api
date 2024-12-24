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
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

type ApiResponse = {
  puuid: string;
  gameName: string;
  tagLine: string;
} | null;


export type Data = {
  id: number;
  name: string;
  age: number;
  hobbies: string[];
} | null;

export default function Home() {
  const [gameName, setGameName] = useState("HC いのり");
  const [tagLine, setTagLine] = useState("Inori");
  const [result, setResult] = useState<Data>(null);
  const [error, setError] = useState<string | null>(null);

  const data = {
    id: 1,
  }

  const fetchUser = async () => {
    if (!gameName || !tagLine) {
      setError("Please enter both gameName and tagLine");
      return;
    }

    setError(null);

    try {   
      const response = await fetch("http://localhost:1738/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },       
        body: JSON.stringify({id: 1}),
      });
      
      if(!response.ok){
        setError(await response.text());
        throw new Error(`HTTP ERROR!!: ${response.status}`) 
      }
      const json = await response.json();
      setResult(json);
    } catch (error: any) {
      console.error(`Something went wrong: ${error.message}`)
      setError(error.message)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <ToggleTheme />
      <h1 className="text-4xl mb-4">Summoner Name</h1>
      <div className="flex flex-col gap-4 w-full max-w-md px-4">
        <div className="flex gap-x-2">
          <Input
            placeholder="gameName"
            onChange={(e) => setGameName(e.target.value)}
            value={gameName}
          />
          <Input
            placeholder="tagLine"
            onChange={(e) => setTagLine(e.target.value)}
            value={tagLine}
          />
          <Button onClick={fetchUser}>Search</Button>
        </div>

        {error && (
          <div className="text-red-500 text-center">{error}</div>
        )}

       {result?.age && <p>age: {result?.age}</p>}
      </div>
    </div>
  )
}