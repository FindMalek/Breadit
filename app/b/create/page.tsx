"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"

const Page = () => {

    const [input, setInput] = useState<string>("")
    const router = useRouter()

    

    return (
        <div className="container flex items-center h-full max-w-3xl mx-auto pt-7">
            <div className="relative bg-white w-full h-fit p-4 rounded-lg space-y-7">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-semibold">Create a Community</h1>
                </div>

                <hr className="bg-zinc-500 h-px"></hr>

                <div>
                    <p className="text-lg font-medium">Name</p>
                    <p className="text-xs pb-2">Community names including capitalization cannot be changed.</p>

                    <div className="relative">
                        <p className="absolute text-s left-0 w-8 inset-y-0 grid place-items-center text-zinc-400">b/</p>
                        <Input value={input} onChange={(e) => setInput(e.target.value)} className="pl-7"/>
                    </div>
                </div>

                <div className="flex justify-end gap-4">
                    <Button variant='subtle' onClick={() => router.back}>Cancel</Button>
                    <Button variant='primary' onClick={() => router.push(`/b/${input}`)}>Create Community</Button>
                </div>

            </div>
        </div>
    )
}

export default Page