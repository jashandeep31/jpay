"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Notification, NotificationType } from "@/types/notifications"
import { generateMockNotifications } from "@/lib/mock-notifications"

interface NotificationsContextType {
  notifications: Notification[]
  unreadCount: number
  markAsRead: (id: string) => void
  markAllAsRead: () => void
  addNotification: (notification: Notification) => void
  removeNotification: (id: string) => void
  clearAllNotifications: () => void
}

const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined)

export function NotificationsProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)

  // Initialize with mock notifications
  useEffect(() => {
    const mockNotifications = generateMockNotifications()
    setNotifications(mockNotifications)
    updateUnreadCount(mockNotifications)

    // Simulate receiving new notifications periodically
    const interval = setInterval(() => {
      const shouldAddNotification = Math.random() > 0.7 // 30% chance of new notification
      if (shouldAddNotification) {
        const newNotification = generateRandomNotification()
        addNotification(newNotification)
      }
    }, 60000) // Every minute

    return () => clearInterval(interval)
  }, [])

  // Update unread count whenever notifications change
  const updateUnreadCount = (notifs: Notification[]) => {
    const count = notifs.filter((notification) => !notification.read).length
    setUnreadCount(count)
  }

  // Generate a random notification for simulation
  const generateRandomNotification = (): Notification => {
    const types: NotificationType[] = [
      "payment_received",
      "payment_failed",
      "subscription_renewed",
      "invoice_due",
      "payout_completed",
      "security_alert",
    ]
    const randomType = types[Math.floor(Math.random() * types.length)]
    const amount = Math.floor(Math.random() * 1000) + 50

    return {
      id: `notif-${Date.now()}`,
      type: randomType,
      title: getNotificationTitle(randomType, amount),
      message: getNotificationMessage(randomType, amount),
      timestamp: new Date(),
      read: false,
      data: {
        amount: `$${amount.toFixed(2)}`,
        currency: "USDC",
        paymentId: `PAY-${Math.floor(Math.random() * 10000)}`,
      },
    }
  }

  const getNotificationTitle = (type: NotificationType, amount: number): string => {
    switch (type) {
      case "payment_received":
        return "Payment Received"
      case "payment_failed":
        return "Payment Failed"
      case "subscription_renewed":
        return "Subscription Renewed"
      case "invoice_due":
        return "Invoice Due Soon"
      case "payout_completed":
        return "Payout Completed"
      case "security_alert":
        return "Security Alert"
      default:
        return "Notification"
    }
  }

  const getNotificationMessage = (type: NotificationType, amount: number): string => {
    switch (type) {
      case "payment_received":
        return `You received a payment of $${amount.toFixed(2)} USDC.`
      case "payment_failed":
        return `A payment of $${amount.toFixed(2)} USDC failed to process.`
      case "subscription_renewed":
        return `A subscription was renewed for $${amount.toFixed(2)} USDC.`
      case "invoice_due":
        return `Invoice #INV-${Math.floor(Math.random() * 1000)} for $${amount.toFixed(2)} is due in 3 days.`
      case "payout_completed":
        return `Payout of $${amount.toFixed(2)} USDC has been completed.`
      case "security_alert":
        return "Unusual login activity detected on your account."
      default:
        return "You have a new notification."
    }
  }

  const markAsRead = (id: string) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id ? { ...notification, read: true } : notification,
    )
    setNotifications(updatedNotifications)
    updateUnreadCount(updatedNotifications)
  }

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      read: true,
    }))
    setNotifications(updatedNotifications)
    updateUnreadCount(updatedNotifications)
  }

  const addNotification = (notification: Notification) => {
    const updatedNotifications = [notification, ...notifications]
    setNotifications(updatedNotifications)
    updateUnreadCount(updatedNotifications)
  }

  const removeNotification = (id: string) => {
    const updatedNotifications = notifications.filter((notification) => notification.id !== id)
    setNotifications(updatedNotifications)
    updateUnreadCount(updatedNotifications)
  }

  const clearAllNotifications = () => {
    setNotifications([])
    setUnreadCount(0)
  }

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        addNotification,
        removeNotification,
        clearAllNotifications,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  )
}

export function useNotifications() {
  const context = useContext(NotificationsContext)
  if (context === undefined) {
    throw new Error("useNotifications must be used within a NotificationsProvider")
  }
  return context
}
