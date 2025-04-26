"use client"

import { useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { useNotifications } from "@/context/notifications-context"
import { Toaster } from "@/components/ui/toaster"

export default function NotificationToast() {
  const { toast } = useToast()
  const { notifications } = useNotifications()

  // Show toast for new unread notifications
  useEffect(() => {
    const unreadNotifications = notifications.filter((notification) => !notification.read)

    if (unreadNotifications.length > 0) {
      // Get the most recent notification
      const latestNotification = unreadNotifications[0]

      // Only show toast for very recent notifications (less than 5 seconds old)
      const isVeryRecent = new Date().getTime() - new Date(latestNotification.timestamp).getTime() < 5000

      if (isVeryRecent) {
        toast({
          title: latestNotification.title,
          description: latestNotification.message,
          variant:
            latestNotification.type === "security_alert" || latestNotification.type === "payment_failed"
              ? "destructive"
              : "default",
        })
      }
    }
  }, [notifications, toast])

  return <Toaster />
}
