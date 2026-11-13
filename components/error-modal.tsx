"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { CircleCheck as CheckCircle2, Circle as XCircle } from "lucide-react"

interface ErrorModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  message: string
  variant?: "error" | "success"
}

export default function ErrorModal({ open, onOpenChange, title, message, variant = "error" }: ErrorModalProps) {
  const isSuccess = variant === "success"
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader className="items-center space-y-4">
          <div className={`rounded-full p-3 ${isSuccess ? "bg-green-50" : "bg-red-50"}`}>
            {isSuccess ? (
              <CheckCircle2 className="h-12 w-12 text-green-600" strokeWidth={2} />
            ) : (
              <XCircle className="h-12 w-12 text-red-500" strokeWidth={2} />
            )}
          </div>
          <AlertDialogTitle className="text-2xl text-center">{title ?? (isSuccess ? "Sucesso!" : "Ops!")}</AlertDialogTitle>
          <AlertDialogDescription className="text-center text-base text-foreground">{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-center">
          <AlertDialogAction className="bg-blue-600 hover:bg-blue-700 px-8">OK</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
