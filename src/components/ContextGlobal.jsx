
"use client";
import { ContextProducts } from "@/context/ContextProducts";

export const ContextGlobal = ({ children, initialData }) => {
  return (
    <ContextProducts initialData={initialData}>
      {children}
    </ContextProducts>
  )
}
