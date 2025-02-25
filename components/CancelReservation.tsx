"use client";

import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast, ToastContainer } from "react-toastify";

export const CancelReservation = ({book}: {book: any}) => {
  const router = useRouter();
  let [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/booking/${book._id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Book deleted successfully");
      } else {
        toast.error(result.error || "Error deleting Book");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error deleting Book");
    }
  };

  return (
    <AlertDialog >
      <AlertDialogTrigger>
        <Image
          src="/assets/icons/delete.svg"
          alt="edit"
          width={20}
          height={20}
        />
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-white rounded-full">
        <AlertDialogHeader >
          <AlertDialogTitle>Are you sure you Cancel Reservation?</AlertDialogTitle>
          <AlertDialogDescription className="p-regular-16 text-grey-600">
            This will permanently delete Your Reservation
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel className="rounded-full">Cancel</AlertDialogCancel>

          <AlertDialogAction
            onClick={() => startTransition(handleDelete)}
            className="bg-red-500 hover:bg-red-600 focus:ring-red-500 rounded-full"
            disabled={isPending}
          >
            {isPending ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
      <ToastContainer/>
    </AlertDialog>
  );
};
