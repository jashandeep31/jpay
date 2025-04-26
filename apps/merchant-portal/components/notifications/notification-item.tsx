"use client"

import { formatDistanceToNow } from "date-fns"
import { CreditCard, AlertCircle, RefreshCw, FileText, ArrowDownToLine, ShieldAlert } from "lucide-react"
import type { Notification } from "@/types/notifications"
import { useNotifications } from "@/context/notifications-context"

interface NotificationItemProps {
  notification: Notification
  inDropdown?: boolean
}

export default function NotificationItem({ notification, inDropdown = false }: NotificationItemProps) {
  const { markAsRead } = useNotifications()

  const handleClick = () => {
    if (!notification.read) {
      markAsRead(notification.id)
    }
  }

  const getNotificationIcon = () => {
    switch (notification.type) {
      case "payment_received":
        return <CreditCard className="h-5 w-5 text-green-500" />
      case "payment_failed":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      case "subscription_renewed":
        return <RefreshCw className="h-5 w-5 text-blue-500" />
      case "invoice_due":
        return <FileText className="h-5 w-5 text-yellow-500" />
      case "payout_completed":
        return <ArrowDownToLine className="h-5 w-5 text-green-500" />
      case "security_alert":
        return <ShieldAlert className="h-5 w-5 text-red-500" />
      default:
        return <CreditCard className="h-5 w-5 text-gray-500" />
    }
  }

  const getNotificationColor = () => {
    switch (notification.type) {
      case "payment_received":
        return "bg-green-50 border-green-100"
      case "payment_failed":
        return "bg-red-50 border-red-100"
      case "subscription_renewed":
        return "bg-blue-50 border-blue-100"
      case "invoice_due":
        return "bg-yellow-50 border-yellow-100"
      case "payout_completed":
        return "bg-green-50 border-green-100"
      case "security_alert":
        return "bg-red-50 border-red-100"
      default:
        return "bg-gray-50 border-gray-100"
    }
  }

  const timeAgo = formatDistanceToNow(new Date(notification.timestamp), { addSuffix: true })

  return (
    <div
      className={`${
        inDropdown ? "p-4" : "p-4 border rounded-lg mb-3"
      } ${!notification.read ? "bg-blue-50" : ""} ${!inDropdown ? getNotificationColor() : ""} hover:bg-gray-50 transition-colors duration-150 cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3">{getNotificationIcon()}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <p className={`text-sm font-medium ${!notification.read ? "text-blue-800" : "text-gray-900"}`}>
              {notification.title}
            </p>
            <span className="text-xs text-gray-500">{timeAgo}</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
          {notification.data && notification.data.amount && (
            <div className="mt-1 text-xs text-gray-500">
              {notification.data.amount} {notification.data.currency}
            </div>
          )}
        </div>
        {!notification.read && !inDropdown && (
          <div className="ml-3 flex-shrink-0">
            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
          </div>
        )}
      </div>
    </div>
  )
}
