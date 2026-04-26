import Image from "next/image"
import Hero from "./hero"
export default function TestImage() {
    return (
        <Image src="https://images.unsplash.com/photo-1771820139132-642c0fc5b35c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="unsplash"
            loading="eager"
            width={2700}
            height={1800}
            className="hidden" />
    )
}