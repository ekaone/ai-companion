import React from "react";
import Link from "next/link";

// components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { tones } from "@/constants/tones";

function Page() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[1fr,1.5fr]">
      <div className="border p-10">
        <div className="sticky top-10">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="outline">⬅️ Back</Button>
            </Link>
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center rounded-md py-1.5 text-sm font-medium tracking-tight text-gray-500 hover:text-purple-700 focus:outline-0 focus:ring-2 focus:ring-purple-400"
            >
              View Source ↗️
            </Link>
          </div>
          <h2 className="mt-10 text-4xl font-bold tracking-tight">
            Template name
          </h2>
          <div className="mt-16 space-y-2 text-sm text-gray-600">
            <div className="grid w-full max-w-sm items-center gap-4">
              <Label htmlFor="prompt">Blog Outline</Label>
              <Input id="prompt" type="text" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a Tone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tones</SelectLabel>
                    {tones.map((tone) => (
                      <SelectItem key={tone.id} value={tone.name}>
                        {tone.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button>Generate</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden border p-10">
        Generated contents here
      </div>
    </div>
  );
}

export default Page;
