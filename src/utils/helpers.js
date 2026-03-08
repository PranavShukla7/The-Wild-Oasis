import { formatDistance, parseISO, differenceInDays, format } from "date-fns";

// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

// Format a date string to a readable format
export const formatDate = (dateStr, formatStr = "MMM dd yyyy") =>
  format(parseISO(dateStr), formatStr);

// Format date with time
export const formatDateTime = (dateStr) =>
  format(parseISO(dateStr), "MMM dd yyyy, HH:mm");

// Check if a date is in the past
export const isPastDate = (dateStr) => {
  const date = parseISO(dateStr);
  return date < new Date();
};

// Check if a date is today
export const isToday = (dateStr) => {
  const date = parseISO(dateStr);
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

// Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
export const getToday = function (options = {}) {
  const today = new Date();

  // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

// Format a number with thousand separators
export const formatNumber = (value) =>
  new Intl.NumberFormat("en").format(value);

// Calculate percentage
export const calculatePercentage = (value, total) => {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
};

// Truncate text with ellipsis
export const truncateText = (text, maxLength = 50) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

